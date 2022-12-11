import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { LoginUser, reset } from '../features/authSlice.js';
import Head from '../components/Head.jsx';
import Foot from '../components/Foot.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user || isSuccess) {
      navigate('/dashboard');
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <>
      <Head />
      <main style={{ minHeight: '75vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              {isError && (
                <div className="alert alert-danger mt-3" role="alert">
                  {message}
                </div>
              )}
              <div className="card bg-info bg-opacity-10 shadow-lg border-0 rounded-lg mt-3">
                <div className="card-header">
                  <h3 className="text-center font-weight-light my-4">Login</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={Auth}>
                    <div className="form-floating mb-3">
                      <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
                      <label>Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                      <label>Password</label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <button className="btn btn-primary" type="submit">
                        {isLoading ? 'Loading.....' : 'Login'}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center py-3">
                  <div className="small">
                    <Link to="/register">Need an account? Sign up!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Foot />
    </>
  );
};

export default Login;
