// src/features/cartSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Rating {
  rate: number; 
  count: number; 
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        console.log(state.items)
      } else {
        state.items.push({...action.payload, quantity:1});
      }
    },
    // Other reducers can be added here
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
