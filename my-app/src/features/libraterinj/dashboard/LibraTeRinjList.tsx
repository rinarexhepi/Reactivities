import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Grid, Icon, Item, Segment } from "semantic-ui-react";
import LibraTeRinjStore from "../../../app/stores/libraTeRinjStore";
import { useStore } from "../../../app/stores/store";



export default observer(function LibraTeRinjList() {
  const { libraTeRinjStore } = useStore();
  const { deleteLibraTeRinj, libraTeRinjByViti  } = libraTeRinjStore;
  const [target, setTarget] = useState('');

  function handleDeleteLibraTeRinj(e: SyntheticEvent<HTMLButtonElement>, id: number) {
    setTarget(e.currentTarget.value);
    deleteLibraTeRinj(id);
  }
  return (

    <Grid columns={4}>
      {libraTeRinjByViti.map(libraTeRinj => (
        <Grid.Column key={libraTeRinj.id}>
          <Card
            image={`../../../../assets/libratImg/${libraTeRinj.foto}`}
            header={libraTeRinj.emri}
            meta={libraTeRinj.autori}
            description={libraTeRinj.zhanri}
            extra={
              <>
                <Button animated='fade' value={libraTeRinj.id} onClick={(e) => handleDeleteLibraTeRinj(e, libraTeRinj.id)} floated='right' basic color="red">
                  <Button.Content visible><Icon className="trash" /></Button.Content>
                  <Button.Content hidden>DELETE</Button.Content>
                </Button>
                <Button animated as={Link} to={`/libraTeRinj/${libraTeRinj.id}`} floated='right' basic color='grey' >
                  <Button.Content hidden>VIEW</Button.Content>
                  <Button.Content visible>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>

              </>
            }
          />
        </Grid.Column>
      ))}
    </Grid>

  );
})
