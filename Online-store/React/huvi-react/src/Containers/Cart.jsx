
import Header from "../Components/Header";

import React, { useState, useContext, useEffect } from "react";
import {appContext} from '../App';


function Cart ({cartItems}) {
 const {setCart, cart} = useContext(appContext);
  useEffect(() => {
    console.log(cart);
  },[])
  return (
    <>
      <Header />
      {/* <NavBoot /> */}

      <h1>Your Cart</h1>
    </>
  )
}

export default Cart;