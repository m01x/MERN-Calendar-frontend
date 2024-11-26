import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice, uiSlice } from "./";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer, //Aca quede, minuto 6:11 , instalacion y config de redux
        calendar: calendarSlice.reducer,
    },
    middleware: ( getDefaultiddleware ) => getDefaultiddleware({
        serializableCheck: false
    })
})