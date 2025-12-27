// ================================================================
// API ELIXIR PARFUM - Con alertas bonitas
// ================================================================

const API_URL = 'http://localhost:3000/api';

// ✅ MODAL DE ALERTA BONITO
function mostrarAlerta(tipo, titulo, mensaje) {
    const iconos = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };
    
    const colores = {
        success: '#4CAF50',
        error: '#ff4444',
        warning: '#EFBF04',
        info: '#2196F3'
    };
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            padding: 3rem;
            border-radius: 25px;
            border: 3px solid ${colores[tipo]};
            box-shadow: 0 25px 80px ${colores[tipo]}50;
            text-align: center;
            max-width: 450px;
            width: 90%;
            animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        ">
            <div style="
                width: 100px;
                height: 100px;
                margin: 0 auto 2rem;
                background: ${colores[tipo]}20;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 4rem;
                color: ${colores[tipo]};
                animation: bounce 0.6s ease;
            ">${iconos[tipo]}</div>
            
            <h2 style="
                color: ${colores[tipo]};
                font-size: 2rem;
                margin-bottom: 1rem;
                font-weight: 700;
            ">${titulo}</h2>
            
            <p style="
                color: rgba(255,255,255,0.9);
                font-size: 1.1rem;
                line-height: 1.6;
                margin-bottom: 2rem;
            ">${mensaje}</p>
            
            <button onclick="this.closest('div').parentElement.remove()" style="
                width: 100%;
                padding: 1.2rem;
                background: ${colores[tipo]};
                color: ${tipo === 'warning' ? '#000' : '#fff'};
                border: none;
                border-radius: 15px;
                font-size: 1.1rem;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.3s ease;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                Entendido
            </button>
        </div>
        
        <style>
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(40px) scale(0.9); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes bounce {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
        </style>
    `;
    
    document.body.appendChild(modal);
}

// ================================================================
// OBTENER TODOS LOS PERFUMES
// ================================================================
async function obtenerPerfumes(genero = '') {
    try {
        const url = genero ? `${API_URL}/perfumes?genero=${genero}` : `${API_URL}/perfumes`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al obtener perfumes');
        const perfumes = await response.json();
        console.log('✅ Perfumes obtenidos:', perfumes.length);
        return perfumes;
    } catch (error) {
        console.error('❌ Error:', error);
        return [];
    }
}

// ================================================================
// OBTENER DETALLE DE UN PERFUME
// ================================================================
async function obtenerDetallePerfume(codigo) {
    try {
        const response = await fetch(`${API_URL}/perfume/${codigo}`);
        if (!response.ok) throw new Error('Producto no encontrado');
        const perfume = await response.json();
        console.log('✅ Perfume cargado:', perfume.Nombre);
        return perfume;
    } catch (error) {
        console.error('❌ Error:', error);
        mostrarAlerta('error', 'Producto No Encontrado', 'No se pudo cargar este perfume desde la base de datos');
        return null;
    }
}

// ================================================================
// LOGIN
// ================================================================
async function login(correo, password) {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ correo, password })
        });
        
        const data = await response.json();
        
        if (data.success && data.cliente) {
            localStorage.setItem('cliente', JSON.stringify(data.cliente));
            console.log('✅ Login exitoso:', data.cliente.Nombres);
            
            // ✅ ALERTA BONITA DE BIENVENIDA
            mostrarAlerta('success', '¡Bienvenido!', `Hola ${data.cliente.Nombres}, sesión iniciada correctamente`);
            
            return { success: true, cliente: data.cliente };
        } else {
            mostrarAlerta('error', 'Error de Login', data.error || 'Credenciales incorrectas');
            return { success: false, error: data.error };
        }
    } catch (error) {
        console.error('❌ Error:', error);
        mostrarAlerta('error', 'Error de Conexión', 'No se pudo conectar con el servidor');
        return { success: false, error: 'Error de conexión' };
    }
}

// ================================================================
// CERRAR SESIÓN
// ================================================================
function cerrarSesion() {
    localStorage.removeItem('cliente');
    mostrarAlerta('info', 'Sesión Cerrada', 'Has cerrado sesión correctamente');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// ================================================================
// VERIFICAR SI ESTÁ LOGUEADO
// ================================================================
function estaLogueado() {
    return localStorage.getItem('cliente') !== null;
}

function obtenerClienteActual() {
    const clienteStr = localStorage.getItem('cliente');
    return clienteStr ? JSON.parse(clienteStr) : null;
}

// ================================================================
// CARRITO
// ================================================================
async function verCarrito() {
    const cliente = obtenerClienteActual();
    if (!cliente) {
        mostrarAlerta('warning', 'Sesión Requerida', 'Debes iniciar sesión para ver tu carrito');
        return null;
    }
    
    try {
        const response = await fetch(`${API_URL}/carrito/${cliente.ID_Cliente}`);
        const carrito = await response.json();
        console.log('✅ Carrito:', carrito);
        return carrito;
    } catch (error) {
        console.error('❌ Error:', error);
        return null;
    }
}

async function agregarAlCarritoBD(id_perfume, id_tamano, cantidad = 1) {
    const cliente = obtenerClienteActual();
    
    if (!cliente) {
        mostrarAlerta('warning', 'Sesión Requerida', 'Debes iniciar sesión para agregar productos al carrito');
        return { success: false };
    }
    
    try {
        const response = await fetch(`${API_URL}/carrito/agregar`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id_cliente: cliente.ID_Cliente,
                id_perfume: id_perfume,
                id_tamano: id_tamano,
                cantidad: cantidad
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            console.log('✅ Agregado al carrito');
            // Actualizar contador
            await actualizarContadorCarrito();
            return { success: true, data };
        } else {
            mostrarAlerta('error', 'Error', data.error || 'No se pudo agregar al carrito');
            return { success: false, error: data.error };
        }
    } catch (error) {
        console.error('❌ Error:', error);
        mostrarAlerta('error', 'Error de Conexión', 'No se pudo conectar con el servidor');
        return { success: false, error };
    }
}

async function eliminarDelCarrito(id_carrito) {
    try {
        const response = await fetch(`${API_URL}/carrito/eliminar/${id_carrito}`, {
            method: 'DELETE'
        });
        
        const data = await response.json();
        console.log('✅ Eliminado del carrito');
        // Actualizar contador
        await actualizarContadorCarrito();
        return data;
    } catch (error) {
        console.error('❌ Error:', error);
        return null;
    }
}

// ================================================================
// ACTUALIZAR CONTADOR DEL CARRITO
// ================================================================
async function actualizarContadorCarrito() {
    if (!estaLogueado()) {
        const contador = document.getElementById('carritoContador');
        if (contador) {
            contador.style.display = 'none';
        }
        return;
    }
    
    const carrito = await verCarrito();
    const contador = document.getElementById('carritoContador');
    
    if (contador && carrito && carrito.items) {
        const total = carrito.items.reduce((sum, item) => sum + item.Cantidad, 0);
        contador.textContent = total;
        contador.style.display = total > 0 ? 'flex' : 'none';
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorCarrito();
});

console.log('✅ api.js cargado correctamente');