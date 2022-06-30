import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";



export default observer (function TekstiList() {
  const {tekstiStore}=useStore();
  const{deleteTeksti, tekstetByViti}=tekstiStore;
  const[target, setTarget]= useState('');

  function handleDeleteteksti(e: SyntheticEvent<HTMLButtonElement>, id: number){
    setTarget(e.currentTarget.value);
    deleteTeksti(id);
  }
  return (
    <Segment>
      <Item.Group divided>
        {tekstetByViti.map(teksti => (
          <Item key={teksti.id}>
            <Item.Content>
              <Item.Header as="a">{teksti.emri}</Item.Header>
              <Item.Meta>{teksti.autori}</Item.Meta>
              <Item.Description>
                <div>{teksti.isbn}</div>
                <div>{teksti.pershkrimi}</div>
                <div>{teksti.shtepia_Botuese}</div>
                <div>{teksti.viti_Publikimit}</div>
                <div>{teksti.zhanri}</div>
              </Item.Description>
              <Item.Extra>
                <Button as={Link} to={`/tekstet/${teksti.id}`} floated='right' content='Shfaq' color='blue'/>
                <Button value={teksti.id}  onClick={(e)=> handleDeleteteksti(e, teksti.id)} floated='right' content='Fshij' color='red'/>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
})
