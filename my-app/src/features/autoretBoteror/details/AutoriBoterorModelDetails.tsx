import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Image, Item } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

export default observer (function AutoriBoterorModelDetails() {
  const { autoriBoterorStore } = useStore();
  const { selectedAutoriBoteror: autoriBoteror, loadAutoriBoteror, loadingInitial } = autoriBoterorStore;
  const{id}=useParams<{id: any }>();

  useEffect(()=>{
    if(id) loadAutoriBoteror(id);
  }, [id, loadAutoriBoteror]);

  

  if (loadingInitial || !autoriBoteror) return <LoadingComponent />;

  return (
    <Item.Group>
    <Item>
    <Item.Image size='medium' src={`../../../../assets/libratImg/${autoriBoteror.foto}`} />

    <Item.Content>
       <Item.Header as='a'>
      <h5>Emri i Autorit: {autoriBoteror.emri}</h5>
      <h5>Mbiemri i Autorit: {autoriBoteror.mbiemri}</h5>
        </Item.Header>
      <Item.Description>
        <h5>Biografia e Autorit:</h5>
        {autoriBoteror.biografia}
      </Item.Description>
      <Item.Extra><h5>Vendi i Lindjes {autoriBoteror.vendlindja} </h5></Item.Extra>
      <Item.Meta><h5>Pic{autoriBoteror.foto} </h5></Item.Meta>
      <Button.Group className="p-30 m-30">
          <Button as={Link} to ={`/manage15/${autoriBoteror.id}`} basic color="blue" content="Edit" />
           <Button as={Link} to ='/autoriBoteror' basic color="red" content="Cancel" />
         </Button.Group>
    </Item.Content>
  </Item>
  </Item.Group>
    
  );
})
