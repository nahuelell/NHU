import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ItemDetail = ({i:{title,img1, img2, precio, detalles}}) => {
  return (
    <Container>
    <Row className="justify-content-center text-center" md={4}>
      <Col lg={6}>
      <h5>{title}</h5>
      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`../${img2}`}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>${precio}</p>
          <p>{detalles}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`../${img1}`}
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>${precio}</p>
          <p>{detalles}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
       </Col>
      </Row>
    </Container>
  )
}
