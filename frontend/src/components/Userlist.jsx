import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('https://api.sipekan.my.id/user');
    setUsers(response.data.user);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`https://api.sipekan.my.id/user/${userId}`);
    getUsers();
  };

  return (
    <div>
      <h2 className="mt-3">List User</h2>

      <Link to="/user/add" className="btn btn-primary my-2">
        Add User
      </Link>

      <div className="row">
        <div className="col-md-10">
          <table className="table table-primary table-striped rounded-3 ">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Point</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.user_id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.point}</td>
                  <td>{user.role}</td>
                  <td>
                    <Link to={`/user/edit/${user.user_id}`} className="btn btn-info me-2">
                      Edit
                    </Link>
                    <button onClick={() => deleteUser(user.user_id)} className="btn btn-danger">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
