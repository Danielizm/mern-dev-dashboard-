import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const isLogin = localStorage.getItem('token')?true:false;
    return isLogin ? (<Navigate to='/dashboard' />) :
    (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
    )
};

export default LoginPage;
