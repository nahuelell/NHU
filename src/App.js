import './App.css';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer';
import { NavBar } from './Componentes/NavBar';
import { Cart } from './Componentes/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemListContainer } from './Componentes/ItemListContainer';
import { CartProvider } from './Context/CartContext';
export function App() {

  return (  
  <div> 
    <BrowserRouter>
    <CartProvider>
     <NavBar/>   
     <Routes>  
      <Route path='/productos' element={<ItemListContainer/>}/>
      <Route path='/categoria/:categoryID' element={<ItemListContainer/>}/>
      <Route path='/productos/:id' element={<ItemDetailContainer/>}/>   
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     </CartProvider>   
  </BrowserRouter>
  </div>
  );

};
