import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'


export const Producto = ({title, img1, stock}) => {
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
        <Button onClick={masClick}>+</Button>   
        <Button onClick={menosClick}>-</Button>
        <p>Productos en Stock {stock - counter}</p> 
        <Button>COMPRAR</Button>

      </Card.Body>
       </Card>   
  )
}
