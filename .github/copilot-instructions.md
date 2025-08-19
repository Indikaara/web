# Indikaara Website - AI Coding Agent Instructions

## Project Overview

This is a luxury handcrafted rug and home décor website for **Indikaara**, an Indian export company specializing in premium rugs, wall hangings, and vintage home décor items. The site emphasizes high-quality craftsmanship, artisan stories, and elegant presentation with Apple-inspired design aesthetics.

### Tech Stack
- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Animation**: GSAP 3.13.0 with TextPlugin
- **Fonts**: Inter (primary), Great Vibes (script), Playfair Display (display)
- **Architecture**: Static site with modular JavaScript imports
- **Deployment**: GitHub Pages compatible

## Brand Identity & Design System

### Core Color Palette
- **Primary Brand**: `#331211` (dark brown - main background and brand color)
- **Accent Red**: `#AC1F23` (call-to-action buttons and highlights)
- **Secondary Gold**: `#DDB386` (hover states and premium touches)
- **Text**: White primary, `#gray-300` secondary on dark backgrounds

### Typography Hierarchy
```css
.font-display { font-family: "Playfair Display", serif; } /* Headings */
.font-calligraphy { font-family: "Great Vibes", cursive; } /* Decorative */
/* Default body: Inter sans-serif */
```

### Button Patterns
```css
.btn-primary {
  background-color: #AC1F23; /* Red primary */
  color: white;
  /* Hover: #DDB386 (gold) with transform and shadow */
}
```

## Critical Architecture Patterns

### 1. GSAP Brand Name Animation System
**Every page MUST include this exact pattern:**

```html
<!-- In <head> -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/TextPlugin.min.js"></script>

<!-- In header -->
<span class="brand-name">Indikaara</span>

<!-- Before closing </body> -->
<script>
document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(TextPlugin);
    const names = [
        'इंडिकारा', // Hindi
        'Indikaara' // English fallback
    ];
    let i = 0;
    const brandEl = document.querySelector('.brand-name');
    if (!brandEl) {
        console.error('No element with class .brand-name found');
        return;
    }
    function animateBrandName() {
        gsap.to(brandEl, {
            duration: 0.4, x: 60, opacity: 0, ease: 'power1.in', 
            onComplete: function () {
                if (i === names.length - 1) {
                    brandEl.innerHTML = '<img src="assets/Png-04.png" alt="Indikaara Logo" style="height:1.7em;vertical-align:middle;display:inline-block;">';
                } else {
                    brandEl.textContent = names[i];
                }
                gsap.fromTo(brandEl, { x: -60, opacity: 0 }, { duration: 0.4, x: 0, opacity: 1, ease: 'power1.out' });
            }
        });
        i = (i + 1) % names.length;
        setTimeout(animateBrandName, 2000);
    }
    animateBrandName();
});
</script>

### 2. Standard Header Pattern
**Required structure for all pages:**

```html
<header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#331211] shadow-lg group">
    <div class="container mx-auto px-6 h-16 flex justify-between items-center text-sm">
        <a href="index.html" class="flex items-center">
            <img src="assets/logo2.png" alt="Indikaara - From Kala to Karya" class="h-[3.3rem]">
            <span class="brand-name">Indikaara</span>
        </a>
        
        <nav class="hidden md:flex items-center space-x-8">
            <!-- Navigation with active states -->
            <a href="category-select.html" class="text-gray-300 hover:text-white transition-colors relative group">
                Our Collections
                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <!-- Repeat pattern for: Craftsmanship, Global Reach, Reviews -->
        </nav>
        
        <div class="flex items-center">
            <!-- Cart button for shop pages, Shop button for content pages -->
            <button id="mobile-menu-button" class="md:hidden text-white ml-4 focus:outline-none">
                <!-- Hamburger SVG -->
            </button>
        </div>
    </div>
    
    <!-- Mobile menu with same navigation structure -->
</header>
```

### 3. Navigation Active States
**Mark current page with active styling:**
- Current page: `text-white font-semibold` or `text-white` 
- Other pages: `text-gray-300 hover:text-white transition-colors`
- Underline effect: `scale-x-100` for active, `scale-x-0 group-hover:scale-x-100` for others

### 4. Favicon Implementation
**Every page requires:**
```html
<link rel="icon" href="assets/Jpeg-01.jpg" type="image/jpg" />
```

### 5. Footer Structure Pattern
**Consistent footer across all pages:**

```html
<footer class="bg-gray-900 text-gray-400 text-xs py-12">
    <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
                <h4 class="font-semibold text-white mb-3">Our Products</h4>
                <ul>
                    <li class="mb-2"><a href="category-select.html" class="hover:text-white transition-colors">All Collections</a></li>
                    <li class="mb-2"><a href="shop.html?category=Rugs" class="hover:text-white transition-colors">Rugs</a></li>
                    <li class="mb-2"><a href="shop.html?category=Wall_Hanging" class="hover:text-white transition-colors">Wall Hanging</a></li>
                    <li class="mb-2"><a href="shop.html?category=Home_Decor" class="hover:text-white transition-colors">Home Decor</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold text-white mb-3">About Indikaara</h4>
                <ul>
                    <li class="mb-2"><a href="blogspot.html" class="hover:text-white transition-colors">Blogs</a></li>
                    <li class="mb-2"><a href="index.html#our-story" class="hover:text-white transition-colors">Our Story</a></li>
                    <li class="mb-2"><a href="craftsmanship.html" class="hover:text-white transition-colors">Craftsmanship</a></li>
                    <li class="mb-2"><a href="global-reach.html" class="hover:text-white transition-colors">Global Reach</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold text-white mb-3">Support</h4>
                <ul>
                    <li class="mb-2"><a href="contact.html" class="hover:text-white transition-colors">Contact Us</a></li>
                    <li class="mb-2"><a href="faq.html" class="hover:text-white transition-colors">FAQ</a></li>
                </ul>
            </div>
            <!-- Social media and newsletter sections... -->
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
            <p>Copyright &copy; 2025 Indikaara Inc. All rights reserved.</p>
        </div>
    </div>
