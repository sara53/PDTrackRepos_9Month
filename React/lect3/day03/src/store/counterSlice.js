import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: { count: 10 },
	reducers: {
		increase: (state, action) => {
			state.count += action.payload;
		},
		decrease: (state, action) => {
			state.count -= 1;
		},
	},
});

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;
