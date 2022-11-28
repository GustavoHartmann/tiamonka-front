import { createContext, useState } from "react";

export const CartContext = createContext({});

export default function CartProvider({ children }) {
  const [cartChange, setCartChange] = useState(true);
  const [cartVisibility, setCartVisibility] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cartChange,
        setCartChange,
        cartVisibility,
        setCartVisibility,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
