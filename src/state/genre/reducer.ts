import {Action, SetGenreMoviePayloadAction} from './interfaces';
import {ActionType} from './types';

const initState = {};

export const genreReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_GENRE_MOVIES:
      const prevStateAsArray: SetGenreMoviePayloadAction[] =
        Object.values(state);
      const dataExistsAlreadyIndex = prevStateAsArray.findIndex(
        (item: any) => item.id === action.payload.id,
      );
      if (dataExistsAlreadyIndex > -1 && action.payload.page === 1) {
        prevStateAsArray.splice(dataExistsAlreadyIndex, 1, action.payload);
      } else if (dataExistsAlreadyIndex > -1 && action.payload.page > 1) {
        prevStateAsArray[dataExistsAlreadyIndex].data = [
          ...prevStateAsArray[dataExistsAlreadyIndex].data,
          ...action.payload.data,
        ];
        prevStateAsArray[dataExistsAlreadyIndex].page =
          prevStateAsArray[dataExistsAlreadyIndex].page + 1;
      } else {
        prevStateAsArray.push(action.payload);
      }
      return prevStateAsArray;

    default:
      return state;
  }
};

export default genreReducer;
