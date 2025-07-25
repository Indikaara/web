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
const productDetailsListElem = document.getElementById('product-details-list');
const productStoryElem = document.querySelector('#product-story p');
const addToEnquiryButton = document.getElementById('add-to-enquiry-button');

// --- Modal Elements ---
let modalContainer;
let modalMessage;
let modalCloseButton;
let modalOkButton; // New reference for the OK button

// Helper function to manage body scroll state based on modal and cart panel visibility
function updateBodyScrollState() {
    // Ensure modalContainer and cartPanelContainer are initialized before checking
    if (!modalContainer || !cartPanelContainer) {
        console.warn('Modal or Cart Panel container not yet initialized for scroll state management.');
        return;
    }
    // If either the modal or the cart panel is NOT hidden, add overflow-hidden
    if (!modalContainer.classList.contains('hidden') || !cartPanelContainer.classList.contains('hidden')) {
        document.body.classList.add('overflow-hidden');
    } else {
        // Otherwise, remove overflow-hidden
        document.body.classList.remove('overflow-hidden');
    }
}

// Function to initialize modal elements
function initializeModal() {
    // Create modal container if it doesn't exist
    if (!document.getElementById('enquiry-modal-container')) {
        const modalHTML = `
            <div id="enquiry-modal-container" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] hidden p-4">
                <div class="bg-gray-800 p-8 rounded-lg shadow-xl text-center max-w-sm w-full relative">
                    <button id="enquiry-modal-close-button" class="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold">&times;</button>
                    <svg class="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p id="enquiry-modal-message" class="text-white text-lg font-semibold mb-4"></p>
                    <button class="btn-primary py-2 px-6 rounded-full text-sm font-semibold" id="enquiry-modal-ok-button">OK</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    modalContainer = document.getElementById('enquiry-modal-container');
    modalMessage = document.getElementById('enquiry-modal-message');
    modalCloseButton = document.getElementById('enquiry-modal-close-button');
    modalOkButton = document.getElementById('enquiry-modal-ok-button'); // Get reference to the OK button

    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', hideModal);
    }
    if (modalOkButton) { // Add event listener for the new OK button
        modalOkButton.addEventListener('click', hideModal);
    }
    if (modalContainer) {
        modalContainer.addEventListener('click', (e) => {
            if (e.target === modalContainer) {
                hideModal();
            }
        });
    }
}

function showModal(message) {
    if (modalContainer && modalMessage) {
        modalMessage.textContent = message;
        modalContainer.classList.remove('hidden');
        updateBodyScrollState(); // Update scroll state when modal is shown
    }
}

function hideModal() {
    if (modalContainer) {
        modalContainer.classList.add('hidden');
        updateBodyScrollState(); // Update scroll state when modal is hidden
    }
}

// --- Render Cart (specific to product-detail.html's elements) ---
function renderCart() {
    if (cartItemsContainer) { // Ensure cartItemsContainer exists before trying to update it
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-gray-300 text-center py-4">Your enquiry list is empty.</p>';
            // Disable enquire now button if cart is empty
            if (enquireNowButtonCart) {
                enquireNowButtonCart.disabled = true;
                enquireNowButtonCart.classList.add('opacity-50', 'cursor-not-allowed');
            }
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
                            <input type="text" value="${item.quantity}" class="w-10 text-center font-semibold rounded-md border border-gray-600 py-1" readonly style="background-color:#4A2220; color:white;">
                            <button class="quantity-change text-lg px-2 text-gray-300 hover:text-white" data-change="1">+</button>
                            <button class="remove-item text-red-400 ml-4 hover:text-red-300 text-2xl">&times;</button>
                        </div>
                    </div>`;
                cartItemsContainer.innerHTML += cartItemHTML;
            });

            // Enable enquire now button if cart has items
            if (enquireNowButtonCart) {
                enquireNowButtonCart.disabled = false;
                enquireNowButtonCart.classList.remove('opacity-50', 'cursor-not-allowed');
            }

            // Attach event listeners after elements are added to the DOM
            cartItemsContainer.querySelectorAll('.quantity-change').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = parseInt(event.target.closest('[data-id]').dataset.id);
                    const change = parseInt(event.target.dataset.change);
                    changeQuantity(productId, change);
                    renderCart(); // Re-render cart after quantity change
                });
            });

            cartItemsContainer.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = parseInt(event.target.closest('[data-id]').dataset.id);
                    removeFromCart(productId);
                    renderCart(); // Re-render cart after item removal
                });
            });
        }
        updateCartInfo(cartCount, cartSubtotal); // Call shared update function, pass detail page's elements
    }
}

