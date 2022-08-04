import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchActors } from "../ActorsApi/services/services";
import { Actors, ActorsState } from "../types/ActorsPageType";

const initialState: ActorsState = {
  actors: [],
  isFetching: false,
  error: "",
  page: 1,
  pages: 1,
  selectedId: 0,
};

export const actorsSlice = createSlice({
  name: "actors",
  initialState,
  reducers: {
    select(state, action: PayloadAction<number>) {
      state.selectedId = action.payload;
    },
  },
  extraReducers: {
    [fetchActors.pending.type]: (state) => {
      state.isFetching = true;
    },
    [fetchActors.fulfilled.type]: (state, action: PayloadAction<Actors>) => {
      state.isFetching = false;
      state.error = "";
      state.actors = action.payload.results;
      state.page = action.payload.page;
      state.pages = action.payload.total_pages;
    },
    [fetchActors.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});
