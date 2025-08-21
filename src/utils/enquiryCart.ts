import { Product } from '../types/product';

interface EnquiryDetails {
  name: string;
  email: string;
  message: string;
  quantity: number;
  size: string;
}

export interface EnquiryItem extends Product {
  enquiryDetails: EnquiryDetails;
}

const CART_STORAGE_KEY = 'indikaaraCart';

export const addToEnquiryList = (item: EnquiryItem): void => {
  const currentList = getEnquiryList();
  const updatedList = [...currentList, item];
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedList));
};

export const removeFromEnquiryList = (productId: number): void => {
  const currentList = getEnquiryList();
  const updatedList = currentList.filter(item => item.id !== productId);
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedList));
};

export const getEnquiryList = (): EnquiryItem[] => {
  const storedList = localStorage.getItem(CART_STORAGE_KEY);
  return storedList ? JSON.parse(storedList) : [];
};

export const clearEnquiryList = (): void => {
  localStorage.removeItem(CART_STORAGE_KEY);
};
