import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { RevistaModel } from '../../../app/models/RevistaModel';

interface Props{
    revistat: RevistaModel[];
    deleteRevista: (id: number) => void;
    // selectRevista: (id: number) => void;

}

export default function RevistaList({revistat, deleteRevista}: Props){
    return (
        <>
        
            <Row>
        {revistat.map(revista => (
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