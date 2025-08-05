// web/js/shop.js - Specific logic for the shop page

import * as data from '../data/data.js'; // Import all exports from data.js as a namespace 'data'

// DOM element references specific to shop.html
const cartButton = document.getElementById('cart-button');
const cartPanelContainer = document.getElementById('cart-panel-container');
const cartPanel = document.getElementById('cart-panel');
const closeCartButton = document.getElementById('close-cart-button');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count'); // This is the span for count
const cartSubtotal = document.getElementById('cart-subtotal'); // This is the span for total items in cart panel
const enquireNowButtonCart = document.getElementById('enquire-now-button'); // For the cart panel (Note: ID might differ from product-detail.html)
const mobileMenuButtonShop = document.getElementById('mobile-menu-button-shop');
const mobileMenuShop = document.getElementById('mobile-menu-shop');
const productGrid = document.getElementById('product-grid');

// --- General Modal Elements (for confirmations/errors) ---
let generalModalContainer;
let generalModalMessage;
let generalModalCloseButton;
let generalModalOkButton;

// --- Enquiry Form Modal Elements ---
let enquiryFormModalContainer;
let enquiryFormModalCloseButton;
let enquiryFormModalItemsList;
let enquiryFormModalNameInput;
let enquiryFormModalEmailInput;
let enquiryFormModalPhoneInput; // New: Phone Input
let enquiryFormModalCompanyInput; // New: Company Input
let enquiryFormModalSubmitButton;
let enquiryFormModalForm;

// Helper function to manage body scroll state based on modal and cart panel visibility
function updateBodyScrollState() {
    // Ensure generalModalContainer and cartPanelContainer are initialized before checking
    // Also check the new enquiry form modal
    if (!generalModalContainer || !cartPanelContainer || !enquiryFormModalContainer) {
        console.warn('One or more modal/cart panel containers not yet initialized for scroll state management.');
        return;
    }
    // If any of the modals or the cart panel is NOT hidden, add overflow-hidden
    if (!generalModalContainer.classList.contains('hidden') || 
        !cartPanelContainer.classList.contains('hidden') ||
        !enquiryFormModalContainer.classList.contains('hidden')) {
        document.body.classList.add('overflow-hidden');
    } else {
        // Otherwise, remove overflow-hidden
        document.body.classList.remove('overflow-hidden');
    }
}

