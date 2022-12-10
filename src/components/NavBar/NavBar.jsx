import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Cartwidget from '../CartWidget/CartWidget';
import "./NavBar.css";
import Logo from "../../images/logo.jpg"

import {NavLink} from "react-router-dom";



function NavBar(props) {
  const {pages} = props;

  return (
    <Navbar className ="nav" bg="light" expand="lg">
      <Container fluid>
        <a href=" ">
            <div className="logoNav">
                <img className='imgLogo' src={Logo} alt="Logo" />
            </div>
        </a>
        <Navbar.Brand className="titleNav" href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"  style={{ maxHeight: '100px' }} navbarScroll >
            <div className="NavLink">
            {pages.map((page) => (
            <li key={`${page.id}-page`}>
            <NavLink to={page.id}
                  className={({ isActive }) =>
                  isActive ? "link is-active" : "link"
                  }>
              {page.name}
                         
           {/* <NavDropdown title="Productos" id={page.name}>
              <NavDropdown.Item href="#action3">Almacen</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Bebidas</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Congelados</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Lacteos</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown> */}
          
            </NavLink>
                </li>
                ))}
                </div>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Productos"
              className="me-2 buttonSearch"
              aria-label="Search"
            />
            <Button className="button2" variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
       
       {/* ICON CARTWIDGET*/}
      <Cartwidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;