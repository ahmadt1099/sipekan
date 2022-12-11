import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormAddSubmit = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [point, setPoint] = useState('');
  const [file, setFile] = useState('');
  const [preview, setPreview] = useState('');
  const [comment, setComment] = useState('');
  const [pesan, setPesan] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getTaskId = async () => {
      try {
        const response = await axios.get(`https://api.sipekan.my.id/tugas/${id}`);
        setTitle(response.data.tugas.title);
        setDescription(response.data.tugas.description);
        setPoint(response.data.tugas.point);
      } catch (error) {
        if (error.response) {
          setPesan(error.response.data.pesan);
        }
      }
    };
    getTaskId();
  }, [id]);

  const postSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('comment', comment);
    try {
      await axios.post(`https://api.sipekan.my.id/submit/${id}`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      navigate('/submit');
    } catch (error) {
      if (error.response) {
        setPesan(error.response.data.pesan);
      }
    }
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };
  return (
    <div>
      <h2 className="subtitle">Submit Tugas</h2>
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={postSubmit}>
            <p className="has-text-centered">{pesan}</p>
            <div className="mb-2">
              <label htmlFor="name" className="form-label">
                Judul
              </label>
              <input type="text" id="name" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul" disabled />
            </div>
            <div className="mb-2">
              <label htmlFor="desktipsi" className="form-label">
                Deskripsi
              </label>
              <input type="text" id="desktipsi" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Deskripsi" disabled />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">
                Point
              </label>
              <input type="number" className="form-control" value={point} onChange={(e) => setPoint(e.target.value)} placeholder="0" disabled />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">
                Komen
              </label>
              <div className="control">
                <input type="text" className="form-control" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="isi komentar" />
              </div>
            </div>
            <div className="field mb-2">
              <label className="label">File</label>
              <div className="control">
                <div className="file">
                  <label className="file-label">
                    <input type="file" className="file-input" onChange={loadImage} />
                  </label>
                </div>
              </div>
            </div>
            {preview ? (
              <figure className="w-50 my-3">
                <img src={preview} alt="preview" width={200} />
              </figure>
            ) : (
              ''
            )}
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

export default FormAddSubmit;
