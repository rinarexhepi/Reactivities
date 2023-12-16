import React, { useEffect } from "react";
import { Button, Grid, Header, Icon } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Link } from "react-router-dom";
import AutoriBoterorList from "./AutoriBoterorList";

export default observer(function AutoriDashboard() {
  const { autoriBoterorStore } = useStore();
  const {loadAutoretBoteror, autoriBoterorRegistry}=autoriBoterorStore;

  useEffect(() => {
    if(autoriBoterorRegistry.size<=1) loadAutoretBoteror();
  }, [autoriBoterorRegistry.size, loadAutoretBoteror]);

  if (autoriBoterorStore.loadingInitial)
    return <LoadingComponent content="Ju lutemi pritni!" />;
  return (
    <>
    <br />
      <Header as='h1' color="black" dividing>
        Autoret <Button icon="add" content='Shto Autore' floated="right" as={Link} to='/createAutoriboteror' size="tiny" />
      </Header>
      <br />
      <Grid>
        <Grid.Row width="10">
          <AutoriBoterorList />
        </Grid.Row>
      </Grid>
    </>
  );
});
