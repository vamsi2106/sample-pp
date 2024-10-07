// src/store.ts

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// Import your reducers
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";

// Combine your reducers
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

// Create and export the store
const store = configureStore({
  reducer: rootReducer,
  // Optional: Add middleware, devTools, etc. if needed
  //devTools: "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
