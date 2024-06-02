import { createSlice } from "@redux/toolkit";

const initialState = createSlice({
    mode: "light",
    user: null,
    token: null,
    posts: []
})