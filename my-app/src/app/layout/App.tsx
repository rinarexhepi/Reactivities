import React, { useEffect, useState } from "react";
import { LibriModel } from "../models/LibriModel";
import { Container } from "semantic-ui-react";
import { v4 as uuid } from "uuid";
import NavBar from "./NavBar";
import LibriDashboard from "../../features/librat/dashboard/LibriDashboard";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";

function App() {
  const [librat, setLibrat] = useState<LibriModel[] | any[]>([]);

  //const per selektim te librit bashk me funksionin setSelectedLibri
  const [selectedLibri, setSelectedLibri] = useState<LibriModel | undefined>(
    undefined
  );

  //const qe kur te klikojme edit ose shto, shfaqet forma(merr te dhenat prej funksionit setEditMode)- false o default se nuk shfaqet pa e kliku edit
  const [editMode, setEditMode] = useState(false);

  const [loading, setLoading] = useState(true);

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Librat.list().then((response) => {
      setLibrat(response);
      setLoading(false);
    });
  }, []);

  //funksion qe shkon ne LibriList per me mujt me bo select
  function handleSelectLibri(id: number) {
    setSelectedLibri(librat.find((x) => x.id === id));
  }

  //funksion qe  mirret me rastin kur klikojme cancel
  function handleCancelSelectLibri() {
    setSelectedLibri(undefined);
  }

  //funksion qe e hap formen nese klikojme
  function handleFormOpen(id?: number) {
    id ? handleSelectLibri(id) : handleCancelSelectLibri();
    setEditMode(true);
  }
  //funksion qe kur tklikojme cancel, forma mbyllet
  function handleFormClose() {
    setEditMode(false);
  }

  //funksion qe e jek librin e kalun edhe e replace me ata t edituarin(1 eshte nese ka edhe e editojme, 2 eshte kur e bojm create prej fillimi)
  function handleCreateOrEditLibri(libri: LibriModel) {
    setSubmitting(true);
    if (libri.id) {
      agent.Librat.update(libri).then(() => {
        setLibrat([...librat.filter((x) => x.id !== libri.id), libri])
        setSelectedLibri(libri);
        setEditMode(false);
        setSubmitting(false);
      })
    } else {
      // libri.id=uuid();
      agent.Librat.create(libri).then(() => {
        setLibrat([...librat,libri]);
        setSelectedLibri(libri);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }

  function handleDeleteLibri(id: number) {
    setLibrat([...librat.filter((x) => x.id !== id)]);
  }

  if (loading) return <LoadingComponent content="Ju lutemi pritni!" />;

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: "7em" }}>
        <LibriDashboard
          librat={librat}
          selectedLibri={selectedLibri}
          selectLibri={handleSelectLibri}
          cancelSelectLibri={handleCancelSelectLibri}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditLibri}
          deleteLibri={handleDeleteLibri}
          submitting={submitting}
        />
      </Container>
    </>
  );
}

export default App;
