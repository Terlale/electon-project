import { configureStore } from "@reduxjs/toolkit";
import getSlice from "./reducer/getSlice";

export const store = configureStore({
    reducer: {
        get: getSlice,
    }
})