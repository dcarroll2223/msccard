import { createContext, useState } from 'react';
import { products } from './data';
import { toast } from 'react-toastify';
import ShoppingCart from './components/ShoppingCart';

//setup store to keep track of quantity of items in cart
//functions to add or remove 1 from cart
//getDefaultCart loop to initialize the quantity of card as 0
//open and close functions
//functions added to provider for cart functionality and state management

export const Store = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const StoreProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addToCart1 = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    toast.success('Added To Cart');
  };
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };
  const contextValue = {
    cartItems,
    addToCart1,
    addToCart,
    removeFromCart,
    deleteFromCart,
    openCart,
    closeCart,
  };

  console.log(cartItems);
  return (
    <Store.Provider value={contextValue}>
      {props.children} <ShoppingCart isOpen={isOpen} />
    </Store.Provider>
  );
};
