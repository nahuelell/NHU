import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
export const ItemDetailContainer = () => {
    const [items, setItem] = useState([ ])
    const { id} = useParams()

    useEffect(()=>{
        const querydb= getFirestore();
        const queryDoc = doc(querydb,'products', id);
        getDoc(queryDoc)
        .then(res => setItem({id: res.id, ...res.data()}))
    }, [id])
  return (
    <div>
    <ItemDetail data={items}/>
    </div>  
  )
}
