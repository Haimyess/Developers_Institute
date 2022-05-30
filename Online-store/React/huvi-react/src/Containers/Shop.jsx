import React from "react";
import Header from "../Components/Header";
import ProductsList from '../Components/ProductsList';

// Importing products from another file
import {products} from '../products';

class Shop extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      cart: []
    }
  }
  render() {
    return (
      <>
        <Header />
        <h1>Shop Page</h1>

        <ProductsList productsArray={this.state.products} />
        
      </>
    )
  }
  
}

export default Shop;