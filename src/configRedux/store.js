import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../CardSlice";

export const store = configureStore({
    reducer:{
        allcart: cartReducer
    }
});
