import { observer } from "mobx-react-lite";
import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Grid, Icon, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function LibraBoterorList(){
    const {libraBoterorStore} = useStore();
    const {deleteLibraBoteror, libraBoterorByViti} = libraBoterorStore;
    const [target, setTarget] = useState('');

    function handleDeleteLibraBoteror(e: SyntheticEvent<HTMLButtonElement>, id: number){
        setTarget(e.currentTarget.value);
        deleteLibraBoteror(id);
    }

    return (
        <Grid columns={4}>
      {libraBoterorByViti.map(libraBoteror => (
            <Grid.Column key={libraBoteror.id}>
              <Card 
              image={`../../../../assets/libratImg/${libraBoteror.foto}`}
              header={libraBoteror.titulli}
              meta={libraBoteror.autori}
              description={libraBoteror.zhanri}
              extra={
                <>
                <Button animated='fade' value={libraBoteror.id}  onClick={(e)=> handleDeleteLibraBoteror(e, libraBoteror.id)} floated='right' basic color="red">
                    <Button.Content visible><Icon className="trash" /></Button.Content>
                    <Button.Content hidden>DELETE</Button.Content>
                  </Button>
                  <Button animated as={Link} to={`/libraBoteror/${libraBoteror.id}`} floated='right'  basic color='grey' >
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