import React from 'react'
import { ExpElementsContainer, ExpElementsContent, ExpElementsH1, ExpElementsP, TopLine } from './ExpElements'
import ParticlesBg from 'particles-bg'

const ExpElements = () => {

      let config = {
        num: [1, 1],
        rps: 0.2,
        radius: [10, 5],
        life: [10, 3],
        v: [0.001, 0],
        tha: [10, 5],
        alpha: [0.2, 0],
        scale: [1, 0.5],
        position: "all",
        color: ["random", "#999900"],
        cross: "cross",
        random: 0.5,
      };


   return (
      <ExpElementsContainer id="discover"> 
<ExpElementsContent> 
         <ExpElementsH1>Experience</ExpElementsH1>
         
         <li><a href="https://ekin.com/" target="myTab"> Ekin Technology</a></li>
            <ExpElementsP>  
            <ParticlesBg type="custom"  num={1} config={config} bg={true} />

            Part-Time Software Engineer | September 2020 - March 2021   
            </ExpElementsP>
            <TopLine> Participating in Artificial Intelligence team's deep learning projects from data labeling to model training and testing. Data engineering including extracting, transform, and loading. Using deep learning frameworks such as Darknet, Pytorch, ONNX </TopLine>


            <li><a href="https://ekin.com/" target="myTab"> Ekin Technology</a></li>
            <ExpElementsP>  
            <ParticlesBg type="custom"  num={1} config={config} bg={true} />

            Summer Intern | August 2020 - September 2020   
            </ExpElementsP>
            <TopLine> Worked in Database team as Full Stack Developer. Developed both client and server sides of the settings page, enhanced sensor page and added new functionalities written in JavaScript(TypeScript, NodeJS, NestJS). The technologies I’ve used during my internship are MongoDB, PrimeNG, Angular, TypeORM.</TopLine>

         </ExpElementsContent>
      </ExpElementsContainer>
   )
}

export default ExpElements;
