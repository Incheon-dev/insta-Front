// redux/slice/userSlice.js
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApiPost, FetchApiGet } from "../network";
export type UserState = {
    email?: string;
    introduction?: string | null;
    name?: string;
    nickname?: string;
    password?: string;
    phoneNumber?: string;
    profileImage?: string | null;
    sex?: string;
    status?: boolean;
};

const initialState: UserState = {
    email: "",
    introduction: null,
    name: "",
    nickname: "",
    password: "",
    phoneNumber: "",
    profileImage: null,
    sex: "남성",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
});
export const userActions = userSlice.actions;
