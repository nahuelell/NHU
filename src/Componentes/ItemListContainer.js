import React from 'react'
import itemShop from './ItemShop.json';
import { useState , useEffect } from 'react';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
  const [product, setProduct] = useState ([ ]);
  const getProduct = (info, time) => 
  new Promise ((resolve,reject)=> {
    setTimeout(()=>{
      info ? resolve(info):reject("fallo");
  }, time)
  });

  useEffect(()=>{
    getProduct(itemShop, 3000)
    .then((res)=>{
     setProduct(res)
    }).catch((err)=> console.log (err,": No hay productos en vigencia"))
  }, [])

  return (   

    <div >
      <ItemList items={product}/>
    </div>
  )
};