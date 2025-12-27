const express = require('express');
const cors = require('cors');
const path = require('path');
const { productos } = require('./productos.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

let usuarios = [];
let carritos = {};

app.get('/api/perfumes', (req, res) => {
    const genero = req.query.genero || '';
    let lista = Object.keys(productos).map(k => ({
        Codigo_Producto: k,
        Nombre: productos[k].titulo,
        Marca: productos[k].marca,
        Genero: productos[k].categoria.includes('HOMBRE') ? 'Hombre' : productos[k].categoria.includes('MUJER') ? 'Mujer' : 'Unisex',
        Imagen_Principal: productos[k].imagenPrincipal,
        Precio_Base: productos[k].precio,
        tamanos: productos[k].tamanos
    }));
    if (genero) lista = lista.filter(p => p.Genero.toLowerCase() === genero.toLowerCase());
    res.json(lista);
});

app.get('/api/perfume/:codigo', (req, res) => {
    const p = productos[req.params.codigo];
    if (!p) return res.status(404).json({ error: 'No encontrado' });
    res.json({ ...p, Codigo_Producto: req.params.codigo });
});

app.post('/api/login', (req, res) => {
    const { correo, contraseña } = req.body;
    const u = usuarios.find(x => x.correo === correo && x.contraseña === contraseña);
    res.json(u ? { exito: true, cliente: { ID_Cliente: u.id, Nombres: u.nombres, Correo: u.correo } } : { exito: false, error: 'Incorrecto' });
});

app.post('/api/registrar', (req, res) => {
    const { nombres, apellidos, correo, telefono, contraseña } = req.body;
    if (usuarios.find(u => u.correo === correo)) return res.json({ exito: false, error: 'Ya existe' });
    const nuevo = { id: usuarios.length + 1, nombres, apellidos, correo, telefono, contraseña };
    usuarios.push(nuevo);
    carritos[nuevo.id] = [];
    res.json({ exito: true });
});

app.get('/api/carrito/:id_cliente', (req, res) => {
    res.json({ exito: true, elementos: carritos[req.params.id_cliente] || [] });
});

app.post('/api/carrito/agregar', (req, res) => {
    const { id_cliente, id_perfume, id_tamano, cantidad } = req.body;
    if (!carritos[id_cliente]) carritos[id_cliente] = [];
    const p = productos[id_perfume];
    if (!p) return res.json({ exito: false });
    const t = p.tamanos[id_tamano];
    if (!t) return res.json({ exito: false });
    const existe = carritos[id_cliente].find(i => i.ID_Perfume === id_perfume && i.ID_Tamano === id_tamano);
    if (existe) {
        existe.Cantidad += cantidad;
        existe.Subtotal = existe.Cantidad * existe.Precio_Unitario;
    } else {
        carritos[id_cliente].push({
            ID_Carrito: Date.now(),
            ID_Perfume: id_perfume,
            ID_Tamano: id_tamano,
            Cantidad: cantidad,
            Precio_Unitario: t.precio,
            Subtotal: t.precio * cantidad,
            Nombre: p.titulo,
            Marca: p.marca,
            Imagen_Principal: p.imagenPrincipal,
            Mililitros: t.ml
        });
    }
    res.json({ exito: true });
});

app.delete('/api/carrito/eliminar/:id', (req, res) => {
    for (let id in carritos) {
        carritos[id] = carritos[id].filter(i => i.ID_Carrito != req.params.id);
    }
    res.json({ exito: true });
});

app.post('/api/pedido/crear', (req, res) => {
    const { id_cliente, items } = req.body;
    let subtotal = 0;
    items.forEach(i => subtotal += i.Precio_Unitario * i.Cantidad);
    carritos[id_cliente] = [];
    res.json({ exito: true, codigo: `PED-${Date.now()}`, total: subtotal * 1.18 });
});

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(process.env.PORT || 3000, () => console.log('🚀 Servidor corriendo'));
