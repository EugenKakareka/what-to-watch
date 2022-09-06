export interface MovieState {
  movie: Movie;
  isFetching: boolean;
  error: string;
}

export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  tagline: string;
  genres: [{ name: string }];
  budget: number;
  revenue: number;
  runtime: number;
}
