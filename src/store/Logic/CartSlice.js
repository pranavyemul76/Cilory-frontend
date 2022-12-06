import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AddToCartAPI, DeleteCartItemAPI, GetCartItems } from "./CartAPI";
export const AddToCartItem = createAsyncThunk(
  "addtocart",
  async ({ id, size }) => {
    const response = await AddToCartAPI(id, size);

    const data = await GetCartItems();
    return data.data;
  }
);
export const GetCartData = createAsyncThunk(
  "getcartitem",
  async ({ id, size, qty }) => {
    const response = await GetCartItems(id, size, qty);
    return response.data;
  }
);
export const DeleteCartItem = createAsyncThunk(
  "deletcart",
  async ({ id, size }) => {
    const response = await DeleteCartItemAPI(id, size);
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
    data: [],
    status: null,
    message: null,
    loader: false,
    updateloader: false,
    SizeNotificationDeskTop: { status: false, messeage: null },
  },
  reducers: {
    SetSizeNotificationDeskTop: (state, action) => {
      return { ...state, SizeNotificationDeskTop: action.payload };
    },
    UpdateLoader: (state, action) => {
      return { ...state, updateloader: true };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AddToCartItem.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
        status: "success",
        SizeNotificationDeskTop: {
          status: true,
          messeage: "add to cart success",
        },
      };
    });
    builder.addCase(AddToCartItem.rejected, (state, action) => {
      return { ...state, status: "error" };
    });
    builder.addCase(GetCartData.pending, (state, action) => {
      return { ...state, loader: true, updateloader: true };
    });
    builder.addCase(GetCartData.fulfilled, (state, action) => {
      return { ...state, data: action.payload, updateloader: false };
    });
    builder.addCase(DeleteCartItem.pending, (state, action) => {
      return { ...state, updateloader: true };
    });
    builder.addCase(DeleteCartItem.fulfilled, (state, action) => {
      return { ...state, data: action.payload, updateloader: false };
    });
  },
});
export default cartSlice;
export const { SetSizeNotificationDeskTop } = cartSlice.actions;
