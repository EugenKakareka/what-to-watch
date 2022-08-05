import { createAsyncThunk } from "@reduxjs/toolkit";
import { getActor } from "../ActorDetailApi";

export const fetchActor = createAsyncThunk("actorInfo/fetchAll", async (id: number, thunkAPI) => {
  try {
    const actor = await getActor(id);
    return actor;
  } catch (e) {
    return thunkAPI.rejectWithValue("Error");
  }
});
