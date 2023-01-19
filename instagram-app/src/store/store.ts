import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { user } from "./reducer";

const rootReducer = combineReducers({
    user,
});

export type reducerState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
});
