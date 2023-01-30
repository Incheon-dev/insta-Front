// redux/slice/testSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type testSliceState = {
    value: number;
};
const initialState = {
    value: 0,
};
export const testSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const testActions = testSlice.actions;
