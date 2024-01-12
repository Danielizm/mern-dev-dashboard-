import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../redux/actions';
import DataTable from '../components/DataTable';
import LogoutButton from '../components/LogoutButton';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  const isLogin = localStorage.getItem('token')?true:false;
  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);
  
  if(isLogin){
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <LogoutButton />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && <DataTable data={data} />}
    </div>
  );
  }else{
    return <Navigate to='/' />
  }
};

export default DashboardPage;
