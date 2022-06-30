import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";



export default observer (function RevistaList() {
  const {revistaStore}=useStore();
  const{deleteRevista, revistatByViti}=revistaStore;
  const[target, setTarget]= useState('');

  function handleDeleteRevista(e: SyntheticEvent<HTMLButtonElement>, id: number){
    setTarget(e.currentTarget.value);
    deleteRevista(id);
  }
  return (
    <Segment>
      <Item.Group divided>
        {revistatByViti.map(revista => (
          <Item key={revista.id}>
            <Item.Content>
              <Item.Header as="a">{revista.emri}</Item.Header>
              <Item.Meta>{revista.autori}</Item.Meta>
              <Item.Description>
                <div>{revista.isbn}</div>
                <div>{revista.pershkrimi}</div>
                <div>{revista.shtepia_Botuese}</div>
                <div>{revista.viti_Publikimit}</div>
                <div>{revista.zhanri}</div>
              </Item.Description>
              <Item.Extra>
                <Button as={Link} to={`/revistat/${revista.id}`} floated='right' content='Shfaq' color='blue'/>
                <Button value={revista.id}  onClick={(e)=> handleDeleteRevista(e, revista.id)} floated='right' content='Fshij' color='red'/>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
})
