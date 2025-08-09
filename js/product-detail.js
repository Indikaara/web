// web/js/product-detail.js - Specific logic for the product detail page

import * as data from "../data/data.js"; // Import all exports from data.js as a namespace 'data'

// DOM element references specific to product-detail.html
const cartButton = document.getElementById("cart-button");
console.log("cartButton element:", cartButton); // Debug: Check if cartButton is found
const cartPanelContainer = document.getElementById("cart-panel-container");
console.log("cartPanelContainer element:", cartPanelContainer); // Debug: Check if cartPanelContainer is found
const cartPanel = document.getElementById("cart-panel");
console.log("cartPanel element:", cartPanel); // Debug: Check if cartPanel is found
const closeCartButton = document.getElementById("close-cart-button");
console.log("closeCartButton element:", closeCartButton); // Debug: Check if closeCartButton is found
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count"); // This is the span for count
const cartSubtotal = document.getElementById("cart-subtotal"); // This is the span for total items in cart panel
const enquireNowButtonCart = document.getElementById("enquire-now-button-cart"); // CORRECTED ID HERE: Changed from 'enquire-now-button' to 'enquire-now-button-cart'
console.log("enquireNowButtonCart element:", enquireNowButtonCart); // Debug: Check if enquireNowButtonCart is found
const mobileMenuButtonDetail = document.getElementById(
    "mobile-menu-button-detail"
);
const mobileMenuDetail = document.getElementById("mobile-menu-detail");
const ourStorySection = document.getElementById("product-story");
const mainProductImage = document.getElementById("main-product-image");
const productNameElem = document.getElementById("product-name");
const productDescriptionElem = document.getElementById("product-description");
const productDetailsListElem = document.getElementById("product-details-list");
const productStoryElem = document.querySelector("#product-story p");
const addToEnquiryButton = document.getElementById("add-to-enquiry-button");
const imageZoomWrapper = document.querySelector(".image-zoom-wrapper");

// Initialize zoom functionality
if (imageZoomWrapper && mainProductImage) {
    imageZoomWrapper.addEventListener("mousemove", (e) => {
        const rect = imageZoomWrapper.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        mainProductImage.style.transformOrigin = `${x * 100}% ${y * 100}%`;
    });
}

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
    // Ensure all modal/cart panel containers are initialized before checking
    if (
        !generalModalContainer ||
        !cartPanelContainer ||
        !enquiryFormModalContainer
    ) {
        console.warn(
            "One or more modal/cart panel containers not yet initialized for scroll state management."
        );
        return;
    }
    // If any of the modals or the cart panel is NOT hidden, add overflow-hidden
    if (
        !generalModalContainer.classList.contains("hidden") ||
        !cartPanelContainer.classList.contains("hidden") ||
        !enquiryFormModalContainer.classList.contains("hidden")
    ) {
        document.body.classList.add("overflow-hidden");
    } else {
        // Otherwise, remove overflow-hidden
        document.body.classList.remove("overflow-hidden");
    }
}

// Function to initialize general modal elements (for confirmations/errors)
function initializeGeneralModal() {
    if (!document.getElementById("general-modal-container")) {
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
        document.body.insertAdjacentHTML("beforeend", modalHTML);
    }

    generalModalContainer = document.getElementById("general-modal-container");
    generalModalMessage = document.getElementById("general-modal-message");
    generalModalCloseButton = document.getElementById(
        "general-modal-close-button"
    );
    generalModalOkButton = document.getElementById("general-modal-ok-button");

    if (generalModalCloseButton) {
        generalModalCloseButton.addEventListener("click", hideGeneralModal);
    }
    if (generalModalOkButton) {
        generalModalOkButton.addEventListener("click", hideGeneralModal);
    }
    if (generalModalContainer) {
        generalModalContainer.addEventListener("click", (e) => {
            if (e.target === generalModalContainer) {
                hideGeneralModal();
            }
        });
    }
}

function showGeneralModal(message) {
    if (generalModalContainer && generalModalMessage) {
        generalModalMessage.textContent = message;
        generalModalContainer.classList.remove("hidden");
        updateBodyScrollState(); // Update scroll state when modal is shown
    }
}

