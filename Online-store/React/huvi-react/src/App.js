import React from 'react';
import './App.css';
import Shop from './Containers/Shop';
// Creating routes
import { Route, Routes } from "react-router-dom";
import Home from './Containers/Home';
import Checkout from './Containers/Checkout';
import Cart from './Containers/Cart';


function App() {
  return (
    <div className="App">
      
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
    </Routes>

    </div>
  );
}

export default App;
