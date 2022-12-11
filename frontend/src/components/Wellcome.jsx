import React from 'react';
import { useSelector } from 'react-redux';

const Wellcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
      </div>
      <h2 className="subtitle">
        Welcome back{' '}
        <span className="text-uppercase">
          <strong>{user && user.name}</strong>
        </span>
      </h2>
    </div>
  );
};

export default Wellcome;
