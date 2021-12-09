import React from 'react';
import {Button} from '../ButtonElement';

import { 
   InfoContainer, 
   InfoWrapper, 
   InfoRow, 
   Column1,
   Column2, 
   TextWrapper,
   TopLine,
   Heading,
   Subtitle, 
   BtnWrap, 
   ImgWrap, 
   Img ,
   Subtitle2
} from './InfoElements'


const InfoSection = ({ 
   lightBg, 
   id, 
   imgStart, 
   topLine, 
   lightText, 
   headline,
   darkText, 
   description,
   description2,
   description3, 
   buttonLabel, 
   img, 
   alt, 
   primary, 
   dark, 
   dark2}) => {
   return (
      <>
         <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
               <InfoRow imgStart={imgStart}>
                  <Column1>
                     <TextWrapper>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <Subtitle2>{description2} </Subtitle2> 
                        <TopLine>{topLine}</TopLine>
                        <Subtitle2>{description3} </Subtitle2>
                        <BtnWrap> • see my sketches
                        <a href="https://reyhan-1.github.io/watercolor/" target="myTab">&#160;  here ! </a></BtnWrap>
                     </TextWrapper>
                  </Column1>
                  
                  <Column2>
                     <ImgWrap>
                        <Img src={img} alt={alt}/>
                     </ImgWrap>
                  </Column2>
               </InfoRow>
            </InfoWrapper>
         </InfoContainer>
         <div>                
         <div class="custom-shape-divider-bottom-1631006832">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
</div>
      </>
   )
}

export default InfoSection
