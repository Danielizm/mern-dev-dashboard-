import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../redux/actions';
import DataTable from '../components/DataTable';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && <DataTable data={data} />}
    </div>
  );
};

export default DashboardPage;
