import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import agent from '../api/Agent';
import { RevistaModel } from '../models/RevistaModel';
import axios from 'axios';


const Librat = () => {
     const [librat, setLibrat] = useState([]);

    useEffect( () => {
     axios.get('https://localhost:7067/Librat').then(response => {
        console.log(response);
        setLibrat(response.data);
        })
    }, []) 
    


    return (
        <>
        <img src="./assets/b3.png" />
        <Row>
            
            {librat.map((libri: any) => (
                <Card style={{ width: '18rem' }} key={libri.id}>
                    <Card.Img variant="top" src="assets/b1.png"/>
                    <Card.Body>
                        <Card.Title>{libri.emri}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button className='mr-5'>Delete</Button>
                        <Button className='ml-5'>Update</Button>
                    </Card.Body>
                </Card>
            ))}
        </Row>
    </>
    )
}

export default Librat;