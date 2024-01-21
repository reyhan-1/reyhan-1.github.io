import React from 'react'

import { ExpElementsContainer, 
         ExpElementsContent, 
         ExpElementsH1,
         TextWrapper,
         Row, Column, 
         TopLine
         } from './ExpElements'


const ExpElements = () => {

   return (
      
      <ExpElementsContainer id="discover"> 
      <ExpElementsContent>  
      <TextWrapper> 
         <ExpElementsH1  style={{ fontFamily: 'Acme' }}>Experience</ExpElementsH1>

         <Row> 
            <Column> 
            <h2 style={{ fontFamily: 'Acme' }}> <a href="https://axiomcloud.ai/" target="myTab"> Axiom Cloud </a>
         <role style={{ fontFamily: 'Acme', fontSize: '1rem'  }}> Software Engineer </role>
         <date style={{
            fontSize: '0.8rem',
            color: 'rgb(242, 121, 121)',
            fontFamily: 'Acme',
            fontStyle: 'italic'}}> January 2023 - October 2023 </date>
         <loc style={{
            fontSize: '0.8rem',
            fontFamily: 'Acme',
            color: 'rgb(205, 88, 88)'}}> | Boston, MA</loc></h2>
               <TopLine> 
        ◦ Axiom aims to transform how cooling systems are powered, operated, and maintained by using software and automation to generate significant climate and financial impact. Axiom supercharges existing refrigeration systems to save on energy and maintenance costs and reduce break/fix headaches.
        </TopLine>
            <TopLine> 
         ◦ Worked as a backend developer. Worked on automating the process of onboarding a new site to the apps, and detecting/reacting to leaks.</TopLine>
      <TopLine> 
Skills: Airflow · Python (Programming Language) · Amazon Web Services (AWS)
         </TopLine>
            
            </Column>
            <Column>

            <h2 style={{ fontFamily: 'Acme' }}> <a href="https://www.uplight.com/" target="myTab"> Uplight </a>
         <role style={{ fontFamily: 'Acme', fontSize: '1rem'  }}>Software Engineer </role>
         <date style={{
            fontSize: '0.8rem',
            color: 'rgb(242, 121, 121)',
            fontFamily: 'Acme',
            fontStyle: 'italic'}}> December 2021 - January 2022 </date>
         <loc style={{
            fontSize: '0.8rem',
            fontFamily: 'Acme',
            color: 'rgb(205, 88, 88)'}}> | Boston, MA</loc></h2>
   
   <TopLine> 
        ◦ Uplight aims to motivate and empower customers to take action for a cleaner energy ecosystem. By educating customers about their rate plans to make 
        informed decisions about their energy usage.
        </TopLine>
            <TopLine> 
         ◦ Worked as a backend developer in a new platform. The project’s objective was to simplify an existing platform that sends informative emails to energy customers and make it more customizable for different energy providers.
         </TopLine>
         <TopLine> 
◦ Participatied in the following stages of the new platform: planning, implementation, testing, deployment and maintenance.
</TopLine>
<TopLine> 
Skills: Python, Google Cloud Platform (GCP), SQL, Amazon Web Services (AWS), Jira, Postman API, Database Administration.
         </TopLine>


            </Column>

            <Column>
               

            <h2 style={{ fontFamily: 'Acme' }}> <a href="https://www.jotform.com/" target="myTab"> JotForm </a>
         <role style={{ fontFamily: 'Acme', fontSize: '1rem'  }}> Summer Intern </role>
         <date style={{
            fontSize: '0.8rem',
            color: 'rgb(242, 121, 121)',
            fontFamily: 'Acme',
            fontStyle: 'italic'}}> June 2021 - July 2021 </date>
         <loc style={{
            fontSize: '0.8rem',
            fontFamily: 'Acme',
            color: 'rgb(205, 88, 88)'}}> | San Francisco, CA </loc></h2>

         <TopLine>
      ◦ Worked as a frontend developer.
      </TopLine>
      <TopLine>
      ◦ Redesigned and implemented advanced settings on enterprise admin system.
      </TopLine>
      <TopLine>
      Skills: Python, ReactJS, Jira, and Postman API.
      </TopLine>  


            </Column>
            </Row>
            <Row>

            <Column> 

            <h2 style={{ fontFamily: 'Acme' }}> <a href="https://www.ekin.com/" target="myTab"> Ekin </a>
         <role style={{ fontFamily: 'Acme',fontFamily: 'Acme', fontSize: '1rem'  }}> Summer Intern -> Part Time Software Engineer </role>
         <date style={{
            fontSize: '0.8rem',
            fontFamily: 'Acme',
            color: 'rgb(242, 121, 121)',
            fontStyle: 'italic'}}> August 2020 - March 2021 </date></h2>

<TopLine> 
◦ Worked as a full stack developer in my summer internship.
</TopLine> 
<TopLine> 
◦ Designed and implemented the settings page on digital twin system for smart city management project in Katar. Developed both client and server sides of the page, enhanced sensor page and added new functionalities.
</TopLine> 
<TopLine> 
Skills: AngularJS, Node.js, MongoDB.
</TopLine> 
<TopLine> 
◦ After my internship started working as a part time software engineer in Artificial Inteligence team.
</TopLine> 
<TopLine> 
◦ Participated in deep learning projects from data labeling to model training and testing. My work included data engineering including extracting, transform and loading.
</TopLine>
<TopLine>  
Skills: Python, Machine Learning, Data Analysis, PyTorch.
</TopLine> 
            
            </Column>


         
         </Row>

   
      
            </TextWrapper>


         </ExpElementsContent>
      </ExpElementsContainer>

   )
}

export default ExpElements;
