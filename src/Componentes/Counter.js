import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

export const Counter = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(0)
    const masClick = ()=> {
        counter < stock ? setCounter(prev => prev + 1): setCounter(counter)
    
      }
      const menosClick = ()=> {
        counter > 0 ? setCounter(prev => prev - 1): setCounter(counter)
      }
      
  return (
    <div>
    <h3>{counter}</h3>  
    <Button style={{margin: '5px'}} onClick={masClick}>+</Button>   
    <Button style={{margin: '5px'}}  onClick={menosClick}>-</Button>
    <p>Productos en Stock {stock - counter}</p> 
      <div>
         <Button disabled={stock <= 0} onClick={()=> onAdd(counter) }>Agregar al Carrito</Button>
       </div>   
    </div>
    
  )
}
