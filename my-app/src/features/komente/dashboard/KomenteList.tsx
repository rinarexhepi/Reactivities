import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Grid, Header, Icon, Comment, Image, Form } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import User from './img/user.png';



export default observer(function KomenteStore() {
  const { komenteStore } = useStore();
  const { deleteKomente, komenteById } = komenteStore;
  const [target, setTarget] = useState('');

  function handleDeleteKomente(e: SyntheticEvent<HTMLButtonElement>, id: number) {
    setTarget(e.currentTarget.value);
    deleteKomente(id);
  }
  return (
    <>

      <Comment.Group>
        <Header as='h3' dividing>
          Comments
        </Header>

        
          {komenteById.map(komente => (
              <Comment key={komente.id}>
                <Comment.Avatar src={User} />
                <Comment.Content>
                  <Comment.Author as='a'>{komente.username}</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>{komente.komenti}</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action as='a' value={komente.id}  onClick={(e: React.SyntheticEvent<HTMLButtonElement, Event>)=> handleDeleteKomente(e, komente.id)} color='red'>Delete</Comment.Action>
                    <Comment.Action as={Link} to ={`/manage18/${komente.id}`} basic color="blue" content="Edit" />
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
          ))}
          <br />
          
            <Button content='Komento' labelPosition='right' icon='edit'  as={Link} to="/createKomente"  color="grey"/>
          
          
      </Comment.Group>

    </>
  );
})
