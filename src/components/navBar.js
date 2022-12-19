import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.jpg'

function NavScroll() {
  return (
    <Navbar bg="dark" >
      <Container fluid>
        <Navbar.Brand style={{color:'white'}} href="#"><img src={logo} height={60} width={70}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Container>
    </Navbar>
  );
}

export default NavScroll;