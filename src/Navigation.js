import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';

export default function Navigation() {
  return (
    <Routes>
      {/* <Route exact path="/" element={<Login />} */}
      <Route exact path='/' element={<Home />} />
    </Routes>
  );
}
