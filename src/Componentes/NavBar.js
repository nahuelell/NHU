import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {CardWidget} from './CardWidget';
import { NavLink } from "react-router-dom"

export const NavBar = () => {

  return (
    <Nav className='nav'>
      <Nav.Item>
        <NavLink to={'/'}>Home</NavLink>
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
};
