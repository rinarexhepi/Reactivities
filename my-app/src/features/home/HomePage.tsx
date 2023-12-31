import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

export default function HomePage(){
    return(
        <Container style={{marginTop: '7em'}}>
          <h1>Home</h1>  
          <h3>Go to <Link to='/librat'>Librat</Link></h3>  
          <h3>Go to <Link to='/tekstet'>Tekstet</Link></h3>  
          <h3>Go to <Link to='/revistat'>Revistat</Link></h3>  
        </Container>
    )
}