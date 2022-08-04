import { combineReducers } from "redux";
import { actorsSlice } from "../components/Actors/reducer/ActorsSlice";

export const rootReducer = combineReducers({
  actors: actorsSlice.reducer
});