import { configureStore } from "@reduxjs/toolkit";
import uploadReducer from "./slice/uploadDataset"
import paginationReducer from "./slice/pagination"
import columnReducer from "./slice/columns"

export const store = configureStore({
    reducer: {
        upload: uploadReducer,
        pagination: paginationReducer,
        column: columnReducer
    }
})