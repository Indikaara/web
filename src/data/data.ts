export interface Product {
  id: number;
  name: string;
  price: number | null;
  image: string[];
  description: string;
  story: string;
  dimensionsAvailable: string[];
  details: string[];
  color: string[];
  weavingTechnique: string;
  material: string;
  manufacturer: string;
  tags: string[];
  SKU: string;
  category: string;
  dateAdded: string;
}

export const rawProductData: Product[] = [
  {
    id: 10001,
    name: "Ambrosia Rug",
    price: 391230,
    image: ['/assets/products/rugs/mirzapur_rugs/ambrosia/ambrosia1.jpg', '/assets/products/rugs/mirzapur_rugs/ambrosia/ambrosia2.jpg'],
    description: "A luxurious hand-tufted rug with intricate patterns.",
    story: "Handcrafted by artisans in Mirzapur, this rug tells a story of tradition and modern elegance.",
    dimensionsAvailable: ["8x10 ft", "Custom sizes"],
    details: ["Use: Indoor only", "Made in India"],
    color: ["brown", "grey"],
    weavingTechnique: "Hand Tufted",
    material: "100% Cotton",
    manufacturer: "Mirzapur Rugs",
    tags: ["abstract", "modern"],
    SKU: "2023071187",
    category: "Rugs",
    dateAdded: "2025-01-01"
  },
  // Add more products here
];

export const allProducts = rawProductData;

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  // In a real application, this would be an API call
  return rawProductData;
};

// Fetch a single product by ID
export const fetchProductById = async (id: number): Promise<Product | null> => {
  const product = rawProductData.find(p => p.id === id);
  return product || null;
};
