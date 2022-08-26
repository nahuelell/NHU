import logo from './logo.svg';
import './App.css';
import Saludo from './Componentes/Saludo';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';

function App() {
  const estilos = {
    backgroundColor: "red",
    padding: "15px"
  }
  const log = ()=> {console.log("holi")}
  return (  
    <div className='containern'>
    <NavBar/>
    <ItemListContainer style={{backgroundColor:"blue"}} greeting={'Holiwis'}/>
    <h1>Hola Mundo</h1>
    <h1 style={estilos}>Nuevo Mensaje</h1>
    </div>
  );
}

export default App;
