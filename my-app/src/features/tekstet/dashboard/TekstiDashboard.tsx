import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import TekstiList from "./TekstiList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function LibriDashboard() {
  const { tekstiStore } = useStore();
  const {loadTekstet, tekstiRegistry}=tekstiStore;

  useEffect(() => {
    if(tekstiRegistry.size<=1) loadTekstet();
  }, [tekstiRegistry.size, loadTekstet]);

  //funksion qe e jek tekstin e kalun edhe e replace me ata t edituarin(1 eshte nese ka edhe e editojme, 2 eshte kur e bojm create prej fillimi)

  if (tekstiStore.loadingInitial)
    return <LoadingComponent content="Ju lutemi pritni!" />;
  return (
    <Grid>
      <Grid.Column width="10">
        <TekstiList />
      </Grid.Column>
      <Grid.Column width="6">
    <h2>Filter</h2>
      </Grid.Column>
    </Grid>
  );
});
