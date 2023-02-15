import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApiPost, FetchApiGet } from "../network";

export const getUserList = createAsyncThunk("users/getuserList", async () => {
    return await FetchApiGet("/api/user/list");
});
