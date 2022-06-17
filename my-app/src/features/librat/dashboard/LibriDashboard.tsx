import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LibriList from "./LibriList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function LibriDashboard() {
  const { libriStore } = useStore();
  const {loadLibrat, libriRegistry}=libriStore;

  useEffect(() => {
    if(libriRegistry.size<=1) loadLibrat();
  }, [libriRegistry.size, loadLibrat]);

  //funksion qe e jek librin e kalun edhe e replace me ata t edituarin(1 eshte nese ka edhe e editojme, 2 eshte kur e bojm create prej fillimi)

  if (libriStore.loadingInitial)
    return <LoadingComponent content="Ju lutemi pritni!" />;
  return (
    <Grid>
      <Grid.Column width="10">
        <LibriList />
      </Grid.Column>
      <Grid.Column width="6">
    <h2>Filter</h2>
      </Grid.Column>
    </Grid>
  );
});
