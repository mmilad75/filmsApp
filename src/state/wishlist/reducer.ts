import {Action, Reducer} from './interfaces';
import {ActionType} from './types';

const initState: Reducer = {
  data: [],
};

export const wishlistReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_WISHLIST:
      const prevData = state.data;
      const itemIndex = prevData.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemIndex > -1) {
        prevData.splice(itemIndex, 1);
      } else {
        prevData.push(action.payload);
      }
      return {...state, data: [...prevData]};

    default:
      return state;
  }
};

export default wishlistReducer;
