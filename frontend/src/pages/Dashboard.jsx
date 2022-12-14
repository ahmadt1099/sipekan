import React, { useEffect } from 'react';
import Layout from './Layout.jsx';
import Wellcome from '../components/Wellcome.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice.js';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  }, [isError, navigate]);

  return (
    <Layout>
      <Wellcome />
    </Layout>
  );
};

export default Dashboard;
