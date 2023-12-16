import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Image, Item } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";


export default observer (function EkipaModelDetails() {
  const { ekipaStore } = useStore();
  const { selectedEkipa: ekipa, loadTeam, loadingInitial } = ekipaStore;
  const{id}=useParams<{id: any }>();

  useEffect(()=>{
    if(id) loadTeam(id);
  }, [id, loadTeam]);

  

  if (loadingInitial || !ekipa) return <LoadingComponent />;

  return (
    <Item.Group>
    <Item>
    <Item.Image size='medium' src={`../../../../assets/teamImg/${ekipa.foto}`} />

    <Item.Content>
       <Item.Header as='a'>
      <h5>Emri: {ekipa.emri}</h5>
      <h5>Mbiemri: {ekipa.mbiemri}</h5>
        </Item.Header>
      <Item.Description>
        <h5>Nje pershkrim i shkurter: </h5>
        {ekipa.pershkrimi}
      </Item.Description>
      <Item.Extra><h5>Pozita:  {ekipa.pozita} </h5></Item.Extra>
      <Item.Meta><h5>Pic{ekipa.foto} </h5></Item.Meta>
      <Button.Group className="p-30 m-30">
          <Button as={Link} to ={`/manage13/${ekipa.id}`} basic color="blue" content="Edit" />
           <Button as={Link} to ='/ekipa' basic color="red" content="Cancel" />
         </Button.Group>
    </Item.Content>
  </Item>
  </Item.Group>
    
  );
})
