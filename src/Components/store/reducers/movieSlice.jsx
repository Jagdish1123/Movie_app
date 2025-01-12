import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: null,
};

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        loadmovie: (state, action) => {
            state.info = action.payload;
        },
        // eslint-disable-next-line no-unused-vars
        removemovie: (state, action) => {
            state.info = null;
        },
    },
});

export const { loadmovie, removemovie } = movieSlice.actions;

export default movieSlice.reducer;