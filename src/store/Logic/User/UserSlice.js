import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserLoginAPI, UserSignupAPI } from "./UserAPI";
export const UserLogin = createAsyncThunk("userlogin", async ({ datas }) => {
  const { data } = await UserLoginAPI(datas);
  return data;
});
export const UserSignup = createAsyncThunk("usersignup", async ({ datas }) => {
  const { data } = await UserSignupAPI(datas);

  return data;
});
const UserSlice = createSlice({
  name: "account",
  initialState: { isAuthenticated: false, data: {} },
  reducers: {
    CheckIsAuthenticated: (state, action) => {
      return { ...state, isAuthenticated: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UserLogin.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
        isAuthenticated: action.payload.auth || false,
      };
    });
  },
});
export default UserSlice;
export const { CheckIsAuthenticated } = UserSlice.actions;
