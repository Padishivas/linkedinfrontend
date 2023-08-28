import { createAsyncThunk, createSlice,  } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utls/api";

const postSlice = createSlice({
    name:"posts",
    initialState:{
        value:{
            addpost:{},
            getpost:[],
            deletepost:{}
        }
    },
    reducers:{},
    extraReducers: builder => {
        builder.addCase(addpost.fulfilled, (state,action) => {
            state.value.addpost = action.payload;
            state.error = null
        })
        builder.addCase(addpost.rejected, (state,action) => {
            state.value.addpost = null;
            state.error = action.error;
        })
        builder.addCase(getpost.fulfilled, (state,action) => {
            state.value.getpost = action.payload;
            state.error = null
        })
        builder.addCase(getpost.rejected, (state,action) => {
            state.value.getpost = null;
            state.error = action.error;
        })
        
        
    }
})

export const addpost = createAsyncThunk("/addpost",async(userDetails) => {
    const {data} = await axios.post(baseUrl+"/posts/addpost", userDetails);
    return data;
})
export const getpost = createAsyncThunk("/getpost",async() => {
    const {data} = await axios.get(baseUrl+"/posts/getpost");
    return data;
});



export default postSlice.reducer;