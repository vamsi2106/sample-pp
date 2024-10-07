import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Rating {
  rate: number; 
  count: number; 
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;      
  category: string;         
  image: string;           
  rating: Rating; 
}

interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [],
};

export const getAllProducts=createAsyncThunk('FETCHING DATA',async()=>{
  const res=await axios.get("https://fakestoreapi.com/products")
  return res.data;
})

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },
  extraReducers:(builder)=>{
    builder.addCase(getAllProducts.fulfilled,(state,action)=>{
      state.items=action.payload
    })
  }
});

export default productsSlice.reducer;
