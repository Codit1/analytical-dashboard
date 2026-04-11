import { configureStore } from "@reduxjs/toolkit";
import uploadReducer from "./slice/uploadDataset"

export const store = configureStore({
    reducer: {
        upload: uploadReducer
    }
})