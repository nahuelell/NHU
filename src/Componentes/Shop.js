import React from 'react'
import { ItemListContainer } from './ItemListContainer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Shop = () => {
  
  return (
    <div>
      <Container>
      <Row className="justify-content-center text-center" md={6}>
      <Col lg={4}>
        <ItemListContainer/>
     </Col>
      </Row>
    </Container>
    </div>
  )
}
