import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditReward = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState('');
  const [preview, setPreview] = useState('');
  const [pesan, setPesan] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getRewardId = async () => {
      try {
        const response = await axios.get(`https://api.sipekan.my.id/reward/${id}`);
        setTitle(response.data.reward.title);
        setDescription(response.data.reward.description);
        setPrice(response.data.reward.price);
        setPreview(response.data.reward.url);
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
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
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
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={updateReward}>
            <div className="mb-2">
              <p className="text-center a">{pesan}</p>
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
              <input type="point" className="form-control" id="point" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="0" />
            </div>
            {preview ? (
              <figure className="w-50 mb-3">
                <img src={preview} alt="preview" width={200} />
              </figure>
            ) : (
              ''
            )}

            <div className="input-group mb-2">
              <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={loadImage} />
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

export default FormEditReward;
