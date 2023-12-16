import React, { useEffect } from "react";
import { Button, Grid, Header, Icon } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Link } from "react-router-dom";
import AutoriList from "./AutoriList";

export default observer(function AutoriDashboard() {
  const { autoriStore } = useStore();
  const {loadAutoret, autoriRegistry}=autoriStore;

  useEffect(() => {
    if(autoriRegistry.size<=1) loadAutoret();
  }, [autoriRegistry.size, loadAutoret]);

  //funksion qe e jek librin e kalun edhe e replace me ata t edituarin(1 eshte nese ka edhe e editojme, 2 eshte kur e bojm create prej fillimi)

  if (autoriStore.loadingInitial)
    return <LoadingComponent content="Ju lutemi pritni!" />;
  return (
    <>
    <br />
      <Header as='h1' color="black" dividing>
        Autoret <Button icon="add" content='Shto Autore' floated="right" as={Link} to='/createAutori' size="tiny" />
      </Header>
      <br />
      <Grid>
        <Grid.Row width="10">
          <AutoriList />
        </Grid.Row>
      </Grid>
    </>
  );
});
