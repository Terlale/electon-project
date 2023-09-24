import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketThunk = createAsyncThunk(
  "./categories/api",
  async () => {
    const response = await axios.get("http://localhost:3000/api/basket");
    return response.data;
  }
);

const getBasket = createSlice({
  name: "getBasket",
  initialState: {
    categories: [],
    loading: false,
    error: null,
    basketItems: [],
  },
  

  reducers: {
    addDelete: (state, action) => {
      state.basketItems = state.basketItems.filter(item => item.id !== action.payload);
    }
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(getBasketThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.basket = action.payload;
      })
      .addCase(getBasketThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getBasketThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });


  },
});
export const { addDelete} = getBasket.actions;

export default getBasket.reducer;
