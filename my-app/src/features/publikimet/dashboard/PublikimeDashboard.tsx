import React, { useEffect, useContext } from "react";
import { Button, Grid, Header } from "semantic-ui-react";
import PublikimeList from "./PublikimeList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Link } from "react-router-dom";

export default observer(function PublikimeDashboard() {
  const { publikimeStore } = useStore();
  const {loadPublikimet, publikimeRegistry}=publikimeStore;

  useEffect(() => {
    if(publikimeRegistry.size<=1) loadPublikimet();
  }, [publikimeRegistry.size, loadPublikimet]);


  if (publikimeStore.loadingInitial)
    return <LoadingComponent content="Ju lutemi pritni!" />;
  return (
    <>
    <br />
      <Header as='h1' color="black" dividing>
        PUBLIKIMET <Button content="Shto Publikime"  floated="right" as={Link} to='/createPublikime' size="tiny" />
      </Header>
      <br />
      <Grid>
        <Grid.Row width="10">
          <PublikimeList />
        </Grid.Row>
      </Grid>
      </>
  );
});
