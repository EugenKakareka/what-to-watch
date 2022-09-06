export interface MoviesState {
  movies: Movie[];
  isFetching: boolean;
  error: string;
  page: number;
  pages: number;
  search:string
}

export interface Movie {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
}

export interface Movies {
  results: Movie[];
  page: number;
  total_pages: number;
}
