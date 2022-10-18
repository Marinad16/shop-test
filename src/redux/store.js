import {configureStore} from "@reduxjs/toolkit";
import viewReducer from "./userSlice"

export default configureStore({
    reducer: {
        listView: viewReducer,
    }
})