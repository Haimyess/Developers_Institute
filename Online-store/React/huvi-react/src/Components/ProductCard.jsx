import React from "react";

function ProductCard (props) {
   return (
      <>
         <div>
            <img src={props.productImage} alt="" />
            <div>
               <p>{props.productName}</p>
            </div>
            <div>
               <p>{props.productPrice}</p>
               <button>Add to Cart</button>
            </div>
         </div>
      </>
   )
}

export default ProductCard;