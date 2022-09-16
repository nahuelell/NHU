import React from 'react'
import itemShop from './ItemShop.json';
import { useState , useEffect } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ItemListContainer = () => {
  const [product, setProduct] = useState ([ ]);
  const { categoryID } = useParams()
  const getProduct = (info, time) => 
  new Promise ((resolve,reject)=> {
    setTimeout(()=>{
      info ? resolve(info):reject("fallo");
  }, time)
  });
 
  useEffect(()=>{  
    if ( categoryID ){
      getProduct(itemShop, 1000) .then((res)=>{
        setProduct(res.filter(item => item.category == categoryID ))}
        ).catch((err)=> console.log (err,": No hay productos en vigencia"))
    }
    else {
    getProduct(itemShop, 3000) .then((res)=>{
      setProduct(res)}
    ).catch((err)=> console.log (err,": No hay productos en vigencia"))
    }
  }, [categoryID])

  return (   
    <div>
      <Container>
      <Row className="justify-content-center text-center" md={6}>
      <Col lg={4}>
      <h1>{categoryID}</h1>
      <ItemList items={product}/>
     </Col>
      </Row>
    </Container>   
    </div>
  )
};