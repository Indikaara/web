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

export interface CartItem extends Product {
  quantity: number;
}
