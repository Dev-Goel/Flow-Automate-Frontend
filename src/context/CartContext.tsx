import { createContext, useContext, useState, useEffect } from "react";
import type { Product } from "../api/products";

type CartItem = Product & { qty: number };
type CartContextType = {
  cart: CartItem[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exist = prev.find((c) => c.id === product.id);
      if (exist) return prev.map((c) => (c.id === product.id ? { ...c, qty: c.qty + 1 } : c));
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
};
