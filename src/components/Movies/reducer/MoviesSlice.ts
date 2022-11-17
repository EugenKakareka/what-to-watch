import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesState, Movies } from "../types/MoviesType";
import { fetchMovies } from "../MoviesApi/services/services";

export const initialState: MoviesState = {
  movies: [],
  isFetching: false,
  error: "",
  page: 1,
  pages: 1,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.pending.type]: (state) => {
      state.isFetching = true;
    },
    [fetchMovies.fulfilled.type]: (state, action: PayloadAction<Movies>) => {
      state.isFetching = false;
      state.error = "";
      state.movies = action.payload.results;
      state.page = action.payload.page;
      state.pages = action.payload.total_pages;
    },
    [fetchMovies.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});
