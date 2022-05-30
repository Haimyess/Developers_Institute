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
            <ProductCard  key={product.id} product = {product} />
          )
        })
      }
    </>
  )
}

export default ProductsList;