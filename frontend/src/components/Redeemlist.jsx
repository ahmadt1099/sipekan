import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Redeemlist = () => {
  const [redeems, setRedeems] = useState([]);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getRedeems();
  }, []);

  const getRedeems = async () => {
    const response = await axios.get('https://api.sipekan.my.id/redeem');
    setRedeems(response.data.redeem);
  };

  return (
    <div>
      <h2 className="subtitle">List Penukaran Hadiah</h2>

      <div className="row">
        <div className="col-md-10">
          <table className="table table-primary table-striped ">
            <thead>
              <tr>
                <th>No</th>
                <th>Oleh</th>
                <th>Hadiah</th>
                <th>Pesan</th>
              </tr>
            </thead>
            <tbody>
              {redeems.map((redeem, index) => (
                <tr key={redeem.redeem_id}>
                  <td>{index + 1}</td>
                  <td>{redeem.user.name}</td>
                  <td>{redeem.reward.title}</td>
                  <td>{redeem.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Redeemlist;
