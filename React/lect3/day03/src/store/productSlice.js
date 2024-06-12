import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
	getAllProducts,
	addNewProduct,
	deleteProduct,
} from "../api/productAPI";
import { act } from "react";

export const getAllProductsAction = createAsyncThunk(
	"products/getAllProductsAction",
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			let response = await getAllProducts();
			console.log(response.data);

			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const addNewProductAction = createAsyncThunk(
	"products/addNewProductAction",
	async (product, thunkAPI) => {
		try {
			let response = await addNewProduct(product);
			return response.data;
		} catch (error) {}
	}
);
export const deleteProductAction = createAsyncThunk(
	"products/addNewProductAction",
	async (productId, thunkAPI) => {
		try {
			let response = await deleteProduct(productId);
			return response.data;
		} catch (error) {}
	}
);
const productSlice = createSlice({
	name: "products",
	initialState: { products: [], error: null, isLoading: false },
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProductsAction.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getAllProductsAction.fulfilled, (state, action) => {
			state.products = action.payload;
			state.isLoading = false;
		});
		builder.addCase(getAllProductsAction.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(deleteProductAction.fulfilled, (state, action) => {
			// logic
		});
	},
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
