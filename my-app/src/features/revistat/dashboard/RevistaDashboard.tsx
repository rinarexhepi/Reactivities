import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import RevistaList from "./RevistaList";

export default observer(function RevistaDashboard() {
  const { revistaStore } = useStore();
  const {loadRevistat, revistaRegistry}=revistaStore;

  useEffect(() => {
    if(revistaRegistry.size<=1) loadRevistat();
  }, [revistaRegistry.size, loadRevistat]);

  //funksion qe e jek librin e kalun edhe e replace me ata t edituarin(1 eshte nese ka edhe e editojme, 2 eshte kur e bojm create prej fillimi)

  if (revistaStore.loadingInitial)
    return <LoadingComponent content="Ju lutemi pritni!" />;
  return (
    <Grid>
      <Grid.Column width="10">
        <RevistaList />
      </Grid.Column>
      <Grid.Column width="6">
    <h2>Filter</h2>
      </Grid.Column>
    </Grid>
  );
});
