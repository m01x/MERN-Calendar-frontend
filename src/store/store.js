import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer, //Aca quede, minuto 6:11 , instalacion y config de redux
    }
})