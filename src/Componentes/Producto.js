import React from 'react'
import { Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'
export const Producto = ({title, img1, id}) => {
  return (
    <div>   
     <Card style={{ width: '18rem' }}>
     <Link to={`/productos/${id}`}>
      <Card.Img src={img1}/>
      </Link>  
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>    
        </Card.Text>               
      </Card.Body>
       </Card>  
    </div>  
  )
}
