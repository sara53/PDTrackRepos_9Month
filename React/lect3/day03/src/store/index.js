import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { movieReducer } from "./movieSlice";
import { productReducer } from "./productSlice";

export const store = configureStore({
	reducer: {
		mySlice: counterReducer,
		movieSlice: movieReducer,
		productSlice: productReducer,
	},
});
