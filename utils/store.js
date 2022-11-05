import jsCookie from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  darkMode: jsCookie.get("darkMode") || false,
  cart: {
    cartItems: jsCookie.get("cartItems")
      ? JSON.parse(jsCookie.get("cartItems"))
      : [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    case "CART_ADD_ITEM":
      const item = action.payload;
      const existItem = state.cart.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        return {
          ...state,
          cart: {
            cartItems: state.cart.cartItems.map((x) =>
              x._id === existItem._id ? item : x
            ),
          },
        };
      }
      jsCookie.set(
        "cartItems",
        JSON.stringify([...state.cart.cartItems, item])
      );
      return {
        ...state,
        cart: {
          cartItems: [...state.cart.cartItems, item],
        },
      };
    case "CART_REMOVE_ITEM":
      const cartItems = state.cart.cartItems.filter(
        (x) => x._id !== action.payload._id
      );
      jsCookie.set("cartItems", JSON.stringify(cartItems));
      default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
