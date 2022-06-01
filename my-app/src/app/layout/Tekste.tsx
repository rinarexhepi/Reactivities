import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import agent from '../api/Agent';
import { RevistaModel } from '../models/RevistaModel';
import axios from 'axios';

const Tekste = () => {
     const [tesktet, setTekstet] = useState([]);

    useEffect( () => {
     axios.get('https://localhost:7067/Tekste').then(response => {
        console.log(response);
        setTekstet(response.data);
        })
    }, []) 
    


    return (
        <>

        <Row>
    {tesktet.map((tekste: any ) => (
        <Card style={{ width: '18rem' }} key={tekste.id}>
        <Card.Body>
            <Card.Title>{tekste.emri}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            {tekste.pershkrimi}
            </Card.Text>
            <Card.Link >{tekste.autori}</Card.Link>
            <Card.Link >{tekste.zhanri}</Card.Link>
        </Card.Body>
        <Button variant='danger'>Delete</Button>
    </Card>
    ))}
    </Row>
    </>
    )
}

export default Tekste;