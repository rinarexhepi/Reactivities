import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";






export default observer (function LibriForm() {
  const {libriStore}=useStore();
  const{selectedLibri, closeForm, createLibri, updateLibri, loading}=libriStore;

  const initialState= selectedLibri ??{
    id:0,
    isbn: '',
    emri: '',
    autori: '',
    pershkrimi: '',
    shtepia_Botuese: '',
    viti_Publikimit:0,
    zhanri: '',
    foto: '',
  }

  const[libri, setLibri]= useState(initialState);

  function handleSubmit(){
    libri.id?updateLibri(libri): createLibri(libri);
  }

  function handleInputChange(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const{name, value}=event.target;
    setLibri({...libri, [name]: value})
  }

  return (
    <Segment clearing style={{marginBottom:'100px'}}>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input placeholder="ID" value={libri.id} name="id"  />
        <Form.Input placeholder="ISBN" value={libri.isbn} name="isbn" onChange={handleInputChange} />
        <Form.Input placeholder="Emri" value={libri.emri} name="emri" onChange={handleInputChange} />
        <Form.Input placeholder="Autori" value={libri.autori} name="autori" onChange={handleInputChange} />
        <Form.TextArea placeholder="Pershkrimi" value={libri.pershkrimi} name="pershkrimi" onChange={handleInputChange}/>
        <Form.Input placeholder="Shtepia Botuese" value={libri.shtepia_Botuese} name="shtepia_Botuese" onChange={handleInputChange}/>
        <Form.Input placeholder="Viti i Publikimit" value={libri.viti_Publikimit} name="viti_Publikimit" onChange={handleInputChange}/>
        <Form.Input placeholder="Zhanri" value={libri.zhanri} name="zhanri" onChange={handleInputChange}/>
        <Form.Input  placeholder="Foto" value={libri.foto} name="foto" onChange={handleInputChange}/>
        <Button loading={loading} floated="right" positive type="submit" content="Submit" />
        <Button onClick={closeForm} floated="right" type="button" content="Cancel" />
      </Form>
    </Segment>
  );
})
