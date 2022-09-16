import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import itemShop from './ItemShop.json'

export const ItemDetailContainer = () => {
    const [items, setItem] = useState([ ])
    const { slug } = useParams()
    useEffect(()=>{
      getItem().then(data => {
        if (data){
          setItem (data)
        }
      })
    })
    function getItem() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(itemShop.find(p => p.slug === slug))
      }, 500)
    })
  } 

  return (
    <div>
    <ItemDetail data={items}/>
    </div>
    
  )
}
