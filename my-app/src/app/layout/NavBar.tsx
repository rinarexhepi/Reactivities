import { Button, Container, Menu } from "semantic-ui-react";

import React from "react";

interface Props {
  openForm: () => void;
}

export default function NavBar({ openForm }: Props) {
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
          <Button onClick={openForm} positive content="Shto liber" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
