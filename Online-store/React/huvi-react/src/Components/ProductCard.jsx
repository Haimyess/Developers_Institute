import React, { useState, useContext } from "react";
import {appContext} from '../App';

function ProductCard ({product}) {
   // const [cartItems, setCartItems] = useState([]);

   // AddToCart = () => {
   const {setCart, cart} = useContext(appContext);
   const addToCart = (product) => {
      cart.push(product);
      setCart([...cart]);
   }   // }
   return (
      <>
         <div>
            <img src={product.productImage} alt="" />
            <div>
               <h3>{product.productName}</h3>
            </div>
            <div>
               <p>${product.productPrice}</p>

               <button  onClick={()=> addToCart({product})} >Add to Cart</button>
            </div>
         </div>
      </>
   )
}

export default ProductCard;