import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); 

  const addItem = (product) =>
    setItems((prev) => {
      const found = prev.find((i) => i.product.id === product.id);
      if (!found) return [...prev, { product, qty: 1 }];
      return prev.map((i) =>
        i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i,
      );
    });

  const changeQty = (id, delta) =>
    setItems((prev) =>
      prev
        .map((i) => (i.product.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );

  const removeItem = (id) =>
    setItems((prev) => prev.filter((i) => i.product.id !== id));
  const clearCart = () => setItems([]);
  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const total = items.reduce((sum, i) => sum + i.qty * i.product.price, 0);
  return (
    <CartContext.Provider
      value={{ items, addItem, changeQty, removeItem, clearCart, count, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
