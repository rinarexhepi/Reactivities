import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Grid, Icon, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";



export default observer (function AutoriStore() {
  const {autoriStore}=useStore();
  const{deleteAutori, autoretByViti}=autoriStore;
  const[target, setTarget]= useState('');

  function handleDeleteAutori(e: SyntheticEvent<HTMLButtonElement>, id: number){
    setTarget(e.currentTarget.value);
    deleteAutori(id);
  }
  return (
      <Grid columns={4}>
      {autoretByViti.map(autori => (
            <Grid.Column key={autori.id}>
              <Card 
              image={`../../../../assets/libratImg/${autori.foto}`}
              header={autori.emri}
              meta={autori.mbiemri}
              description={autori.vitiLindjes}
              extra={
                <>
                <Button animated='fade' value={autori.id}  onClick={(e)=> handleDeleteAutori(e, autori.id)} floated='right' basic color="red">
                    <Button.Content visible><Icon className="trash" /></Button.Content>
                    <Button.Content hidden>DELETE</Button.Content>
                  </Button>
                  <Button animated as={Link} to={`/autoret/${autori.id}`} floated='right'  basic color='grey' >
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
