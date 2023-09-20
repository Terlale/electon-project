import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getFavoriteThunk = createAsyncThunk(
  "./categories/api",
  async () => {
    const response = await axios.get("http://localhost:3000/api/favourites");
    return response.data;
  }
);

const getFavorite = createSlice({
  name: "getFavorite",
  initialState: {
    categories: [],
    loading: false,
    error: null,
    basketItems: [],
  },
  

  reducers: {
    // addWishlist :(state, action) => {
    //   let categories = state.categories.find((p) => p.id == action.payload)
    //   if (categories != undefined) {
    //     categories.wishlist = !categories.wishlist;
    //   }
    // },
    // addToBasket: (state, action) => {
    //   const item = state.categories.find(category => category.id === action.payload);
    //   if (item) {
    //     const isItemInBasket = state.basketItems.some(basketItem => basketItem.id === item.id);
    //     if (!isItemInBasket) {
    //       state.basketItems.push(item);
    //     }
    //   }
    // }
    
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.favorite = action.payload;
      })
      .addCase(getFavoriteThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getFavoriteThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });


  },
});
// export const { addWishlist ,addToBasket} = getFavorite.actions;

export default getFavorite.reducer;
