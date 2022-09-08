import {Dispatch} from 'react';
import {getGenreMoviesApi} from '../../apis/genres';
import {Action, Error, Movie, SetGenreMoviePayloadAction} from './interfaces';
import {ActionType} from './types';

export const getGenreMovies =
  (genreId: number, page: number = 1) =>
  async (dispatch: Dispatch<Movie[] | Error>) => {
    try {
      const res = await getGenreMoviesApi(genreId, page);
      dispatch(
        setGenreMovies({
          id: genreId,
          data: res,
          error: '',
          page,
        }),
      );
    } catch (e: any) {
      dispatch(
        setGenreMovies({
          id: genreId,
          data: [],
          error: e,
          page: 1,
        }),
      );
    }
  };

export const setGenreMovies = (
  payload: SetGenreMoviePayloadAction,
): Action => ({
  type: ActionType.SET_GENRE_MOVIES,
  payload,
});

export const setError = (payload: any): Error => ({
  type: ActionType.SET_ERROR,
  payload,
});
