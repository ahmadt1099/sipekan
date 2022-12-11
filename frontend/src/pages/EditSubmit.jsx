import React, { useEffect } from 'react';
import Layout from './Layout.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice.js';
import FormEditSubmit from '../components/FormEditSubmit.jsx';

const EditSubmit = () => {
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
    // if (user && user.role !== 'admin') {
    //   navigate('/forbidden');
    // }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <FormEditSubmit />
    </Layout>
  );
};

export default EditSubmit;
