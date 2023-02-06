// redux/slice/userSlice.js
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApiPost, FetchApiGet } from "../network";
export type UserState = {
    email: string;
    introduction?: string | null;
    name: string;
    nickname: string;
    password: string;
    phoneNumber: string;
    profileImage?: string | null;
    sex: string;
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
export const signUp = createAsyncThunk(
    "users/signup",
    async (userInfo: UserState) => {
        return await FetchApiPost("/api/account/sign-up", userInfo);
    }
);
export const getUserList = createAsyncThunk("users/getuserList", async () => {
    return await FetchApiGet("/api/user/list");
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            signUp.fulfilled,
            (state, action: PayloadAction<UserState>) => {
                return {
                    ...state,
                    ...action,
                    status: true,
                };
            }
        );
        builder.addCase(
            signUp.rejected,
            (state, action: PayloadAction<any>) => {
                return {
                    ...state,
                    ...action,
                    status: false,
                };
            }
        );
    },
});
export const userActions = userSlice.actions;
