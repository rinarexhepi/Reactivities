import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useStore } from "../../../app/stores/store";
import * as Yup from 'yup';
import { PublikimeModel } from "../../../app/models/PublikimeModel";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { Formik } from "formik";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";


export default observer (function PublikimeForm(){
    const history = useHistory();
    const {publikimeStore} = useStore();
    const {createPublikime, updatePublikime, loading, loadPublikime, loadingInitial} = publikimeStore;
    const {id} = useParams<{id: any}>();

    const [publikime, setPublikimi] = useState({
        id:0,
        emri: '',
        autori: '',
        pershkrimi: '',
        lloji: '',
        viti_Publikimit:0,
        foto: '',
    })

    const validationSchema = Yup.object({
        emri: Yup.string().required('This field is required!'),
        id: Yup.string().required('This field is required!'),
        autori: Yup.string().required('This field is required!'),
        pershkrimi: Yup.string().required('This field is required!'),
        lloji: Yup.string().required('This field is required!'),
        viti_Publikimit: Yup.string().required('This field is required!'),
        foto: Yup.string().required('This field is required!')
      })

      useEffect (() => {
        if(id) loadPublikime(id).then(publikime => setPublikimi(publikime!))
      }, [id, loadPublikime]);

      function handleSubmit(publikime: PublikimeModel){
        if(!publikime.id){
            let newPublikime = {
                ...publikime,
                id
            };
            createPublikime(newPublikime).then(() => history.push(`/publikime/${newPublikime.id}`))
        }else{
            updatePublikime(publikime).then(() => history.push(`/publikime/${publikime.id}`))
        }
      }

      if(loadingInitial) return <LoadingComponent content="Loading Publikimet"/>

      return (
        <Segment clearing style={{marginBottom:'100px'}}>
          <Header content='Publikime Details' sub color='teal'></Header>
          <Formik 
          validationSchema={validationSchema}
          enableReinitialize 
          initialValues={publikime} 
          onSubmit={values => handleSubmit(values)}>
            {({handleSubmit, isValid, isSubmitting, dirty}) => (
               <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
               <MyTextInput  placeholder="ID" name="id"  />
               <MyTextInput name="emri" placeholder="Emri"/>
               <MyTextInput placeholder="Autori" name="autori" />
               <MyTextArea  rows={3} placeholder="Pershkrimi" name="pershkrimi"/>
               <MyTextInput placeholder="Viti i Publikimit" name="viti_Publikimit"/>
               <MySelectInput placeholder="Lloji" name="lloji" options={categoryOptions}/>
               <MyTextInput  placeholder="Foto" name="foto"/>
               <Button 
               disabled={isSubmitting || !dirty || !isValid}
               loading={loading} floated="right" positive type="submit" content="Submit" />
               <Button as={Link} to='/publikime' floated="right" type="button" content="Cancel" />
             </Form>
    
            )
            }
    
          </Formik>
         
        </Segment>
      );

})