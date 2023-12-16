import React, { useEffect, useContext } from "react";
import { Button, Grid, Header } from "semantic-ui-react";
import LibraBoterorList from "./LibraBoterorList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Link } from "react-router-dom";

export default observer(function PublikimeDashboard() {
  const { libraBoterorStore } = useStore();
  const {loadLibratBoteror, libraBoterorRegistry}=libraBoterorStore;

  useEffect(() => {
    if(libraBoterorRegistry.size<=1) loadLibratBoteror();
  }, [libraBoterorRegistry.size, loadLibratBoteror]);


  if (libraBoterorStore.loadingInitial)
    return <LoadingComponent content="Ju lutemi pritni!" />;
  return (
    <>
    <br />
      <Header as='h1' color="black" dividing>
        Librat Boteror <Button content="Shto Libra Boteror"  floated="right" as={Link} to='/createLibraBoteror' size="tiny" />
      </Header>
      <br />
      <Grid>
        <Grid.Row width="10">
          <LibraBoterorList />
        </Grid.Row>
      </Grid>
      </>
  );
});
