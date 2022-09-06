import { combineReducers } from "redux";
import { actorsSlice } from "../components/Actors/reducer/ActorsSlice";
import { actorDetailSlice } from "../components/ActorDetail/reducer/ActorDetailSlice";
import { moviesSlice } from "../components/Movies/reducer/MoviesSlice";
import { movieDetailSlice } from "../components/MovieDetail/reducer/MovieDetailSlice";

export const rootReducer = combineReducers({
  actors: actorsSlice.reducer,
  actorDetail: actorDetailSlice.reducer,
  movies: moviesSlice.reducer,
  movieDeatail: movieDetailSlice.reducer,
});
