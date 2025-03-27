import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';


function NavBar() {
return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
        <Navbar.Brand href="#">Diseños Flor de Cerezo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Vestidos</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Blusas</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Pantalones</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Accesorios</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Form className="d-flex">
            <Form.Control
            type="Buscar"
            placeholder="Buscar"
            className="me-2"
            aria-label="Buscar"
            />
            <Button variant="info">Buscar</Button>
        </Form>
        <div className="d-flex align-items-center ms-3">
            <CartWidget/>
        </div>
        </Navbar.Collapse>
    </Container>
    </Navbar>

);
}

export default NavBar;

