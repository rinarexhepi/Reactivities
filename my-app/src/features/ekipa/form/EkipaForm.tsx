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
import { EkipaModel } from "../../../app/models/EkipaModel";



export default observer (function EkipaForm() {
  const history=useHistory();
  const {ekipaStore}=useStore();
  const{createEkipa, updateEkipa, loading, loadTeam, loadingInitial}=ekipaStore;
  const{id}=useParams<{id: any}>();

  const[ekipa, setEkipa]= useState({
      id:0,
      emri: '',
      mbiemri: '',
      pozita: '',
      pershkrimi: '',
      foto: '',
  });

  const validationSchema = Yup.object({
    id: Yup.string().required('This field is required!'),
    emri: Yup.string().required('This field is required!'),
    mbiemri: Yup.string().required('This field is required!'),
    pozita: Yup.string().required('This field is required!'),
    pershkrimi: Yup.string().required('This field is required!'),
    foto: Yup.string().required('This field is required!'),
  })


  useEffect(()=>{
    if (id) loadTeam (id).then(ekipa=>setEkipa(ekipa!))
  }, [id, loadTeam]);




  function handleSubmit(ekipa: EkipaModel){
    if(!ekipa.id){
    let newEkipa={
      ...ekipa,
      id
    };
    createEkipa(newEkipa).then(()=>history.push(`/ekipa/${newEkipa.id}`))
  }else{
    updateEkipa(ekipa).then(()=>history.push(`/ekipa/${ekipa.id}`))
  }
}

 
  if(loadingInitial) return <LoadingComponent content="Loading Team"/>

  return (
    <Segment clearing style={{marginBottom:'100px'}}>
      <Header content='Team Details' sub color='teal'></Header>
      <Formik 
      validationSchema={validationSchema}
      enableReinitialize 
      initialValues={ekipa} 
      onSubmit={values => handleSubmit(values)}>
        {({handleSubmit, isValid, isSubmitting, dirty}) => (
           <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
           <MyTextInput placeholder="ID" name="id"  />
           <MyTextInput placeholder="Emri" name="emri" />
           <MyTextInput placeholder="Mbiemri" name="mbiemri" />
           <MyTextArea  rows={3} placeholder="Pozita" name="pozita"/>
           <MyTextInput placeholder="Pershkrimi" name="pershkrimi"/>
           {/* <MySelectInput placeholder="Viti i Lindjes" name="viti_lindjes" options={vitiOptions}/> */}
           <MyTextInput  placeholder="Foto" name="foto"/>
           <Button 
           disabled={isSubmitting || !dirty || !isValid}
           loading={loading} floated="right" positive type="submit" content="Submit" />
           <Button as={Link} to='/ekipa' floated="right" type="button" content="Cancel" />
         </Form>

        )
        }

      </Formik>
     
    </Segment>
  );
})
