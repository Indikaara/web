// web/js/product-detail.js - Specific logic for the product detail page

import { allProducts, cart, saveCart, updateCartInfo, addToEnquiryList, changeQuantity, removeFromCart, handleEnquireNow } from '../data/data.js';

// DOM element references specific to product-detail.html
const cartButton = document.getElementById('cart-button');
const cartPanelContainer = document.getElementById('cart-panel-container');
const cartPanel = document.getElementById('cart-panel');
const closeCartButton = document.getElementById('close-cart-button');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count'); // This is the span for count
const cartSubtotal = document.getElementById('cart-subtotal'); // This is the span for total items in cart panel
const enquireNowButtonCart = document.getElementById('enquire-now-button-cart'); // For the cart panel
const mobileMenuButtonDetail = document.getElementById('mobile-menu-button-detail');
const mobileMenuDetail = document.getElementById('mobile-menu-detail');

const mainProductImage = document.getElementById('main-product-image');
const productNameElem = document.getElementById('product-name');
const productDescriptionElem = document.getElementById('product-description');
const productCategoryElem = document.getElementById('product-category');
const productManufacturerElem = document.getElementById('product-manufacturer');
const productMaterialElem = document.getElementById('product-material');
const productWeavingTechniqueElem = document.getElementById('product-weaving-technique');
const productDimensionsAvailableElem = document.getElementById('product-dimensions-available');
const productColorElem = document.getElementById('product-color');
const productDetailsListElem = document.getElementById('product-details-list');
const productStoryElem = document.querySelector('#product-story p');
const addToEnquiryButton = document.getElementById('add-to-enquiry-button');


// --- Render Cart (specific to product-detail.html's elements) ---
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
        updateCartInfo(cartCount, cartSubtotal); // Call shared update function, pass detail page's elements
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

// --- Product Detail Page Specific Functions ---
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (isNaN(productId)) {
        document.getElementById('product-detail-section').innerHTML = '<p class="text-center text-red-500 text-xl font-bold">Product not found. <a href="shop.html" class="text-blue-400 hover:underline">Go back to shop</a></p>';
        document.title = "Product Not Found";
        return;
    }

    const loadedProduct = allProducts.find(p => p.id === productId);

    if (loadedProduct) {
        document.title = `${loadedProduct.name} - Indikaara`;

        productNameElem.textContent = loadedProduct.name;
        productDescriptionElem.textContent = loadedProduct.description || 'No description available.';
        productCategoryElem.textContent = loadedProduct.categoryName || 'N/A';
        productManufacturerElem.textContent = loadedProduct.manufacturer || 'N/A';
        productMaterialElem.textContent = loadedProduct.material || 'N/A';
        productWeavingTechniqueElem.textContent = loadedProduct.weavingTechnique || 'N/A';
        productDimensionsAvailableElem.textContent = loadedProduct.dimensionsAvailable ? loadedProduct.dimensionsAvailable.join(', ') : 'N/A';
        productColorElem.textContent = loadedProduct.color ? loadedProduct.color.join(', ') : 'N/A';
        productStoryElem.textContent = loadedProduct.story || 'No specific story available.';

        if (loadedProduct.details && productDetailsListElem) {
            productDetailsListElem.innerHTML = loadedProduct.details.map(detail => `<li>${detail}</li>`).join('');
        } else if (productDetailsListElem) {
            productDetailsListElem.innerHTML = '<li>No specific additional details.</li>';
        }

        // Set the single main product image
        const mainImageUrl = loadedProduct.image && loadedProduct.image.length > 0 ? loadedProduct.image[0] : 'assets/placeholder.webp';
        // Image path is already processed in data.js
        mainProductImage.src = mainImageUrl;
        mainProductImage.alt = loadedProduct.name;


        // Setup Add to Enquiry Button
        if (addToEnquiryButton) {
            if (loadedProduct.stock <= 0) {
                addToEnquiryButton.textContent = 'Not Available for Enquiry';
                addToEnquiryButton.disabled = true;
                addToEnquiryButton.classList.add('opacity-50', 'cursor-not-allowed');
            } else {
                addToEnquiryButton.textContent = 'Add to Enquiry List';
                addToEnquiryButton.disabled = false;
                addToEnquiryButton.classList.remove('opacity-50', 'cursor-not-allowed');
                // Use shared addToEnquiryList function, pass loadedProduct.id
                addToEnquiryButton.addEventListener('click', () => {
                    addToEnquiryList(loadedProduct.id, 1);
                    renderCart(); // Update local cart display after adding
                });
            }
        }

    } else {
        document.getElementById('product-detail-section').innerHTML = '<p class="text-center text-red-500 text-xl font-bold">Product with ID ' + productId + ' not found. <a href="shop.html" class="text-blue-400 hover:underline">Go back to shop</a></p>';
        document.title = "Product Not Found";
    }
}


// Event Listeners for Product Detail Page
document.addEventListener('DOMContentLoaded', function () {
    renderCart(); // Initial render of cart state for this page

    if (cartButton && closeCartButton && cartPanelContainer && enquireNowButtonCart) {
        cartButton.addEventListener('click', toggleCart);
        closeCartButton.addEventListener('click', toggleCart);
        cartPanelContainer.addEventListener('click', (e) => {
            if (e.target === cartPanelContainer) {
                toggleCart();
            }
        });
        enquireNowButtonCart.addEventListener('click', handleEnquireNow);
    }

    if (mobileMenuButtonDetail && mobileMenuDetail) {
        mobileMenuButtonDetail.addEventListener('click', () => {
            mobileMenuDetail.classList.toggle('hidden');
        });
        mobileMenuDetail.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuDetail.classList.add('hidden');
            });
        });
    }

    // Only load product details if on product-detail.html
    if (window.location.pathname.includes('product-detail.html')) {
        loadProductDetails();
    }
});