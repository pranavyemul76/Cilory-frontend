import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./Logic/Account/AccountSlice";
import cartSlice from "./Logic/CartSlice";
import FilterPageSlice from "./Logic/FilterPageSlice";
import ProductDetailSlice from "./Logic/ProductDetailSlice";
import UserSlice from "./Logic/User/UserSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    FilterProduct: FilterPageSlice.reducer,
    ProductDetail: ProductDetailSlice.reducer,
    AccountDetail: AccountSlice.reducer,
    User: UserSlice.reducer,
  },
});

export default store;
