import React from 'react'
import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import { ItemCart } from './ItemCart';

export const Cart = () => {
    const {cart, totalPrecio } = useCartContext ();
    if (cart.length === 0){
        return (
            <>
               <p>No hay elementos en el Carrito</p>
               <Link to='/productos'>Hacer compras</Link>
            </>
        )
    }
  return (
    <>
       {
        cart.map(product =><ItemCart key={product.id}product= {product}/>)
       }
       <p>
        total:{totalPrecio()}
       </p>
    </>
  )
}
