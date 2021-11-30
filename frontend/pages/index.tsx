import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const UserHome: NextPage = () => {
  return (
    <div style={{ height: '100vh' }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <p className="navbar-brand">Lab</p>
        </div>
      </nav>
      <div className="d-flex h-100 flex-column align-items-center justify-content-evenly">
        <h1>Bienvenido, David Null</h1>
        <div className="d-flex flex-column">
          <button className="btn btn-primary my-2">Agendar Cita</button>
          <button className="btn btn-info my-2">Ver Resultados</button>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
