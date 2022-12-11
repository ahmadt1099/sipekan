import React, { useEffect } from 'react';
import Layout from './Layout.jsx';
import Userlist from '../components/Userlist.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice.js';

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
    if (user && user.role !== 'admin') {
      navigate('/forbidden');
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <Userlist />
    </Layout>
  );
};

export default User;
