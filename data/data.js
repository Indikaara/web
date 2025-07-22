// web/data/data.js - Shared product data and processing, and cart/enquiry logic

export const rawProductData = {
    products: [
        {
            category: "rugs",
            categoryId: 10000,
            items: [
                {
                    id: 10001,
                    name: "APIYA",
                    price: 391230,
                    priceRange: null,
                    image: [
                        "assets/products/rugs/mirzapur_rugs/apiya/1.webp",
                        "assets/products/rugs/mirzapur_rugs/apiya/2.webp",
                        "assets/products/rugs/mirzapur_rugs/apiya/3.webp",
                        "assets/products/rugs/mirzapur_rugs/apiya/4.webp",
                        "assets/products/rugs/mirzapur_rugs/apiya/5.webp"
                    ],
                    story:
                        "Introducing our exquisite hand-knotted carpets, where craftsmanship meets luxury. Each carpet is meticulously woven by skilled artisans using traditional techniques passed down through generations, resulting in a masterpiece of beauty and quality. Made from premium materials such as wool, silk, and cotton, our hand-knotted carpets boast unparalleled softness, durability, and intricate detail. Whether adorning your living room, bedroom, or office, these carpets add a touch of elegance and sophistication to any space. Elevate your decor with the timeless allure of our hand-knotted carpets, where every thread tells a story of artistry and tradition.",
                    description:
                        "Introducing our hand-knotted carpets. Crafted by skilled artisans using traditional techniques, they offer unparalleled softness, durability, and intricate detail. Add elegance to any space with our luxurious carpets.",
                    dimensionsAvailable: ["9 x 12 ft"],
                    details: ['Use : Indoor use only', 'Pile Height : 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    color: ["Grey-Rust"],
                    weavingTechnique: "Handwoven",
                    material: "Wool & Bamboo Silk ",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['abstract', 'Modern']
                },
                {
                    id: 10002,
                    name: "AMBROSIA",
                    price: 289800,
                    priceRange: null,
                    image: [
                        "assets/products/rugs/mirzapur_rugs/ambrosia/1.webp",
                        "assets/products/rugs/mirzapur_rugs/ambrosia/2.webp",
                        "assets/products/rugs/mirzapur_rugs/ambrosia/3.webp"
                    ],
                    story:
                        "Introducing our exquisite hand-knotted carpets, where craftsmanship meets luxury. Each carpet is meticulously woven by skilled artisans using traditional techniques passed down through generations, resulting in a masterpiece of beauty and quality. Made from premium materials such as wool, silk, and cotton, our hand-knotted carpets boast unparalleled softness, durability, and intricate detail. Whether adorning your living room, bedroom, or office, these carpets add a touch of elegance and sophistication to any space. Elevate your decor with the timeless allure of our hand-knotted carpets, where every thread tells a story of artistry and tradition.",
                    description:
                        "Introducing our hand-knotted carpets. Crafted by skilled artisans using traditional techniques, they offer unparalleled softness, durability, and intricate detail. Add elegance to any space with our luxurious carpets.",
                    details: ['Use : Indoor use only', 'Pile Height : 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["8 x 10 ft"],
                    color: ["multi"],
                    weavingTechnique: "Hand Knotted",
                    material: "New Zealand Wool",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['abstract']
                },
                {
                    id: 10003,
                    name: "ASTARA",
                    price: null,
                    priceRange: '₹42,525.00 to ₹99,225.00',
                    image: [
                        "assets/products/rugs/mirzapur_rugs/astara/1.webp",
                        "assets/products/rugs/mirzapur_rugs/astara/2.webp"
                    ],
                    story:
                        "Introducing our exquisite hand-knotted carpets, where craftsmanship meets luxury. Each carpet is meticulously woven by skilled artisans using traditional techniques passed down through generations, resulting in a masterpiece of beauty and quality. Made from premium materials such as wool, silk, and cotton, our hand-knotted carpets boast unparalleled softness, durability, and intricate detail. Whether adorning your living room, bedroom, or office, these carpets add a touch of elegance and sophistication to any space. Elevate your decor with the timeless allure of our hand-knotted carpets, where every thread tells a story of artistry and tradition.",
                    description:
                        "Introducing our hand-knotted carpets. Crafted by skilled artisans using traditional techniques, they offer unparalleled softness, durability, and intricate detail. Add elegance to any space with our luxurious carpets.",
                    details: ['Use : Indoor use only', 'Pile Height : 6 - 8 MM 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["2.6 x 6 ft", "4 x 6 ft", "5 x 7 ft"],
                    color: ["grey"],
                    weavingTechnique: "Hand Knotted",
                    material: "Wool & Bamboo Silk ",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['abstract']
                },
                {
                    id: 10004,
                    name: "AURORA",
                    price: 169352,
                    priceRange: null,
                    image: [
                        "assets/products/rugs/mirzapur_rugs/aurora/1.webp",
                        "assets/products/rugs/mirzapur_rugs/aurora/2.webp",
                        "assets/products/rugs/mirzapur_rugs/aurora/3.webp"
                    ],
                    story:
                        "Introducing our exquisite hand-knotted carpets, where craftsmanship meets luxury. Each carpet is meticulously woven by skilled artisans using traditional techniques passed down through generations, resulting in a masterpiece of beauty and quality. Made from premium materials such as wool, silk, and cotton, our hand-knotted carpets boast unparalleled softness, durability, and intricate detail. Whether adorning your living room, bedroom, or office, these carpets add a touch of elegance and sophistication to any space. Elevate your decor with the timeless allure of our hand-knotted carpets, where every thread tells a story of artistry and tradition.",
                    description:
                        "Introducing our hand-knotted carpets. Crafted by skilled artisans using traditional techniques, they offer unparalleled softness, durability, and intricate detail. Add elegance to any space with our luxurious carpets.",
                    details: ['Use : Indoor use only', 'Pile Height : 6 - 8 MM 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["5.6 x 8.6 ft"],
                    color: ["multi"],
                    weavingTechnique: "Hand Knotted",
                    material: "Wool & Tencel",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['abstract', 'modern']
                },
                {
                    id: 10005,
                    name: "PORAL",
                    price: 201600,
                    priceRange: null,
                    image: [
                        "assets/products/rugs/mirzapur_rugs/poral/1.jpg",
                        "assets/products/rugs/mirzapur_rugs/poral/2.jpg",
                    ],
                    story:
                        "Introducing our exquisite hand-knotted carpets, where craftsmanship meets luxury. Each carpet is meticulously woven by skilled artisans using traditional techniques passed down through generations, resulting in a masterpiece of beauty and quality. Made from premium materials such as wool, silk, and cotton, our hand-knotted carpets boast unparalleled softness, durability, and intricate detail. Whether adorning your living room, bedroom, or office, these carpets add a touch of elegance and sophistication to any space. Elevate your decor with the timeless allure of our hand-knotted carpets, where every thread tells a story of artistry and tradition.",
                    description:
                        "Introducing our hand-knotted carpets. Crafted by skilled artisans using traditional techniques, they offer unparalleled softness, durability, and intricate detail. Add elegance to any space with our luxurious carpets.",
                    details: ['Use : Indoor use only', 'Pile Height : 6 - 8 MM 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["5 x 8 ft"],
                    color: ["green multi"],
                    weavingTechnique: "Hand Knotted",
                    material: "Handspun Wool & Tencel",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['Shape Rugs']
                },
                {
                    id: 10006,
                    name: "AMRITA",
                    price: null,
                    priceRange: '₹75,600.00 – ₹340,200.00',
                    image: [
                        "assets/products/rugs/mirzapur_rugs/amrita/1.webp",
                        "assets/products/rugs/mirzapur_rugs/amrita/2.webp",
                        "assets/products/rugs/mirzapur_rugs/amrita/3.webp",
                        "assets/products/rugs/mirzapur_rugs/amrita/4.webp",
                    ],
                    story:
                        "Introducing our exquisite hand-knotted carpets, where craftsmanship meets luxury. Each carpet is meticulously woven by skilled artisans using traditional techniques passed down through generations, resulting in a masterpiece of beauty and quality. Made from premium materials such as wool, silk, and cotton, our hand-knotted carpets boast unparalleled softness, durability, and intricate detail. Whether adorning your living room, bedroom, or office, these carpets add a touch of elegance and sophistication to any space. Elevate your decor with the timeless allure of our hand-knotted carpets, where every thread tells a story of artistry and tradition.",
                    description:
                        "Introducing our Tibetan knotted carpets, where Himalayan tradition meets contemporary design. Each carpet is meticulously handcrafted by skilled artisans in the foothills of the Himalayas, using time-honored techniques passed down through generations. Made from the finest Tibetan wool and silk, these carpets boast luxurious softness, exceptional durability, and exquisite detailing. The intricate patterns and vibrant colors reflect the cultural richness of the region, adding a touch of elegance and sophistication to your space. Elevate your interior with the unparalleled beauty and craftsmanship of our Tibetan knotted carpets, and experience the artistry of the Himalayas in every thread.",
                    details: ['Use : Indoor use only', 'Pile Height : 12-14 mm 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["4 x 6 ft", "8 x 10 ft", "9 x 12 ft"],
                    color: ["black"],
                    weavingTechnique: "Tibetan Knotted",
                    material: "100% Wool",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['Uncategorized']
                },
                {
                    id: 10007,
                    name: "ARAK",
                    price: null,
                    priceRange: '₹90,038.00 – ₹205,800.00',
                    image: [
                        "assets/products/rugs/mirzapur_rugs/arak/1.webp",
                        "assets/products/rugs/mirzapur_rugs/arak/2.webp",
                        "assets/products/rugs/mirzapur_rugs/arak/3.webp",
                        "assets/products/rugs/mirzapur_rugs/arak/4.webp",
                    ],
                    story:
                        "Introducing our exquisite hand-knotted carpets, where craftsmanship meets luxury. Each carpet is meticulously woven by skilled artisans using traditional techniques passed down through generations, resulting in a masterpiece of beauty and quality. Made from premium materials such as wool, silk, and cotton, our hand-knotted carpets boast unparalleled softness, durability, and intricate detail. Whether adorning your living room, bedroom, or office, these carpets add a touch of elegance and sophistication to any space. Elevate your decor with the timeless allure of our hand-knotted carpets, where every thread tells a story of artistry and tradition.",
                    description:
                        "Introducing our exquisite hand-knotted carpets. Crafted by skilled artisans using premium materials, they offer unmatched softness, durability, and elegance. Elevate your decor with timeless luxury.",
                    details: ['Use : Indoor use only', 'Pile Height : 12-14 mm 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["5 x 7  ft"],
                    color: ["navy"],
                    weavingTechnique: "Hand Knotted",
                    material: "Wool & Bamboo Silk",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['Uncategorized']
                },
                {
                    id: 10008,
                    name: "PAINTA",
                    price: 105000,
                    priceRange: null,
                    image: [
                        "assets/products/rugs/mirzapur_rugs/painta/1.webp",
                        "assets/products/rugs/mirzapur_rugs/painta/2.webp",
                        "assets/products/rugs/mirzapur_rugs/painta/3.webp",
                        "assets/products/rugs/mirzapur_rugs/painta/4.webp",
                    ],
                    story:
                        "Introducing our hand-tufted carpet, meticulously crafted with precision and care to bring elegance and comfort to your space. Made from luxurious materials, each rug is expertly placed to create a plush and durable surface that enhances your room. Whether you’re looking to add warmth to your living room or sophistication to your office, our hand-tufted carpet is the perfect choice. Experience the perfect blend of style and quality with our exquisite hand-tufted carpet collection.",
                    description:
                        "Introducing our hand-tufted carpet. Crafted with precision from luxurious materials, it offers a plush, durable surface. Perfect for adding elegance to any room. Experience quality and style.",
                    details: ['Use : Indoor use only', 'Pile Height : 12-14 mm 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["8 X 10  ft"],
                    color: ["Sand-Indigo"],
                    weavingTechnique: "Hand Tufted",
                    material: "100% Tencel",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['Uncategorized']
                },
                {
                    id: 10009,
                    name: "VOLCANO",
                    price: 105000,
                    priceRange: null,
                    image: [
                        "assets/products/rugs/mirzapur_rugs/volcano/1.webp",
                        "assets/products/rugs/mirzapur_rugs/volcano/2.webp",
                        "assets/products/rugs/mirzapur_rugs/volcano/3.webp",
                        "assets/products/rugs/mirzapur_rugs/volcano/4.webp",
                    ],
                    story:
                        "Introducing our hand-tufted carpet, meticulously crafted with precision and care to bring elegance and comfort to your space. Made from luxurious materials, each rug is expertly placed to create a plush and durable surface that enhances your room. Whether you’re looking to add warmth to your living room or sophistication to your office, our hand-tufted carpet is the perfect choice. Experience the perfect blend of style and quality with our exquisite hand-tufted carpet collection.",
                    description:
                        "Introducing our hand-tufted carpet. Crafted with precision from luxurious materials, it offers a plush, durable surface. Perfect for adding elegance to any room. Experience quality and style.",
                    details: ['Use : Indoor use only', 'Pile Height : 12 - 14 MM 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["8 X 10  ft"],
                    color: ["Black"],
                    weavingTechnique: "Hand Tufted",
                    material: "NZ Wool & Tencel",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['Uncategorized']
                },
                {
                    id: 10010,
                    name: "NICO",
                    price: 33075,
                    priceRange: null,
                    image: [
                        "assets/products/rugs/mirzapur_rugs/nico/1.webp",
                        "assets/products/rugs/mirzapur_rugs/nico/2.webp",
                        "assets/products/rugs/mirzapur_rugs/nico/3.webp",
                        "assets/products/rugs/mirzapur_rugs/nico/4.webp",
                    ],
                    story:
                        "Introducing our hand-tufted carpet, meticulously crafted with precision and care to bring elegance and comfort to your space. Made from luxurious materials, each rug is expertly placed to create a plush and durable surface that enhances your room. Whether you’re looking to add warmth to your living room or sophistication to your office, our hand-tufted carpet is the perfect choice. Experience the perfect blend of style and quality with our exquisite hand-tufted carpet collection.",
                    description:
                        "Introducing our hand-tufted carpet. Crafted with precision from luxurious materials, it offers a plush, durable surface. Perfect for adding elegance to any room. Experience quality and style.",
                    details: ['Use : Indoor use only', 'Pile Height : 12 - 14 MM 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["5 X 7  ft"],
                    color: ["Mist"],
                    weavingTechnique: "Hand Tufted",
                    material: "Wool",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['Uncategorized']
                },
                {
                    id: 10011,
                    name: "OMARA",
                    price: null,
                    priceRange: '₹153,090.000.00',
                    image: [
                        "assets/products/rugs/mirzapur_rugs/omara/1.webp",
                        "assets/products/rugs/mirzapur_rugs/omara/2.webp",
                        "asset/rugs/mirzapur_rugs/omara/3.webp",
                        "assets/products/rugs/mirzapur_rugs/omara/4.webp",
                    ],
                    story:
                        "Introducing our exquisiotted carpets, where craftsmanhip meets luxury. Each carpet is meticulously woven by skilled artisans using traditional techniques passed down through generations, resulting in a masterpiece of beauty and quality. Made from premium materials such as wool, silk, and cotton, our hand-knotted carpets boast unparalleled softness, durability, and intricate detail. Whether adorning your living room, bedroom, or office, these carpets add a touch of elegance and sophistication to any space. Elevate your decor with the timeless allure of our hand-knotted carpets, where every thread tells a story of artistry and tradition.",
                    description:
                        "Introducing our hand-knotted carpets. Crafted by skilled artisans using traditional techniques, they offer unparalleled softness, durability, and intricate detail. Add elegance to any space with our luxurious carpets.",
                    details: ['Use : Indoor use only', 'Pile Height : 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["6 x 9 ft", "8 x 10 ft", "9 x 12 ft"],
                    color: ["Charcoal"],
                    weavingTechnique: "Hand Knotted",
                    material: "Wool & Bamboo Silk",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['abstract', 'Uncategorized']
                },
                {
                    id: 10012,
                    name: "DIAMOND",
                    price: null,
                    priceRange: '₹22,680.00 – ₹51,030.00',
                    image: [
                        "assets/products/rugs/mirzapur_rugs/diamond/1.webp",
                        "assets/products/rugs/mirzapur_rugs/diamond/2.webp",
                        "assets/products/rugs/mirzapur_rugs/diamond/3.webp",
                        "assets/products/rugs/mirzapur_rugs/diamond/4.webp",
                    ],
                    story:
                        "Introducing our hand-tufted carpet, meticulously crafted with precision and care to bring elegance and comfort to your space. Made from luxurious materials, each rug is expertly placed to create a plush and durable surface that enhances your room. Whether you’re looking to add warmth to your living room or sophistication to your office, our hand-tufted carpet is the perfect choice. Experience the perfect blend of style and quality with our exquisite hand-tufted carpet collection.",
                    description:
                        "Introducing our hand-tufted carpet, crafted for elegance and comfort. Made from luxurious materials for a plush, durable surface. Perfect for adding warmth or sophistication to any room. Experience style and quality with our exquisite collection.",
                    details: ['Use : Indoor use only', 'Pile Height : 12 - 14 MM 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["4 x 6 ft", "5 x 7 ft", "6 x 9 ft"],
                    color: ["Ivory"],
                    weavingTechnique: "Hand Tufted",
                    material: "Wool & Viscose",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['abstract', 'Modern']
                },
                {
                    id: 10012,
                    name: "DIAMOND",
                    price: null,
                    priceRange: '₹22,680.00 – ₹51,030.00',
                    image: [
                        "assets/products/rugs/mirzapur_rugs/diamond/1.webp",
                        "assets/products/rugs/mirzapur_rugs/diamond/2.webp",
                        "assets/products/rugs/mirzapur_rugs/diamond/3.webp",
                        "assets/products/rugs/mirzapur_rugs/diamond/4.webp",
                    ],
                    story:
                        "Introducing our hand-tufted carpet, meticulously crafted with precision and care to bring elegance and comfort to your space. Made from luxurious materials, each rug is expertly placed to create a plush and durable surface that enhances your room. Whether you’re looking to add warmth to your living room or sophistication to your office, our hand-tufted carpet is the perfect choice. Experience the perfect blend of style and quality with our exquisite hand-tufted carpet collection.",
                    description:
                        "Introducing our hand-tufted carpet, crafted for elegance and comfort. Made from luxurious materials for a plush, durable surface. Perfect for adding warmth or sophistication to any room. Experience style and quality with our exquisite collection.",
                    details: ['Use : Indoor use only', 'Pile Height : 12 - 14 MM 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["4 x 6 ft", "5 x 7 ft", "6 x 9 ft"],
                    color: ["Ivory"],
                    weavingTechnique: "Hand Tufted",
                    material: "Wool & Viscose",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['abstract', 'Modern']
                },
                {
                    id: 10013,
                    name: "DOYAN",
                    price: 192780,
                    priceRange: null,
                    image: [
                        "assets/products/rugs/mirzapur_rugs/doyan/1.webp",
                        "assets/products/rugs/mirzapur_rugs/doyan/2.webp",
                    ],
                    story:
                        "Introducing our exquisite hand-knotted carpets, where craftsmanship meets luxury. Each carpet is meticulously woven by skilled artisans using traditional techniques passed down through generations, resulting in a masterpiece of beauty and quality. Made from premium materials such as wool, silk, and cotton, our hand-knotted carpets boast unparalleled softness, durability, and intricate detail. Whether adorning your living room, bedroom, or office, these carpets add a touch of elegance and sophistication to any space. Elevate your decor with the timeless allure of our hand-knotted carpets, where every thread tells a story of artistry and tradition.",
                    description:
                        "Doyan is designed with everyday life in mind, this hard-wearing texture is perfect for spaces requiring a texture full of life and beauty, whilst being robust enough to stand the test of time. Texture is made by blending Bamboo Silk with Wool to create harmony of pattern and texture.",
                    details: ['Use : Indoor use only', 'Pile Height : 5mm Cut Pile', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["8 x 10 ft"],
                    color: ["Azure"],
                    weavingTechnique: "Hand Knotted",
                    material: "Wool & Bamboo Silk",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['abstract']
                },
                {
                    id: 10014,
                    name: "FANGO",
                    price: null,
                    priceRange: '₹27,563.00 – ₹198,450.00',
                    image: [
                        "assets/products/rugs/mirzapur_rugs/fango/1.jpg",
                        "assets/products/rugs/mirzapur_rugs/fango/2.webp",
                        "assets/products/rugs/mirzapur_rugs/fango/3.webp",
                        "assets/products/rugs/mirzapur_rugs/fango/4.webp",
                    ],
                    story:
                        "Introducing our hand-tufted carpet, meticulously crafted with precision and care to bring elegance and comfort to your space. Made from luxurious materials, each rug is expertly placed to create a plush and durable surface that enhances your room. Whether you’re looking to add warmth to your living room or sophistication to your office, our hand-tufted carpet is the perfect choice. Experience the perfect blend of style and quality with our exquisite hand-tufted carpet collection.",
                    description:
                        "Introducing our hand-tufted carpet. Crafted with precision from luxurious materials, it offers a plush, durable surface. Perfect for adding elegance to any room. Experience quality and style.",
                    details: ['Use : Indoor use only', 'Pile Height : 12 - 14 MM 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["2.6 x 6 ft", "5 x 7 ft", "8 x 10 ft", "9 x 12 ft"],
                    color: ["Brown", "Dark Brown"],
                    weavingTechnique: "Hand Tufted",
                    material: "100% TENCEL",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['abstract', 'modern']
                },
                {
                    id: 10015,
                    name: "LARIAL",
                    price: null,
                    priceRange: '₹27,563.00 – ₹198,450.00',
                    image: [
                        "assets/products/rugs/mirzapur_rugs/larial/1.webp",
                        "assets/products/rugs/mirzapur_rugs/larial/2.webp",
                        "assets/products/rugs/mirzapur_rugs/larial/3.webp",
                        "assets/products/rugs/mirzapur_rugs/larial/4.webp",
                    ],
                    story:
                        "Introducing our hand-tufted carpet, meticulously crafted with precision and care to bring elegance and comfort to your space. Made from luxurious materials, each rug is expertly placed to create a plush and durable surface that enhances your room. Whether you’re looking to add warmth to your living room or sophistication to your office, our hand-tufted carpet is the perfect choice. Experience the perfect blend of style and quality with our exquisite hand-tufted carpet collection.",
                    description:
                        "Introducing our hand-tufted carpet. Crafted with precision from luxurious materials, it offers a plush, durable surface. Perfect for adding elegance to any room. Experience quality and style.",
                    details: ['Use : Indoor use only', 'Pile Height : 12 - 14 MM 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["5 x 7 ft"],
                    color: ["Light Brown"],
                    weavingTechnique: "Hand Tufted",
                    material: "New Zeland Wool & Tencel",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['abstract', 'modern']
                },
                {
                    id: 10016,
                    name: "LUSH",
                    price: null,
                    priceRange: '₹27,563.00 – ₹198,450.00',
                    image: [
                        "assets/products/rugs/mirzapur_rugs/lush/1.webp",
                        "assets/products/rugs/mirzapur_rugs/lush/2.webp",   
                        "assets/products/rugs/mirzapur_rugs/lush/3.webp",
                        "assets/products/rugs/mirzapur_rugs/lush/4.webp",
                    ],
                    story:
                        "Introducing our hand-tufted carpet, meticulously crafted with precision and care to bring elegance and comfort to your space. Made from luxurious materials, each rug is expertly placed to create a plush and durable surface that enhances your room. Whether you’re looking to add warmth to your living room or sophistication to your office, our hand-tufted carpet is the perfect choice. Experience the perfect blend of style and quality with our exquisite hand-tufted carpet collection.",
                    description:
                        "Introducing our hand-tufted carpet. Crafted with precision from luxurious materials, it offers a plush, durable surface. Perfect for adding elegance to any room. Experience quality and style.",
                    details: ['Use : Indoor use only', 'Pile Height : 12 - 14 MM 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["2.6 x 6 ft", "5 x 7 ft", "6 x 9 ft", "8 x 10 ft", "9 x 12 ft"],
                    color: ["Biege", "Blue", "Brown"],
                    weavingTechnique: "Hand Tufted",
                    material: "100% Tencel",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['abstract', 'modern']
                },
                {
                    id: 10017,
                    name: "SKYE",
                    price: null,
                    priceRange: '₹71,400.00 – ₹96,390.00',
                    image: [
                        "assets/products/rugs/mirzapur_rugs/skye/1.webp",
                        "assets/products/rugs/mirzapur_rugs/skye/2.webp",
                        "assets/products/rugs/mirzapur_rugs/skye/3.webp",
                        "assets/products/rugs/mirzapur_rugs/skye/4.webp",
                    ],
                    story:
                        "Introducing our hand-tufted carpet, meticulously crafted with precision and care to bring elegance and comfort to your space. Made from luxurious materials, each rug is expertly placed to create a plush and durable surface that enhances your room. Whether you’re looking to add warmth to your living room or sophistication to your office, our hand-tufted carpet is the perfect choice. Experience the perfect blend of style and quality with our exquisite hand-tufted carpet collection.",
                    description:
                        "Introducing our hand-tufted carpet. Crafted with precision from luxurious materials, it offers a plush, durable surface. Perfect for adding elegance to any room. Experience quality and style.",
                    details: ['Use : Indoor use only', 'Pile Height : 12 - 14 MM 100% Cut', 'Shedding is Inherent to Wool Rugs', 'Suitable for Medium Traffic Areas', 'Good Weave Certified', 'Made in India'],
                    dimensionsAvailable: ["8 x 10 ft", "9 x 12 ft"],
                    color: ["Blue", "Natural"],
                    weavingTechnique: "Hand Tufted",
                    material: "Wool",
                    manufacturer: "Mirzapur Rugs",
                    tags: ['abstract', 'modern']
                },
            ],
        },
    ],
};

// Process rawProductData into a flat allProducts array for easier access
export const allProducts = [];
rawProductData.products.forEach(category => {
    category.items.forEach(item => {
        let itemPriceForCart = item.price !== null ? item.price : 0;
        let itemPriceDisplay = item.price !== null ? `₹${item.price.toLocaleString('en-IN')}` : (item.priceRange || 'Price on Request');

        allProducts.push({
            ...item,
            price: itemPriceForCart,
            displayPrice: itemPriceDisplay,
            // IMPORTANT: Process image paths for local file viewing (removes leading slash)
            // This ensures "assets/..." instead of "/assets/..." when opened via file:// protocol
            image: Array.isArray(item.image) ? item.image.map(path => path.startsWith('/') ? path.substring(1) : path) : [item.image.startsWith('/') ? item.image.substring(1) : item.image],
            dimensions: item.dimensionsAvailable ? item.dimensionsAvailable.join(', ') : 'N/A',
            technology: item.weavingTechnique,
            categoryName: item.category,
            stock: item.stock !== undefined ? item.stock : 10 // Default stock to 10 if not specified
        });
    });
});

// Shared Cart Logic
export let cart = JSON.parse(localStorage.getItem('indikaaraCart')) || [];

export function saveCart() {
    localStorage.setItem('indikaaraCart', JSON.stringify(cart));
}

// updateCartInfo now accepts DOM element references from the calling page
// This allows each page to update its specific cart elements (count, subtotal)
export function updateCartInfo(cartCountElem, cartSubtotalElem) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCountElem) {
        if (totalItems > 0) {
            cartCountElem.textContent = totalItems;
            cartCountElem.classList.remove('hidden');
        } else {
            cartCountElem.classList.add('hidden');
        }
    }
    if (cartSubtotalElem) {
        cartSubtotalElem.textContent = totalItems;
    }
}

// AddToCart now means AddToEnquiryList
export function addToEnquiryList(productId, quantity = 1) {
    const product = allProducts.find(p => p.id === productId);
    if (!product || product.stock <= 0) {
        alert('This product is out of stock or does not exist!');
        return;
    }

    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        if (cartItem.quantity + quantity <= product.stock) {
            cartItem.quantity += quantity;
        } else {
            alert('Adding this quantity would exceed available stock!');
            return;
        }
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            displayPrice: product.displayPrice,
            image: product.image,
            quantity: quantity
        });
    }
    saveCart();
    // This function doesn't directly call renderCart(); the calling page will update its UI
    alert(`${product.name} added to your enquiry list.`);
}

export function changeQuantity(productId, change) {
    const product = allProducts.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        const newQuantity = cartItem.quantity + change;
        if (newQuantity > 0 && newQuantity <= product.stock) {
            cartItem.quantity = newQuantity;
        } else if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        } else if (newQuantity > product.stock) {
            alert('Cannot add more, maximum stock reached!');
            return;
        }
        saveCart();
        // No direct renderCart() call here; the calling page will handle its own UI update
    }
}

export function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    // No direct renderCart() call here; the calling page will handle its own UI update
}

export function handleEnquireNow() {
    if (cart.length === 0) {
        alert("Your enquiry list is empty. Please add items to enquire.");
        return;
    }

    let enquiryDetails = "I would like to enquire about the following products:\n\n";
    cart.forEach(item => {
        enquiryDetails += `- ${item.name} (ID: ${item.id}), Quantity: ${item.quantity}\n`;
    });
    enquiryDetails += "\n";
    enquiryDetails += "Please contact me to discuss details regarding these items, including pricing, availability, and export procedures.\n\n";
    enquiryDetails += "My contact email: [Your Email Here]\n";
    enquiryDetails += "My phone number: [Your Phone Number Here]\n";
    enquiryDetails += "My company/name: [Your Company/Name Here]\n";

    window.location.href = `mailto:your.email@example.com?subject=Enquiry from Indikaara Website&body=${encodeURIComponent(enquiryDetails)}`;

    alert("Your enquiry request is being prepared. Please send the email that opens up.");
}