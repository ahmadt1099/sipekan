/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-script-url */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Foot from '../components/Foot.jsx';
import Head from '../components/Head.jsx';

const About = () => {
  return (
    <div>
      <Head />
      <main className="mt-5">
        <section className="content mb-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
              <div className="col">
                <div className="card radius-15">
                  <div className="card-body text-center">
                    <div className="p-4 border radius-15">
                      <img style={{ objectFit: 'cover' }} src="img-about/ahmad.png" width="110" height="110" className="rounded-circle shadow" alt="" />
                      <h5 className="mb-0 mt-5">Ahmad Taufiqur Rohman</h5>
                      <p className="mb-3">Web Developer</p>
                      <div className="list-inline contacts-social mt-3 mb-3">
                        {' '}
                        <a href="https://github.com/ahmadt1099" target="_blank" className="list-inline-item bg-facebook text-white border-0">
                          <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/ahmad_tr9/" target="_blank" className="list-inline-item bg-twitter text-white border-0">
                          <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/ahmadtr/" target="_blank" className="list-inline-item bg-linkedin text-white border-0">
                          <FaLinkedin />
                        </a>
                      </div>
                      <div className="d-grid">
                        {' '}
                        <a href="https://wa.me/6281215790850" className="btn btn-outline-primary radius-15">
                          Contact Me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card radius-15">
                  <div className="card-body text-center">
                    <div className="p-4 border radius-15">
                      <img style={{ objectFit: 'cover' }} src="img-about/riandalis.jpg" width="110" height="110" className="rounded-circle shadow" alt="" />
                      <h5 className="mb-0 mt-5">Riandalis Purnama Deva</h5>
                      <p className="mb-3">Web Developer</p> 
                      <div className="list-inline contacts-social mt-3 mb-3">
                        {' '}
                        <a href="https://github.com/riandalis1" target="_blank" className="list-inline-item bg-facebook text-white border-0">
                          <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/riandalis/" target="_blank" className="list-inline-item bg-twitter text-white border-0">
                          <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/riandalispd/" target="_blank" className="list-inline-item bg-linkedin text-white border-0">
                          <FaLinkedin />
                        </a>
                      </div>
                      <div className="d-grid">
                        {' '}
                        <a href="https://wa.me/6281225514655" target="_blank" className="btn btn-outline-primary radius-15">
                          Contact Me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card radius-15">
                  <div className="card-body text-center">
                    <div className="p-4 border radius-15">
                      <img style={{ objectFit: 'cover' }} src="img-about/afrisa.png" width="110" height="110" className="rounded-circle shadow" alt="" />
                      <h5 className="mb-0 mt-5">Afrisa Miftaqul Huda</h5>
                      <p className="mb-3">Web Developer</p>
                      <div className="list-inline contacts-social mt-3 mb-3">
                        {' '}
                        <a href="https://github.com/gampla" target="_blank" className="list-inline-item bg-facebook text-white border-0">
                          <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/afrisa_huda/" target="_blank" className="list-inline-item bg-twitter text-white border-0">
                          <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/afrisa-miftaqul-huda-1860a4257/" target="_blank" className="list-inline-item bg-linkedin text-white border-0">
                          <FaLinkedin />
                        </a>
                      </div>
                      <div className="d-grid">
                        {' '}
                        <a href="#" className="btn btn-outline-primary radius-15">
                          Contact Me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card radius-15">
                  <div className="card-body text-center">
                    <div className="p-4 border radius-15">
                      <img style={{ objectFit: 'cover' }} src="img-about/wahit.png" width="110" height="110" className="rounded-circle shadow" alt="" />
                      <h5 className="mb-0 mt-5">Bagus Wahit Bayunara</h5>
                      <p className="mb-3">Web Developer</p>
                      <div className="list-inline contacts-social mt-3 mb-3">
                        {' '}
                        <a href="https://github.com/BaguswahitB/Capstone" target="_blank" className="list-inline-item bg-facebook text-white border-0">
                          <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/zynxv_00/?hl=id" target="_blank" className="list-inline-item bg-twitter text-white border-0">
                          <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/bagus-wahit-bayunara-71b96022a/" target="_blank" className="list-inline-item bg-linkedin text-white border-0">
                          <FaLinkedin />
                        </a>
                      </div>
                      <div className="d-grid">
                        {' '}
                        <a href="#" className="btn btn-outline-primary radius-15">
                          Contact Me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Foot />
    </div>
  );
};

export default About;
