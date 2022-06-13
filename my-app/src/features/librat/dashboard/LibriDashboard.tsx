import React from "react";
import { Grid } from "semantic-ui-react";
import LibriModelDetails from "../details/LibriModelDetails";
import { LibriModel } from "../../../app/models/LibriModel";
import LibriForm from "../form/LibriForm";
import LibriList from "./LibriList";

//interface per properties ku thirren funksionet
interface Props {
  librat: LibriModel[];
  selectedLibri: LibriModel | undefined;
  selectLibri: (id: number) => void;
  cancelSelectLibri: () => void;
  editMode: boolean;
  openForm: (id: number) => void;
  closeForm: () => void;
  createOrEdit:(libri:LibriModel)=>void;
  deleteLibri:(id:number)=>void;
  submitting:boolean;
}

export default function LibriDashboard({librat, selectedLibri, selectLibri, cancelSelectLibri, editMode, openForm, closeForm, createOrEdit, deleteLibri, submitting}: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <LibriList librat={librat}
         selectLibri={selectLibri} 
         deleteLibri={deleteLibri}
          />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedLibri && !editMode && 
          <LibriModelDetails
            libri={selectedLibri}
            cancelSelectLibri={cancelSelectLibri}
            openForm={openForm}            
          />}
        {editMode && <LibriForm closeForm={closeForm} libri={selectedLibri} createOrEdit={createOrEdit} submitting={submitting}/>}
      </Grid.Column>
    </Grid>
  );
}