</footer>
```

## Product Data Architecture

### Data Structure Location
- **Primary Data**: `data/data.js` - exports `rawProductData` and `allProducts`
- **Categories**: Rugs, Wall_Hanging, Home_Decor (underscore format for URLs)
- **JavaScript Imports**: Use ES6 modules: `import * as data from '../data/data.js'`

### Product Object Schema
```javascript
{
  id: 10001, // Unique identifier
  name: "Product Name",
  price: 391230, // Number in INR, null for "Price on Request"
  image: ["path1.jpg", "path2.jpg"], // Array of image paths
  description: "Brief description",
  story: "Longer narrative about the product",
  dimensionsAvailable: ["8x10 ft", "Custom sizes"],
  details: ["Use: Indoor only", "Made in India"],
  color: ["brown", "grey"],
  weavingTechnique: "Hand Tufted",
  material: "100% Cotton",
  manufacturer: "Mirzapur Rugs",
  tags: ["abstract", "modern"],
  SKU: "2023071187"
}
```

### Cart/Enquiry System
- **Storage**: localStorage as "indikaaraCart"
- **Concept**: "Add to Enquiry List" instead of traditional cart
- **Functions**: `addToEnquiryList()`, `removeFromCart()`, `updateCartInfo()`

## Page-Specific Patterns

### E-commerce Pages (shop.html, product-detail.html, category-select.html)
- **Cart Button**: "Enquiry Cart" with count badge
- **Mobile Menu**: `mobile-menu-button-shop` and `mobile-menu-shop` IDs
- **JavaScript**: Page-specific JS files that import from `data/data.js`

### Content Pages (index.html, contact.html, faq.html, etc.)
- **CTA Button**: "Shop" button linking to `category-select.html`
- **Mobile Menu**: `mobile-menu-button` and `mobile-menu` IDs
- **Scroll Animations**: `.animate-on-scroll` class with Intersection Observer

### Blog System
- **List Page**: `blogspot.html` with card layout
- **Detail Pages**: `blog-[slug].html` format with "Read More" linking
- **Theme Consistency**: Same header/footer pattern

## Animation & Interaction Patterns

### Scroll Animations
```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Hover Effects
- **Navigation**: Underline scaling effect
- **Buttons**: Color change + transform + shadow
- **Cards**: `hover:scale-105` transform
- **Header**: Background transparency on scroll/hover

## File Organization Standards

### Directory Structure
```
web/
├── assets/          # Images, videos, fonts
│   ├── products/    # Product images by category
│   ├── favicons/    # Favicon variants
│   └── fonts/       # Custom fonts
├── css/             # Stylesheets
├── js/              # JavaScript modules
├── data/            # Product data
└── *.html           # Pages at root level
```

### Asset Path Convention
- **Always use relative paths**: `assets/image.jpg` (no leading slash)
- **Product images**: Organized by category structure
- **Consistent naming**: kebab-case for files

## Mobile Responsiveness Requirements

### Breakpoints
- **Mobile**: Default styles
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` and `xl:` prefixes

### Mobile-Specific Elements
- **Hamburger Menu**: Required for all pages
- **Touch-Friendly**: Minimum 44px touch targets
- **Typography**: Responsive text sizing with `text-4xl md:text-7xl` patterns

## SEO & Performance

### Meta Requirements
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Page Title - Indikaara</title>
<!-- Add page-specific meta descriptions -->
```

### Image Optimization
- **Lazy Loading**: `loading="lazy"` except hero images (`loading="eager"`)
- **Alt Text**: Descriptive alt attributes for all images
- **Format**: WebP preferred, JPG/PNG fallback

## Content Guidelines

### Tone & Voice
- **Luxury Focus**: Emphasize craftsmanship, heritage, artisan stories
- **Global Appeal**: UK, Europe, and Gulf region targeting
- **Quality Emphasis**: "Handcrafted", "Premium", "Artisan-made"

### Content Hierarchy
1. **Hero**: Large, impactful headlines with clear CTAs
2. **Features**: Product/service highlights with visual support
3. **Social Proof**: Reviews, testimonials, artisan stories
4. **Footer**: Comprehensive navigation and contact info

## Critical Don'ts

❌ **Never modify the GSAP animation without the exact script structure**
❌ **Don't change the color scheme without updating all related classes**
❌ **Avoid breaking the mobile menu ID patterns**
❌ **Never remove the favicon link**
❌ **Don't add pages without consistent header/footer/navigation**
❌ **Avoid non-relative asset paths**
❌ **Don't break the modular JavaScript import system**

## Testing Checklist

Before deploying any changes:
- [ ] GSAP brand animation cycles properly through all languages
- [ ] Mobile menu toggles correctly on all pages
- [ ] Navigation active states reflect current page
- [ ] All images load with correct paths
- [ ] Cart/enquiry functionality works (where applicable)
- [ ] Footer links navigate correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Theme colors and fonts are consistent

## Emergency Patterns

If GSAP animation breaks, ensure:
1. `.brand-name` element exists in header
2. GSAP CDN links are included
3. Script runs after DOM content loaded
4. No JavaScript errors in console

If navigation breaks, verify:
1. Correct ID patterns for mobile menus
2. Active state classes match current page
3. All href attributes point to existing pages

This guide ensures consistent, maintainable development while preserving the site's premium brand identity and technical architecture.
