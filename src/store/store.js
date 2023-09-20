import { configureStore } from "@reduxjs/toolkit";
import getSlice from "./reducer/getSlice";
import getBasket from "./reducer/getBasket";

export const store = configureStore({
    reducer: {
        get: getSlice,
        getBasket: getBasket,
    }
})