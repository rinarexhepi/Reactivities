import React, { useState } from 'react';
import { Button, Offcanvas, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Sidebar(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Settings
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ListGroup>
            <ListGroup.Item as={Link} to={'/librat'}>Shfaq Librat</ListGroup.Item>
            <ListGroup.Item as={Link} to={'/LibraPerFemije'}>Shfaq Librat per Femije</ListGroup.Item>
            <ListGroup.Item as={Link} to={'/revista'}>Shfaq Revista</ListGroup.Item>
            <ListGroup.Item as={Link} to={'/tekste'}>Shfaq Tekste</ListGroup.Item>
            <ListGroup.Item as={Link} to={'/tetjera'}>Shfaq Te tjerat</ListGroup.Item>
            </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

