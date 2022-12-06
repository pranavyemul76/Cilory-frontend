import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  DeleteAddressAPI,
  GetUserInfoAPI,
  GetUserOrdersAPI,
  UpdateAddressAPI,
} from "./AccountAPI";
export const GetUserInfo = createAsyncThunk("getuserinfo", async () => {
  const response = await GetUserInfoAPI();
  return response.data;
});

export const UpdateAddress = createAsyncThunk(
  "updateaddress",
  async ({ item }) => {
    await UpdateAddressAPI(item);
    const data = await GetUserInfoAPI();
    return data.data;
  }
);
export const DeleteAddress = createAsyncThunk(
  "deleteaddress",
  async ({ id }) => {
    const response = await DeleteAddressAPI(id);
    const data = await GetUserInfoAPI();
    return data.data;
  }
);

export const GetUserOrders = createAsyncThunk("getuserorders", async () => {
  const response = await GetUserOrdersAPI();
  return response.data.products;
});
const AccountSlice = createSlice({
  name: "account",
  initialState: { data: [], loader: true, OrderData: [], orderloader: true },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetUserInfo.fulfilled, (state, action) => {
      return { ...state, data: action.payload, loader: false };
    });
    builder.addCase(UpdateAddress.fulfilled, (state, action) => {
      return { ...state, data: action.payload, loader: false };
    });
    builder.addCase(DeleteAddress.fulfilled, (state, action) => {
      return { ...state, data: action.payload, loader: false };
    });
    builder.addCase(GetUserInfo.pending, (state, action) => {
      return { ...state, loader: true };
    });

    builder.addCase(UpdateAddress.pending, (state, action) => {
      return { ...state, loader: true };
    });
    builder.addCase(DeleteAddress.pending, (state, action) => {
      return { ...state, loader: true };
    });
    builder.addCase(GetUserOrders.fulfilled, (state, action) => {
      return { ...state, orderloader: false, OrderData: action.payload };
    });
  },
});
export default AccountSlice;
// export const {} = cartSlice.actions;
