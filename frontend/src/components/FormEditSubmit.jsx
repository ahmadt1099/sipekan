import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditSubmit = () => {
  const [comment, setComment] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState('');
  const [preview, setPreview] = useState('');
  const [pesan, setPesan] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getRewardId = async () => {
      try {
        const response = await axios.get(`https://api.sipekan.my.id/submit/${id}`);
        setComment(response.data.submit.comment);
        setUrl(response.data.submit.file);
        setPreview(response.data.submit.url);
      } catch (error) {
        if (error.response) {
          setPesan(error.response.data.pesan);
        }
      }
    };
    getRewardId();
  }, [id]);

  const updateReward = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    // formData.append('title', title);
    // formData.append('description', description);
    // formData.append('price', price);
    try {
      await axios.patch(`https://api.sipekan.my.id/reward/${id}`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      navigate('/reward');
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
      <h2 className="subtitle">Edit Hadiah</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateReward}>
              <p className="has-text-centered">{pesan}</p>
              <div className="field">
                <label className="label">Judul</label>
                <div className="control">
                  <input type="text" className="input" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Judul" />
                </div>
              </div>
              <div className="field">
                <label className="label">Deskripsi</label>
                <div className="control">
                  <input type="text" className="input" value={file} onChange={(e) => setFile(e.target.value)} placeholder="Deskripsi" />
                </div>
              </div>
              <div className="field">
                <label className="label">Harga</label>
                <div className="control">
                  <input type="text" className="input" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="0" />
                </div>
              </div>
              <div className="field">
                <label className="label">Gambar</label>
                <div className="control">
                  <div className="file">
                    <label className="file-label">
                      <input type="file" className="file-input" onChange={loadImage} />
                      <span className="file-cta">
                        <span className="file-label">Pilih Gambar.....</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              {preview ? (
                <figure className="image is-128x128">
                  <img src={preview} alt="preview" />
                </figure>
              ) : (
                ''
              )}
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditSubmit;
