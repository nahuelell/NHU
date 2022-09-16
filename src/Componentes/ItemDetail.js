import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Counter } from './Counter';
import { useCartContext } from '../Context/CartContext';

export const ItemDetail = ({data}) => {
  
  const [carrito, setCarrito] = useState (false);
  
  const { addProduct } = useCartContext();
  
  const onAdd = (cantidad) => {
      setCarrito(true)
      addProduct(data, cantidad);
  }
  return (
    <Container>
    <Row className="justify-content-center text-center" md={4}>
      <Col lg={6}>
      <h5>{data.title}</h5>
      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`../${data.img2}`}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>${data.precio}</p>
          <p>{data.detalles}</p>
          {
            carrito
              ? <Link to={'/cart'}><Button>Terminar Compra</Button> </Link>
              : <Counter stock={data.stock} onAdd={onAdd}/>
          }
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`../${data.img1}`}
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>${data.precio}</p>
          <p>{data.detalles}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
       </Col>
      </Row>
    </Container>
  )
}