function hideGeneralModal() {
    if (generalModalContainer) {
        generalModalContainer.classList.add("hidden");
        updateBodyScrollState(); // Update scroll state when modal is hidden
    }
}

// Function to initialize enquiry form modal elements
function initializeEnquiryFormModal() {
    if (!document.getElementById("enquiry-form-modal-container")) {
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
                                <!-- Cart items will be dynamically inserted here -->
                            </ul>
                        </div>
                        <button type="submit" id="enquiry-form-submit-button" class="w-full btn-primary py-3 rounded-lg text-lg font-semibold">Submit Enquiry</button>
                    </form>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML("beforeend", formModalHTML);
    }

    enquiryFormModalContainer = document.getElementById(
        "enquiry-form-modal-container"
    );
    enquiryFormModalCloseButton = document.getElementById(
        "enquiry-form-modal-close-button"
    );
    enquiryFormModalItemsList = document.getElementById(
        "enquiry-form-items-list"
    );
    enquiryFormModalNameInput = document.getElementById("enquiry-name");
    enquiryFormModalEmailInput = document.getElementById("enquiry-email");
    enquiryFormModalPhoneInput = document.getElementById("enquiry-phone"); // Get reference
    enquiryFormModalCompanyInput = document.getElementById("enquiry-company"); // Get reference
    enquiryFormModalSubmitButton = document.getElementById(
        "enquiry-form-submit-button"
    );
    enquiryFormModalForm = document.getElementById("enquiry-form");

    if (enquiryFormModalCloseButton) {
        enquiryFormModalCloseButton.addEventListener("click", hideEnquiryFormModal);
    }
    if (enquiryFormModalContainer) {
        enquiryFormModalContainer.addEventListener("click", (e) => {
            if (e.target === enquiryFormModalContainer) {
                hideEnquiryFormModal();
            }
        });
    }

    if (enquiryFormModalForm) {
        enquiryFormModalForm.addEventListener("submit", handleFormSubmission);
    }
}

function showEnquiryFormModal() {
    if (enquiryFormModalContainer && enquiryFormModalItemsList) {
        enquiryFormModalItemsList.innerHTML = ""; // Clear previous items
        if (data.cart.length === 0) {
            enquiryFormModalItemsList.innerHTML =
                '<li class="text-center">Your enquiry list is empty. Please add items first.</li>';
            enquiryFormModalSubmitButton.disabled = true;
            enquiryFormModalSubmitButton.classList.add(
                "opacity-50",
                "cursor-not-allowed"
            );
        } else {
            data.cart.forEach((item) => {
                const listItem = document.createElement("li");
                listItem.textContent = `${item.name} (ID: ${item.id}), Quantity: ${item.quantity}`;
                enquiryFormModalItemsList.appendChild(listItem);
            });
            enquiryFormModalSubmitButton.disabled = false;
            enquiryFormModalSubmitButton.classList.remove(
                "opacity-50",
                "cursor-not-allowed"
            );
        }
        enquiryFormModalContainer.classList.remove("hidden");
        updateBodyScrollState();
    }
}

function hideEnquiryFormModal() {
    if (enquiryFormModalContainer) {
        enquiryFormModalContainer.classList.add("hidden");
        updateBodyScrollState();
    }
}

