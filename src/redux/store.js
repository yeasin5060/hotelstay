import { configureStore } from "@reduxjs/toolkit";
import { hotelstay } from "./apiSlice";

export const store = configureStore({
  reducer: {
     //Add the RTK Query API slice
    [hotelstay.reducerPath]: hotelstay.reducer,

    // Add the single product reducer
  },
   //Adding middleware for caching, invalidation, and RTK Query features
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelstay.middleware),
})