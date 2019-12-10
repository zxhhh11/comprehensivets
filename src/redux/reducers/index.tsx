import { combineReducers } from 'redux';
import articleReducer from './article';
import sagaTestReducer from './sagatest';

const rootReducer = combineReducers({
  article: articleReducer,
  sagaTest:sagaTestReducer
});
export default rootReducer;