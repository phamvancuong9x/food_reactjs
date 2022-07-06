import { createSlice } from "@reduxjs/toolkit";
import { addQuantityProductCart } from "../../components/function/addQuanityProductCart";
import { checkProductCart } from "../../components/function/checkProductCart";

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: JSON.parse(localStorage.getItem("cart") || "[]"),
  reducers: {
    ADD_TO_CART: (state, action) => {
      if (checkProductCart(state, action.payload)) {
        return addQuantityProductCart(state, action.payload);
      } else {
        state.push(action.payload);
      }
    },
    CHANGE_QUANTITY_PRODUCT_CART: (state, action) => {
      return state.map((product) => {
        if (product.id === action.payload.id)
          return { ...product, ...action.payload };
        return product;
      });
    },
    DELETE_PRODUCT: (state, action) => {
      return state.filter((product) => {
        return product.id !== action.payload.id;
      });
    },
    DELETE_All_PRODUCT: (state, action) => {
      return [];
    },
  },
});
export default addToCartSlice;
