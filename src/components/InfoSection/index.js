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
   SubtitleBold,
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
         <InfoContainer lightBg={!lightBg} id={id}>
            <InfoWrapper>
               <InfoRow imgStart={imgStart}>
                  <Column1>
                     <TextWrapper>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <SubtitleBold >{description2} </SubtitleBold>
                        <Subtitle2>{description3}</Subtitle2>
                        <TopLine>{topLine}</TopLine>
                        <a href="https://www.linkedin.com/in/reyhan-uyanik"> linkedin </a>
                        <a href="https://github.com/reyhan-1"> github </a> 
                        <a href="https://reyhan-1.github.io/resume/"> resume </a> 
                        <a href="mailto:reyhanuyanik@icloud.com"> email </a> 
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
