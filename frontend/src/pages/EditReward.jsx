import React, { useEffect } from 'react';
import Layout from './Layout.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice.js';
import FormEditReward from '../components/FormEditReward.jsx';

const EditReward = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate('/');
    }
    if (user && user.role !== 'admin') {
      navigate('/forbidden');
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <FormEditReward />
    </Layout>
  );
};

export default EditReward;
