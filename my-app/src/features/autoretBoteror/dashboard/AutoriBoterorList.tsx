import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Grid, Icon, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";



export default observer (function AutoriBoterorStore() {
  const {autoriBoterorStore}=useStore();
  const{deleteAutoriBoteror, autoretBoterorByViti}=autoriBoterorStore;
  const[target, setTarget]= useState('');

  function handleDeleteAutoriBoteror(e: SyntheticEvent<HTMLButtonElement>, id: number){
    setTarget(e.currentTarget.value);
    deleteAutoriBoteror(id);
  }
  return (
      <Grid columns={4}>
      {autoretBoterorByViti.map(autoriBoteror => (
            <Grid.Column key={autoriBoteror.id}>
              <Card 
              image={`../../../../assets/libratImg/${autoriBoteror.foto}`}
              header={autoriBoteror.emri}
              meta={autoriBoteror.mbiemri}
              description={autoriBoteror.biografia}
              extra={
                <>
                <Button animated='fade' value={autoriBoteror.id}  onClick={(e)=> handleDeleteAutoriBoteror(e, autoriBoteror.id)} floated='right' basic color="red">
                    <Button.Content visible><Icon className="trash" /></Button.Content>
                    <Button.Content hidden>DELETE</Button.Content>
                  </Button>
                  <Button animated as={Link} to={`/autoriBoteror/${autoriBoteror.id}`} floated='right'  basic color='grey' >
                  <Button.Content hidden>VIEW</Button.Content>
                  <Button.Content visible>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>
                
                </>
              }
              />
          </Grid.Column>
        ))}
      </Grid>
  );
})
