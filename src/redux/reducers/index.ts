import { combineReducers } from 'redux';
import articleReducer from './article';
import sagaTestReducer from './sagatest';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import commonReducer from './common'
import userReducer from './user';
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};
const rootReducer = combineReducers({
  // article: articleReducer,
  // sagaTest:sagaTestReducer
  common:persistReducer(persistConfig,commonReducer),
  article:persistReducer(persistConfig, articleReducer),
  sagaTest:persistReducer(persistConfig, sagaTestReducer),
  user:persistReducer(persistConfig,userReducer)
});
export default rootReducer;