import {combineReducers} from 'redux';
import genreReducer from './genre/reducer';
import wishlistReducer from './wishlist/reducer';

const appReducer = combineReducers({
  genre: genreReducer,
  wishlist: wishlistReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
