import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const GetProductsThunk = createAsyncThunk(
  "products/GetProductsThunk",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response.data;
  }
);

export const DeleteProductThunk = createAsyncThunk(
  "products/DeleteProductThunk",
  async (id) => {
    const response = await axios.delete(`http://localhost:5000/products/${id}`);
    return response.data;
  }
);

export const PostProductThunk = createAsyncThunk(
  "products/PostProductThunk",
  async (product) => {
    const response = await axios.post(
      "http://localhost:5000/products",
      product
    );
    return response.data;
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(GetProductsThunk.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(GetProductsThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(DeleteProductThunk.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      })
      .addCase(PostProductThunk.fulfilled, (state, action) => {
        state.products.push(action.payload);
      });
  },
});

export default ProductSlice.reducer;
