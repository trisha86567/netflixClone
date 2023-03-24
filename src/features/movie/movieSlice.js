import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../helper/axios';
import { requests } from '../../helper/requests';


const initialState = {
    headerMovies: {
        status: 'idle',
        error: '',
        data: null
    },
    topRatedMovies:{
      status: 'idle',
      error: '',
      data: null
    },
    popularMovies:{
      status: 'idle',
      error: '',
      data: null
    },
    upcomingMovies:{
      status: 'idle',
      error: '',
      data: null
    },
    nowPlayingMovies:{
      status: 'idle',
      error: '',
      data: null
    },
    movieDetails:{
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
export const fetchHeaderMovies = createAsyncThunk(
  'movie/fetchHeaderMovies',
  async () => {
    const response = await axios(requests.getNetflixOriginals)
    return response.data;
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  'movie/fetchTopRatedMovies',
  async (type) => {
    const response = await axios(requests.getMovie(type))
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchPopularMovies = createAsyncThunk(
  'movie/fetchPopularMovies',
  async (type) => {
    const response = await axios(requests.getMovie(type))
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchUpcomingMovies = createAsyncThunk(
  'movie/fetchUpcomingMovies',
  async (type) => {
    const response = await axios(requests.getMovie(type))
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchNowPlayingMovies = createAsyncThunk(
  'movie/fetchNowPlayingMovies',
  async (type) => {
    const response = await axios(requests.getMovie(type))
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchMovieDetails = createAsyncThunk(
  'movie/fetchMovieDetails',
  async (id) => {
    const response = await axios(requests.getMovieDetails(id))
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    
  },  
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeaderMovies.pending, (state) => {
        state.headerMovies.status = 'loading';
      })
      .addCase(fetchHeaderMovies.fulfilled, (state, action) => {
        state.headerMovies.status = 'success';
        state.headerMovies.data = action.payload;
      })
      .addCase(fetchHeaderMovies.rejected, (state, action)=>{
        state.headerMovies.status = 'failed';
        state.headerMovies.error = action.error.message;
      })
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.topRatedMovies.status = 'loading';
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies.status = 'success';
        state.topRatedMovies.data = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action)=>{
        state.topRatedMovies.status = 'failed';
        state.topRatedMovies.error = action.error.message;
      })
      .addCase(fetchPopularMovies.pending, (state) => {
        state.popularMovies.status = 'loading';
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popularMovies.status = 'success';
        state.popularMovies.data = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action)=>{
        state.popularMovies.status = 'failed';
        state.popularMovies.error = action.error.message;
      })
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.upcomingMovies.status = 'loading';
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.upcomingMovies.status = 'success';
        state.upcomingMovies.data = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action)=>{
        state.upcomingMovies.status = 'failed';
        state.upcomingMovies.error = action.error.message;
      })
      .addCase(fetchNowPlayingMovies.pending, (state) => {
        state.nowPlayingMovies.status = 'loading';
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.nowPlayingMovies.status = 'success';
        state.nowPlayingMovies.data = action.payload;
      })
      .addCase(fetchNowPlayingMovies.rejected, (state, action)=>{
        state.nowPlayingMovies.status = 'failed';
        state.nowPlayingMovies.error = action.error.message;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.movieDetails.status = 'loading';
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.movieDetails.status = 'success';
        state.movieDetails.data = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action)=>{
        state.movieDetails.status = 'failed';
        state.movieDetails.error = action.error.message;
      })
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const headerMoviesSelector = (state) => state.movie.headerMovies;
export const topRatedMoviesSelector = (state) => state.movie.topRatedMovies;
export const popularMoviesSelector = (state) => state.movie.popularMovies;
export const upcomingMoviesSelector = (state) => state.movie.upcomingMovies;
export const nowPlayingMoviesSelector = (state) => state.movie.nowPlayingMovies;
export const movieDetailsSelector = (state) => state.movie.movieDetails;
export default movieSlice.reducer;
