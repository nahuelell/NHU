import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {CardWidget} from './CardWidget';
import { Link } from "react-router-dom"

export const NavBar = () => {
  
  
  return (
    <Nav className='nav'>
      <Nav.Item>
        <Link style={{textDecoration: "none", margin: '15px'}} to={'/productos'}>Home</Link>
      </Nav.Item>
      <Nav.Item>
      <Link style={{textDecoration: "none", margin: '15px'}}  to={`/categoria/bolso`}>Bolsos</Link>
    </Nav.Item>
    <Nav.Item>
      <Link style={{textDecoration: "none", margin: '15px'}}  to={`/categoria/mochila`}>Mochilas</Link>
    </Nav.Item>
    <Nav.Item>
      <Link style={{textDecoration: "none", margin: '15px'}}  to={`/categoria/varios`}>Varios</Link>
    </Nav.Item> 
      <Nav.Item>
        <Link to={'/cart'}>
        <CardWidget/>
        </Link>   
      </Nav.Item>
    </Nav>
  );
};
