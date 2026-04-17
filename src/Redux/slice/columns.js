import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getColumns = createAsyncThunk(
    "columns/get"
    , async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/datalens/columns/${data.datasetId}/${data.column}`)

            console.log(res.data)

            return res.data
        } catch (err) {
            console.log(err)

            if (err?.response?.status == 415) {
                return rejectWithValue({
                    title: "File Error",
                    message: "Failed to load dataset due to file error"
                })
            } else if(err?.response?.status == 404 ){
                return rejectWithValue({
                    title: "Column Error",
                    message: `Failed to load Column '${data.column} from dataset'`
                })
            }

            return rejectWithValue({
                title: "Network Error",
                message: "Their was an issue on completing request"
            })
        }
    }
)

export const columnPagination = createAsyncThunk(
    "column/pagination",
    async (data, { rejectWithValue }) => {
        try{

            const res = await axios.get(`http://127.0.0.1:8000/datalens/columns/pagination/${data.dataset_id}/${data.column}/${data.page}/${data.limit}`)

            console.log(res.data)

            return res.data
        } catch(err){
            console.log(err)

            if(err?.response?.status == 404){
                return rejectWithValue({
                    title: "Loading Error",
                    message: "Their was an issue trying to get column content"
                })
            } else if(err?.response?.status == 415 ){
                return rejectWithValue({
                    title: "File Error",
                    message: "Failed to load file content"
                })
            }

            return rejectWithValue({
                title: "Netwrok Error",
                message: "Failed to complete request"
            })
        }
    }
)


const initialState = {
    loading: false,
    error: null,
    data: null,
    loadingPgination: false,
    paginationData: null
}

export const columnsSlice = createSlice({
    name: "columns",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getColumns.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getColumns.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(getColumns.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        builder.addCase(columnPagination.pending, (state) => {
            state.loadingPgination = true
        })
        builder.addCase(columnPagination.fulfilled, (state, action) => {
            state.loadingPgination = false
            state.paginationData = action.payload
        })
        builder.addCase(columnPagination.rejected, (state) => {
            state.loadingPgination = false
        })
    }
})

export const selectLoadingColumn = (state) => state.column.loading
export const selectColumnData = (state) => state.column.data
export const selectLoadingColumnPagination = (state) => state.column.loadingPgination
export const selectColumnPaginationData = (state) => state.column.paginationData

export default columnsSlice.reducer

