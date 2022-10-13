import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

export const Counter = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(0)
    const adicion = ()=> {
        counter < stock ? setCounter(prev => prev + 1): setCounter(counter)
    
      }
      const sustraccion = ()=> {
        counter > 0 ? setCounter(prev => prev - 1): setCounter(counter)
      }
      
  return (
    <div>
    <h3>{counter}</h3>  
    <Button style={{margin: '5px'}} onClick={adicion}>+</Button>   
    <Button style={{margin: '5px'}}  onClick={sustraccion}>-</Button>
    <p>Productos en Stock {stock - counter}</p> 
      <div>
         <Button onClick={()=> onAdd(counter)} disabled={0 > stock}>Agregar al Carrito</Button>
       </div>   
    </div>
    
  )
}
