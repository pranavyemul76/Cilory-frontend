import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { count: 0, data: [] },
  reducers: {
    addtocart(state, action) {
      state.count += action.payload;
    },
    pushdata(state, action) {
      state.data.push(action.payload);
    },
  },
});
export default cartSlice;
export const { addtocart, pushdata } = cartSlice.actions;
