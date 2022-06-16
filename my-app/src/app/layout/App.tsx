import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import LibriDashboard from "../../features/librat/dashboard/LibriDashboard";
import LoadingComponent from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { libriStore } = useStore();

  useEffect(() => {
    libriStore.loadLibrat();
  }, [libriStore]);

  //funksion qe e jek librin e kalun edhe e replace me ata t edituarin(1 eshte nese ka edhe e editojme, 2 eshte kur e bojm create prej fillimi)

  if (libriStore.loadingInitial)
    return <LoadingComponent content="Ju lutemi pritni!" />;

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <LibriDashboard />
      </Container>
    </>
  );
}

export default observer(App);
