import { useContext, createContext, useReducer, useEffect } from "react";
import { reducer } from "../reducer/cartReducer";

const CartContext = createContext();

const initialState = {
  isCartSlider: false,
  cart: [],
  total_Items: 0,
  total_Price: 0
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "cart_total_items" });
    dispatch({ type: "cart_total_price" });
    console.log(state.cart);
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
