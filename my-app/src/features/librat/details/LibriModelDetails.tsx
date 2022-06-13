import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { LibriModel } from "../../../app/models/LibriModel";



//Ketu jane detajet e librit qe shfaqen ne momentin 
//kur klikojme view dhe funksionet qe nevojiten ne LibriModelDetails component ne LibriDashboard.tsx

interface Props {
  libri: LibriModel;
  cancelSelectLibri: () => void;
  openForm: (id: number) => void;
}




export default function LibriModelDetails({libri, cancelSelectLibri, openForm}: Props) {
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
            onClick={cancelSelectLibri} basic color="red" content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
