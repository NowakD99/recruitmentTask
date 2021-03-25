import React from 'react';
import '../ProductsList/ProductsList.css';
import {Product} from '../Product/Product';
    
export const ProductsList = ({ productList }) => {
    
  return (
    <div className="productList">
        {productList.map((product) => {
          return <Product key={product.id} product={product}></Product>
          })}
    </div>
  );
};
