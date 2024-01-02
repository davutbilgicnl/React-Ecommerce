import React from "react";

const CartContext = React.createContext({
  items: [{ id: null, name: null, amount: null, price: null }],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
