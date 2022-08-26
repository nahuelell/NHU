import React from 'react'
import Nav from 'react-bootstrap/Nav';
import CardWidget from './CardWidget';

function NavBar() {
  
  return (
    <Nav className='nav'>
      <Nav.Item>
        <Nav.Link  href="/home">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Sobre Nosotros</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <CardWidget/>
      </Nav.Item>
    </Nav>
  );
}
export default NavBar;
