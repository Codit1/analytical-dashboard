import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// func to send/upload dataset to backend
export const uploadDataset = createAsyncThunk(
    "dataset/upload",
    async (data, { rejectWithValue }) => {
        try{

            const res = await axios.post("http://127.0.0.1:8000/upload/file", data)

            console.log(res.data)

            return res.data
        } catch( err) {
            console.log(err)

            if(err?.response?.status == 415){
                return rejectWithValue({
                    title: "File Error",
                    message: "File type not supported, supported files(.json, .xlsx, .xls, .csv)"
                })
            }

            if(err?.response?.status == 400){
                return rejectWithValue({
                    title: "File Error",
                    message: "Unable to read file, please check file format"
                })
            }

            return rejectWithValue({
                title: "Server Error",
                message: "Unable to connect to server"
            })
        }
    }
)

// func to get dataset summary
export const getDatasetSummary = createAsyncThunk(
    "dataset/summary",
    async (id, { rejectWithValue }) => {
        try{
            const res = await axios.get(`http://127.0.0.1:8000/upload/summary/${id}`)

            console.log(res.data)

            return res.data
        } catch( err) {
            console.log(err)

            if(err?.response?.status == 415){
                return rejectWithValue({
                    title: "File Error",
                    message: "File type not supported, supported files(.json, .xlsx, .xls, .csv)"
                })
            }

            if(err?.response?.status == 404){
                return rejectWithValue({
                    title: "",
                    message: "Couldn't find the file with the id"
                })
            }
        }
    }
)

const initialState = {
    uploading: false,
    error: null,
    data: null,
}

const uploadSlice = createSlice({
    name: "upload",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(uploadDataset.pending, (state) => {
            state.uploading = true
        })
        builder.addCase(uploadDataset.fulfilled, (state, action) => {
            state.uploading = false
            state.data = action.payload
        })
        builder.addCase(uploadDataset.rejected, (state, action) => {
            state.uploading = false
            state.error = action.payload
        })
        builder.addCase(getDatasetSummary.pending, (state) => {
            state.data = null
            state.uploading = true
        })
        builder.addCase(getDatasetSummary.fulfilled, (state, action) => {
            state.data = action.payload
            state.uploading = false
        })
        builder.addCase(getDatasetSummary.rejected, (state) => {
            state.data = null
            state.uploading = false
        })
    }
})

export const selectUploadingDataset = (state) => state.upload.uploading
export const selectUploadError = (state) => state.upload.error
export const selectUploadData = (state) => state.upload.data

export default uploadSlice.reducer


