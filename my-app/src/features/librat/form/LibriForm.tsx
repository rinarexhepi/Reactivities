import {Formik, Form} from "formik";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Segment, Header } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";
import { LibriModel } from "../../../app/models/LibriModel";






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

  const validationSchema = Yup.object({
    emri: Yup.string().required('This field is required!'),
    id: Yup.string().required('This field is required!'),
    isbn: Yup.string().required('This field is required!'),
    autori: Yup.string().required('This field is required!'),
    pershkrimi: Yup.string().required('This field is required!'),
    shtepia_Botuese: Yup.string().required('This field is required!'),
    viti_Publikimit: Yup.string().required('This field is required!'),
    zhanri: Yup.string().required('This field is required!')
  })


  useEffect(()=>{
    if (id) loadLibri (id).then(libri=>setLibri(libri!))
  }, [id, loadLibri]);




  function handleSubmit(libri: LibriModel){
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

 
  if(loadingInitial) return <LoadingComponent content="Loading Librat"/>

  return (
    <Segment clearing style={{marginBottom:'100px'}}>
      <Header content='Book Details' sub color='teal'></Header>
      <Formik 
      validationSchema={validationSchema}
      enableReinitialize 
      initialValues={libri} 
      onSubmit={values => handleSubmit(values)}>
        {({handleSubmit, isValid, isSubmitting, dirty}) => (
           <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
           <MyTextInput placeholder="ID" name="id"  />
           <MyTextInput placeholder="ISBN" name="isbn" />
           <MyTextInput name="emri" placeholder="Emri"/>
           <MyTextInput placeholder="Autori" name="autori" />
           <MyTextArea  rows={3} placeholder="Pershkrimi" name="pershkrimi"/>
           <MyTextInput placeholder="Shtepia Botuese"  name="shtepia_Botuese"/>
           <MyTextInput placeholder="Viti i Publikimit" name="viti_Publikimit"/>
           <MySelectInput placeholder="Zhanri" name="zhanri" options={categoryOptions}/>
           <MyTextInput  placeholder="Foto" name="foto"/>
           <Button 
           disabled={isSubmitting || !dirty || !isValid}
           loading={loading} floated="right" positive type="submit" content="Submit" />
           <Button as={Link} to='/librat' floated="right" type="button" content="Cancel" />
         </Form>

        )
        }

      </Formik>
     
    </Segment>
  );
})
