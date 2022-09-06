import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovie } from "../movieDetailApi";

export const fetchMovie = createAsyncThunk("MovieInfo/fetchAll", async (id: number, thunkAPI) => {
  try {
    const actor = await getMovie(id);
    return actor;
  } catch (e) {
    return thunkAPI.rejectWithValue("Error");
  }
});
