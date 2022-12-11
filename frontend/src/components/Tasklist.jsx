/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStar, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

const Tasklist = () => {
  const [tugas, setTugas] = useState([]);

  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    getTugas();
  }, []);

  const getTugas = async () => {
    const response = await axios.get('https://api.sipekan.my.id/tugas');
    setTugas(response.data.task);
  };

  const deleteTugas = async (taskId) => {
    await axios.delete(`https://api.sipekan.my.id/tugas/${taskId}`);
    getTugas();
  };
  return (
    <div>
      <h2 className="subtitle">List Tugas</h2>
      {user && user.role === 'admin' && (
        <Link to="/tugas/add" className="btn btn-primary mb-2">
          Add Tugas
        </Link>
      )}
      <div className="row">
        {tugas.map((task, index) => (
          <div className="col-md-4" key={task.task_id}>
            <div className="card shadow p-3 bg-primary bg-opacity-50 text-white">
              <span className="side-stick"></span>
              <h5 className="w-75">
                <strong>{task.title}</strong>
              </h5>
              <p className="font-12 fw-fw-lighter">
                dari : <span className="text-uppercase">{task.user.name}</span>
              </p>
              <div>
                <p>{task.description}</p>
              </div>
              <div className="d-flex align-items-center">
                <span className="mr-1">
                  <FaStar className="text-warning" />
                  {task.point}
                </span>
              </div>
              <div className="w-100 mt-3">
                {user && user.role === 'user' && (
                  <Link to={`/submit/${task.task_id}`} className="btn btn-warning">
                    Submit
                  </Link>
                )}
                {user && user.role === 'admin' && (
                  <>
                    <Link to={`/tugas/edit/${task.task_id}`} className="px-3 btn btn-primary me-2">
                      <FaRegEdit size={25} className="text-white my-1" />
                    </Link>
                    <button onClick={() => deleteTugas(task.task_id)} className="px-3 btn btn-danger">
                      <FaRegTrashAlt size={25} className="text-white my-1" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasklist;
