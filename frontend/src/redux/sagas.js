import { call, put, takeLatest } from 'redux-saga/effects';
import { loginAPI, fetchDataAPI, createItemAPI, updateItemAPI, deleteItemAPI } from '../services/api';
import {
  LOGIN_REQUEST, loginSuccess, loginFailure,
  FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure,
  CREATE_ITEM_REQUEST, createItemSuccess, createItemFailure,
  UPDATE_ITEM_REQUEST, updateItemSuccess, updateItemFailure,
  DELETE_ITEM_REQUEST, deleteItemSuccess, deleteItemFailure
} from './actions';

// Worker saga: handle login
function* handleLogin(action) {
  try {
    const response = yield call(loginAPI, action.payload);
    const token = response.data.token;
    localStorage.setItem('token', token);
    yield put(loginSuccess(token));
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message));
  }
}

// Worker saga: handle data fetching
function* handleFetchData() {
  try {
    const response = yield call(fetchDataAPI, localStorage.getItem('token'));
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.response?.data?.message));
  }
}

// Create item saga
function* handleCreateItem(action) {
  try {
    const { token, data } = action.payload;
    const response = yield call(createItemAPI, token, data);
    yield put(createItemSuccess(response.data));
  } catch (error) {
    yield put(createItemFailure(error.response?.data?.message));
  }
}

// Update item saga
function* handleUpdateItem(action) {
  try {
    const { token, id, updatedData } = action.payload;
    const response = yield call(updateItemAPI, token, id, updatedData);
    yield put(updateItemSuccess(response.data));
  } catch (error) {
    yield put(updateItemFailure(error.response?.data?.message));
  }
}

// Delete item saga
function* handleDeleteItem(action) {
  try {
    const { token, id } = action.payload;
    yield call(deleteItemAPI, token, id);
    yield put(deleteItemSuccess(id));
  } catch (error) {
    yield put(deleteItemFailure(error.response?.data?.message));
  }
}

// Watcher saga: watch for login and data fetching actions
function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
  yield takeLatest(FETCH_DATA_REQUEST, handleFetchData);
  yield takeLatest(CREATE_ITEM_REQUEST, handleCreateItem);
  yield takeLatest(UPDATE_ITEM_REQUEST, handleUpdateItem);
  yield takeLatest(DELETE_ITEM_REQUEST, handleDeleteItem);
}

export default rootSaga;
