import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link} from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';


const Header = () =>{
    return (
        
            <Navbar bg="light" expand="lg">
                <Container fluid>
                        <Navbar.Brand as={Link} to={'/'}>E-Library</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to={'/dashboard'}>Dashboard</Nav.Link>
                            <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                            <Nav.Link as={Link} to={'/contact'}>Contact us</Nav.Link>
                            <NavDropdown title="Kategorite" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to={'/Librat'}>Librat</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/LibraPerFemije'}>LibraPerFemije</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/Revista'}>Revista</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/Tekste'}>Tekste</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Te tjera
                            </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        
    );
}

export default Header;
