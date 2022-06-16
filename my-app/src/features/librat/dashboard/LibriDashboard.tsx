import React from "react";
import { Grid } from "semantic-ui-react";
import LibriModelDetails from "../details/LibriModelDetails";
import LibriForm from "../form/LibriForm";
import LibriList from "./LibriList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";


export default observer(function LibriDashboard(){
  const { libriStore } = useStore();
  const { selectedLibri, editMode } = libriStore;
  return (
    <Grid>
      <Grid.Column width="10">
        <LibriList />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedLibri && !editMode && <LibriModelDetails />}
        {editMode && <LibriForm />}
      </Grid.Column>
    </Grid>
  );
});
