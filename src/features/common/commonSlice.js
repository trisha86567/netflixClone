import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../helper/axios';
import { requests } from '../../helper/requests';


const initialState = {
    videoDetails: {
        status: 'idle',
        error: '',
        data: null
    },
    searchString: ''
    // videoByGenre:{
    //   status: 'idle',
    //   error: '',
    //   data: null
    // }
};


export const fetchVideoDetails = createAsyncThunk(
  'movie/fetchVideoDetails',
  async (param) => {
    const response = await axios(requests.getDetails(param))
    return response.data;
  }
);

export const fetchByGenre = createAsyncThunk(
  'movie/fetchByGenre',
  async (param) => {
    const response = await axios(requests.getDetails(param))
    return response.data;
  }
);

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    searchQuery: (state, action)=>{
      state.searchString = action.payload
    }
  },  
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoDetails.pending, (state) => {
        state.videoDetails.status = 'loading';
      })
      .addCase(fetchVideoDetails.fulfilled, (state, action) => {
        state.videoDetails.status = 'success';
        state.videoDetails.data = action.payload;
      })
      .addCase(fetchVideoDetails.rejected, (state, action)=>{
        state.videoDetails.status = 'failed';
        state.videoDetails.error = action.error.message;
      })
  },
});

 export const { searchQuery } = commonSlice.actions;

export const videoDetailsSelector = (state) => state.common.videoDetails;
export default commonSlice.reducer;
