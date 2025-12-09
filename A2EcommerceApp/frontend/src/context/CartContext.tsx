import React, { createContext, useState, ReactNode } from 'react';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Omit<Product, 'quantity'>) => void;
  removeFromCart: (id: string) => void; // <-- Add this
  getTotal: () => number;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {}, // <-- default empty
  getTotal: () => 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Omit<Product, 'quantity'>) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const getTotal = () => cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
