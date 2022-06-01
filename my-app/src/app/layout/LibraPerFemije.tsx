import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import agent from '../api/Agent';
import { RevistaModel } from '../models/RevistaModel';
import axios from 'axios';

const LibraPerFemije = () => {
     const [libraPerFemije, setLibratPerFemije] = useState([]);

    useEffect( () => {
     axios.get('https://localhost:7067/LibraPerFemije').then(response => {
        console.log(response);
        setLibratPerFemije(response.data);
        })
    }, []) 
    


    return (
        <>

        <Row>
    {libraPerFemije.map((revista: any ) => (
        <Card style={{ width: '18rem' }} key={revista.id}>
        <Card.Body>
            <Card.Title>{revista.emri}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            {revista.pershkrimi}
            </Card.Text>
            <Card.Link >{revista.autori}</Card.Link>
            <Card.Link >{revista.zhanri}</Card.Link>
        </Card.Body>
        <Button variant='danger'>Delete</Button>
    </Card>
    ))}
    </Row>
    </>
    )
}

export default LibraPerFemije;