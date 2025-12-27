require('dotenv').config();
const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

const dbConfig = {
    user: 'sa',
    password: process.env.DB_PASSWORD || '',
    server: 'localhost',
    database: 'ElixirParfum',
    port: 1433,
    options: { encrypt: false, trustServerCertificate: true }
};

let pool;

async function conectarDB() {
    try {
        pool = await sql.connect(dbConfig);
        console.log('✅ SQL Server conectado');
        return true;
    } catch (err) {
        console.error('❌', err.message);
        process.exit(1);
    }
}

// ✅ OBTENER PERFUMES (con filtro por género)
app.get('/api/perfumes', async (req, res) => {
    try {
        const genero = req.query.genero || '';
        let query = `
            SELECT p.*, m.Nombre AS Marca 
            FROM Perfume p 
            JOIN Marca m ON p.ID_Marca = m.ID_Marca
        `;
        if (genero) {
            query += ` WHERE p.Genero = '${genero}'`;
        }
        
        const result = await pool.request().query(query);
        
        // Obtener tamaños para cada perfume
        for (let p of result.recordset) {
            const t = await pool.request()
                .input('id', sql.Int, p.ID_Perfume)
                .query('SELECT * FROM Tamano_Perfume WHERE ID_Perfume = @id');
            p.tamanos = t.recordset;
        }
        
        res.json(result.recordset);
    } catch (err) {
        console.error('❌ Error al obtener perfumes:', err);
        res.status(500).json({ error: err.message });
    }
});

