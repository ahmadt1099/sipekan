import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [point, setPoint] = useState('');
  const [pesan, setPesan] = useState('');
  const navigate = useNavigate();

  const saveTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://api.sipekan.my.id/tugas', {
        title: title,
        description: description,
        point: point,
      });
      navigate('/tugas');
    } catch (error) {
      if (error.response) {
        setPesan(error.response.data.pesan);
      }
    }
  };

  return (
    <div>
      <h2>Tambah Tugas</h2>
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={saveTask}>
            <div className="mb-2">
              <p className="text-center">{pesan}</p>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" id="name" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul" />
            </div>
            <div className="mb-2">
              <label htmlFor="deskripsi" className="form-label">
                Deskripsi
              </label>
              <input type="deskripsi" id="deskripsi" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Deskripsi" />
            </div>
            <div className="mb-2">
              <label htmlFor="point" className="form-label">
                Point
              </label>
              <input type="number" className="form-control" id="point" value={point} onChange={(e) => setPoint(e.target.value)} placeholder="0" />
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

export default FormAddTask;
