export interface ActorsState {
  actors: Actor[];
  isFetching: boolean;
  error: string;
  pages: number;
  page: number;
}

export interface Film {
  media_type: string;
  original_title: string;
  original_name: string;
  release_date: string;
  poster_path: string;
  id: number;
}

export interface Actor {
  id: number;
  name: string;
  known_for: Film[];
  profile_path: string;
}

export interface Actors {
  results: Actor[];
  page: number;
  total_pages: number;
}
