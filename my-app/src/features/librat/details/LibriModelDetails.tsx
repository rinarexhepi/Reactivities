import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

//Ketu jane detajet e librit qe shfaqen ne momentin
//kur klikojme view dhe funksionet qe nevojiten ne LibriModelDetails component ne LibriDashboard.tsx

export default observer (function LibriModelDetails() {
  const { libriStore } = useStore();
  const { selectedLibri: libri, loadLibri, loadingInitial } = libriStore;
  const{id}=useParams<{id: any }>();

  useEffect(()=>{
    if(id) loadLibri(id);
  }, [id, loadLibri]);

  

  if (loadingInitial || !libri) return <LoadingComponent />;

  return (
    <Card fluid>
      <Image
        style={{ width: "250px", marginLeft: "75px" }}
        src={`../../../../assets/libratImg/${libri.foto}`}
      />
      <Card.Content>
        <Card.Header>{libri.emri}</Card.Header>
        <Card.Meta>
          <span>{libri.isbn}</span>
        </Card.Meta>
        <Card.Meta>
          <span>{libri.autori}</span>
        </Card.Meta>
        <Card.Description>{libri.pershkrimi}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group>
          <Button as={Link} to ={`/manage/${libri.id}`} basic color="blue" content="Edit" />
          <Button as={Link} to ='/librat' basic color="red" content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
})
