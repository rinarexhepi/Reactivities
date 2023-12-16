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
import { LibraBoterorModel } from "../../../app/models/LibraBoterorModel";


export default observer (function LibraBoterorForm() {
  const history=useHistory();
  const {libraBoterorStore}=useStore();
  const{createLibraBoteror, updateLibraBoteror, loading, loadLibriBoteror, loadingInitial}=libraBoterorStore;
  const{id}=useParams<{id: any}>();

  const[libraBoteror, setLibraBoteror]= useState({
      id:0,
      isbn: '',
      titulli: '',
      autori: '',      
      zhanri: '',
      gjuha: '',
      foto: '',
  });

  const validationSchema = Yup.object({
    id: Yup.string().required('This field is required!'),
    isbn: Yup.string().required('This field is required!'),
    titulli: Yup.string().required('This field is required!'),
    autori: Yup.string().required('This field is required!'),
    zhanri: Yup.string().required('This field is required!'),
    gjuha: Yup.string().required('This field is required!'),
    foto: Yup.string().required('This field is required!'),
  })


  useEffect(()=>{
    if (id) loadLibriBoteror (id).then(libraBoteror=>setLibraBoteror(libraBoteror!))
  }, [id, loadLibriBoteror]);




  function handleSubmit(libraBoteror: LibraBoterorModel){
    if(!libraBoteror.id){
    let newLibriBoteror={
      ...libraBoteror,
      id
    };
    createLibraBoteror(newLibriBoteror).then(()=>history.push(`/libraBoteror/${newLibriBoteror.id}`))
  }else{
    updateLibraBoteror(libraBoteror).then(()=>history.push(`/libraBoteror/${libraBoteror.id}`))
  }
}

 
  if(loadingInitial) return <LoadingComponent content="Loading Librat Botror"/>

  return (
    <Segment clearing style={{marginBottom:'100px'}}>
      <Header content='Worldwide Book Details' sub color='teal'></Header>
      <Formik 
          validationSchema={validationSchema}
          enableReinitialize 
          initialValues={libraBoteror} 
          onSubmit={values => handleSubmit(values)}>
            {({handleSubmit, isValid, isSubmitting, dirty}) => (
              <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
              <MyTextInput  placeholder="ID" name="id"  />
              <MyTextInput placeholder="ISBN" name="isbn" />
              <MyTextInput name="titulli" placeholder="Titulli"/>
              <MyTextInput placeholder="Autori" name="autori" />
              <MySelectInput placeholder="Zhanri" name="zhanri" options={categoryOptions}/>
              <MyTextInput placeholder="Gjuha"  name="gjuha"/>
              <MyTextInput  placeholder="Foto" name="foto"/>
              <Button 
                  disabled={isSubmitting || !dirty || !isValid}
                  loading={loading} floated="right" positive type="submit" content="Submit" />
              <Button as={Link} to='/libraBoteror' floated="right" type="button" content="Cancel" />
            </Form>

            )
            }

      </Formik>
     
    </Segment>
  );
})
