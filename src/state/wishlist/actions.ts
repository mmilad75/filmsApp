import {Movie} from '../genre/interfaces';
import {ActionType} from './types';

export const setWishlist = (payload: Movie) => ({
  type: ActionType.SET_WISHLIST,
  payload,
});
