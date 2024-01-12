import React from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions';  // or create a logout action
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove token from localStorage
    dispatch(loginSuccess(null));      // Clear token from Redux state
    navigate('/');                     // Redirect to login page
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
