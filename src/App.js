import './App.css';
import { ItemListContainer } from './Componentes/ItemListContainer';
import {NavBar} from './Componentes/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function App() {

  return (  
    <div className='container'>
    <NavBar/>  
    <Container>
      <Row className="justify-content-center text-center" md={6}>
      <Col lg={4}>
        <ItemListContainer/>
        
     </Col>
      </Row>
    </Container>
    
   </div>
  );
};
