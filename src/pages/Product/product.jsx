import React, { useContext } from 'react'
import { PRODUCTS } from '../../constants';
import { ShopContext } from '../../context/shopContext';
import {images } from '../../constants/images';
import { Product_item } from './product-item';
import "./product.css"

export const Product = () => {

  const {xname} = useContext(ShopContext);
  console.log(`xnumb is ${xname}`);
  return (
    <div className='inspect-container'>
      <div className='myproduct-container'>
        {PRODUCTS.map((product) => {
          if(product.productName === xname) {
            return <Product_item data={product} />
          }
        })} 
      </div>
    </div>
  )
}
