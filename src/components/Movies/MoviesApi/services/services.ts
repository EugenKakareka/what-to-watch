import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../MoviesApi";

export const fetchMovies = createAsyncThunk("movies/fetchAll", async (page: number, thunkAPI) => {
  try {
    const movies = await getMovies(page);
    return movies;
  } catch (e) {
    return thunkAPI.rejectWithValue("Error: Can't find any page");
  }
});
