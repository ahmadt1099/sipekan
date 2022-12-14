/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Foot from '../components/Foot.jsx';
import Head from '../components/Head.jsx';
import { FaRegThumbsUp, FaPlus, FaRegStar, FaRegClock, FaGift } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <Head />
      <main className="mt-5">
        <section className="content mb-5">
          <div className="container">
            <div className="hero pt-5">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 ">
                  <h2>
                    <strong className="text-primary">SIPEKAN</strong> adalah sistem untuk orang tua tetap bisa mengontrol apa saja yang harus dilakukan anak saat orang tua sedang bekerja.
                  </h2>
                </div>
                <div className="col-md-6 d-flex justify-content-center pt-3">
                  <img src="/hero-img.png" alt="hero-img" className="img-fluid w-75" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content mt-5 bg-primary text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f8f9fa" fillOpacity="1" d="M0,128L80,112C160,96,320,64,480,69.3C640,75,800,117,960,149.3C1120,181,1280,203,1360,213.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
          <div className="container  superiority">
            <div className="row">
              <div className="col">
                <h3 className="text-center">Superiority</h3>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <div className="row text-dark d-flex justify-content-center text-center">
              <div className="col-md-4">
                <div className="card p-3 mb-5 shadow">
                  <div className="card-body">
                    <FaRegThumbsUp size={30} className="mb-3" />
                    <h5 className="card-title">Mudah digunakan</h5>
                    <p className="card-text">Aplikasi yang mudah digunakan baik untuk anak maupun untuk orang tua.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 mb-5 shadow">
                  <div className="card-body">
                    <FaPlus size={30} className="mb-3" />
                    <h5 className="card-title">Berguna untuk anak dan orang tua</h5>
                    <p className="card-text">Sangat berguna bagi orang tua yang sibuk, digunakan untuk memantau keseharian anak</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 mb-5 shadow">
                  <div className="card-body">
                    <FaRegStar size={30} className="mb-3" />
                    <h5 className="card-title">Menarik untuk anak</h5>
                    <p className="card-text">Memiliki tampilan yang menarik bagi anak</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 mb-5 shadow">
                  <div className="card-body">
                    <FaRegClock size={30} className="mb-3" />
                    <h5 className="card-title">Everytime dan Everywhere</h5>
                    <p className="card-text">Menghemat waktu bagi orang tua yang sibuk bekerja dan dapat digunakan dari jarak jauh karena terhubung dengan internet</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 mb-5 shadow">
                  <div className="card-body">
                    <FaGift size={30} className="mb-3" />
                    <h5 className="card-title">Memiliki Reward</h5>
                    <p className="card-text">Hadiahi buah hati dengan apa yang telah mereka kerjakan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about bg-light text-dark pb-5">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-6">
                <img src="/hero-img.png" className="img-fluid" alt="test" />
              </div>
              <div className="col-md-6">
                <h2>Cara menggunakan</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">1. Daftar Akun sebagai orang Tua</li>
                  <li className="list-group-item">2. Tambah Akun Sebagai Anak</li>
                  <li className="list-group-item">3. Tambah Tugas yang akan di selesaikan anak</li>
                  <li className="list-group-item">4. Anak mengerjakan dan mendapatkan point</li>
                  <li className="list-group-item">5. Point dapat ditukarkan dengan hadiah yang ingin diberikan</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Foot />
    </div>
  );
};

export default Home;
