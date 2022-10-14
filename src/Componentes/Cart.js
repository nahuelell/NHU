import React from 'react'
import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import { ItemCart } from './ItemCart';
import { Button } from 'react-bootstrap';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {Row } from 'react-bootstrap';

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
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      addDoc(ordersCollection, order)
      .then(({orderId}) => console.log(orderId))
  }
  
  const todos = () => {
    handleClick();
    handleShow();
  }
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  
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
      
      <Button onClick={todos} variant="primary">
        Emitir Compra
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmacion de compra</Modal.Title>
        </Modal.Header>
        <Modal.Body> {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
        </Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
          />
          <Form.Control.Feedback>Bien ahi!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
          />
          <Form.Control.Feedback>Bien ahi!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Porfavor pon tu email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="Ciudad" required />
          <Form.Control.Feedback type="invalid">
            Porfavor valida tu ciudad.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Provincia</Form.Label>
          <Form.Control type="text" placeholder="provincia" required />
          <Form.Control.Feedback type="invalid">
            Porfavor valida tu provincia.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Condiciones"
          feedback="Acepta las condiciones"
          feedbackType="invalid"
        />
      </Form.Group> 
      <Button variant="primary" type="submit">
            Confirmar
      </Button>
      </Form>     
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>  
        </Modal.Footer>
      </Modal>    
    </>
  )
}
