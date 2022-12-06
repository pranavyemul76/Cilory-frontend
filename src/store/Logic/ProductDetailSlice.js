import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchProductDetail } from "./ProductDetailAPI";
export const GetProductDetail = createAsyncThunk(
  "ProductDetail",
  async ({ id }) => {
    const response = await FetchProductDetail(id);
    return response.data.product;
  }
);

const ProductDetailSlice = createSlice({
  name: "productdetailslice",
  initialState: { loader: true, Product: [] },
  extraReducers: (builder) => {
    builder.addCase(GetProductDetail.pending, (state, action) => {
      return { ...state, loader: true };
    });
    builder.addCase(GetProductDetail.fulfilled, (state, action) => {
      return { ...state, loader: false, product: action.payload };
    });
  },
});
export default ProductDetailSlice;
