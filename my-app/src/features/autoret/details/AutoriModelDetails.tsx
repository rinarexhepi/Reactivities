import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Image, Item } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

export default observer (function AutoriModelDetails() {
  const { autoriStore } = useStore();
  const { selectedAutori: autori, loadAutori, loadingInitial } = autoriStore;
  const{id}=useParams<{id: any }>();

  useEffect(()=>{
    if(id) loadAutori(id);
  }, [id, loadAutori]);

  

  if (loadingInitial || !autori) return <LoadingComponent />;

  return (
    <Item.Group>
    <Item>
    <Item.Image size='medium' src={`../../../../assets/libratImg/${autori.foto}`} />

    <Item.Content>
       <Item.Header as='a'>
      <h5>Emri i Autorit: {autori.emri}</h5>
      <h5>Mbiemri i Autorit: {autori.mbiemri}</h5>
        </Item.Header>
      <Item.Description>
        <h5>Biografia e Autorit:</h5>
        {autori.biografia}
      </Item.Description>
      <Item.Extra><h5>Viti i Lindjes {autori.vitiLindjes} </h5></Item.Extra>
      <Item.Meta><h5>Pic{autori.foto} </h5></Item.Meta>
      <Button.Group className="p-30 m-30">
          <Button as={Link} to ={`/manage8/${autori.id}`} basic color="blue" content="Edit" />
           <Button as={Link} to ='/autoret' basic color="red" content="Cancel" />
         </Button.Group>
    </Item.Content>
  </Item>
  </Item.Group>
    
  );
})
