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
import { KomenteModel } from "../../../app/models/KomenteModel";



export default observer (function AutoriForm() {
  const history=useHistory();
  const {komenteStore}=useStore();
  const{createKomente, updateKomente, loading, loadKoment, loadingInitial}=komenteStore;
  const{id}=useParams<{id: any}>();

  const[komenti, setKomenti]= useState({
      id:0,
      username: '',
      komenti: ''
  });

  const validationSchema = Yup.object({
    id: Yup.string().required('This field is required!'),
    username: Yup.string().required('This field is required!'),
    komenti: Yup.string().required('This field is required!'),
  })


  useEffect(()=>{
    if (id) loadKoment (id).then(autori=>setKomenti(autori!))
  }, [id, loadKoment]);




  function handleSubmit(komenti: KomenteModel){
    if(!komenti.id){
    let newKomenti={
      ...komenti,
      id
    };
    createKomente(newKomenti).then(()=>history.push(`/komente`))
  }else{
    updateKomente(komenti).then(()=>history.push(`/komente`))
  }
}

 
  if(loadingInitial) return <LoadingComponent content="Loading Kommentet"/>

  return (
    <Segment clearing style={{marginBottom:'100px'}}>
      <Header content='Komenti Details' sub color='teal'></Header>
      <Formik 
      validationSchema={validationSchema}
      enableReinitialize 
      initialValues={komenti} 
      onSubmit={values => handleSubmit(values)}>
        {({handleSubmit, isValid, isSubmitting, dirty}) => (
           <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
           <MyTextInput placeholder="ID" name="id"  />
           <MyTextInput placeholder="Username" name="username" />
           <MyTextArea  rows={3} placeholder="Komenti" name="komenti"/>
           <Button 
           disabled={isSubmitting || !dirty || !isValid}
           loading={loading} floated="right" positive type="submit" content="Submit" />
           <Button as={Link} to='/komentet' floated="right" type="button" content="Cancel" />
         </Form>

        )
        }

      </Formik>
     
    </Segment>
  );
})
