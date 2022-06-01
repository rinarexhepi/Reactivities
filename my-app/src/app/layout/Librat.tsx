import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
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

        <Row>
    {librat.map((librat: any ) => (
        <Card style={{ width: '18rem' }} key={librat.id}>
        <Card.Body>
            <Card.Title>{librat.emri}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            {librat.pershkrimi}
            </Card.Text>
            <Card.Link >{librat.autori}</Card.Link>
            <Card.Link >{librat.zhanri}</Card.Link>
        </Card.Body>
        <Button variant='danger'>Delete</Button>
    </Card>
    ))}
    </Row>
    </>
    )
}

export default Librat;