
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RevistaDashboard from '../../features/revistat/dashboard/RevistaDashboard';
import agent from '../api/agent';
import { RevistaModel } from '../models/RevistaModel';
import Header from './Header';

const Revista = () => {
    // const [revistat, setRevistat] = useState([]);

    // useEffect( () => {
    //   axios.get('https://localhost:7067/Revistat').then(response => {
    //     console.log(response);
    //     setRevistat(response.data);
    //   })
    // }, [])

    const [revistat, setRevistat] = useState<RevistaModel[]>([]);
    // const [selectedRevista, setSelectedRevista] = useState<RevistaModel | undefined>(undefined);



    useEffect( () => {
      agent.Revistat.revistaList().then(response => {
        setRevistat(response);
      });
    }, []);

    function handleCreateRevista(revista: RevistaModel){
        agent.Revistat.revistaCreate(revista).then(() => {
          setRevistat([...revistat, revista]);
        })
    }

    function handleDeleteRevista(id: number){
        agent.Revistat.revistaDelete(id).then(() => {
        setRevistat([...revistat.filter(x => x.id !== id) ]);
      })
    }

    // function handleSelectRevista(id: number){
    //   setSelectedRevista(revistat.find(x => x.id === id))
    // }

    // function handleCancelSelectedRevista(){
    //   setSelectedRevista(undefined);
    // }
    
    return (
        <>
          <Header />

          <Container>
            <Row className='m-5'>
              <RevistaDashboard 
                revistat={revistat}
                deleteRevista={handleDeleteRevista}
                createRevista={handleCreateRevista}
                // selectedRevista={selectedRevista}
                // selectRevista={handleSelectRevista}
                // cancelSelectRevista={handleCancelSelectedRevista}
              />
              
            </Row>
          </Container>
        </>
    )


}

export default Revista;