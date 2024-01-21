import React from 'react';
import {Button} from '../ButtonElement';

import { 
   InfoContainer, 
   InfoWrapper, 
   InfoRow, 
   Column1,
   Column2, 
   TextWrapper,
   Heading,
   Subtitle, 
   ImgWrap, 
   Img ,
} from './InfoElements'


const InfoSection = ({ 
   lightBg, 
   boldFont,
   id, 
   imgStart, 
   img, 
   alt,
   }) => {
   return (
      <>
         <InfoContainer lightBg={!lightBg} id={id}>
            <InfoWrapper>
               <InfoRow imgStart={imgStart}>
                  <Column1>
                     <TextWrapper>
                        <Heading>Hi, I'm Reyhan</Heading>
                        <Subtitle boldFont={!boldFont}>As a <Subtitle boldFont={boldFont}>software engineer</Subtitle> I am passionate about solving problems through different levers. </Subtitle>
                        <Subtitle boldFont={!boldFont}>My academic and industry interests include <Subtitle boldFont={boldFont}> full stack development</Subtitle>, automation, and software engineering project management. </Subtitle>
                        <Subtitle boldFont={!boldFont}>I've had the pleasure of working at amazing <Subtitle boldFont={boldFont}>green tech </Subtitle> companies in the past, such as</Subtitle>
                        <Subtitle boldFont={boldFont}> Axiom Cloud </Subtitle> <Subtitle boldFont={!boldFont}>and</Subtitle> <Subtitle boldFont={boldFont}>Uplight.</Subtitle>
                        <br/>
                        <br/>
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
