import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesState, Movies } from "../types/MoviesType";
import { fetchMovies, searchMovie } from "../MoviesApi/services/services";

const initialState: MoviesState = {
  movies: [],
  isFetching: false,
  error: "",
  page: 1,
  pages: 1,
  search: "",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    resetSearsh(state) {
      state.search = "";
    },
  },
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
    [searchMovie.pending.type]: (state) => {
      state.isFetching = true;
    },
    [searchMovie.fulfilled.type]: (state, action: PayloadAction<Movies>) => {
      state.isFetching = false;
      state.error = "";
      state.movies = action.payload.results;
      state.page = action.payload.page;
      state.pages = action.payload.total_pages;
    },
  },
});
