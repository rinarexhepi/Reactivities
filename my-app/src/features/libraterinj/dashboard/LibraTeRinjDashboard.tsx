import React, { useEffect } from "react";
import { Button, Grid, Header } from "semantic-ui-react";
import LibraTeRinjList from "./LibraTeRinjList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Link } from "react-router-dom";

export default observer(function LibraTeRinjDashboard() {
  const { libraTeRinjStore } = useStore();
  const {loadLibraTeRinj, libraTeRinjRegistry}=libraTeRinjStore;

  useEffect(() => {
    if(libraTeRinjRegistry.size<=1) loadLibraTeRinj();
  }, [libraTeRinjRegistry.size, loadLibraTeRinj]);


  if (libraTeRinjStore.loadingInitial)
    return <LoadingComponent content="Ju lutemi pritni!" />;
  return (
    <>
    <br />
      <Header as='h1' color="black" dividing>
        LIBRAT E RINJ <Button content="Shto Libra Te Rinje"  floated="right" as={Link} to='/createLibraTeRinj' size="tiny" />
      </Header>
      <br />
      <Grid>
        <Grid.Row width="10">
          <LibraTeRinjList />
        </Grid.Row>
      </Grid>
      </>
  );
});
