import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApiPost, FetchApiGet ,onLoginSuccess} from "../network";
import { UserState } from "../slice/user";

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
export const signUp = createAsyncThunk(
    "signup",
    async (userInfo: UserState, { rejectWithValue }) => {
        try {
            return await FetchApiPost("/api/account/sign-up", userInfo);
        } catch (error: any) {
            throw rejectWithValue(error.response);
        }
    }
);
export const login = createAsyncThunk(
    "login",
    async (payload: UserState, { rejectWithValue }) => {
        try {
            return await FetchApiPost("/api/account/login", {
                email: payload.email,
                password: payload.password,
            });
        } catch (error: any) {
            throw rejectWithValue(error.response.data);
        }
    }
);