import React, { useEffect, useContext } from "react";
import { Button, Grid, Header } from "semantic-ui-react";
import LibraPerFemijeList from "./LibraPerFemijeList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Link } from "react-router-dom";

export default observer(function LibraPerFemijeDashboard() {
  const { libraPerFemijeStore } = useStore();
  const {loadLibraPerFemije, libraPerFemijeRegistry}=libraPerFemijeStore;

  useEffect(() => {
    if(libraPerFemijeRegistry.size<=1) loadLibraPerFemije();
  }, [libraPerFemijeRegistry.size, loadLibraPerFemije]);


  if (libraPerFemijeStore.loadingInitial)
    return <LoadingComponent content="Ju lutemi pritni!" />;
  return (
    <>
    <br />
      <Header as='h1' color="black" dividing>
        LIBRAT <Button content="Shto Libra"  floated="right" as={Link} to='/createLibraPerFemije' size="tiny" />
      </Header>
      <br />
      <Grid>
        <Grid.Row width="10">
          <LibraPerFemijeList />
        </Grid.Row>
      </Grid>
      </>
  );
});
