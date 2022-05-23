import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { RevistaModel } from '../../../app/models/RevistaModel';

interface Props{
    revista: RevistaModel;
    cancelSelectRevista: () => void;
}

export default function RevistaById({revista, cancelSelectRevista}: Props){
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{revista.emri}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    {revista.pershkrimi}
                </Card.Text>
                <Card.Link >helloadiasida</Card.Link>
                <Card.Link >{revista.shtepia_botuese}</Card.Link>
                <Card.Link >{revista.zhanri}</Card.Link>
                <Button onClick={cancelSelectRevista } ></Button>
            </Card.Body>
        </Card>
    )
}