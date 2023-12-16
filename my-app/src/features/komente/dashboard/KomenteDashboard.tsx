import React, { useEffect } from "react";
import { Button, Grid, Header, Icon } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Link } from "react-router-dom";
import KomenteList from "./KomenteList";

export default observer(function KomenteDashboard() {
  const { komenteStore } = useStore();
  const {loadKomente, KomenteRegistry}=komenteStore;

  useEffect(() => {
    if(KomenteRegistry.size<=1) loadKomente();
  }, [KomenteRegistry.size, loadKomente]);

  //funksion qe e jek librin e kalun edhe e replace me ata t edituarin(1 eshte nese ka edhe e editojme, 2 eshte kur e bojm create prej fillimi)

  if (komenteStore.loadingInitial)
    return <LoadingComponent content="Ju lutemi pritni!" />;
  return (
    <>
    <br />
      <Header as='h1' color="black" dividing>
        Blog Section
      </Header>
      <br />
          <KomenteList />
    </>
  );
});
