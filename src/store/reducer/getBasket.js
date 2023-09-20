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
// export const { addWishlist ,addToBasket} = getBasket.actions;

export default getBasket.reducer;
