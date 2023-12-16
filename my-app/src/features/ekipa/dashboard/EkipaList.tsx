import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Grid, Icon, Item, Segment, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import Mo from './img/Image.png';
import './styles/style.css';



export default observer(function EkipaStore() {
  const { ekipaStore } = useStore();
  const { deleteEkipa, ekipaByPozita } = ekipaStore;
  const [target, setTarget] = useState('');

  function handleDeleteEkipa(e: SyntheticEvent<HTMLButtonElement>, id: number) {
    setTarget(e.currentTarget.value);
    deleteEkipa(id);
  }
  return (

    <>
        <section className="block block--testimonials light-background ">
        <div className="container">
            <div className="block__top">
                <span className="block__help-txt">Our Testimonial<Button icon="add" content='Add member' floated="right" as={Link} to='/createEkipa' size="tiny" /></span>
                <h2 className="block__title">What Our Client Saying</h2>
            </div>
            {ekipaByPozita.map(ekipa => (
            <div className="swiper swiper-testimonial" key={ekipa.id}>
            
                <div className="swiper-wrapper" >
                
                          <div className="swiper-slide block--testimonials__slide" >
                          
                          <div className="block--testimonials__rating" >
                          <div className="swiper--testimonial__person">
                              <picture className="swiper--testimonial__picture">
                                  <img src={Mo} alt="Phillip Levin" />
                              </picture>
                              <div>
                                  <h2 className="swiper--testimonial__name">{ekipa.emri}</h2>
                                  <p className="swiper--testimonial__position">{ekipa.pozita}</p>
                              </div>
                              
                          </div>
                              <span><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.96 16.4166L4.61177 20.3058L6.33761 13.0474L0.689209 8.19409L8.10341 7.59825L10.96 0.708252L13.8166 7.59825L21.2319 8.19409L15.5824 13.0474L17.3082 20.3058L10.96 16.4166Z" fill="#FF5300"/> </svg></span>
                              <span><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M10.96 16.4166L4.61177 20.3058L6.33761 13.0474L0.689209 8.19409L8.10341 7.59825L10.96 0.708252L13.8166 7.59825L21.2319 8.19409L15.5824 13.0474L17.3082 20.3058L10.96 16.4166Z" fill="#FF5300"/> </svg></span>   
                              <span><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M10.96 16.4166L4.61177 20.3058L6.33761 13.0474L0.689209 8.19409L8.10341 7.59825L10.96 0.708252L13.8166 7.59825L21.2319 8.19409L15.5824 13.0474L17.3082 20.3058L10.96 16.4166Z" fill="#FF5300"/> </svg></span>
                              <span><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M10.96 16.4166L4.61177 20.3058L6.33761 13.0474L0.689209 8.19409L8.10341 7.59825L10.96 0.708252L13.8166 7.59825L21.2319 8.19409L15.5824 13.0474L17.3082 20.3058L10.96 16.4166Z" fill="#FF5300"/> </svg></span>           
                              <span><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11.0401 13.8773L14.0824 15.7406L13.2552 12.2631L15.9627 9.93717L12.4095 9.65117L11.0401 6.35025V13.8773ZM11.0401 16.4166L4.69185 20.3058L6.41769 13.0474L0.769287 8.19409L8.18349 7.59825L11.0401 0.708252L13.8967 7.59825L21.312 8.19409L15.6625 13.0474L17.3883 20.3058L11.0401 16.4166Z" fill="#FF5300"/></svg></span>
                          </div>
                          <p className="block__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolorum exercitationem saepe ipsum autem veritatis enim numquam unde alias quam, beatae assumenda nulla perferendis consectetur quis quaerat deleniti temporibus vero!</p>
                          
                          
                        </div>
                        
                        </div>
                  
                  
            
            </div>
            ))}
            </div>
            </section>
            
    </>

)
})
