import { combineReducers } from "redux";
import { actorsSlice } from "../components/Actors/reducer/ActorsSlice";
import { actorDetailSlice } from "../components/ActorDetail/reducer/ActorDetailSlice";

export const rootReducer = combineReducers({
  actors: actorsSlice.reducer,
  actorDetail: actorDetailSlice.reducer,
});
