import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export const Producto = ({title, img1, stock,slug}) => {
  const [counter, setCounter] = useState(0)
  const masClick = ()=> {
    counter < stock ? setCounter(counter + 1): setCounter(counter)

  }
  const menosClick = ()=> {
    counter > 0 ? setCounter(counter - 1): setCounter(counter)
  }
  return (
     <Card style={{ width: '18rem' }}>
      <Card.Img src={img1}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         <h3>{counter}</h3>       
        </Card.Text>
        <Button style={{margin: '5px'}} onClick={masClick}>+</Button>   
        <Button style={{margin: '5px'}}  onClick={menosClick}>-</Button>
        <p>Productos en Stock {stock - counter}</p> 
        <Button>COMPRAR</Button>
        <Link to={`/productos/${slug}`}>
        <Button>Detalles</Button>
        </Link>       
      </Card.Body>
       </Card>  
    
  )
}
