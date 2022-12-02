import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Logic/CartSlice";
import FilterPageSlice from "./Logic/FilterPageSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    FilterProduct: FilterPageSlice.reducer,
  },
});

export default store;
