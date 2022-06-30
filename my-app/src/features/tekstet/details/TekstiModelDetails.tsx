import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

//Ketu jane detajet e tekstit qe shfaqen ne momentin
//kur klikojme view dhe funksionet qe nevojiten ne tekstiModelDetails component ne tekstiDashboard.tsx

export default observer (function TekstiModelDetails() {
  const { tekstiStore } = useStore();
  const { selectedTeksti: teksti, loadTeksti, loadingInitial } = tekstiStore;
  const{id}=useParams<{id: any }>();

  useEffect(()=>{
    if(id) loadTeksti(id);
  }, [id, loadTeksti]);

  

  if (loadingInitial || !teksti) return <LoadingComponent />;

  return (
    <Card fluid>
      <Image
        style={{ width: "250px", marginLeft: "75px" }}
        src={`../../../../assets/libratImg/${teksti.foto}`}
      />
      <Card.Content>
        <Card.Header>{teksti.emri}</Card.Header>
        <Card.Meta>
          <span>{teksti.isbn}</span>
        </Card.Meta>
        <Card.Meta>
          <span>{teksti.autori}</span>
        </Card.Meta>
        <Card.Description>{teksti.pershkrimi}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group>
          <Button as={Link} to ={`/manage2/${teksti.id}`} basic color="blue" content="Edit" />
          <Button as={Link} to ='/tekstet' basic color="red" content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
})
