import React from 'react';
import { Outlet } from 'react-router-dom';
import {Header} from '../components/Header/Header';
import {Footer} from '../components/Footer/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <Header />

      <main className="flex-grow p-6 md:p-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
