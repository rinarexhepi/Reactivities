import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link} from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';


const Header = () =>{
    return (
        
            <Navbar bg="light" expand="lg">
                <Container fluid>
                        <Navbar.Brand as={Link} to={'/LandingPage'}>E-Library</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to={'/Revista'}>Revista</Nav.Link>
                            <Nav.Link as={Link} to={'/Librat'}>Librat</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to={'/LibraPerFemije'}>LibraPerFemije</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/Tekste'}>Tekste</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
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
