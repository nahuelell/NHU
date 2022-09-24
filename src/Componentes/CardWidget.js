import React from 'react'
import { useCartContext } from '../Context/CartContext';
export const CardWidget = () => {
  const {totalProducts}= useCartContext();
  return (
    <div >
      <h1><ion-icon style={{fontSize:"30px"}} name="cart-outline"></ion-icon><span>{totalProducts()||''}</span></h1>

    </div>
  )
};
