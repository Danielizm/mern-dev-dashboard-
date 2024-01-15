import { combineReducers } from 'redux';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
  CREATE_ITEM_REQUEST, CREATE_ITEM_SUCCESS, CREATE_ITEM_FAILURE,
  UPDATE_ITEM_REQUEST, UPDATE_ITEM_SUCCESS, UPDATE_ITEM_FAILURE,
  DELETE_ITEM_REQUEST, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE
} from './actions';

// Authentication reducer
const authReducer = (state = { token: null, loading: false, error: null }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, loading: false };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Data fetching reducer
const dataReducer = (state = { data: [], loading: false, error: null }, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
      // Create item cases
    case CREATE_ITEM_REQUEST:
      return { ...state, loading: true };
    case CREATE_ITEM_SUCCESS:
      return { ...state, loading: false, data: [...state.data, action.payload] };  // Add new item to list
    case CREATE_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };
      // Update item cases
    case UPDATE_ITEM_REQUEST:
      return { ...state, loading: true };
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.map(item => item._id === action.payload._id ? action.payload : item)  // Replace updated item
      };
    case UPDATE_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
      // Delete item cases
    case DELETE_ITEM_REQUEST:
      return { ...state, loading: true };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter(item => item._id !== action.payload)  // Remove deleted item from list
      };
    case DELETE_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };
  }
};

// Root reducer
export const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer
});

//export default rootReducer;
