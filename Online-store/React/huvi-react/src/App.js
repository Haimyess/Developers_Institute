import React, {createContext, useState} from 'react';
import './App.css';
import Shop from './Containers/Shop';
// Creating routes
import { Route, Routes } from "react-router-dom";
import Home from './Containers/Home';
import Checkout from './Containers/Checkout';
import Cart from './Containers/Cart';
// import {products} from './products';

// import 'bootstrap/dist/css/bootstrap.min.css';
export const appContext = createContext();

function App() {

  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      
      <Routes>

        <Route path="/" element= {<appContext.Provider value= {{cart, setCart}}><Home /></appContext.Provider>} />
        <Route path="/Shop" element={<appContext.Provider value= {{cart, setCart}}><Shop /></appContext.Provider>} />
        <Route path="/Cart" element={<appContext.Provider value= {{cart, setCart}}><Cart /></appContext.Provider>} />
        <Route path="/Checkout" element={<appContext.Provider value= {{cart, setCart}}><Checkout /></appContext.Provider>} />
    </Routes>

    </div>
  );
}

export default App;
