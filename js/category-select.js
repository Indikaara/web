import { rawProductData } from '../data/data.js';

const categoryGrid = document.getElementById('category-grid');

function slugify(str) {
  return str.replace(/\s+/g, '%20');
}

function getCategoryImage(category) {
  // You can customize this mapping as needed
  if (category === 'Rugs') return 'assets/category-rugs.png';
  if (category === 'Home Decor') return 'assets/category-home-decor.png';
  if (category === 'Handcrafted Items') return 'assets/category-handcrafted.png';
  return 'assets/category-default.png';
}

function renderCategories() {
  categoryGrid.innerHTML = '';
  rawProductData.products.forEach(cat => {
    const card = document.createElement('a');
    card.href = `shop.html?category=${slugify(cat.category)}`;
    card.className = `category-card block p-8 rounded-2xl shadow-lg text-center text-white text-2xl font-semibold transition-transform hover:scale-105 hover:bg-[#AC1F23] relative overflow-hidden`;
    card.style.backgroundImage = `url('${getCategoryImage(cat.category)}')`;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';
    card.innerHTML = `<span class="relative z-10">${cat.category}</span>`;
    // Overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(51, 18, 17, 0.6)';
    overlay.style.borderRadius = 'inherit';
    overlay.style.zIndex = '1';
    card.appendChild(overlay);
    categoryGrid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderCategories); 