import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [point, setPoint] = useState('');
  const [role, setRole] = useState('');
  const [pesan, setPesan] = useState('');
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://api.sipekan.my.id/user', {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        point: point,
        role: role,
      });
      navigate('/user');
    } catch (error) {
      if (error.response) {
        setPesan(error.response.data.pesan);
      }
    }
  };

  return (
    <div>
      <h2>Tambah User</h2>
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={saveUser}>
            <div className="mb-2">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
            </div>
            <div className="mb-2">
              <label htmlFor="password2" className="form-label">
                Confirm Password
              </label>
              <input type="password" className="form-control" id="password2" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} placeholder="********" />
            </div>
            <div className="mb-2">
              <label className="label">Point</label>
              <div className="control">
                <input type="number" className="form-control" value={point} onChange={(e) => setPoint(e.target.value)} placeholder="0" />
              </div>
            </div>
            <div className="mb-2">
              <label className="form-label">Role</label>
              <div className="select w-50">
                <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>
            <div className="mb-2">
              <div className="control">
                <button type="submit" className="btn btn-success px-4">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddUser;
