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
  reducers: {},
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

export default getSlice.reducer;
