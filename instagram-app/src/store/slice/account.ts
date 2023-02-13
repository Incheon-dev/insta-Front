// redux/slice/AccountSlice.js
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApiPost, FetchApiGet } from "../network";
import { UserState } from "../slice/user";
export type accountState = {
    loading: boolean;
    error: string | null;
    useAbleEmail?: boolean;
    isSendVerificationNumber?: boolean;
    isVerifyEmail?: boolean | null;
    addUser?: boolean;
};

const initialState: accountState = {
    loading: false,
    error: null,
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
export const signUp = createAsyncThunk(
    "signup",
    async (userInfo: UserState, { rejectWithValue }) => {
        try {
            return await FetchApiPost("/api/account/sign-up", userInfo);
        } catch (error: any) {
            console.log(error);
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
                password: payload,
            });
        } catch (error: any) {
            console.log(error);
            throw rejectWithValue(error.response);
        }
    }
);
export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        clearError: (state) => {
            return {
                ...state,
                error: null,
            };
        },
    },
    extraReducers: (builder) => {
        // validateEmail
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
        // sendVerificationNumber
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
        // verifyNumber
        builder.addCase(
            verifyNumber.pending,
            (state, action: PayloadAction<accountState["isVerifyEmail"]>) => {
                return {
                    ...state,
                    loading: true,
                    isVerifyEmail: null,
                };
            }
        );
        builder.addCase(
            verifyNumber.fulfilled,
            (state, action: PayloadAction<accountState["isVerifyEmail"]>) => {
                return {
                    ...state,
                    isVerifyEmail: action.payload,
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
        // signUp
        builder.addCase(signUp.pending, (state, action: PayloadAction) => {
            return {
                ...state,
                loading: true,
                addUser: false,
            };
        });
        builder.addCase(
            signUp.fulfilled,
            (state, action: PayloadAction<UserState>) => {
                return {
                    ...state,
                    ...action,
                    addUser: true,
                };
            }
        );
        builder.addCase(
            signUp.rejected,
            (state, action: PayloadAction<any>) => {
                setTimeout(() => {
                    state.error = null;
                }, 1000);
                return {
                    ...state,
                    ...action,
                    addUser: false,
                    error: action.payload.data,
                };
            }
        );
        // login
        builder.addCase(login.pending, (state, action: PayloadAction) => {
            return {
                ...state,
                loading: true,
            };
        });
        builder.addCase(
            login.fulfilled,
            (state, action: PayloadAction<UserState>) => {
                return {
                    ...state,
                    ...action,
                    addUser: true,
                };
            }
        );
        builder.addCase(
            login.rejected,
            (state, action: PayloadAction<any>) => {
                setTimeout(() => {
                    state.error = null;
                }, 1000);
                return {
                    ...state,
                    error: action.payload.data,
                };
            }
        );
    },
});
export const AccountActions = accountSlice.actions;
