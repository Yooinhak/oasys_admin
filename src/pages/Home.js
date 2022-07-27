import React from 'react';
import { Header, StoreInfo, Menu } from '../components/home';
import '../scss/home.scss';

const Home = () => {
  return (
    <div className='page-home'>
      <Header />
      <StoreInfo />
      <Menu />
    </div>
  );
};

export default Home;
