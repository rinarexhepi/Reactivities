import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Image, Item } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";


export default observer (function KontaktiModelDetails() {
  const { kontaktiStore } = useStore();
  const { selectedKontakti: kontakti, loadKontakt, loadingInitial } = kontaktiStore;
  const{id}=useParams<{id: any }>();

  useEffect(()=>{
    if(id) loadKontakt(id);
  }, [id, loadKontakt]);

  

  if (loadingInitial || !kontakti) return <LoadingComponent />;

  return (
    <Item.Group>
    <Item>
    <Item.Content>
       <Item.Header as='a'>
      <h5>Emri: {kontakti.emri}</h5>
      <h5>Mbiemri: {kontakti.mbiemri}</h5>
        </Item.Header>
      <Item.Description>
        <h5>Mesazhi: </h5>
        {kontakti.mesazhi}
      </Item.Description>
      <Item.Extra><h5>Email:  {kontakti.email} </h5></Item.Extra>
      <Button.Group className="p-30 m-30">
          <Button as={Link} to ={`/manage17/${kontakti.id}`} basic color="blue" content="Edit" />
           <Button as={Link} to ='/kontakti' basic color="red" content="Cancel" />
         </Button.Group>
    </Item.Content>
  </Item>
  </Item.Group>
    
  );
})
