import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../helper/axios';
import { requests } from '../../helper/requests';
import { fetchCount } from '../counter/counterAPI';


const initialState = {
    nfOriginals: {
        status: 'idle',
        error: '',
        data: null
    },
    topRatedTv:{
      status: 'idle',
      error: '',
      data: null
    },
    popularTv:{
      status: 'idle',
      error: '',
      data: null
    },
    onAirTvShows:{
      status: 'idle',
      error: '',
      data: null
    },
    onAirTvToday:{
      status: 'idle',
      error: '',
      data: null
    }
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchNetflixOriginals = createAsyncThunk(
  'tv/fetchNetflixOriginals',
  async () => {
    const response = await axios(requests.getNetflixOriginals)
    // The value we return becomes the `fulfilled` action payload
    console.log(response);
    return response.data;
  }
);

export const fetchTopRatedTv = createAsyncThunk(
  'tv/fetchTopRatedTv',
  async (type) => {
    const response = await axios(requests.getTv(type))
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchPopularTv = createAsyncThunk(
  'tv/fetchPopularTv',
  async (type) => {
    const response = await axios(requests.getTv(type))
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchOnAirTv = createAsyncThunk(
  'tv/fetchOnAirTv',
  async (type) => {
    const response = await axios(requests.getTv(type))
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchOnAirTodayTv = createAsyncThunk(
  'tv/fetchOnAirTodayTv',
  async (type) => {
    const response = await axios(requests.getTv(type))
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {},  
  extraReducers: (builder) => {
    builder
      .addCase(fetchNetflixOriginals.pending, (state) => {
        state.nfOriginals.status = 'loading';
      })
      .addCase(fetchNetflixOriginals.fulfilled, (state, action) => {
        state.nfOriginals.status = 'success';
        state.nfOriginals.data = action.payload;
      })
      .addCase(fetchNetflixOriginals.rejected, (state, action)=>{
        state.nfOriginals.status = 'failed';
        state.nfOriginals.error = action.error.message;
      })
      .addCase(fetchTopRatedTv.pending, (state) => {
        state.topRatedTv.status = 'loading';
      })
      .addCase(fetchTopRatedTv.fulfilled, (state, action) => {
        state.topRatedTv.status = 'success';
        state.topRatedTv.data = action.payload;
      })
      .addCase(fetchTopRatedTv.rejected, (state, action)=>{
        state.topRatedTv.status = 'failed';
        state.topRatedTv.error = action.error.message;
      })
      .addCase(fetchPopularTv.pending, (state) => {
        state.popularTv.status = 'loading';
      })
      .addCase(fetchPopularTv.fulfilled, (state, action) => {
        state.popularTv.status = 'success';
        state.popularTv.data = action.payload;
      })
      .addCase(fetchPopularTv.rejected, (state, action)=>{
        state.popularTv.status = 'failed';
        state.popularTv.error = action.error.message;
      })
      .addCase(fetchOnAirTv.pending, (state) => {
        state.onAirTvShows.status = 'loading';
      })
      .addCase(fetchOnAirTv.fulfilled, (state, action) => {
        state.onAirTvShows.status = 'success';
        state.onAirTvShows.data = action.payload;
      })
      .addCase(fetchOnAirTv.rejected, (state, action)=>{
        state.onAirTvShows.status = 'failed';
        state.onAirTvShows.error = action.error.message;
      })
      .addCase(fetchOnAirTodayTv.pending, (state) => {
        state.onAirTvToday.status = 'loading';
      })
      .addCase(fetchOnAirTodayTv.fulfilled, (state, action) => {
        state.onAirTvToday.status = 'success';
        state.onAirTvToday.data = action.payload;
      })
      .addCase(fetchOnAirTodayTv.rejected, (state, action)=>{
        state.onAirTvToday.status = 'failed';
        state.onAirTvToday.error = action.error.message;
      })
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const netflixOrinigals = (state) => state.tv.nfOriginals;
export const topRatedTvVideos = (state) => state.tv.topRatedTv;
export const popularTvVideos = (state) => state.tv.popularTv;
export const onAirTvShowsVideos = (state) => state.tv.onAirTvShows;
export const onAirTvTodayVideos = (state) => state.tv.onAirTvToday;

export default tvSlice.reducer;
