import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";



//Ketu jane detajet e librit qe shfaqen ne momentin 
//kur klikojme view dhe funksionet qe nevojiten ne LibriModelDetails component ne LibriDashboard.tsx




export default function LibriModelDetails() {

  const {libriStore}=useStore();
  const{selectedLibri: libri, openForm, cancelSelectedLibri}=libriStore;

  if(!libri) return <LoadingComponent/>;

  return (
    <Card fluid>
      <Image
        style={{ width: "250px", marginLeft: "75px" }}
        src={`../../../../assets/libratImg/${libri.foto}` 
      }
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
          <Button
            onClick={() => openForm(libri.id)} basic color="blue" content="Edit"
          />
          <Button
            onClick={cancelSelectedLibri} basic color="red" content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
