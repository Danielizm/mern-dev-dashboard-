import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  let isLogin = localStorage.getItem('token')?true:false;
  if(isLogin){
    return (<Navigate to='/dashboard' />)
  }else{
    return 
    (<div>
      <h1>Login</h1>
      <LoginForm />
    </div>)
  }
};

export default LoginPage;
