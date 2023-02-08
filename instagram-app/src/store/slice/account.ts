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
    isSendVerificationNumber?: boolean;
    isVerifyEmail?: boolean;
};

const initialState: accountState = {
    loading: false,
    error: null,
    isVerifyEmail: false,
    isSendVerificationNumber: false,
    useAbleEmail: false,
};
export const validateEmail = createAsyncThunk(
    "validateEmail",
    async (email: string) => {
        return await FetchApiGet(`/api/account`, { email: email });
    }
);
export const sendVerificationNumber = createAsyncThunk(
    "sendVerificationNumber",
    async (email: string) => {
        return await FetchApiGet(`/api/account/verify?email=${email}`);
    }
);
export const verifyNumber = createAsyncThunk(
    "verifyNumber",
    async (payload: { email: string; authKey: string }) => {
        return await FetchApiPost(`/api/account/verify`, {
            email: payload.email,
            authKey: payload.authKey,
        });
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
                let payload = action.payload;
                return {
                    ...state,
                    ...payload,
                };
            }
        );
        builder.addCase(
            sendVerificationNumber.fulfilled,
            (state, action: PayloadAction<accountState>) => {
                return {
                    ...state,
                    isSendVerificationNumber: true,
                };
            }
        );
        builder.addCase(
            sendVerificationNumber.rejected,
            (state, action: PayloadAction<any>) => {
                return {
                    ...state,
                    ...action,
                };
            }
        );
        builder.addCase(
            verifyNumber.fulfilled,
            (state, action: PayloadAction<accountState>) => {
                return {
                    ...state,
                    isVerifyEmail: true,
                };
            }
        );
        builder.addCase(
            verifyNumber.rejected,
            (state, action: PayloadAction<any>) => {
                return {
                    ...state,
                    ...action,
                };
            }
        );
        builder.addCase(verifyNumber.pending, (state, action) => {
            return {
                ...state,
                loading: true,
            };
        });
    },
});
export const AccountActions = accountSlice.actions;
