import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap'
import { useCartContext } from '../Context/CartContext';
export const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Productos</th>
          <th>img</th>
          <th>Cantidad</th>
          <th>Precio U</th>
          <th>SubTotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{product.title}</td>
          <td><img className="d-block w-100" src={product.img1} alt="imagen"></img></td>
          <td>{product.cantidad}</td>
          <td>{product.precio}</td>
          <td>${product.cantidad * product.precio}</td>        
        </tr>       
        <Button onClick={()=> removeProduct(product.id)}>Eliminar</Button>
      </tbody>
    </Table>
  )
}
