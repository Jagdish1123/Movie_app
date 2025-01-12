import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: null,
};

export const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {
        loadtv: (state, action) => {
            state.info = action.payload;
        },
        // eslint-disable-next-line no-unused-vars
        removetv: (state, action) => {
            state.info = null;
        },
    },
});

export const { loadtv, removetv } = tvSlice.actions;

export default tvSlice.reducer;