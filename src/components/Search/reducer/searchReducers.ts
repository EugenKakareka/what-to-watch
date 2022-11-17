import { Movie } from "../../Movies/types/MoviesType";
import { searchActions, searchActionTypes } from "./searchAction";

export interface SearchState {
  movies: Movie[];
  page: number;
  pages: number;
  search: string;
}

export const initialState: SearchState = {
  movies: [],
  page: 1,
  pages: 1,
  search: "",
};

export const searchReducer = (state: SearchState = initialState, action: searchActions) => {
  switch (action.type) {
    case searchActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        movies: [...action.payload.movies.results],
        page: action.payload.movies.page,
        pages: action.payload.movies.total_pages,
        search: action.payload.query,
      };
    case searchActionTypes.SEARCH_FAIL:
      return {
        ...state,
        error: true,
      };
    case searchActionTypes.SEARCH_RESET:
      return {
        ...state,
        search: "",
      };
    default:
      return state;
  }
};
