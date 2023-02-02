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
};
export const modalSlice = createSlice({
    name: "counter",
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
    },
});
export const modalActions = modalSlice.actions;
