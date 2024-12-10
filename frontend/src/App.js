import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './pages/AllRoutes';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import React from 'react';
import Cart from './pages/Cart';
import CongratulationsPage from './pages/CongratulationsPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <ScrollToTop/>
      <AllRoutes/>
      <Cart/>
      <CongratulationsPage/>
      <Footer/>
    </div>
  );
}

export default App;
