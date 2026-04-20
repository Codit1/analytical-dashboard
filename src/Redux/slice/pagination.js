import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getDatasetPagination = createAsyncThunk(
    "dataset/get",
    async (data, { rejectWithValue }) => {
        try{
            const res = await axios.post(`${API_URL}/upload/values/${data.dataset_id}/${data.page}/${data.limit}`)

            console.log(res.data)

            return res.data
        } catch( err) {
            console.log(err)

            if(err?.response?.status == 415){
                return rejectWithValue({
                    title: "File Read Error",
                    message: "Failed to read content of file uploaded. Please try again later."
                })
            } else if(err?.response?.status == 404){
                return rejectWithValue({
                    title: "File Not Found",
                    message: "File not found. Please try again later."
                })
            }

            return rejectWithValue({
                title: "Server Error",
                message: "Unable to connect to server"
            })
        }
    }
)

const initialState = {
    loading: false,
    data: null,
    error: null,
}


export const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDatasetPagination.pending, (state) => {
                state.loading = true
            })
            .addCase(getDatasetPagination.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(getDatasetPagination.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})


export const selectLoadingDatasetPagination = (state) => state.pagination.loading
export const selectDatasetPagination = (state) => state.pagination.data
export const selectErrorDatasetPagination = (state) => state.pagination.error


export default paginationSlice.reducer

