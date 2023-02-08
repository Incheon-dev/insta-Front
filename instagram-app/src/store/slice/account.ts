// redux/slice/AccountSlice.js
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApiPost, FetchApiGet } from "../network";
export type accountState = {
    loading: boolean;
    error: string | null;
    userInfo?: {
        email?: string;
        newPassword?: string | null;
        introduction?: string;
        name?: string;
        nickname?: string;
        password?: string;
        phoneNumber?: string;
        profileImage?: string;
        sex?: string;
        accessToken?: string;
    };
    useAbleEmail?: boolean;
};

const initialState: accountState = {
    loading: false,
    error: null,
};
export const validateEmail = createAsyncThunk(
    "validateEmail",
    async (email: string) => {
        return await FetchApiGet(`/api/account`, { email: email });
    }
);

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            validateEmail.fulfilled,
            (state, action: PayloadAction<accountState>) => {
                let payload = action.payload;
                return {
                    ...state,
                    ...payload,
                };
            }
        );
        builder.addCase(
            validateEmail.rejected,
            (state, action: PayloadAction<any>) => {
                return {
                    ...state,
                    ...action,
                };
            }
        );
    },
});
export const AccountActions = accountSlice.actions;
