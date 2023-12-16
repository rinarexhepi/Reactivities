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
import { AutoriModel } from "../../../app/models/AutoriModel";



export default observer (function AutoriForm() {
  const history=useHistory();
  const {autoriStore}=useStore();
  const{createAutori, updateAutori, loading, loadAutori, loadingInitial}=autoriStore;
  const{id}=useParams<{id: any}>();

  const[autori, setAutori]= useState({
      id:0,
      emri: '',
      mbiemri: '',
      vitiLindjes:0,
      biografia: '',
      foto: '',
  });

  const validationSchema = Yup.object({
    id: Yup.string().required('This field is required!'),
    emri: Yup.string().required('This field is required!'),
    mbiemri: Yup.string().required('This field is required!'),
    vitiLindjes: Yup.string().required('This field is required!'),
    biografia: Yup.string().required('This field is required!'),
    foto: Yup.string().required('This field is required!'),
  })


  useEffect(()=>{
    if (id) loadAutori (id).then(autori=>setAutori(autori!))
  }, [id, loadAutori]);




  function handleSubmit(autori: AutoriModel){
    if(!autori.id){
    let newAutori={
      ...autori,
      id
    };
    createAutori(newAutori).then(()=>history.push(`/autoret/${newAutori.id}`))
  }else{
    updateAutori(autori).then(()=>history.push(`/autoret/${autori.id}`))
  }
}

 
  if(loadingInitial) return <LoadingComponent content="Loading Autoret"/>

  return (
    <Segment clearing style={{marginBottom:'100px'}}>
      <Header content='Autori Details' sub color='teal'></Header>
      <Formik 
      validationSchema={validationSchema}
      enableReinitialize 
      initialValues={autori} 
      onSubmit={values => handleSubmit(values)}>
        {({handleSubmit, isValid, isSubmitting, dirty}) => (
           <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
           <MyTextInput placeholder="ID" name="id"  />
           <MyTextInput placeholder="Emri" name="emri" />
           <MyTextInput placeholder="Mbiemri" name="mbiemri" />
           <MyTextArea  rows={3} placeholder="Biografia" name="biografia"/>
           <MyTextInput placeholder="Viti i Lindjes" name="vitiLindjes"/>
           {/* <MySelectInput placeholder="Viti i Lindjes" name="viti_lindjes" options={vitiOptions}/> */}
           <MyTextInput  placeholder="Foto" name="foto"/>
           <Button 
           disabled={isSubmitting || !dirty || !isValid}
           loading={loading} floated="right" positive type="submit" content="Submit" />
           <Button as={Link} to='/autoret' floated="right" type="button" content="Cancel" />
         </Form>

        )
        }

      </Formik>
     
    </Segment>
  );
})
