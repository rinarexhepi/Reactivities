import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";



export default observer (function LibriList() {
  const {libriStore}=useStore();
  const{deleteLibri, libratByViti}=libriStore;
  const[target, setTarget]= useState('');

  function handleDeleteLibri(e: SyntheticEvent<HTMLButtonElement>, id: number){
    setTarget(e.currentTarget.value);
    deleteLibri(id);
  }
  return (
    <Segment>
      <Item.Group divided>
        {libratByViti.map(libri => (
          <Item key={libri.id}>
            <Item.Content>
              <Item.Header as="a">{libri.emri}</Item.Header>
              <Item.Meta>{libri.autori}</Item.Meta>
              <Item.Description>
                <div>{libri.isbn}</div>
                <div>{libri.pershkrimi}</div>
                <div>{libri.shtepia_Botuese}</div>
                <div>{libri.viti_Publikimit}</div>
                <div>{libri.zhanri}</div>
              </Item.Description>
              <Item.Extra>
                <Button as={Link} to={`/librat/${libri.id}`} floated='right' content='Shfaq' color='blue'/>
                <Button value={libri.id}  onClick={(e)=> handleDeleteLibri(e, libri.id)} floated='right' content='Fshij' color='red'/>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
})
