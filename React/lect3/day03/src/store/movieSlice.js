import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	movies: [
		{
			id: 1,
			title: "The Moon",
			price: 200,
		},
		{
			id: 2,
			title: "The Earth",
			price: 200,
		},
	],
};
const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {},
});

export const movieReducer = movieSlice.reducer;
export const movieActions = movieSlice.actions;
