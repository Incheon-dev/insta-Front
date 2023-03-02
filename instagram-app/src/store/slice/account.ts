// redux/slice/AccountSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { onLoginSuccess } from "../network";
import {
    validateEmail,
    sendVerificationNumber,
    verifyNumber,
    signUp,
    login,
} from "../asynckThunks/account";
import { UserState } from "../slice/user";
export type accountState = {
    loading: boolean;
    error: string | null;
    useAbleEmail?: boolean;
    isSendVerificationNumber?: boolean | null;
    isVerifyEmail?: boolean | null;
    addUser?: boolean;
    validateEmail?: boolean | null;
    isLogin: boolean;
};

const initialState: accountState = {
    loading: false,
    error: null,
    isSendVerificationNumber: null,
    isVerifyEmail: false,
    useAbleEmail: false,
    addUser: false,
    validateEmail: null,
    isLogin: false,
};

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
        builder.addCase(validateEmail.pending, (state) => {
            return {
                ...state,
                validateEmail: null,
            };
        });
        builder.addCase(
            validateEmail.fulfilled,
            (state, action: PayloadAction<accountState["validateEmail"]>) => {
                let payload = action.payload;
                console.log("payload = ",payload);
                return {
                    ...state,
                    validateEmail: payload,
                };
            }
        );
        builder.addCase(
            validateEmail.rejected,
            (state, action: PayloadAction<any>) => {
                console.log("실패 !", action);
                let payload = action.payload;
                return {
                    ...state,
                    validateEmail: null,
                };
            }
        );
        // sendVerificationNumber
        builder.addCase(sendVerificationNumber.pending, (state) => {
            return {
                ...state,
                loading: true,
                isVerifyEmail: null,
                isSendVerificationNumber: false,
            };
        });
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
                    isSendVerificationNumber: false,
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
                    isVerifyEmail: true,
                };
            }
        );
        builder.addCase(
            verifyNumber.rejected,
            (state, action: PayloadAction<any>) => {
                return {
                    ...state,
                    isVerifyEmail: false,
                };
            }
        );
        // signUp
        builder.addCase(signUp.pending, (state) => {
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
                return {
                    ...state,
                    ...action,
                    addUser: false,
                    isSendVerificationNumber: false,
                    isVerifyEmail: false,
                    error: action.payload.data,
                };
            }
        );
        // login
        builder.addCase(login.pending, (state) => {
            return {
                ...state,
                loading: true,
            };
        });
        builder.addCase(
            login.fulfilled,
            (state, action: PayloadAction<UserState>) => {
                onLoginSuccess(action.payload);
                return {
                    ...state,
                    isLogin: true,
                };
            }
        );
        builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
            let status: number = action.payload.status;
            let msg: string | null = null;
            if (status == 401) msg = "로그인 만료";
            if (status == 500) msg = "아이디 또는 비밀번호를 확인해주세요.";
            return {
                ...state,
                error: msg,
            };
        });
    },
});
export const AccountActions = accountSlice.actions;
