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
      </>
   )
}

export default InfoSection
