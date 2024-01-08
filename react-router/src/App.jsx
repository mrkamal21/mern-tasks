import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';

import "./App.css";

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
   </BrowserRouter>
  );
};

export default App;