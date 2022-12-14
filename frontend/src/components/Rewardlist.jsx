/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';

const Rewardlist = () => {
  const [rewards, setRewards] = useState([]);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getRewards();
  }, []);

  const getRewards = async () => {
    const response = await axios.get('https://api.sipekan.my.id/reward');
    setRewards(response.data.reward);
  };

  const deleteReward = async (rewardId) => {
    await axios.delete(`https://api.sipekan.my.id/reward/${rewardId}`);
    getRewards();
  };

  return (
    <div>
      <h2 className="subtitle">List Hadiah</h2>
      {user && user.role === 'admin' && (
        <Link to="/reward/add" className="btn btn-primary">
          Add hadiah
        </Link>
      )}
      <div className="row mt-2">
        <div key={user.user_id}>
          <p>
            Point anda :
            <span className="ms-1">
              <FaStar className="me-1 text-warning" />
              {user.point}
            </span>
          </p>
        </div>
        {rewards.map((reward, index) => (
          <div className="col-sm-6 product" key={reward.reward_id}>
            <div className="row m-1 p-3 bg-white shadow rounded-3">
              <div className="col-md-6">
                <img srcSet={reward.url} className="w-100" alt={reward.title} />
              </div>
              <div className="col-md-6">
                <h5>
                  <strong>{reward.title}</strong>
                </h5>
                <p>Description : {reward.description}</p>
                <p>
                  Price :
                  <span className="ms-1 text-warning">
                    <FaStar />
                    {reward.price}
                  </span>
                </p>
                <div>
                  {user && user.role === 'user' && (
                    <Link to={`/redeem/${reward.reward_id}`} className="btn btn-warning">
                      Submit
                    </Link>
                  )}
                  {user && user.role === 'admin' && (
                    <div>
                      <Link to={`/reward/edit/${reward.reward_id}`} className="btn btn-info me-2">
                        Edit
                      </Link>
                      <button onClick={() => deleteReward(reward.reward_id)} className="btn btn-danger">
                        Hapus
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewardlist;
