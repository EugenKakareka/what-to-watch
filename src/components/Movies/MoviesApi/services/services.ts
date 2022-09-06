import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies, searchMovies } from "../MoviesApi";

export const fetchMovies = createAsyncThunk("movies/fetchAll", async (page: number, thunkAPI) => {
  try {
    const movies = await getMovies(page);
    return movies;
  } catch (e) {
    return thunkAPI.rejectWithValue("Error: Can't find any page");
  }
});

export const searchMovie = createAsyncThunk(
  "movies/search",
  async ({ query, page }: { query: string; page: number }, thunkAPI) => {
    try {
      const moviesByName = await searchMovies(query, page);
      return moviesByName;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error: Can't find any page");
    }
  },
);
