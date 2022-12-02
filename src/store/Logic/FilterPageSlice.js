import { createSlice } from "@reduxjs/toolkit";

const FilterPageSlice = createSlice({
  name: "FilterPageSlice",
  initialState: {
    ProductListData: [],
    FilterListData: [],
    loader: true,
    status: undefined,
    message: undefined,
  },
  reducers: {
    SetProductList(state, action) {
      return {
        ...state,
        ProductListData: action.payload,
      };
    },
    Setloader(state, action) {
      return {
        ...state,
        loader: action.payload,
      };
    },
    SetFilterItems(state, action) {
      return {
        ...state,
        FilterListData: action.payload,
      };
    },
    SetStatus(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
    SetMessage(state, action) {
      return { ...state, message: action.payload };
    },
  },
});
export default FilterPageSlice;
export const {
  SetProductList,
  Setloader,
  SetFilterItems,
  SetStatus,
  SetMessage,
} = FilterPageSlice.actions;
