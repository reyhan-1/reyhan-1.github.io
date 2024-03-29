import duomo from '../../images/duomo.JPG'
import greg from '../../images/greg.JPG'
import karisik from '../../images/karisik.JPG'
import purple from '../../images/purple.JPG'
import pub from '../../images/pub.JPG'
import sheraton from '../../images/sheraton.JPG'
 
import Carousel from 'react-bootstrap/Carousel'

import React from 'react'
import { SketchesContainer, 
         SketchesContent, 
         SketchesH1, 
         SketchesP, 
         TopLine,
         SketchesCard,
         SketchesPictures,
         SketchesWrapper } from './Sketches'


const Sketches = () => {

      return (
         <SketchesContainer id="sketches"> 
   <SketchesContent> 
            <SketchesH1>Sketches</SketchesH1>
            <SketchesWrapper>
      
         <SketchesCard>
            <SketchesPictures src={pub}/>
            <SketchesP> urban sketching of european pub with a bonsai tree</SketchesP>
         </SketchesCard>
         <SketchesCard>
            <SketchesPictures src={duomo} fluid/>
            <SketchesP> urban sketching of an italian street</SketchesP>
         </SketchesCard>
        
         <SketchesCard>
            <SketchesPictures src={karisik}/>
            <SketchesP> mixed sketching</SketchesP>
         </SketchesCard>
         <SketchesCard>
            <SketchesPictures src={greg} fluid/>
            <SketchesP> My illustration of the book "The Metamorphosis" by Franz Kafka</SketchesP>
         </SketchesCard>


         <SketchesCard>
            <SketchesPictures src={purple} fluid/>
            <SketchesP> Dakota building, NYC</SketchesP>
         </SketchesCard>
         <SketchesCard>
            <SketchesPictures src={sheraton} fluid/>
            <SketchesP> urban sketching of Sheraton Hotel</SketchesP>
         </SketchesCard>

         </SketchesWrapper>
         
            </SketchesContent>
         </SketchesContainer>
      )
}

export default Sketches;


