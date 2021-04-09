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
                        <BtnWrap>
                           <Button to="sketches"
                           smooth={true}
                           duration={750}
                           spy={true}
                           exact='true'
                           offset={-60}>{buttonLabel}</Button> </BtnWrap>
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
