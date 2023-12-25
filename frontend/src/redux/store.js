import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store and apply the saga middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

// Run the saga middleware
sagaMiddleware.run(rootSaga);

export default store;
