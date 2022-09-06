import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMovie } from "../MovieDeatilApi/services/services";
import { Movie, MovieState } from "../types/MovieDetailTypes";

const initialState: MovieState = {
  movie: {
    id: 0,
    original_title: "",
    title: "",
    overview: "",
    poster_path: "",
    tagline: "",
    genres: [{ name: "" }],
    budget: 0,
    revenue: 0,
    runtime: 0,
  },
  isFetching: false,
  error: "",
};

export const movieDetailSlice = createSlice({
  name: "movieDeatail",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovie.pending.type]: (state) => {
      state.isFetching = true;
    },
    [fetchMovie.fulfilled.type]: (state, action: PayloadAction<Movie>) => {
      state.isFetching = false;
      state.error = "";
      state.movie = action.payload;
    },
    [fetchMovie.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});
