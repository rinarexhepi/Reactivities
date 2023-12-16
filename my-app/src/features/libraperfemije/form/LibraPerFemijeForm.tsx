import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useStore } from "../../../app/stores/store";
import * as Yup from 'yup';
import { LibraPerFemijeModel } from "../../../app/models/LibraPerFemijeModel";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { Formik } from "formik";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";


export default observer (function LibraPerFemijeForm(){
    const history = useHistory();
    const {libraPerFemijeStore} = useStore();
    const {createLibraPerFemije, updateLibraPerFemije, loading, loadLibriPerFemije, loadingInitial} = libraPerFemijeStore;
    const {id} = useParams<{id: any}>();

    const [libraPerFemije, setLibraPerFemije] = useState({
        id:0,
        isbn: '',
        emri: '',
        autori: '',
        pershkrimi: '',
        shtepia_botuese: '',
        viti_publikimit:0,
        zhanri: '',
        foto: '',
    })

    const validationSchema = Yup.object({
        emri: Yup.string().required('This field is required!'),
        id: Yup.string().required('This field is required!'),
        autori: Yup.string().required('This field is required!'),
        pershkrimi: Yup.string().required('This field is required!'),
        shtepia_botuese: Yup.string().required('This field is required!'),
        viti_publikimit: Yup.string().required('This field is required!'),
        zhanri: Yup.string().required('This field is required!'),
        foto: Yup.string().required('This field is required!')
      })

      useEffect (() => {
        if(id) loadLibriPerFemije(id).then(libraPerFemije => setLibraPerFemije(libraPerFemije!))
      }, [id, loadLibriPerFemije]);

      function handleSubmit(libraPerFemije: LibraPerFemijeModel){
        if(!libraPerFemije.id){
            let newLibraPerFemije = {
                ...libraPerFemije,
                id
            };
            createLibraPerFemije(newLibraPerFemije).then(() => history.push(`/libraPerFemije/${newLibraPerFemije.id}`))
        }else{
            updateLibraPerFemije(libraPerFemije).then(() => history.push(`/libraPerFemije/${libraPerFemije.id}`))
        }
      }

      if(loadingInitial) return <LoadingComponent content="Loading librat"/>

      return (
        <Segment clearing style={{marginBottom:'100px'}}>
          <Header content='Libri Details' sub color='teal'></Header>
          <Formik 
          validationSchema={validationSchema}
          enableReinitialize 
          initialValues={libraPerFemije} 
          onSubmit={values => handleSubmit(values)}>
            {({handleSubmit, isValid, isSubmitting, dirty}) => (
               <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
               <MyTextInput  placeholder="ID" name="id"  />
               <MyTextInput name="emri" placeholder="Emri"/>
               <MyTextInput placeholder="Autori" name="autori" />
               <MyTextArea  rows={3} placeholder="Pershkrimi" name="pershkrimi"/>
               <MyTextInput placeholder="Shtepia botuese" name="shtepia_botuese"/>
               <MyTextInput placeholder="Viti i Publikimit" name="viti_Publikimit"/>
               <MySelectInput placeholder="Zhanri" name="zhanri" options={categoryOptions}/>
               <MyTextInput  placeholder="Foto" name="foto"/>
               <Button 
               disabled={isSubmitting || !dirty || !isValid}
               loading={loading} floated="right" positive type="submit" content="Submit" />
               <Button as={Link} to='/libraPerFemije' floated="right" type="button" content="Cancel" />
             </Form>
    
            )
            }
    
          </Formik>
         
        </Segment>
      );

})