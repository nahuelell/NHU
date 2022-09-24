import React from 'react'
import { useState, useContext} from 'react'
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
export const CartProvider = ({children}) => {  

   const [cart, setCart] = useState([ ]);

   const addProduct = (item, newCantidad) => {
    const {cantidad = 0} = cart.find(prod => prod.id === item.id) || {};
    const newCart = cart.filter(prod => prod.id !== item.id);
    setCart([...newCart , {...item, cantidad : cantidad + newCantidad}]);
   }
   const totalPrecio = () => {
      return cart.reduce((prev,act) => prev + act.cantidad * act.precio, 0)
   }
   
   const totalProducts = () => cart.reduce((acumulador, productoActual)=> acumulador  + productoActual.cantidad,0);

   const clearCart = () => setCart ([]);

   const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

   const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))
  return (
     <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct,
      totalPrecio,
      totalProducts,
      cart
     }}>
          {children}
     </CartContext.Provider>
  )
}
