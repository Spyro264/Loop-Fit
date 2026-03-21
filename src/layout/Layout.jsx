import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white ">
      <Navbar />

      <main className="flex flex-1 flex-col items-center justify-center border-2">
        {children}
      </main>
    </div>
  );
};

export default Layout;
