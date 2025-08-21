import React, { useEffect, useState } from 'react';

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number | null;
}

const CART_KEY = 'indikaaraCart';

const getCartFromStorage = (): CartItem[] => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

const saveCartToStorage = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const EnquiryCart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>(getCartFromStorage());

  useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="fixed top-20 right-6 bg-white shadow-lg rounded-lg p-4 z-50 w-80">
      <h3 className="font-semibold text-lg mb-2">Enquiry List</h3>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your enquiry list is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} className="flex items-center mb-3">
              <img src={item.image} alt={item.name} className="h-12 w-12 object-cover rounded mr-3" />
              <div className="flex-1">
                <span className="font-medium">{item.name}</span>
                <div className="text-xs text-gray-400">{item.price ? `₹${item.price}` : 'Price on Request'}</div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="ml-2 text-accent hover:text-gold">Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EnquiryCart;
