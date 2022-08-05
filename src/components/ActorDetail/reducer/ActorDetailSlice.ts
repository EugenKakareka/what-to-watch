import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchActor } from "../ActorDetailApi/services/services";
import { Actor, ActorState } from "../types/ActorDetailTypes";

const initialState: ActorState = {
  actor: {
    id: 0,
    name: "",
    birthday: "",
    place_of_birth: "",
    profile_path: "",
    biography: "",
  },
  isFetching: false,
  error: "",
};

export const actorDetailSlice = createSlice({
  name: "actorDetail",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchActor.pending.type]: (state) => {
      state.isFetching = true;
    },
    [fetchActor.fulfilled.type]: (state, action: PayloadAction<Actor>) => {
      state.isFetching = false;
      state.error = "";
      state.actor = action.payload;
    },
    [fetchActor.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});
