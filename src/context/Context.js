import React, { createContext } from "react";
import ceuOfferings from "./CEUdata.js";
console.log(ceuOfferings);
// Cart is the name of the context or state
const Cart = createContext();
// pass in the children coming from index.js, which is the point where the app starts - gooto index.js  and wrap it in context
// are children aka props ?
const Context = ({ children }) => {
  // in here get the data - for now just from data.js
  // const ceus = [...Array(3)].map(() => ({
  //   ////
  //   id: ceuOfferings.id,
  //   title: ceuOfferings.title,
  //   CEU: ceuOfferings.CEU,
  //   type: ceuOfferings.type,
  //   cost: ceuOfferings.cost,
  //   shortDescription: ceuOfferings.shortDescription,
  //   longDescription: ceuOfferings.longDescription,
  //   featured: ceuOfferings.featured,
  // }));

  // why is this undefined ????
  // console.log(ceus);

  //  here just passing in the data from ceuOfferings.js
  const ceus = ceuOfferings;

  return <Cart.Provider value={{ ceus }}>{children}</Cart.Provider>;
};

export default Context;
