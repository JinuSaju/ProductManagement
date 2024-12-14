import React from 'react';

import { Outlet } from 'react-router-dom';

import Navbar from '../componets/Navbar';
function Home() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '300px', backgroundColor: 'LightGrey', color: 'white', overflow: 'auto' }}>
        <Navbar />
      </div>
      <div style={{ flexGrow: 1, backgroundColor: 'white', padding: '20px', overflow: 'auto' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
