import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import agent from '../api/Agent';
import { RevistaModel } from '../models/RevistaModel';
import axios from 'axios';

const LibraPerFemije = () => {
     const [libraPerFemije, setLibratPerFemije] = useState([]);

    useEffect( () => {
     axios.get('https://localhost:7067/LibratPerFemije').then(response => {
        console.log(response);
        setLibratPerFemije(response.data);
        })
    }, []) 
    


    return (
        <>

        <Row>
    {libraPerFemije.map((libraFemije: any ) => (
        <Card style={{ width: '18rem' }} key={libraFemije.id}>
        <Card.Body>
            <Card.Title>{libraFemije.emri}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            {libraFemije.pershkrimi}
            </Card.Text>
            <Card.Link >{libraFemije.autori}</Card.Link>
            <Card.Link >{libraFemije.zhanri}</Card.Link>
        </Card.Body>
        <Button variant='danger'>Delete</Button>
    </Card>
    ))}
    </Row>
    </>
    )
}

export default LibraPerFemije;