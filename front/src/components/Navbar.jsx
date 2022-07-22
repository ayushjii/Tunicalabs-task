import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function Navbarmain() {
  return (
    <Navbar className='tek' >
      <Container >
        <Navbar.Brand href="/" className='logonav'>
        TUNICALABS MEDIA
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navbarmain;