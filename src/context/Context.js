import React, { createContext, useContext, useReducer } from "react";
import ceuOfferings from "./CEUdata.js";
import { cartReducer } from "./Reducers.js";

// console.log(ceuOfferings);
// Cart is the name of the context or state
const Cart = createContext();
// pass in the children coming from index.js, which is the point where the app starts - gooto index.js  and wrap it in context
// are children aka props ?
const Context = ({ children }) => {
  //  here just passing in the data from ceuOfferings.js
  const ceus = ceuOfferings;
  // setting up state for all the ceus and the ceus in cart
  // cartReducer is comming from Reducers.js
  const [state, dispatch] = useReducer(cartReducer, {
    ceus: ceus,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;
export const CartState = () => {
  return useContext(Cart);
};
