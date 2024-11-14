// main.js - Handles product catalog loading and cart actions
document.addEventListener('DOMContentLoaded', () => {
    // Load products and display
    loadProducts();
});
function loadProducts() {
    const products = [
        { id: 1, name: 'Blueberry Raspberry', price: 14, inStock: true, flavor: 'Fruit' },
        { id: 2, name: 'Strawberry Kiwi', price: 14, inStock: true, flavor: 'Fruit' },
        { id: 3, name: 'Fresh Mint', price: 14, inStock: false, flavor: 'Mint' }
    ];
    const catalog = document.getElementById('product-catalog');
    catalog.innerHTML = '';
    products.forEach(product => {
        if (product.inStock) {
            const productElement = document.createElement('div');
            productElement.className = 'product-item';
            productElement.innerHTML = `<h3>${product.name}</h3>
            <p>£${product.price}</p><button onclick="addToCart(${product.id})">Add to Cart</button>`;
            catalog.appendChild(productElement);
        }
    });
}
function addToCart(productId) {
    alert('Product added to cart!');
}
