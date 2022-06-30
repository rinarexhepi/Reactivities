import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

//Ketu jane detajet e revistes qe shfaqen ne momentin
//kur klikojme view dhe funksionet qe nevojiten ne LibriModelDetails component ne LibriDashboard.tsx

export default observer (function LibriModelDetails() {
  const { revistaStore } = useStore();
  const { selectedRevista: revista, loadRevista, loadingInitial } = revistaStore;
  const{id}=useParams<{id: any }>();

  useEffect(()=>{
    if(id) loadRevista(id);
  }, [id, loadRevista]);

  

  if (loadingInitial || !revista) return <LoadingComponent />;

  return (
    <Card fluid>
      <Image
        style={{ width: "250px", marginLeft: "75px" }}
        src={`../../../../assets/libratImg/${revista.foto}`}
      />
      <Card.Content>
        <Card.Header>{revista.emri}</Card.Header>
        <Card.Meta>
          <span>{revista.isbn}</span>
        </Card.Meta>
        <Card.Meta>
          <span>{revista.autori}</span>
        </Card.Meta>
        <Card.Description>{revista.pershkrimi}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group>
          <Button as={Link} to ={`/manage3/${revista.id}`} basic color="blue" content="Edit" />
          <Button as={Link} to ='/revistat' basic color="red" content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
})
