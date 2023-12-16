import { observer } from "mobx-react-lite";
import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Grid, Icon, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function PublikimeList(){
    const {publikimeStore} = useStore();
    const {deletePublikime, publikimeByViti} = publikimeStore;
    const [target, setTarget] = useState('');

    function handleDeletePublikime(e: SyntheticEvent<HTMLButtonElement>, id: number){
        setTarget(e.currentTarget.value);
        deletePublikime(id);
    }

    return (
        <Grid columns={4}>
      {publikimeByViti.map(publikime => (
            <Grid.Column key={publikime.id}>
              <Card 
              image={`../../../../assets/libratImg/${publikime.foto}`}
              header={publikime.emri}
              meta={publikime.autori}
              description={publikime.lloji}
              extra={
                <>
                <Button animated='fade' value={publikime.id}  onClick={(e)=> handleDeletePublikime(e, publikime.id)} floated='right' basic color="red">
                    <Button.Content visible><Icon className="trash" /></Button.Content>
                    <Button.Content hidden>DELETE</Button.Content>
                  </Button>
                  <Button animated as={Link} to={`/publikime/${publikime.id}`} floated='right'  basic color='grey' >
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
    )

})