// ✅ OBTENER PERFUME POR CÓDIGO
app.get('/api/perfume/:codigo', async (req, res) => {
    try {
        const result = await pool.request()
            .input('codigo', sql.NVarChar, req.params.codigo)
            .query(`
                SELECT p.*, m.Nombre AS Marca 
                FROM Perfume p 
                JOIN Marca m ON p.ID_Marca = m.ID_Marca 
                WHERE p.Codigo_Producto = @codigo
            `);
        
        if (result.recordset.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        
        const perfume = result.recordset[0];
        
        // Obtener tamaños
        const tamanos = await pool.request()
            .input('id', sql.Int, perfume.ID_Perfume)
            .query('SELECT * FROM Tamano_Perfume WHERE ID_Perfume = @id');
        
        perfume.tamanos = tamanos.recordset;
        
        res.json(perfume);
    } catch (err) {
        console.error('❌ Error:', err);
        res.status(500).json({ error: err.message });
    }
});

// ✅ LOGIN
app.post('/api/login', async (req, res) => {
    try {
        const { correo, password } = req.body;
        const r = await pool.request()
            .input('c', sql.NVarChar, correo)
            .input('p', sql.NVarChar, password)
            .query('SELECT * FROM Cliente WHERE Correo = @c AND Password_Hash = @p');
        
        if (r.recordset.length > 0) {
            res.json({ success: true, cliente: r.recordset[0] });
        } else {
            res.json({ success: false, error: 'Correo o contraseña incorrectos' });
        }
    } catch (err) {
        console.error('❌ Error login:', err);
        res.status(500).json({ error: err.message });
    }
});

// ✅ REGISTRO
app.post('/api/registrar', async (req, res) => {
    try {
        const { nombres, apellidos, correo, telefono, password } = req.body;
        
        // Verificar si el correo ya existe
        const existe = await pool.request()
            .input('c', sql.NVarChar, correo)
            .query('SELECT * FROM Cliente WHERE Correo = @c');
        
        if (existe.recordset.length > 0) {
            return res.json({ success: false, error: 'El correo ya está registrado' });
        }
        
        await pool.request()
            .input('n', sql.NVarChar, nombres)
            .input('a', sql.NVarChar, apellidos)
            .input('c', sql.NVarChar, correo)
            .input('t', sql.NVarChar, telefono)
            .input('p', sql.NVarChar, password)
            .query(`
                INSERT INTO Cliente (Nombres, Apellidos, Correo, Telefono, Password_Hash) 
                VALUES (@n, @a, @c, @t, @p)
            `);
        
        res.json({ success: true });
    } catch (err) {
        console.error('❌ Error registro:', err);
        res.json({ success: false, error: err.message });
    }
});

// obtiene carrito
app.get('/api/carrito/:id_cliente', async (req, res) => {
    try {
        const { id_cliente } = req.params;
        
        const result = await sql.query`
            SELECT 
                c.ID_Carrito,
                c.ID_Perfume,
                c.ID_Tamano,
                c.Cantidad,
                c.Precio_Unitario,
                c.Subtotal,
                p.Nombre,
                p.Imagen_Principal,
                (SELECT Nombre FROM Marca WHERE ID_Marca = p.ID_Marca) AS Marca,
                t.Mililitros
            FROM Carrito c
            INNER JOIN Perfume p ON c.ID_Perfume = p.ID_Perfume
            INNER JOIN Tamano_Perfume t ON c.ID_Tamano = t.ID_Tamano
            WHERE c.ID_Cliente = ${id_cliente}
        `;
        
        console.log('✅ Carrito consultado:', result.recordset.length, 'items');
        
        res.json({
            success: true,
            items: result.recordset
        });
    } catch (error) {
        console.error('❌ Error obteniendo carrito:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// agrega al carrito
app.post('/api/carrito/agregar', async (req, res) => {
    try {
        const { id_cliente, id_perfume, id_tamano, cantidad } = req.body;
        
        console.log('📦 Agregando al carrito:', { id_cliente, id_perfume, id_tamano, cantidad });
        
        // Verificar que el perfume existe
        const perfumeExiste = await pool.request()
            .input('id', sql.Int, id_perfume)
            .query('SELECT * FROM Perfume WHERE ID_Perfume = @id');
        
        if (perfumeExiste.recordset.length === 0) {
            return res.json({ success: false, error: 'Perfume no encontrado' });
        }
        
        // Verificar que el tamaño existe
        const tamanoExiste = await pool.request()
            .input('id', sql.Int, id_tamano)
            .query('SELECT * FROM Tamano_Perfume WHERE ID_Tamano = @id');
        
        if (tamanoExiste.recordset.length === 0) {
            return res.json({ success: false, error: 'Tamaño no encontrado' });
        }
        
        const precio = tamanoExiste.recordset[0].Precio_Venta;
        
        // Verificar si ya existe en el carrito
        const yaExiste = await pool.request()
            .input('c', sql.Int, id_cliente)
            .input('p', sql.Int, id_perfume)
            .input('t', sql.Int, id_tamano)
            .query(`
                SELECT * FROM Carrito 
                WHERE ID_Cliente = @c AND ID_Perfume = @p AND ID_Tamano = @t
            `);
        
        if (yaExiste.recordset.length > 0) {
            // Actualizar cantidad
            await pool.request()
                .input('c', sql.Int, id_cliente)
                .input('p', sql.Int, id_perfume)
                .input('t', sql.Int, id_tamano)
                .input('q', sql.Int, cantidad)
                .query(`
                    UPDATE Carrito 
                    SET Cantidad = Cantidad + @q 
                    WHERE ID_Cliente = @c AND ID_Perfume = @p AND ID_Tamano = @t
                `);
        } else {
            // Insertar nuevo (✅ CORREGIDO - especificar columnas)
            await pool.request()
                .input('c', sql.Int, id_cliente)
                .input('p', sql.Int, id_perfume)
                .input('t', sql.Int, id_tamano)
                .input('q', sql.Int, cantidad)
                .input('pr', sql.Decimal(10,2), precio)
                .query(`
                    INSERT INTO Carrito (ID_Cliente, ID_Perfume, ID_Tamano, Cantidad, Precio_Unitario) 
                    VALUES (@c, @p, @t, @q, @pr)
                `);
        }
        
        res.json({ success: true });
    } catch (err) {
        console.error('❌ Error al agregar:', err);
        res.json({ success: false, error: err.message });
    }
});

//elimina carrito
app.delete('/api/carrito/eliminar/:id', async (req, res) => {
    try {
        await pool.request()
            .input('id', sql.Int, req.params.id)
            .query('DELETE FROM Carrito WHERE ID_Carrito = @id');
        
        res.json({ success: true });
    } catch (err) {
        console.error('❌ Error:', err);
        res.status(500).json({ error: err.message });
    }
});

conectarDB().then(() => {
    app.listen(3000, () => console.log('🚀 http://localhost:3000'));
});
// ✅ FINALIZAR COMPRA
app.post('/api/pedido/crear', async (req, res) => {
    try {
        const { id_cliente, id_direccion, items } = req.body;
        
        // Calcular totales
        let subtotal = 0;
        items.forEach(item => {
            subtotal += item.Precio_Unitario * item.Cantidad;
        });
        
        const impuesto = subtotal * 0.18;
        const total = subtotal + impuesto;
        const codigo = `PED-${Date.now()}`;
        
        // Crear pedido
        const pedido = await pool.request()
            .input('codigo', sql.NVarChar, codigo)
            .input('cliente', sql.Int, id_cliente)
            .input('direccion', sql.Int, id_direccion)
            .input('subtotal', sql.Decimal(10,2), subtotal)
            .input('impuesto', sql.Decimal(10,2), impuesto)
            .input('total', sql.Decimal(10,2), total)
            .query(`
                INSERT INTO Pedido (Codigo_Pedido, ID_Cliente, ID_Direccion, Subtotal, Impuesto, Total, Metodo_Pago)
                OUTPUT INSERTED.ID_Pedido
                VALUES (@codigo, @cliente, @direccion, @subtotal, @impuesto, @total, 'Simulado')
            `);
        
        const id_pedido = pedido.recordset[0].ID_Pedido;
        
        // Guardar detalles
        for (let item of items) {
            await pool.request()
                .input('pedido', sql.Int, id_pedido)
                .input('perfume', sql.Int, item.ID_Perfume)
                .input('tamano', sql.Int, item.ID_Tamano)
                .input('cantidad', sql.Int, item.Cantidad)
                .input('precio', sql.Decimal(10,2), item.Precio_Unitario)
                .input('subtotal', sql.Decimal(10,2), item.Precio_Unitario * item.Cantidad)
                .query(`
                    INSERT INTO Detalle_Pedido (ID_Pedido, ID_Perfume, ID_Tamano, Cantidad, Precio_Unitario, Subtotal)
                    VALUES (@pedido, @perfume, @tamano, @cantidad, @precio, @subtotal)
                `);
        }
        
        // Vaciar carrito
        await pool.request()
            .input('cliente', sql.Int, id_cliente)
            .query('DELETE FROM Carrito WHERE ID_Cliente = @cliente');
        
        res.json({ success: true, codigo, total });
    } catch (err) {
        console.error('❌ Error:', err);
        res.json({ success: false, error: err.message });
    }
});