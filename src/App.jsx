import React from 'react'
import NavBar from './components/header/NavBar'
import Home from './pages/home/Home'
import './App.css'
import Catego from './components/header/categories/Catego';
import Topselling from './components/top-selling/Topselling';
import Bookingpage from './components/bookings/Bookingpage';


const HomePage = () => {
  return (
    <div className="background-wrapper">
      <img src="/images/Decore.png" alt="blob" className="global-hero-blob" />
      <img src="/images/plane.png" alt="plane" className="airplane airplane-1"/>
      <img src="/images/plane.png" alt="plane" className="airplane airplane-2"/>
      <NavBar />
      <Home />


      <Catego />
      <Topselling />
      <Bookingpage />
    </div>


  );
};

export default HomePage;