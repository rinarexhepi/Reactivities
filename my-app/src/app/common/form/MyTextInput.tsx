import {useField} from 'formik' ;
import React from 'react';
import { Form } from 'semantic-ui-react';

interface Props{
    placeholder: string;
    name: string;
    label?: string;
}

export default function MyTextInput(props: Props){
    const[field, meta] = useField(props.name);
    return(
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <label color = 'red'>{meta.error}</label>
            ) : null}

        </Form.Field>
    )
}