import { Button, Container, Menu } from "semantic-ui-react";

import React from "react";
import { useStore } from "../stores/store";


export default function NavBar() {
  const {libriStore}=useStore();
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ width: "70px", marginRight: "10px" }}
          />
          FDR-Library
        </Menu.Item>
        <Menu.Item name="Librat" />
        <Menu.Item>
          <Button onClick={()=>libriStore.openForm()} positive content="Shto liber" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
