import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension/';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(rootReducer, composedEnhancers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store};
