import {Movie} from '../genre/interfaces';

interface ActionSetWishlist {
  type: string;
  payload: Movie;
}

export interface Reducer {
  data: Movie[];
}

export type Action = ActionSetWishlist;
