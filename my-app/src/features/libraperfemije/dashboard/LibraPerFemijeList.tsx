import { observer } from "mobx-react-lite";
import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Grid, Icon, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function LibraPerFemijeList(){
    const {libraPerFemijeStore} = useStore();
    const {deleteLibraPerFemije, libraPerFemijeByViti} = libraPerFemijeStore;
    const [target, setTarget] = useState('');

    function handleDeleteLibraPerFemije(e: SyntheticEvent<HTMLButtonElement>, id: number){
        setTarget(e.currentTarget.value);
        deleteLibraPerFemije(id);
    }

    return (
        <Grid columns={4}>
      {libraPerFemijeByViti.map(libraPerFemije => (
            <Grid.Column key={libraPerFemije.id}>
              <Card 
              image={`../../../../assets/libratImg/${libraPerFemije.foto}`}
              header={libraPerFemije.emri}
              meta={libraPerFemije.autori}
              description={libraPerFemije.zhanri}
              extra={
                <>
                <Button animated='fade' value={libraPerFemije.id}  onClick={(e)=> handleDeleteLibraPerFemije(e, libraPerFemije.id)} floated='right' basic color="red">
                    <Button.Content visible><Icon className="trash" /></Button.Content>
                    <Button.Content hidden>DELETE</Button.Content>
                  </Button>
                  <Button animated as={Link} to={`/libraPerFemije/${libraPerFemije.id}`} floated='right'  basic color='grey' >
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