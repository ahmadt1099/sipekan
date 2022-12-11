/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Foot from '../components/Foot.jsx';
import Head from '../components/Head.jsx';

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
                    <svg
                      width="35px"
                      height="35px"
                      viewBox="0 0 24 24"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-labelledby="thumbUpIconTitle"
                      stroke="#000000"
                      strokeWidth="1"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      fill="none"
                      color="#000000"
                      className="mb-3"
                    >
                      {' '}
                      <title id="thumbUpIconTitle">Thumb Up</title>{' '}
                      <path d="M8,8.73984815 C8,8.26242561 8.17078432,7.80075162 8.4814868,7.43826541 L13.2723931,1.84887469 C13.7000127,1.34998522 14.4122932,1.20614658 15,1.5 C15.5737957,1.78689785 15.849314,2.45205792 15.6464466,3.06066017 L14,8 L18.6035746,8 C18.7235578,8 18.8432976,8.01079693 18.9613454,8.03226018 C20.0480981,8.22985158 20.7689058,9.27101818 20.5713144,10.3577709 L19.2985871,17.3577709 C19.1256814,18.3087523 18.2974196,19 17.3308473,19 L10,19 C8.8954305,19 8,18.1045695 8,17 L8,8.73984815 Z" />{' '}
                      <path d="M4,18 L4,9" />{' '}
                    </svg>
                    <h5 className="card-title">Mudah digunakan</h5>
                    <p className="card-text">Aplikasi yang mudah digunakan baik untuk anak maupun untuk orang tua.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 mb-5 shadow">
                  <div className="card-body">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33px" height="33px" fill="currentColor" className="mb-3 bi bi-check2-square" viewBox="0 0 16 16">
                      <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                      <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                    </svg>
                    <h5 className="card-title">Berguna untuk anak dan orang tua</h5>
                    <p className="card-text">Sangat berguna bagi orang tua yang sibuk, digunakan untuk memantau keseharian anak</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 mb-5 shadow">
                  <div className="card-body">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33px" height="33px" fill="currentColor" className="mb-3 bi bi-stars" viewBox="0 0 16 16">
                      <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                    </svg>
                    <h5 className="card-title">Menarik untuk anak</h5>
                    <p className="card-text">Memiliki tampilan yang menarik bagi anak</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 mb-5 shadow">
                  <div className="card-body">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" className="mb-3 bi bi-clock" viewBox="0 0 16 16">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                    <h5 className="card-title">Everytime dan Everywhere</h5>
                    <p className="card-text">Menghemat waktu bagi orang tua yang sibuk bekerja dan dapat digunakan dari jarak jauh karena terhubung dengan internet</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 mb-5 shadow">
                  <div className="card-body">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" className="mb-3 bi bi-wifi" viewBox="0 0 16 16">
                      <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />
                      <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
                    </svg>
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
