import { Movies } from "../../Movies/types/MoviesType";

export enum searchActionTypes {
  SEARCH_SUCCESS = "SEARCH SUCCESS",
  SEARCH_FAIL = "SEARCH FAIL",
  SEARCH_RESET = "SEARCH_RESET",
}

export interface searchSuccessAction {
  type: searchActionTypes.SEARCH_SUCCESS;
  payload: {
    movies: Movies;
    query: string;
  };
}

export interface searchFailAction {
  type: searchActionTypes.SEARCH_FAIL;
}

export interface searchResetAction {
  type: searchActionTypes.SEARCH_RESET;
}

export type searchActions = searchSuccessAction | searchFailAction | searchResetAction;

export const searchSuccessAction = (movies: Movies, query: string): searchSuccessAction => ({
  type: searchActionTypes.SEARCH_SUCCESS,
  payload: {
    movies,
    query,
  },
});

export const searchFailAction = (): searchFailAction => ({
  type: searchActionTypes.SEARCH_FAIL,
});

export const searchResetAction = (): searchResetAction => ({
  type: searchActionTypes.SEARCH_RESET,
});
