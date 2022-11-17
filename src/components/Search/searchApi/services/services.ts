import { Dispatch } from "redux";
import { searchActions, searchFailAction, searchSuccessAction } from "../../reducer/searchAction";
import { searchMovies } from "../searchApi";

export const searchMovie = (query: string, page?: number) => {
  return async (dispatch: Dispatch<searchActions>) => {
    try {
      const movies = await searchMovies(query, page);
      dispatch(searchSuccessAction(movies, query));
    } catch (e) {
      dispatch(searchFailAction());
    }
  };
};
