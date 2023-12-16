import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Grid, Header, Icon, Item, Segment, Table } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";



export default observer(function KontaktiStore() {
  const { kontaktiStore } = useStore();
  const { deleteKontakti, kontaktiById } = kontaktiStore;
  const [target, setTarget] = useState('');

  function handleDeleteKontakti(e: SyntheticEvent<HTMLButtonElement>, id: number) {
    setTarget(e.currentTarget.value);
    deleteKontakti(id);
  }
  return (
    <>
      <Header as='h1' color="black" dividing>
        Lista e Kontakteve
      </Header>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Emri</Table.HeaderCell>
            <Table.HeaderCell>Mbiemri</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Mesazhi</Table.HeaderCell>
            <Table.HeaderCell>Fshij</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {kontaktiById.map(kontakti => (
            <Table.Row key={kontakti.id}>
              <Table.Cell>{kontakti.emri}</Table.Cell>
              <Table.Cell>{kontakti.mbiemri}</Table.Cell>
              <Table.Cell>{kontakti.email}</Table.Cell>
              <Table.Cell textAlign='right'>{kontakti.mesazhi}</Table.Cell>
              <Table.Cell><Icon className="trash" value={kontakti.id} onClick={(e: React.SyntheticEvent<HTMLButtonElement, Event>) => handleDeleteKontakti(e, kontakti.id)} /></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

    </>
  );
})
