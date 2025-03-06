// Cargar el contador del carrito al iniciar la página
let cartCount = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;
updateCart();

function updateCart() {
    document.querySelectorAll('#cart-count').forEach(el => el.textContent = cartCount);
}

// Función para agregar productos al carrito
function addToCart() {
    cartCount++;
    localStorage.setItem("cartCount", cartCount);
    updateCart();
}
