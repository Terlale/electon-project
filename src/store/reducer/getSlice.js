import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoriesThunk = createAsyncThunk(
  "./categories/api",
  async () => {
    const response = await axios.get("https://northwind.vercel.app/api/categories");
    return response.data;
  }
);

const getSlice = createSlice({
  name: "get",
  initialState: {},
  reducers: {
    addWishlist :(state, action) => {
      let categories = state.categories.find((p) => p.id == action.payload)
      if (categories != undefined) {
        categories.wishlist = !categories.wishlist;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategoriesThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCategoriesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });


  },
});
export const { addWishlist } = getSlice.actions;

export default getSlice.reducer;