function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission

    const name = enquiryFormModalNameInput.value;
    const email = enquiryFormModalEmailInput.value;
    const phone = enquiryFormModalPhoneInput.value; // Get phone number
    const company = enquiryFormModalCompanyInput.value; // Get company name

    if (!name || !email) {
        showGeneralModal("Please fill in both your name and email address.");
        return;
    }

    if (data.cart.length === 0) {
        showGeneralModal(
            "Your enquiry list is empty. Please add items to enquire."
        );
        return;
    }

    // Get current date
    const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    let enquiryDetails = `Dear Indikaara Team,\n\n`;
    enquiryDetails += `I am writing to inquire about the following products from your collection:\n\n`;
    enquiryDetails += `=== Product Details ===\n`;

    data.cart.forEach((item) => {
        enquiryDetails += `Product: ${item.name}\n`;
        enquiryDetails += `Product ID: ${item.id}\n`;
        enquiryDetails += `Quantity Required: ${item.quantity}\n\n`;
    });

    enquiryDetails += `=== Contact Information ===\n`;
    enquiryDetails += `Name: ${name}\n`;
    enquiryDetails += `Email: ${email}\n`;
    if (phone) enquiryDetails += `Phone: ${phone}\n`;
    if (company) enquiryDetails += `Company: ${company}\n\n`;

    enquiryDetails += `I am interested in learning more about:\n`;
    enquiryDetails += `- Pricing details for the selected items\n`;
    enquiryDetails += `- Current availability and lead times\n`;
    enquiryDetails += `- Export procedures and shipping options\n`;
    enquiryDetails += `- Bulk order possibilities\n\n`;

    enquiryDetails += `Looking forward to your response.\n\n`;
    enquiryDetails += `Best regards,\n${name}\n\n`;
    enquiryDetails += `Sent on: ${currentDate}\n`;
    enquiryDetails += `Via: Indikaara Website Enquiry System`;

    // Get total number of items for subject line
    const totalItems = data.cart.reduce((sum, item) => sum + item.quantity, 0);

    // Construct a professional subject line
    const subjectLine = `Product Enquiry - ${totalItems} item${totalItems > 1 ? "s" : ""
        } from ${name}${company ? ` (${company})` : ""}`;

    // Construct the mailto link with formatted subject and body
    const mailtoLink = `mailto:info@indikaara.com?subject=${encodeURIComponent(
        subjectLine
    )}&body=${encodeURIComponent(enquiryDetails)}`;

    try {
        // Open the email client
        window.location.href = mailtoLink;

        // Clear the cart only after email client opens
        setTimeout(() => {
            data.cart.length = 0; // Clear array by setting length to 0
            data.saveCart();
            renderCart(); // Update cart display

            hideEnquiryFormModal(); // Hide the form modal
            showGeneralModal(
                "Your enquiry email has been prepared. Please complete and send it from your email client."
            ); // Show success modal
        }, 1000);
    } catch (error) {
        showGeneralModal(
            "There was an error opening your email client. Please try again or contact us directly at info@indikaara.com"
        );
    }
}

