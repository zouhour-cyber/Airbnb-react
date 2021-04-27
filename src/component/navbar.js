// import logo-default-group-en.svg ./src;
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
// import src from '*.avif';
function Menu() {
  return (
    <div>
<Navbar  className="px-5" collapseOnSelect expand="lg" bg="transparent" variant="light" >
<Navbar>
    <Navbar.Brand href="#home">
      <img
        src="logoairbnb.png" color="#FF5A5F"
        width="120"
        height="70"
       
        className=""
        alt="Airbnb"
      />
    </Navbar.Brand>
  </Navbar>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#features"> Hébergement</Nav.Link>
      <Nav.Link href="#pricing">Expérience </Nav.Link>
      <Nav.Link href="#pricing">Expérience  en ligne</Nav.Link>
      <Nav.Link href="#pricing" className="ml-5">Devenez hôte</Nav.Link>

    </Nav>

  </Navbar.Collapse>
</Navbar>
  
     
    
 
    </div>
  );
}

export default Menu