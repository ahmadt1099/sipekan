import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormPostRedeem = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState('');
  const [preview, setPreview] = useState('');
  const [note, setNote] = useState('');
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

  const postRedeem = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://api.sipekan.my.id/redeem/${id}`, {
        note: note,
      });
      navigate('/redeem');
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
          <form onSubmit={postRedeem}>
            <div className="mb-2">
              <p className="text-center">{pesan}</p>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" id="name" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul" disabled />
            </div>
            <div className="mb-2">
              <label htmlFor="deskripsi" className="form-label">
                Deskripsi
              </label>
              <input type="deskripsi" id="deskripsi" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Deskripsi" disabled />
            </div>
            <div className="mb-2">
              <label htmlFor="point" className="form-label">
                Harga
              </label>
              <input type="point" className="form-control" id="point" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="0" disabled />
            </div>
            {preview ? (
              <figure className="w-50 mb-3">
                <img src={preview} alt="preview" width={200} />
              </figure>
            ) : (
              ''
            )}

            <div className="mb-2">
              <label htmlFor="point" className="form-label">
                Pesan
              </label>
              <input type="text" className="form-control" id="point" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Pesan" />
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

export default FormPostRedeem;
