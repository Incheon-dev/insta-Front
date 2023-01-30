import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type testSliceState = {
    value: number;
};
type ModalButton = {
    text: string;
    onClick: (value?: any) => void;
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
export const testSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalState>) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        closeModal: (state: ModalState) => {
            state.visible = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const testActions = testSlice.actions;
