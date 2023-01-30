// redux/slice/postSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.posts = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const postActions = postSlice.actions;
