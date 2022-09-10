import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {CardWidget} from './CardWidget';
import { Link } from "react-router-dom"

export const NavBar = () => {
  
  return (
    <Nav className='nav'>
      <Nav.Item>
        <Link style={{textDecoration: "none", margin: '15px'}} to={'/'}>Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link style={{textDecoration: "none", margin: '15px'}}  to={'/productos/'}>Productos</Link>
      </Nav.Item>
      <Nav.Item>
        <Link style={{textDecoration: "none", margin: '15px'}}  to={`/productos/`}>Bolsos</Link>
      </Nav.Item>
      <Nav.Item>
        <Link style={{textDecoration: "none", margin: '15px'}}  to={`/productos/`}>Mochilas</Link>
      </Nav.Item>
      <Nav.Item>
        <CardWidget/>
      </Nav.Item>
    </Nav>
  );
};
