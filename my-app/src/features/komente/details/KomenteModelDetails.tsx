import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Image, Item } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";


export default observer (function KomenteModelDetails() {
  const { komenteStore } = useStore();
  const { selectedKomente: komente, loadKoment, loadingInitial } = komenteStore;
  const{id}=useParams<{id: any }>();

  useEffect(()=>{
    if(id) loadKoment(id);
  }, [id, loadKoment]);

  

  if (loadingInitial || !komente) return <LoadingComponent />;

  return (
    <Item.Group>
    <Item>
    <Item.Content>
       <Item.Header as='a'>
      <h5>Username: {komente.username}</h5>
        </Item.Header>
      <Item.Description>
        <h5>Komenti: </h5>
        {komente.komenti}
      </Item.Description>
      <Button.Group className="p-30 m-30">
          <Button as={Link} to ={`/manage18/${komente.id}`} basic color="blue" content="Edit" />
           <Button as={Link} to ='/komente' basic color="red" content="Cancel" />
         </Button.Group>
    </Item.Content>
  </Item>
  </Item.Group>
    
  );
})
