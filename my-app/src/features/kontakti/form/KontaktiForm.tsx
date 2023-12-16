import {Formik} from "formik";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Segment, Header, Form,  } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import { KontaktiModel } from "../../../app/models/KontaktiModel";



export default observer (function KontaktiForm() {
  const history=useHistory();
  const {kontaktiStore}=useStore();
  const{createKontakti, updateKontakti, loading, loadKontakt, loadingInitial}=kontaktiStore;
  const{id}=useParams<{id: any}>();

  const[kontakti, setKontakti]= useState({
      id:0,
      emri: '',
      mbiemri: '',
      email: '',
      mesazhi: '',
  });

  const validationSchema = Yup.object({
    id: Yup.string().required('This field is required!'),
    emri: Yup.string().required('This field is required!'),
    mbiemri: Yup.string().required('This field is required!'),
    email: Yup.string().required('This field is required!'),
    mesazhi: Yup.string().required('This field is required!'),
  })


  useEffect(()=>{
    if (id) loadKontakt(id).then(kontakti=>setKontakti(kontakti!))
  }, [id, loadKontakt]);




  function handleSubmit(kontakti: KontaktiModel){
    if(!kontakti.id){
    let newKontakti={
      ...kontakti,
      id
    };
    createKontakti(newKontakti).then(()=>history.push(`/home`))
  }else{
    updateKontakti(kontakti).then(()=>history.push(`/home`))
  }
}

 
  if(loadingInitial) return <LoadingComponent content="Loading Team"/>

  return (
    <Segment clearing style={{marginBottom:'100px'}}>
      <Header content='Contact US' sub color='teal'></Header>
      
        
      <Formik 
      validationSchema={validationSchema}
      enableReinitialize 
      initialValues={kontakti} 
      onSubmit={values => handleSubmit(values)}>
        {({handleSubmit, isValid, isSubmitting, dirty}) => (
           <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
            
           
           <MyTextInput placeholder="Emri" name="emri" />
           <MyTextInput placeholder="Mbiemri" name="mbiemri" />
           <MyTextInput placeholder="Email" name="email"/>
           
           
           <MyTextArea  rows={3} placeholder="Mesazhi" name="mesazhi"/>
           
           <Button 
           disabled={isSubmitting || !dirty || !isValid}
           loading={loading} floated="right" positive type="submit" content="Submit" />
           <Button as={Link} to='/kontakti' floated="right" type="button" content="Cancel" />
         </Form>

        )
        }

      </Formik>
      
      
    </Segment>
  );
})


/*

            <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Gender'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Opinion'
      placeholder='Opinion'
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      error={{
        content: 'Please enter a valid email address',
        pointing: 'below',
      }}
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      label='Label with htmlFor'
    />
  </Form>
*/
