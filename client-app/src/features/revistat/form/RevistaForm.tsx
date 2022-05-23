import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { RevistaModel } from '../../../app/models/RevistaModel';

interface Props{
    revista: RevistaModel | undefined;
    createRevista: (revista: RevistaModel) => void;
}

export default function RevistaForm({revista: createRevista}: Props){

    function handleSubmit(){
        createRevista(revista);
    }

    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}