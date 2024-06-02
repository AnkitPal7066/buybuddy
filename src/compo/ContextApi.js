import React, { createContext, useState } from 'react';

export const Cart = createContext();

export default function Cartcontext({children}) {
    const [cart, setCart] = useState([]);
    const [query, setQuery] = useState("");
  return (
    <Cart.Provider value={
        {cart, setCart, query, setQuery}
    }>
        {children}
    </Cart.Provider>
  )
}
