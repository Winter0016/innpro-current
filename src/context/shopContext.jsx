// ShopContextProvider.jsx
import React, { createContext, useState } from "react";
import { PRODUCTS } from "../constants";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  console.log(`cart is  ${JSON.stringify(cart)}`);
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [xname, setxname] = useState(null); // Preserve xnumber separately

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const updateCartItemAmount = (newAmount, itemId) => {
    setCartItems((prex) => ({ ...prex, [itemId]: newAmount }));
  };

  const inspect = (nameproduct) => {
    console.log(`testing name : ${nameproduct}`);
    setxname(nameproduct); // Preserve xnumber when inspecting
    console.log(`xname : ${xname}`);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemAmount,
    getTotalCartAmount,
    inspect,
    xname,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
