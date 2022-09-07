import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import posts from './reducers/posts';

const rootReducer = combineReducers({
  auth,
  posts,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
