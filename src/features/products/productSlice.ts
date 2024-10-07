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
  selectedItem:Product|null
}

const initialState: ProductsState = {
  items: [],
  selectedItem:null
};

export const getAllProducts=createAsyncThunk('FETCHING DATA',async()=>{
  const res=await axios.get("https://fakestoreapi.com/products")
  return res.data;
})

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectProduct(state,action){
        let productId=action.payload 
        let item=state.items.find(item=>item.id===productId)
        state.selectedItem=item||null
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getAllProducts.fulfilled,(state,action)=>{
      state.items=action.payload
    })
  }
});

export const {selectProduct} = productsSlice.actions;
export default productsSlice.reducer;
