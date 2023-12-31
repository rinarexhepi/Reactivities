import { Button, Container, Menu } from "semantic-ui-react";
import React from "react";
import { useStore } from "../stores/store";
import { NavLink } from "react-router-dom";


export default function NavBar() {
  const {libriStore}=useStore();
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to='/' header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ width: "70px", marginRight: "10px" }}
          />
          FDR-Library
        </Menu.Item>
        <Menu.Item as={NavLink} to='/librat' name="Librat" />
        <Menu.Item as={NavLink} to='/tekstet' name="Tekstet" />
        <Menu.Item as={NavLink} to='/revistat' name="Revistat" />
        <Menu.Item>
          <Button as={NavLink} to='/createLibri' positive content="Shto liber" />
        </Menu.Item>
        <Menu.Item>
          <Button as={NavLink} to='/createTeksti' positive content="Shto tekst" />
        </Menu.Item>
        <Menu.Item>
          <Button as={NavLink} to='/createRevista' positive content="Shto reviste" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
