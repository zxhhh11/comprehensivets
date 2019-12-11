import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

import {persistStore} from 'redux-persist';

const sagaMiddleWare = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare, logger))


const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare, logger))



//动态执行saga语句 middleware.run(sagas) 必须要在store创建好之后才能执行，在 store 之前执行，程序会报错
sagaMiddleWare.run(rootSaga)

export const persistor = persistStore(store)

export default store