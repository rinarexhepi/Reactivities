import React, { useEffect } from "react";
import { Button, Grid, Header, Icon } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Link } from "react-router-dom";
import EkipaList from "./EkipaList";

export default observer(function EkipaDashboard() {
  const { ekipaStore } = useStore();
  const {loadEkipa, ekipaRegistry}=ekipaStore;

  useEffect(() => {
    if(ekipaRegistry.size<=1) loadEkipa();
  }, [ekipaRegistry.size, loadEkipa]);

  //funksion qe e jek librin e kalun edhe e replace me ata t edituarin(1 eshte nese ka edhe e editojme, 2 eshte kur e bojm create prej fillimi)

  if (ekipaStore.loadingInitial)
    return <LoadingComponent content="Ju lutemi pritni!" />;
  return (
    <>
    
      {/* <Header as='h1' color="black" dividing>
        Our Team <Button icon="add" content='Add member' floated="right" as={Link} to='/createEkipa' size="tiny" />
      </Header> */}
      <br />
       
          <EkipaList />
        
    </>
  );
});
