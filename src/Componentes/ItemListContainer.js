import React from 'react'
import { useState , useEffect } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

export const ItemListContainer = () => {
  const [product, setProduct] = useState ([ ]);
  const { categoryID } = useParams()
 
  useEffect(()=>{  
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products');
    if(categoryID){
      const queryFilter = query(queryCollection, where('category','==', categoryID))
      getDocs(queryFilter)
          .then( res => setProduct(res.docs.map(product => ({id: product.id, ...product.data()}))))
      } else {
      getDocs (queryCollection)
        .then( res => setProduct(res.docs.map(product => ({id: product.id, ...product.data()}))))
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