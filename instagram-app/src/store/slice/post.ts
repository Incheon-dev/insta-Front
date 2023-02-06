// redux/slice/postSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { FetchApiPost } from "../network";
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