// --- Render Cart (specific to product-detail.html's elements) ---
function renderCart() {
    if (cartItemsContainer) {
        // Ensure cartItemsContainer exists before trying to update it
        cartItemsContainer.innerHTML = "";
        if (data.cart.length === 0) {
            // Use data.cart
            cartItemsContainer.innerHTML =
                '<p class="text-gray-300 text-center py-4">Your enquiry list is empty.</p>';
            // Disable enquire now button if cart is empty
            if (enquireNowButtonCart) {
                enquireNowButtonCart.disabled = true;
                enquireNowButtonCart.classList.add("opacity-50", "cursor-not-allowed");
            }
        } else {
            data.cart.forEach((item) => {
                // Use data.cart
                const cartItemImageUrl =
                    item.image && item.image.length > 0
                        ? item.image[0]
                        : "assets/placeholder.webp";
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
                           <input type="number" value="${item.quantity}" min="1" class="w-16 text-center font-semibold rounded-md border border-gray-600 py-1 bg-gray-800 text-white" style="background-color:#4A2220;">
                            <button class="quantity-change text-lg px-2 text-gray-300 hover:text-white" data-change="1">+</button>
                            <button class="remove-item text-red-400 ml-4 hover:text-red-300 text-2xl">&times;</button>
                        </div>
                    </div>`;
                cartItemsContainer.innerHTML += cartItemHTML;
            });

            // Enable enquire now button if cart has items
            if (enquireNowButtonCart) {
                enquireNowButtonCart.disabled = false;
                enquireNowButtonCart.classList.remove(
                    "opacity-50",
                    "cursor-not-allowed"
                );
            }

            // Attach event listeners after elements are added to the DOM
            cartItemsContainer
                .querySelectorAll(".quantity-change")
                .forEach((button) => {
                    button.addEventListener("click", (event) => {
                        const productId = parseInt(
                            event.target.closest("[data-id]").dataset.id
                        );
                        const change = parseInt(event.target.dataset.change);
                        data.changeQuantity(productId, change); // Use data.changeQuantity
                        renderCart(); // Re-render cart after quantity change
                    });
                });

            cartItemsContainer.querySelectorAll(".remove-item").forEach((button) => {
                button.addEventListener("click", (event) => {
                    const productId = parseInt(
                        event.target.closest("[data-id]").dataset.id
                    );
                    data.removeFromCart(productId); // Use data.removeFromCart
                    renderCart(); // Re-render cart after item removal
                });
            });
        }
        // Add event listeners for quantity input fields
        cartItemsContainer
            .querySelectorAll('input[type="number"]')
            .forEach((input) => {
                input.addEventListener("change", (event) => {
                    const productId = parseInt(
                        event.target.closest("[data-id]").dataset.id
                    );
                    const newQuantity = parseInt(event.target.value);
                    if (newQuantity > 0) {
                        const currentQuantity =
                            data.cart.find((item) => item.id === productId)?.quantity || 0;
                        const change = newQuantity - currentQuantity;
                        data.changeQuantity(productId, change);
                    } else {
                        event.target.value = 1;
                        data.changeQuantity(
                            productId,
                            1 - data.cart.find((item) => item.id === productId)?.quantity
                        );
                    }
                    renderCart();
                });

                // Prevent negative values on input
                input.addEventListener("keypress", (event) => {
                    if (event.key === "-" || event.key === "+" || event.key === "e") {
                        event.preventDefault();
                    }
                });
            });
        data.updateCartInfo(cartCount, cartSubtotal); // Use data.updateCartInfo
    }
}

// Toggle Cart function for product-detail.html
function toggleCart() {
    console.log("toggleCart function called."); // Debug: Confirm toggleCart is executed
    if (cartPanelContainer) {
        cartPanelContainer.classList.toggle("hidden");
        console.log(
            "cartPanelContainer hidden state:",
            cartPanelContainer.classList.contains("hidden")
        ); // Debug: Check hidden class
        if (cartPanel) {
            setTimeout(() => {
                cartPanel.classList.toggle("translate-x-full");
                console.log(
                    "cartPanel translate-x-full state:",
                    cartPanel.classList.contains("translate-x-full")
                ); // Debug: Check translate class
            }, 10);
        }
        updateBodyScrollState(); // Update scroll state when cart is toggled
        renderCart(); // Render cart when panel is toggled
    } else {
        console.error("cartPanelContainer not found in toggleCart!");
    }
}

// --- Product Detail Page Specific Functions ---
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    if (isNaN(productId)) {
        document.getElementById("product-detail-section").innerHTML =
            '<p class="text-center text-red-500 text-xl font-bold">Product not found. <a href="shop.html" class="text-blue-400 hover:underline">Go back to shop</a></p>';
        document.title = "Product Not Found";
        return;
    }

    const loadedProduct = data.allProducts.find((p) => p.id === productId); // Use data.allProducts

    if (loadedProduct) {
        console.log("Found product:", loadedProduct); // Debug 3
        document.title = `${loadedProduct.name} - Indikaara`;

        if (productNameElem) productNameElem.textContent = loadedProduct.name;
        if (productDescriptionElem)
            productDescriptionElem.textContent =
                loadedProduct.description || "No description available.";

        // Correctly target the span elements for product details and log their content
        const productCategorySpan = document.querySelector("#product-category");
        if (productCategorySpan) {
            productCategorySpan.textContent =
                loadedProduct.categoryName.split("_").join(" ") || "N/A";
            console.log("Category span updated to:", productCategorySpan.textContent); // Debug 4
        } else {
            console.error("Error: #product-category span not found!");
        }

        const productManufacturerSpan = document.querySelector(
            "#product-manufacturer"
        );
        if (productManufacturerSpan) {
            productManufacturerSpan.textContent = loadedProduct.manufacturer || "N/A";
            console.log(
                "Manufacturer span updated to:",
                productManufacturerSpan.textContent
            ); // Debug 5
        } else {
            console.error("Error: #product-manufacturer span not found!");
        }

        const productMaterialSpan = document.querySelector("#product-material");
        if (productMaterialSpan) {
            productMaterialSpan.textContent = loadedProduct.material || "N/A";
            console.log("Material span updated to:", productMaterialSpan.textContent); // Debug 6
        } else {
            console.error("Error: #product-material span not found!");
        }

        const productWeavingTechniqueSpan = document.querySelector(
            "#product-weaving-technique"
        );
        if (productWeavingTechniqueSpan) {
            productWeavingTechniqueSpan.textContent =
                loadedProduct.weavingTechnique || "N/A";
            console.log(
                "Weaving Technique span updated to:",
                productWeavingTechniqueSpan.textContent
            ); // Debug 7
        } else {
            console.error("Error: #product-weaving-technique span not found!");
        }

        const productDimensionsAvailableSpan = document.querySelector(
            "#product-dimensions-available"
        );
        if (productDimensionsAvailableSpan) {
            productDimensionsAvailableSpan.textContent =
                loadedProduct.dimensionsAvailable
                    ? loadedProduct.dimensionsAvailable.join(", ")
                    : "N/A";
            console.log(
                "Dimensions span updated to:",
                productDimensionsAvailableSpan.textContent
            ); // Debug 8
        } else {
            console.error("Error: #product-dimensions-available span not found!");
        }

        const productColorSpan = document.querySelector("#product-color");
        if (productColorSpan) {
            productColorSpan.textContent = loadedProduct.color
                ? loadedProduct.color.join(", ")
                : "N/A";
            console.log("Color span updated to:", productColorSpan.textContent); // Debug 9
        } else {
            console.error("Error: #product-color span not found!");
        }

        if (productStoryElem)
            productStoryElem.textContent =
                loadedProduct.story || "No specific story available.";
        if (loadedProduct.story === null) {
            ourStorySection.style.display = "none";
        }
        if (loadedProduct.details && productDetailsListElem) {
            productDetailsListElem.innerHTML = loadedProduct.details
                .map((detail) => `<li>${detail}</li>`)
                .join("");
        } else if (productDetailsListElem) {
            productDetailsListElem.innerHTML =
                "<li>No specific additional details.</li>";
        }

        // Set up image navigation
        let currentImageIndex = 0;
        const images = loadedProduct.image || [];

        const prevButton = document.getElementById("prev-image-button");
        const nextButton = document.getElementById("next-image-button");

        function updateMainImage() {
            if (images.length > 0) {
                mainProductImage.src = images[currentImageIndex];
                mainProductImage.alt = loadedProduct.name;
            } else {
                mainProductImage.src = "assets/placeholder.webp";
                mainProductImage.alt = loadedProduct.name;
            }
            // Hide or show navigation buttons based on image count
            if (prevButton) prevButton.style.display = loadedProduct.image.length > 1 ? "block" : "none";
            if (nextButton) nextButton.style.display = loadedProduct.image.length > 1 ? "block" : "none";
        }

        if (prevButton) {
            prevButton.addEventListener("click", () => {
                if (images.length > 1) {
                    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                    updateMainImage();
                }
            });
        }

        if (nextButton) {
            nextButton.addEventListener("click", () => {
                if (images.length > 1) {
                    currentImageIndex = (currentImageIndex + 1) % images.length;
                    updateMainImage();
                }
            });
        }

        // Initialize the main image and button visibility
        updateMainImage();

        // Setup Add to Enquiry Button
        if (addToEnquiryButton) {
            if (loadedProduct.stock <= 0) {
                addToEnquiryButton.textContent = "Not Available for Enquiry";
                addToEnquiryButton.disabled = true;
                addToEnquiryButton.classList.add("opacity-50", "cursor-not-allowed");
            } else {
                addToEnquiryButton.textContent = "Add to Enquiry List";
                addToEnquiryButton.disabled = false;
                addToEnquiryButton.classList.remove("opacity-50", "cursor-not-allowed");
                // Use shared addToEnquiryList function, pass loadedProduct.id
                addToEnquiryButton.addEventListener("click", () => {
                    data.addToEnquiryList(loadedProduct.id, 1); // Use data.addToEnquiryList
                    renderCart(); // Update local cart display after adding
                });
            }
        }
    } else {
        document.getElementById("product-detail-section").innerHTML =
            '<p class="text-center text-red-500 text-xl font-bold">Product with ID ' +
            productId +
            ' not found. <a href="shop.html" class="text-blue-400 hover:underline">Go back to shop</a></p>';
        document.title = "Product Not Found";
    }
}

// Event Listeners for Product Detail Page
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded fired in product-detail.js"); // Debug: Confirm DOM ready
    initializeGeneralModal(); // Initialize general modal elements
    initializeEnquiryFormModal(); // Initialize enquiry form modal elements

    renderCart(); // Initial render of cart state for this page

    if (
        cartButton &&
        closeCartButton &&
        cartPanelContainer &&
        enquireNowButtonCart
    ) {
        console.log("Attaching cart panel event listeners."); // Debug: Confirm listeners are attached
        cartButton.addEventListener("click", toggleCart);
        closeCartButton.addEventListener("click", toggleCart);
        cartPanelContainer.addEventListener("click", (e) => {
            if (e.target === cartPanelContainer) {
                toggleCart();
            }
        });
        // Modified: "Enquire Now" button now opens the enquiry form modal
        enquireNowButtonCart.addEventListener("click", showEnquiryFormModal);
    } else {
        console.error(
            "One or more essential cart elements not found for event listeners:",
            { cartButton, closeCartButton, cartPanelContainer, enquireNowButtonCart }
        );
    }

    if (mobileMenuButtonDetail && mobileMenuDetail) {
        mobileMenuButtonDetail.addEventListener("click", () => {
            mobileMenuDetail.classList.toggle("hidden");
        });
        mobileMenuDetail.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenuDetail.classList.add("hidden");
            });
        });
    }

    // Only load product details if on product-detail.html
    if (window.location.pathname.includes("product-detail.html")) {
        loadProductDetails();
    }

    // Listen for custom events from data.js and show general modal
    document.addEventListener("productAddedToEnquiry", (event) => {
        showGeneralModal(
            `${event.detail.productName} has been added to your enquiry list!`
        );
    });

    document.addEventListener("productEnquiryError", (event) => {
        showGeneralModal(`Error: ${event.detail.message}`);
    });

    document.addEventListener("enquiryListEmpty", (event) => {
        showGeneralModal(event.detail.message);
    });

    document.addEventListener("enquiryEmailPrepared", (event) => {
        showGeneralModal(event.detail.message);
    });

    document.addEventListener("productQuantityChanged", () => {
        renderCart(); // Re-render cart when quantity changes
    });

    document.addEventListener("productRemovedFromEnquiry", () => {
        renderCart(); // Re-render cart when item is removed
    });
});
// JavaScript for Navbar Transparency on Scroll/Hover
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("main-header"); // Assuming your header has id="main-header"

    if (navbar) {
        // Function to update navbar state
        function updateNavbarState() {
            if (window.scrollY > 50 || navbar.matches(":hover")) {
                navbar.classList.remove("transparent");
                navbar.classList.add("scrolled"); // Use 'scrolled' class for both scrolled and hovered visible state
            } else {
                navbar.classList.add("transparent");
                navbar.classList.remove("scrolled");
            }
        }

        // Initial check for scroll position on load
        updateNavbarState();

        // Event listener for scroll
        window.addEventListener("scroll", updateNavbarState);

        // Event listener for hover (mouse enter/leave)
        navbar.addEventListener("mouseenter", updateNavbarState);
        navbar.addEventListener("mouseleave", updateNavbarState);
    }
});
