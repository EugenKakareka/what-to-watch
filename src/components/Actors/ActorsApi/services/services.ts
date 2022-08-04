import { createAsyncThunk } from "@reduxjs/toolkit";
import { getActors } from "../ActorsApi";

export const fetchActors = createAsyncThunk("actors/fetchAll", async (page: number, thunkAPI) => {
  try {
    const actors = await getActors(page);
    return actors;
  } catch (e) {
    return thunkAPI.rejectWithValue("Error: Can't find any page");
  }
});
