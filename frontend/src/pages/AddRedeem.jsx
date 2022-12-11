import React, { useEffect } from 'react';
import Layout from './Layout.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice.js';
import FormPostRedeem from '../components/FormAddRedeem.jsx';

const AddRedeem = () => {
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
    if (user && user.role !== 'user') {
      navigate('/forbidden');
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <FormPostRedeem />
    </Layout>
  );
};

export default AddRedeem;