// Re-declaring toggleCart to use local DOM elements and call local renderCart
function toggleCart() {
    if (cartPanelContainer) { // Ensure element exists
        cartPanelContainer.classList.toggle('hidden');
        if (cartPanel) { // Ensure cartPanel exists for transition
            setTimeout(() => {
                cartPanel.classList.toggle('translate-x-full');
            }, 10);
        }
        updateBodyScrollState(); // Update scroll state when cart is toggled
    }
}

// --- Product Detail Page Specific Functions ---
function loadProductDetails() {
    console.log('loadProductDetails function called.'); // Debug 1
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    console.log('Product ID from URL:', productId); // Debug 2

    if (isNaN(productId)) {
        document.getElementById('product-detail-section').innerHTML = '<p class="text-center text-red-500 text-xl font-bold">Product not found. <a href="shop.html" class="text-blue-400 hover:underline">Go back to shop</a></p>';
        document.title = "Product Not Found";
        return;
    }

    const loadedProduct = allProducts.find(p => p.id === productId);

    if (loadedProduct) {
        console.log('Found product:', loadedProduct); // Debug 3
        document.title = `${loadedProduct.name} - Indikaara`;

        if (productNameElem) productNameElem.textContent = loadedProduct.name;
        if (productDescriptionElem) productDescriptionElem.textContent = loadedProduct.description || 'No description available.';
        
        // Correctly target the span elements for product details and log their content
        const productCategorySpan = document.querySelector('#product-category');
        if (productCategorySpan) {
            productCategorySpan.textContent = loadedProduct.categoryName || 'N/A';
            console.log('Category span updated to:', productCategorySpan.textContent); // Debug 4
        } else {
            console.error('Error: #product-category span not found!');
        }

        const productManufacturerSpan = document.querySelector('#product-manufacturer');
        if (productManufacturerSpan) {
            productManufacturerSpan.textContent = loadedProduct.manufacturer || 'N/A';
            console.log('Manufacturer span updated to:', productManufacturerSpan.textContent); // Debug 5
        } else {
            console.error('Error: #product-manufacturer span not found!');
        }
        
        const productMaterialSpan = document.querySelector('#product-material');
        if (productMaterialSpan) {
            productMaterialSpan.textContent = loadedProduct.material || 'N/A';
            console.log('Material span updated to:', productMaterialSpan.textContent); // Debug 6
        } else {
            console.error('Error: #product-material span not found!');
        }

        const productWeavingTechniqueSpan = document.querySelector('#product-weaving-technique');
        if (productWeavingTechniqueSpan) {
            productWeavingTechniqueSpan.textContent = loadedProduct.weavingTechnique || 'N/A';
            console.log('Weaving Technique span updated to:', productWeavingTechniqueSpan.textContent); // Debug 7
        } else {
            console.error('Error: #product-weaving-technique span not found!');
        }

        const productDimensionsAvailableSpan = document.querySelector('#product-dimensions-available');
        if (productDimensionsAvailableSpan) {
            productDimensionsAvailableSpan.textContent = loadedProduct.dimensionsAvailable ? loadedProduct.dimensionsAvailable.join(', ') : 'N/A';
            console.log('Dimensions span updated to:', productDimensionsAvailableSpan.textContent); // Debug 8
        } else {
            console.error('Error: #product-dimensions-available span not found!');
        }

        const productColorSpan = document.querySelector('#product-color');
        if (productColorSpan) {
            productColorSpan.textContent = loadedProduct.color ? loadedProduct.color.join(', ') : 'N/A';
            console.log('Color span updated to:', productColorSpan.textContent); // Debug 9
        } else {
            console.error('Error: #product-color span not found!');
        }

        if (productStoryElem) productStoryElem.textContent = loadedProduct.story || 'No specific story available.';

        if (loadedProduct.details && productDetailsListElem) {
            productDetailsListElem.innerHTML = loadedProduct.details.map(detail => `<li>${detail}</li>`).join('');
        } else if (productDetailsListElem) {
            productDetailsListElem.innerHTML = '<li>No specific additional details.</li>';
        }

        // Set the single main product image
        const mainImageUrl = loadedProduct.image && loadedProduct.image.length > 0 ? loadedProduct.image[0] : 'assets/placeholder.webp';
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
    initializeModal(); // Initialize modal elements

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

    // Listen for custom events from data.js and show modal
    document.addEventListener('productAddedToEnquiry', (event) => {
        showModal(`${event.detail.productName} has been added to your enquiry list!`);
    });

    document.addEventListener('productEnquiryError', (event) => {
        showModal(`Error: ${event.detail.message}`);
    });

    document.addEventListener('enquiryListEmpty', (event) => {
        showModal(event.detail.message);
    });

    document.addEventListener('enquiryEmailPrepared', (event) => {
        showModal(event.detail.message);
    });
});
