import React from "react";
import { Button, Item, Segment } from "semantic-ui-react";
import { LibriModel } from "../../../app/models/LibriModel";

//thirrja e funksioneve qe na nevojiten per list component ne LibriDashboard.tsx
interface Props {
  librat: LibriModel[];
  selectLibri: (id: number) => void;
  deleteLibri:(id:number)=>void;
}

export default function LibriList({ librat, selectLibri, deleteLibri }: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {librat.map((libri) => (
          <Item key={libri.id}>
            <Item.Content>
              <Item.Header as="a">{libri.emri}</Item.Header>
              <Item.Meta>{libri.autori}</Item.Meta>
              <Item.Description>
                <div>{libri.isbn}</div>
                <div>{libri.pershkrimi}</div>
                <div>{libri.shtepia_Botuese}</div>
                <div>{libri.viti_Publikimit}</div>
                <div>{libri.zhanri}</div>
              </Item.Description>
              <Item.Extra>
                <Button onClick={()=> selectLibri(libri.id)} floated='right' content='Shfaq' color='blue'/>
                <Button onClick={()=> deleteLibri(libri.id)} floated='right' content='Fshij' color='red'/>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
