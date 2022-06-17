import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";






export default observer (function LibriForm() {
  const history=useHistory();
  const {libriStore}=useStore();
  const{createLibri, updateLibri, loading, loadLibri, loadingInitial}=libriStore;
  const{id}=useParams<{id: any}>();

  const[libri, setLibri]= useState({
      id:0,
      isbn: '',
      emri: '',
      autori: '',
      pershkrimi: '',
      shtepia_Botuese: '',
      viti_Publikimit:0,
      zhanri: '',
      foto: '',
  });

  useEffect(()=>{
    if (id) loadLibri (id).then(libri=>setLibri(libri!))
  }, [id, loadLibri]);




  function handleSubmit(){
    if(!libri.id){
    let newLibri={
      ...libri,
      id
    };
    createLibri(newLibri).then(()=>history.push(`/librat/${newLibri.id}`))
  }else{
    updateLibri(libri).then(()=>history.push(`/librat/${libri.id}`))
  }
}

  function handleInputChange(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const{name, value}=event.target;
    setLibri({...libri, [name]: value})
  }

  if(loadingInitial) return <LoadingComponent content="Loading Librat"/>

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
        <Button as={Link} to='/librat' floated="right" type="button" content="Cancel" />
      </Form>
    </Segment>
  );
})
