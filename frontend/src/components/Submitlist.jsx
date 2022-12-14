import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Submitlist = () => {
  const [submits, setSubmits] = useState([]);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getSubmit();
  }, []);

  const getSubmit = async () => {
    const response = await axios.get('https://api.sipekan.my.id/submited');
    setSubmits(response.data.submit);
  };

  return (
    <div>
      <h2 className="subtitle">List Submit Tugas</h2>
      <div className="row">
        {submits.map((submit, index) => (
          <div className="col-sm-4" key={submit.submit_id}>
            <div className="card p-2">
              <div className="w-75 mx-auto">
                <img src={submit.url} className="card-img-top" alt={submit.task.title} />
              </div>
              <hr />
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>{submit.task.title}</strong>
                  </li>
                  <li className="list-group-item">
                    Author : <span className="text-uppercase">{submit.user.name}</span>
                  </li>
                  <li className="list-group-item">Pesan : {submit.comment}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Submitlist;
