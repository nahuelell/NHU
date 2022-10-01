import React from 'react'
import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import { ItemCart } from './ItemCart';
import { Button } from 'react-bootstrap';
import { addDoc, collection, getFirestore } from 'firebase/firestore'

export const Cart = () => {
  const { cart, totalPrecio } = useCartContext();

  const order = {
    buyer: {
      nombre: "Nahuel",
      email: "nahuel_lell@gmail.com",
      telefono: 155121322,
      contraseña: "asdasd"
    },
    items: cart.map(product => ({ id: product.id, title: product.title, precio: product.precio, cantidad: product.cantidad })),
    total: totalPrecio(),
  }
  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))
  }
  
  if (cart.length === 0) {
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
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        total:{totalPrecio()}
      </p>
      <Button onClick={handleClick}>Emitir Compra</Button>
    </>
  )
}
