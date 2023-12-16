import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Image, Item } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";


export default observer(function LibraTeRinjModelDetails() {
  const { libraTeRinjStore } = useStore();
  const { selectedLibraTeRinj: libraTeRinj, loadLibriIRi, loadingInitial } = libraTeRinjStore;
  const { id } = useParams<{ id: any }>();

  useEffect(() => {
    if (id) loadLibriIRi(id);
  }, [id, loadLibriIRi]);



  if (loadingInitial || !libraTeRinj) return <LoadingComponent />;

  return (


    <Item.Group>
      <Item>
        <Item.Image size='medium' src={`../../../../assets/libratImg/${libraTeRinj.foto}`} />

        <Item.Content>
          <Item.Header as='a'>
            <h5>TITULLI I LIBRIT: {libraTeRinj.emri}</h5>

          </Item.Header>
          <Item.Extra><h5>AUTORI I LIBRIT: {libraTeRinj.autori}</h5></Item.Extra>
          <Item.Meta>{libraTeRinj.isbn}</Item.Meta>
          <Item.Description>
            <h5>PERSHKRIMI I LIBRIT:</h5>
            {libraTeRinj.pershkrimi}
          </Item.Description>
          <Item.Extra><h5>SHTEPIA BOTUESE: {libraTeRinj.shtepia_Botuese} </h5></Item.Extra>
          <Item.Meta><h5>VITI I PUBLIKIMIT: {libraTeRinj.viti_Publikimit} </h5></Item.Meta>
          <Button.Group className="p-30 m-30">
            <Button as={Link} to={`/manage10/${libraTeRinj.id}`} basic color="blue" content="Edit" />
            <Button as={Link} to='/libraTeRinj' basic color="red" content="Cancel" />
          </Button.Group>
        </Item.Content>
      </Item>
    </Item.Group>

  );
})
