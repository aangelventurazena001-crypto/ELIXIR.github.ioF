// navigation.js
document.addEventListener('DOMContentLoaded', () => {
    // Detectar pÍgina actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Activar botÍÂ³n correcto
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Actualizar contador del carrito
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contador = document.getElementById('carritoContador');
    
    if (contador) {
        const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
        contador.textContent = totalItems;
        contador.style.display = totalItems > 0 ? 'flex' : 'none';
    }
 // 🔍 BUSCADOR MEJORADO
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (searchInput && typeof productos !== 'undefined') {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }

            // Buscar en productos
            const results = Object.entries(productos).filter(([id, prod]) => {
                return prod.titulo.toLowerCase().includes(query) ||
                       prod.marca.toLowerCase().includes(query) ||
                       prod.categoria.toLowerCase().includes(query);
            });

            if (results.length > 0) {
                // Ordenar por relevancia
                results.sort((a, b) => {
                    const aTitle = a[1].titulo.toLowerCase();
                    const bTitle = b[1].titulo.toLowerCase();
                    
                    // Priorizar coincidencias al inicio
                    if (aTitle.startsWith(query)) return -1;
                    if (bTitle.startsWith(query)) return 1;
                    return 0;
                });
                
                searchResults.innerHTML = results.slice(0, 5).map(([id, prod]) => `
                    <div class="search-result-item" onclick="window.location.href='hola3.html?id=${id}'">
                        <div style="display: flex; gap: 1rem; align-items: center;">
                            <img src="${prod.imagenPrincipal}" 
                                 style="width: 50px; height: 50px; object-fit: contain; border-radius: 8px;"
                                 onerror="this.src='img/placeholder.jpg'">
                            <div>
                                <strong style="color: #EFBF04; display: block;">${prod.titulo}</strong>
                                <small style="color: rgba(255,255,255,0.7);">${prod.marca}</small>
                                <small style="color: #EFBF04; display: block;">S/. ${prod.precio.toFixed(2)}</small>
                            </div>
                        </div>
                    </div>
                `).join('');
                
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = `
                    <div class="search-result-item" style="text-align: center; color: rgba(255,255,255,0.6);">
                        <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                        <p>No se encontraron productos</p>
                    </div>
                `;
                searchResults.style.display = 'block';
            }
        });

        // Cerrar al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
        
        // Cerrar con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchResults.style.display = 'none';
                searchInput.blur();
            }
        });
    }
});