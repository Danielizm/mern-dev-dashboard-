import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_REQUEST, loginSuccess, loginFailure,
  FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure
} from './actions';

// API calls
const loginApi = (credentials) => axios.post('/api/auth/login', credentials);
const fetchDataApi = () => {
  const token = localStorage.getItem('token');
  return axios.get('/api/data', {
    headers: { Authorization: `Bearer ${token}` }
  });
};

// Worker saga: handle login
function* handleLogin(action) {
  try {
    const response = yield call(loginApi, action.payload);
    const token = response.data.token;
    localStorage.setItem('token', token);
    yield put(loginSuccess(token));
  } catch (error) {
    yield put(loginFailure(error.response.data.message));
  }
}

// Worker saga: handle data fetching
function* handleFetchData() {
  try {
    const response = yield call(fetchDataApi);
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.response.data.message));
  }
}

// Watcher saga: watch for login and data fetching actions
function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
  yield takeLatest(FETCH_DATA_REQUEST, handleFetchData);
}

export default rootSaga;
