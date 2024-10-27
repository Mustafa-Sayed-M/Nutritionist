import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        openMenu: false,
        faqOpens: [1]
    },
    reducers: {
        handleMenu: (state, action) => {
            state.openMenu = action.payload;
        },
        handleFaqOpens: (state, action) => {
            const index = state.faqOpens.indexOf(action.payload);
            if (index === -1) {
                state.faqOpens.push(action.payload);
            } else {
                state.faqOpens.splice(index, 1);
            }
        }
    },
});

export default appSlice.reducer;

export const {
    handleMenu,
    handleFaqOpens
} = appSlice.actions;