// Function to initialize general modal elements (for confirmations/errors)
function initializeGeneralModal() {
    if (!document.getElementById('general-modal-container')) {
        const modalHTML = `
            <div id="general-modal-container" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] hidden p-4">
                <div class="bg-gray-800 p-8 rounded-lg shadow-xl text-center max-w-sm w-full relative">
                    <button id="general-modal-close-button" class="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold">&times;</button>
                    <svg class="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p id="general-modal-message" class="text-white text-lg font-semibold mb-4"></p>
                    <button class="btn-primary py-2 px-6 rounded-full text-sm font-semibold" id="general-modal-ok-button">OK</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    generalModalContainer = document.getElementById('general-modal-container');
    generalModalMessage = document.getElementById('general-modal-message');
    generalModalCloseButton = document.getElementById('general-modal-close-button');
    generalModalOkButton = document.getElementById('general-modal-ok-button');

    if (generalModalCloseButton) {
        generalModalCloseButton.addEventListener('click', hideGeneralModal);
    }
    if (generalModalOkButton) {
        generalModalOkButton.addEventListener('click', hideGeneralModal);
    }
    if (generalModalContainer) {
        generalModalContainer.addEventListener('click', (e) => {
            if (e.target === generalModalContainer) {
                hideGeneralModal();
            }
        });
    }
}

function showGeneralModal(message) {
    if (generalModalContainer && generalModalMessage) {
        generalModalMessage.textContent = message;
        generalModalContainer.classList.remove('hidden');
        updateBodyScrollState(); // Update scroll state when modal is shown
    }
}

function hideGeneralModal() {
    if (generalModalContainer) {
        generalModalContainer.classList.add('hidden');
        updateBodyScrollState(); // Update scroll state when modal is hidden
    }
}

// Function to initialize enquiry form modal elements
function initializeEnquiryFormModal() {
    if (!document.getElementById('enquiry-form-modal-container')) {
        const formModalHTML = `
            <div id="enquiry-form-modal-container" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] hidden p-4">
                <div class="bg-gray-900 p-8 rounded-lg shadow-xl text-white max-w-lg w-full relative">
                    <button id="enquiry-form-modal-close-button" class="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold">&times;</button>
                    <h2 class="text-3xl font-display font-bold mb-6 text-center">Submit Your Enquiry</h2>
                    <form id="enquiry-form">
                        <div class="mb-4">
                            <label for="enquiry-name" class="block text-gray-300 text-sm font-semibold mb-2">Your Name:</label>
                            <input type="text" id="enquiry-name" name="name" class="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500" required>
                        </div>
                        <div class="mb-4">
                            <label for="enquiry-email" class="block text-gray-300 text-sm font-semibold mb-2">Your Email:</label>
                            <input type="email" id="enquiry-email" name="email" class="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500" required>
                        </div>
                        <div class="mb-4">
                            <label for="enquiry-phone" class="block text-gray-300 text-sm font-semibold mb-2">Your Phone Number:</label>
                            <input type="tel" id="enquiry-phone" name="phone" class="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500">
                        </div>
                        <div class="mb-6">
                            <label for="enquiry-company" class="block text-gray-300 text-sm font-semibold mb-2">Company Name:</label>
                            <input type="text" id="enquiry-company" name="company" class="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500">
                        </div>
                        <div class="mb-6">
                            <h3 class="text-lg font-semibold mb-3">Items in Your Enquiry List:</h3>
                            <ul id="enquiry-form-items-list" class="list-disc list-inside text-gray-300 max-h-48 overflow-y-auto p-2 rounded-md bg-gray-800 border border-gray-700">
                                </ul>
                        </div>
                        <button type="submit" id="enquiry-form-submit-button" class="w-full btn-primary py-3 rounded-lg text-lg font-semibold">Submit Enquiry</button>
                    </form>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', formModalHTML);
    }

    enquiryFormModalContainer = document.getElementById('enquiry-form-modal-container');
    enquiryFormModalCloseButton = document.getElementById('enquiry-form-modal-close-button');
    enquiryFormModalItemsList = document.getElementById('enquiry-form-items-list');
    enquiryFormModalNameInput = document.getElementById('enquiry-name');
    enquiryFormModalEmailInput = document.getElementById('enquiry-email');
    enquiryFormModalPhoneInput = document.getElementById('enquiry-phone'); // Get reference
    enquiryFormModalCompanyInput = document.getElementById('enquiry-company'); // Get reference
    enquiryFormModalSubmitButton = document.getElementById('enquiry-form-submit-button');
    enquiryFormModalForm = document.getElementById('enquiry-form');

    if (enquiryFormModalCloseButton) {
        enquiryFormModalCloseButton.addEventListener('click', hideEnquiryFormModal);
    }
    if (enquiryFormModalContainer) {
        enquiryFormModalContainer.addEventListener('click', (e) => {
            if (e.target === enquiryFormModalContainer) {
                hideEnquiryFormModal();
            }
        });
    }

    if (enquiryFormModalForm) {
        enquiryFormModalForm.addEventListener('submit', handleFormSubmission);
    }
}

