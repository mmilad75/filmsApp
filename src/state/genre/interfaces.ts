export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: string | boolean;
  vote_average: number;
  vote_count: number;
}

export interface Reducer {
  id: GenreReducer[];
}

export interface GenreReducer {
  data: [];
  error: string;
}

interface ActionSetGenreMovies {
  type: string;
  payload: SetGenreMoviePayloadAction;
}

export interface SetGenreMoviePayloadAction {
  id: number;
  data: Movie[] | [];
  error: string;
  page: number;
}

export interface Error {
  type: string;
  payload: any;
}

export type Action = ActionSetGenreMovies;
