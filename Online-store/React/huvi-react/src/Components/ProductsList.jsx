import React from "react";

// Importing components
import ProductCard from './ProductCard';

// Pass the key from the object in the shop
function ProductsList ({productsArray}) {
  return (
    <>
      {
        productsArray.map(product => {
          return (
            <ProductCard productName={product.productName} productImage={product.image} productPrice={product.price} />
          )
        })
      }
    </>
  )
}

export default ProductsList;