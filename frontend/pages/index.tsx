import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <p className="navbar-brand">Lab</p>
        </div>
      </nav>
    </>
  );
};

export default Home;
