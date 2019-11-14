import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducer';
import rootSaga from './sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        sagaMiddleware,
        logger,
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
