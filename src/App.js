import './App.css';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer';
import { NavBar } from './Componentes/NavBar';
import { CardWidget } from './Componentes/CardWidget';
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
      <Route path='/productos/:slug' element={<ItemDetailContainer/>}/>   
      <Route path='/cart' element={<CardWidget/>}/>
     </Routes>
     </CartProvider>   
  </BrowserRouter>
  </div>
  );

};
