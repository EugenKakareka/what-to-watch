import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../MoviesApi";

export const fetchMovies = createAsyncThunk("movies/fetchAll", async (page: number, thunkAPI) => {
  try {
    const actors = await getMovies(page);
    return actors;
  } catch (e) {
    return thunkAPI.rejectWithValue("Error: Can't find any page");
  }
});