import React from 'react';
import { Header, StoreInfo, Menu, Sidebar } from '../components/home';
import '../scss/home.scss';

const Home = () => {
  return (
    <div className='page-home'>
      <Header />
      <StoreInfo />
      <Menu />
      <Sidebar />
    </div>
  );
};

export default Home;
