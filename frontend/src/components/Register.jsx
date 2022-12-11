import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Head from '../components/Head.jsx';
import Foot from '../components/Foot.jsx';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const navigate = useNavigate();
  const { isError, isLoading, message } = useSelector((state) => state.auth);

  const daftar = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://api.sipekan.my.id/register', {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      alert('Daftar Berhasil, Silahkah Login');
      navigate('/login');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.pesan);
      }
    }
  };
  return (
    <>
      <Head />
      <main>
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
                  <h3 className="text-center font-weight-light my-4">Daftar</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={daftar}>
                    <div className="form-floating mb-3">
                      <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                      <label for="inputName">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
                      <label for="inputEmail">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                      <label for="inputPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input className="form-control" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
                      <label for="inputPassword">Confirm Password</label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <button className="btn btn-primary" type="submit">
                        {isLoading ? 'Loading.....' : 'Daftar'}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center py-3">
                  <div className="small">
                    <Link to="/login">already have an account? Sign in!</Link>
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

export default Register;
