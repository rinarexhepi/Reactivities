import React, { useEffect } from "react";
import { Button, Grid, Header, Icon } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Link } from "react-router-dom";
import KontaktiList from "./KontaktiList";
import KontaktiForm from "../form/KontaktiForm";

export default observer(function KontaktiDashboard() {
  const { kontaktiStore } = useStore();
  const {loadKontakti, kontaktiRegistry}=kontaktiStore;

  useEffect(() => {
    if(kontaktiRegistry.size<=1) loadKontakti();
  }, [kontaktiRegistry.size, loadKontakti]);

  //funksion qe e jek librin e kalun edhe e replace me ata t edituarin(1 eshte nese ka edhe e editojme, 2 eshte kur e bojm create prej fillimi)

  if (kontaktiStore.loadingInitial)
    return <LoadingComponent content="Ju lutemi pritni!" />;
  return (
    <>
    <br />
      <Header as='h1' color="black" dividing>
        Contact Us <Button icon="add" content='Shfaq Kontaktet' floated="right" as={Link} to='/shfaqKontaktet' size="tiny" />
      </Header>
      <br />
          <KontaktiForm />
    </>
  );
});
