import React from 'react'
import { Producto } from './Producto'

export const ItemList = ({items}) => {
  return (
    <div>
        {items.length ? items.map((item) => <Producto key={item.id} {...item}/>) : <h2>Cargando...</h2>}
    </div>
  )
}
