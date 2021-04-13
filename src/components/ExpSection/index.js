import React from 'react'

import { ExpElementsContainer, 
         ExpElementsContent, 
         ExpElementsH1, 
         ExpElementsP,
         InfoRow,   Column1, Column2, ImgWrap, TextWrapper, 
         TopLine
         } from './ExpElements'


const ExpElements = () => {

   return (
      <ExpElementsContainer id="discover"> 

      <ExpElementsContent>  
         <InfoRow>
            <Column1> 
            <TextWrapper>  
         <ExpElementsH1>Education</ExpElementsH1>
         
         <li><a href="https://w3.bilkent.edu.tr/bilkent/" target="myTab"> Bilkent University </a></li><ExpElementsP>  
            B.S. Computer Science | 2016 - 2021   
            </ExpElementsP>
            
            <TopLine> 
               
            </TopLine>
            <ExpElementsP>  
            Coursework    
            </ExpElementsP>
            <TopLine style={{ color: 'indianred' }}> 
            Algorithms & Complexity<br /> 
            Database Systems<br /> 
            Information Retrieval Systems<br /> 
            Application Lifecycle Management<br /> 
            Software Verification and Validation<br /> 
            Software Engineering Project Management<br /> 
            Computer Vision<br /> 
            Linear Programming<br />
            </TopLine>
            <ExpElementsP>  
            Skills    
            </ExpElementsP>
            <TopLine style={{ color: 'indigo' }}> 
            Java,   
            JavaScript (React, TypeScript, NodeJS, NestJS),   
            WebGL,
            SQL,
            MongoDB,
            HTML/CSS
            </TopLine>
            </TextWrapper>
            </Column1>
      <Column2> 
      <ImgWrap> 
         <ExpElementsH1>Experience</ExpElementsH1>
         
         <li><a href="https://ekin.com/" target="myTab"> Ekin Technology</a></li>
            <ExpElementsP>  

            Part-Time Software Engineer | September 2020 - March 2021   
            </ExpElementsP>
            <TopLine> Participated in Artificial Intelligence team's deep learning projects from data labeling to model training and testing.  </TopLine>


            <li><a href="https://ekin.com/" target="myTab"> Ekin Technology</a></li>
            <ExpElementsP>  
            Summer Intern | August 2020 - September 2020   
            </ExpElementsP>
            <TopLine> Worked in Database team as Full Stack Developer. Developed both client and server sides of the settings page, enhanced sensor page and added new functionalities. </TopLine>
            
            </ImgWrap>
            </Column2>
            </InfoRow>
           
         </ExpElementsContent>
         

      </ExpElementsContainer>
      
   )
}

export default ExpElements;
