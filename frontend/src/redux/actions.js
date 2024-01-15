// Action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Create Item Actions
export const CREATE_ITEM_REQUEST = 'CREATE_ITEM_REQUEST';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
export const CREATE_ITEM_FAILURE = 'CREATE_ITEM_FAILURE';

// Update Item Actions
export const UPDATE_ITEM_REQUEST = 'UPDATE_ITEM_REQUEST';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE';

// Delete Item Actions
export const DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

// Login actions
export const loginRequest = (credentials) => ({ type: LOGIN_REQUEST, payload: credentials });
export const loginSuccess = (token) => ({ type: LOGIN_SUCCESS, payload: token });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });


// Data fetching actions
export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
export const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });

export const createItemRequest = (token, data) => ({type: CREATE_ITEM_REQUEST,payload: { token, data }});
export const createItemSuccess = (data) => ({type: CREATE_ITEM_SUCCESS,payload: data});
export const createItemFailure = (error) => ({type: CREATE_ITEM_FAILURE,payload: error});
  
export const updateItemRequest = (token, id, updatedData) => ({type: UPDATE_ITEM_REQUEST,payload: { token, id, updatedData }});
export const updateItemSuccess = (data) => ({type: UPDATE_ITEM_SUCCESS,payload: data});
export const updateItemFailure = (error) => ({type: UPDATE_ITEM_FAILURE,payload: error});
  
export const deleteItemRequest = (token, id) => ({type: DELETE_ITEM_REQUEST,payload: { token, id }});
export const deleteItemSuccess = (data) => ({type: DELETE_ITEM_SUCCESS,payload: data});
export const deleteItemFailure = (error) => ({type: DELETE_ITEM_FAILURE,payload: error});