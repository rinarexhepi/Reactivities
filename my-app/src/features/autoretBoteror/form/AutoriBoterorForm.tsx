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
import { AutoriBoterorModel } from "../../../app/models/AutoriBoterorModel";



export default observer (function AutoriBoterorForm() {
  const history=useHistory();
  const {autoriBoterorStore}=useStore();
  const{createAutoriBoteror, updateAutoriBoteror, loading, loadAutoriBoteror, loadingInitial}=autoriBoterorStore;
  const{id}=useParams<{id: any}>();

  const[autoriBoteror, setAutoriBoteror]= useState({
      id:0,
      emri: '',
      mbiemri: '',
      vendlindja: '',
      biografia: '',
      foto: '',
  });

  const validationSchema = Yup.object({
    id: Yup.string().required('This field is required!'),
    emri: Yup.string().required('This field is required!'),
    mbiemri: Yup.string().required('This field is required!'),
    vendlindja: Yup.string().required('This field is required!'),
    biografia: Yup.string().required('This field is required!'),
    foto: Yup.string().required('This field is required!'),
  })


  useEffect(()=>{
    if (id) loadAutoriBoteror (id).then(autoriBoteror=>setAutoriBoteror(autoriBoteror!))
  }, [id, loadAutoriBoteror]);




  function handleSubmit(autoriBoteror: AutoriBoterorModel){
    if(!autoriBoteror.id){
    let newAutoriBoteror={
      ...autoriBoteror,
      id
    };
    createAutoriBoteror(newAutoriBoteror).then(()=>history.push(`/autoriBoteror/${newAutoriBoteror.id}`))
  }else{
    updateAutoriBoteror(autoriBoteror).then(()=>history.push(`/autoriBoteror/${autoriBoteror.id}`))
  }
}

 
  if(loadingInitial) return <LoadingComponent content="Loading Autoret"/>

  return (
    <Segment clearing style={{marginBottom:'100px'}}>
      <Header content='Autori Boteror Details' sub color='teal'></Header>
      <Formik 
      validationSchema={validationSchema}
      enableReinitialize 
      initialValues={autoriBoteror} 
      onSubmit={values => handleSubmit(values)}>
        {({handleSubmit, isValid, isSubmitting, dirty}) => (
           <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
           <MyTextInput placeholder="ID" name="id"  />
           <MyTextInput placeholder="Emri" name="emri" />
           <MyTextInput placeholder="Mbiemri" name="mbiemri" />
           <MyTextArea  rows={3} placeholder="Biografia" name="biografia"/>
           <MyTextInput placeholder="Vendi i Lindjes" name="vendlindja"/>
           <MyTextInput  placeholder="Foto" name="foto"/>
           <Button 
           disabled={isSubmitting || !dirty || !isValid}
           loading={loading} floated="right" positive type="submit" content="Submit" />
           <Button as={Link} to='/autoretBoteror' floated="right" type="button" content="Cancel" />
         </Form>

        )
        }

      </Formik>
     
    </Segment>
  );
})
