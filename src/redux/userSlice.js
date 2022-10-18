import {createSlice} from "@reduxjs/toolkit";

export  const viewSlice = createSlice({
    name: "listView",
    initialState: {
        view: true,
    },

    reducers: {
        toggleView: (state) => {
            state.view = !state.view;
        }
    }
})

export const toggleView = viewSlice.actions.toggleView;
export default viewSlice.reducer;