function showEnquiryFormModal() {
    if (enquiryFormModalContainer && enquiryFormModalItemsList) {
        enquiryFormModalItemsList.innerHTML = ''; // Clear previous items
        if (data.cart.length === 0) {
            enquiryFormModalItemsList.innerHTML = '<li class="text-center">Your enquiry list is empty. Please add items first.</li>';
            enquiryFormModalSubmitButton.disabled = true;
            enquiryFormModalSubmitButton.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            data.cart.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} (ID: ${item.id}), Quantity: ${item.quantity}`;
                enquiryFormModalItemsList.appendChild(listItem);
            });
            enquiryFormModalSubmitButton.disabled = false;
            enquiryFormModalSubmitButton.classList.remove('opacity-50', 'cursor-not-allowed');
        }
        enquiryFormModalContainer.classList.remove('hidden');
        updateBodyScrollState();
    }
}

function hideEnquiryFormModal() {
    if (enquiryFormModalContainer) {
        enquiryFormModalContainer.classList.add('hidden');
        updateBodyScrollState();
    }
}

function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission

    const name = enquiryFormModalNameInput.value;
    const email = enquiryFormModalEmailInput.value;
    const phone = enquiryFormModalPhoneInput.value; // New: Get phone number
    const company = enquiryFormModalCompanyInput.value; // New: Get company name

    if (!name || !email) {
        showGeneralModal('Please fill in both your name and email address.');
        return;
    }

    if (data.cart.length === 0) {
        showGeneralModal('Your enquiry list is empty. Please add items to enquire.');
        return;
    }

    let enquiryDetails = `Hello Indikaara Team,\n\nI would like to enquire about the following products:\n\n`;
    data.cart.forEach(item => {
        enquiryDetails += `- ${item.name} (ID: ${item.id}), Quantity: ${item.quantity}\n`;
    });
    enquiryDetails += `\nMy Name: ${name}\n`;
    enquiryDetails += `My Email: ${email}\n`;
    if (phone) enquiryDetails += `My Phone Number: ${phone}\n`; // Include if provided
    if (company) enquiryDetails += `My Company: ${company}\n`; // Include if provided
    enquiryDetails += `\nPlease contact me to discuss details regarding these items, including pricing, availability, and export procedures.`;

    // Construct the mailto link
    const mailtoLink = `mailto:info@indikaara.com?subject=${encodeURIComponent('Enquiry from Indikaara Website')}&body=${encodeURIComponent(enquiryDetails)}`; // Changed recipient email

    // Open the email client
    window.location.href = mailtoLink;

    // Clear the cart after generating the email
    data.cart.length = 0; // Corrected: Clear array by setting length to 0
    data.saveCart();
    renderCart(); // Update cart display

    hideEnquiryFormModal(); // Hide the form modal
    showGeneralModal("Your enquiry email has been prepared. Please send it from your email client."); // Show success modal
}


// --- Render Cart (specific to shop.html's elements) ---
function renderCart() {
    if (cartItemsContainer) { // Ensure cartItemsContainer exists before trying to update it
        cartItemsContainer.innerHTML = '';
        if (data.cart.length === 0) { // Use data.cart
            cartItemsContainer.innerHTML = '<p class="text-gray-300 text-center py-4">Your enquiry list is empty.</p>';
            // Disable enquire now button if cart is empty
            if (enquireNowButtonCart) {
                enquireNowButtonCart.disabled = true;
                enquireNowButtonCart.classList.add('opacity-50', 'cursor-not-allowed');
            }
        } else {
            data.cart.forEach(item => { // Use data.cart
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
                    data.changeQuantity(productId, change); // Use data.changeQuantity
                    renderCart(); // Re-render cart after quantity change
                });
            });

            cartItemsContainer.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = parseInt(event.target.closest('[data-id]').dataset.id);
                    data.removeFromCart(productId); // Use data.removeFromCart
                    renderCart(); // Re-render cart after item removal
                });
            });
        }
        data.updateCartInfo(cartCount, cartSubtotal); // Use data.updateCartInfo
    }
}

// Toggle Cart function for shop.html
function toggleCart() {
    if (cartPanelContainer) {
        cartPanelContainer.classList.toggle('hidden');
        if (cartPanel) {
            setTimeout(() => {
                cartPanel.classList.toggle('translate-x-full');
            }, 10);
        }
        updateBodyScrollState(); // Update scroll state when cart is toggled
        renderCart(); // Render cart when panel is toggled
    }
}

function getCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category');
}

// --- Render Products on Shop Page ---
function renderProducts() {
    if (productGrid) {
        productGrid.innerHTML = ''; // Clear existing products
        const selectedCategory = getCategoryFromUrl();
        let filteredProducts = data.allProducts;
        if (selectedCategory) {
            filteredProducts = data.allProducts.filter(product => {
                // Normalize for spaces and case
                return product.categoryName && product.categoryName.replace(/\s+/g, ' ').trim().toLowerCase() === selectedCategory.replace(/%20/g, ' ').trim().toLowerCase();
            });
        }
        filteredProducts.forEach(product => { // Use data.allProducts
            // FIX: Prepend a '/' to the image path to make it root-relative for more reliable loading.
            const imagePath = product.image && product.image.length > 0 ? '/' + product.image[0] : 'assets/placeholder.webp';
            
            const productCardHTML = `
                <div class="product-card bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col">
                    <a href="product-detail.html?id=${product.id}" class="block">
                        <div class="product-card-image-wrapper">
                            <img src="${imagePath}" alt="${product.name}" class="w-full h-full object-contain rounded-t-lg">
                        </div>
                        <h3 class="text-xl font-semibold mt-4 text-white">${product.name}</h3>
                    </a>
                    <ul class="product-details-list mt-2">
                        <li><strong>Material:</strong> ${product.material}</li>
                        <li><strong>Technique:</strong> ${product.weavingTechnique}</li>
                        <li><strong>Dimensions:</strong> ${product.dimensions}</li>
                    </ul>
                    <div class="mt-4 flex justify-between items-center">
                        <a href="product-detail.html?id=${product.id}" class="btn-primary py-2 px-4 rounded-full text-sm font-semibold">
                            View Details
                        </a>
                        <button class="add-to-enquiry-button btn-primary py-2 px-4 rounded-full text-sm font-semibold" data-product-id="${product.id}">
                            Add to Enquiry
                        </button>
                    </div>
                </div>
            `;
            productGrid.innerHTML += productCardHTML;
        });

        // Attach event listeners for "Add to Enquiry" buttons on product cards
        productGrid.querySelectorAll('.add-to-enquiry-button').forEach(button => {
            button.addEventListener('click', (event) => {
                console.log('Add to Enquiry button clicked on product card!'); // Debug log
                const productId = parseInt(event.target.dataset.productId);
                console.log('Product ID:', productId); // Debug log
                // Use the shared addToEnquiryList function
                data.addToEnquiryList(productId, 1); // Corrected: Use data.addToEnquiryList
                // No need to call renderCart here, as the custom event will trigger it via listener
            });
        });
    }
}


// Event Listeners for Shop Page
document.addEventListener('DOMContentLoaded', function () {
    initializeGeneralModal(); // Initialize general modal elements
    initializeEnquiryFormModal(); // Initialize enquiry form modal elements

    // Handle navbar transparency on scroll
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-[#331211]/85', 'backdrop-blur-sm', 'shadow-lg');
            header.classList.remove('bg-transparent', 'backdrop-blur-0', 'shadow-none');
        } else {
            header.classList.remove('bg-[#331211]/85', 'backdrop-blur-sm', 'shadow-lg');
            header.classList.add('bg-transparent', 'backdrop-blur-0', 'shadow-none');
        }
    });

    renderCart(); // Initial render of cart state for this page
    renderProducts(); // Render products on page load

    if (cartButton && closeCartButton && cartPanelContainer && enquireNowButtonCart) {
        cartButton.addEventListener('click', toggleCart);
        closeCartButton.addEventListener('click', toggleCart);
        cartPanelContainer.addEventListener('click', (e) => {
            if (e.target === cartPanelContainer) {
                toggleCart();
            }
        });
        // Modified: "Enquire Now" button now opens the new enquiry form modal
        enquireNowButtonCart.addEventListener('click', showEnquiryFormModal); 
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

    // Listen for custom events from data.js and show general modal
    document.addEventListener('productAddedToEnquiry', (event) => {
        console.log('productAddedToEnquiry event received!', event.detail); // Debug log
        showGeneralModal(`${event.detail.productName} has been added to your enquiry list!`);
        renderCart(); // Re-render cart after product is added
    });

    document.addEventListener('productEnquiryError', (event) => {
        console.error('productEnquiryError event received!', event.detail); // Debug log
        showGeneralModal(`Error: ${event.detail.message}`);
    });

    document.addEventListener('enquiryListEmpty', (event) => {
        console.log('enquiryListEmpty event received!', event.detail); // Debug log
        showGeneralModal(event.detail.message);
    });

    document.addEventListener('enquiryEmailPrepared', (event) => {
        console.log('enquiryEmailPrepared event received!', event.detail); // Debug log
        showGeneralModal(event.detail.message);
    });

    document.addEventListener('productQuantityChanged', () => {
        console.log('productQuantityChanged event received!'); // Debug log
        renderCart(); // Re-render cart when quantity changes
    });

    document.addEventListener('productRemovedFromEnquiry', () => {
        console.log('productRemovedFromEnquiry event received!'); // Debug log
        renderCart(); // Re-render cart when item is removed
    });
});