// web/js/shop.js - Specific logic for the shop page

import { allProducts, cart, saveCart, updateCartInfo, addToEnquiryList, changeQuantity, removeFromCart, handleEnquireNow } from '../data/data.js';

// DOM element references specific to shop.html
const productGrid = document.getElementById('product-grid');
const cartButton = document.getElementById('cart-button');
const cartPanelContainer = document.getElementById('cart-panel-container');
const cartPanel = document.getElementById('cart-panel');
const closeCartButton = document.getElementById('close-cart-button');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count'); // This is the span for count
const cartSubtotal = document.getElementById('cart-subtotal'); // This is the span for total items in cart panel
const enquireNowButton = document.getElementById('enquire-now-button'); 
const mobileMenuButtonShop = document.getElementById('mobile-menu-button-shop');
const mobileMenuShop = document.getElementById('mobile-menu-shop');


// --- Product Card Rendering Function ---
function createProductCard(product) {
    const imageUrl = product.image && product.image.length > 0 ? product.image[0] : 'assets/placeholder.webp';

    return `
        <div class="product-card">
            <div class="product-card-image-wrapper">
                <img src="${imageUrl}" alt="${product.name}">
                ${product.stock <= 0 ? '<div class="absolute inset-0 bg-black/80 text-white flex items-center justify-center text-xl font-bold">Out of Stock</div>' : ''}
            </div>
            <div class="p-4 flex flex-col flex-grow text-left">
                <h3 class="text-xl font-display font-bold mb-2 flex-grow">
                    ${product.name}
                </h3>
                <p class="text-gray-300 text-sm mb-1"><strong>Material:</strong> ${product.material || 'N/A'}</p>
                <p class="text-gray-300 text-sm mb-3"><strong>Size:</strong> ${product.dimensionsAvailable && product.dimensionsAvailable.length > 0 ? product.dimensionsAvailable.join(', ') : 'N/A'}</p>
                
                <a href="product-detail.html?id=${product.id}" class="view-details-btn mt-auto w-full btn-primary font-semibold py-2 rounded-lg text-sm text-center">View Details</a>
            </div>
        </div>
    `;
}

// --- Render All Products ---
function renderProducts() {
    if(productGrid) {
        productGrid.innerHTML = '';
        if (allProducts.length === 0) {
            productGrid.innerHTML = '<p class="text-center text-gray-300 col-span-full py-10">No products available.</p>';
        } else {
            allProducts.forEach(product => {
                productGrid.innerHTML += createProductCard(product);
            });
        }
    }
}

// --- Render Cart (specific to shop.html's elements) ---
function renderCart() {
    if (cartItemsContainer) { // Ensure cartItemsContainer exists before trying to update it
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-gray-300 text-center py-4">Your enquiry list is empty.</p>';
        } else {
            cart.forEach(item => {
                const cartItemImageUrl = item.image && item.image.length > 0 ? item.image[0] : 'assets/placeholder.webp';
                const finalCartItemImageUrl = cartItemImageUrl; 

                const cartItemHTML = `
                    <div class="flex items-center justify-between mb-4 pb-4 border-b border-gray-700 last:border-b-0" data-id="${item.id}">
                        <div class="flex items-center">
                            <img src="${finalCartItemImageUrl}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md mr-4 shadow-sm">
                            <div>
                                <p class="font-semibold text-white">${item.name}</p>
                            </div>
                        </div>
                        <div class="flex items-center cart-item-quantity space-x-2">
                            <button class="quantity-change text-lg px-2 text-gray-300 hover:text-white" data-change="-1">-</button>
                            <input type="text" value="${item.quantity}" class="w-10 text-center font-semibold rounded-md border border-gray-600 py-1" readonly style="background-color:#555; color:white;">
                            <button class="quantity-change text-lg px-2 text-gray-300 hover:text-white" data-change="1">+</button>
                            <button class="remove-item text-red-400 ml-4 hover:text-red-300 text-2xl">&times;</button>
                        </div>
                    </div>`;
                cartItemsContainer.innerHTML += cartItemHTML;
            });
        }
        updateCartInfo(cartCount, cartSubtotal); // Call shared update function, pass shop's elements
    }
}

// Re-declaring toggleCart to use local DOM elements and call local renderCart
function toggleCart() {
    if (cartPanelContainer) { // Ensure element exists
        cartPanelContainer.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
        if (cartPanel) { // Ensure cartPanel exists for transition
            setTimeout(() => {
                cartPanel.classList.toggle('translate-x-full');
            }, 10);
        }
        renderCart(); // Render cart when panel is toggled
    }
}


// Event Listeners for Shop Page
document.addEventListener('DOMContentLoaded', function () {
    renderProducts(); // Initial render of products
    renderCart(); // Initial render of cart state

    if (cartButton && closeCartButton && cartPanelContainer && enquireNowButton) {
        cartButton.addEventListener('click', toggleCart);
        closeCartButton.addEventListener('click', toggleCart);
        cartPanelContainer.addEventListener('click', (e) => {
            if (e.target === cartPanelContainer) { // Click outside panel but inside overlay
                toggleCart();
            }
        });
        enquireNowButton.addEventListener('click', handleEnquireNow); 
    }

    if (productGrid) {
        productGrid.addEventListener('click', (e) => {
            const targetLink = e.target.closest('.view-details-btn');
            if (targetLink) {
                // Navigation is handled by the href on the button
            } else if (e.target.classList.contains('add-to-cart-btn')) { // Example if you re-add a direct add-to-cart in shop
                const productId = parseInt(e.target.dataset.id);
                addToEnquiryList(productId, 1); 
                renderCart(); // Update local cart display
            }
        });
    }
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', e => {
            const target = e.target;
            const parent = target.closest('.flex.items.center.justify-between[data-id]');
            if (!parent) return;
            
            const productId = parseInt(parent.dataset.id);
            
            if (target.classList.contains('quantity-change')) {
                changeQuantity(productId, parseInt(target.dataset.change));
                renderCart(); // Update local cart display
            } else if (target.classList.contains('remove-item')) {
                removeFromCart(productId);
                renderCart(); // Update local cart display
            }
        });
    }

    if (mobileMenuButtonShop && mobileMenuShop) {
        mobileMenuButtonShop.addEventListener('click', () => {
            mobileMenuShop.classList.toggle('hidden');
        });
        mobileMenuShop.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuShop.classList.add('hidden');
            });
        });
    }
});