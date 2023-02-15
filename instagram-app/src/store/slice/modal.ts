import { ModalMessage } from "./../../styled/messageModal.styled";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type modalSliceState = {
    value: number;
};
type ModalButton = {
    text: string;
    onClick?: (value?: any) => void;
    style?: React.CSSProperties;
};
export type ModalState = {
    title?: string;
    message?: string;
    ok?: ModalButton;
    cancel?: ModalButton;
    width?: number;
    style?: any;
    visible?: boolean;
};

const initialState: ModalState = {
    visible: false,
    title: "",
    message: "",
};
export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalState>) => {
            return {
                ...state,
                ...action.payload,
                visible: true,
            };
        },
        closeModal: (state: ModalState) => {
            state.visible = false;
        },
        modalInfo: (state, action: PayloadAction<ModalState["message"]>) => {
            return {
                ...state,
                message: action.payload,
                visible: true,
                ok: { text: "확인" },
            };
        },
    },
});
export const modalActions = modalSlice.actions;
