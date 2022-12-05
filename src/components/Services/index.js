import React from 'react'
import Icon1 from '../../images/defender.png'
import Icon3 from '../../images/poker.png'
import Icon4 from '../../images/shipit.png'
import Icon5 from '../../images/netflix.png'
import Icon6 from '../../images/paper.gif'

import { 
   ServicesContainer, 
   ServicesH1, 
   ServicesWrapper, 
   ServicesCard,
   ServicesIcons,
   ServicesH2, 
   ServicesH3,
   ServicesP
 } from  './ServicesElements';

const Services = () => {
   return (
      <ServicesContainer id="services">
         <ServicesH1 style={ {fontFamily: "Acme"}}>Projects</ServicesH1>
         <ServicesH3> Codes can be found on my <a href="https://github.com/reyhan-1" target="myTab">github page.</a> </ServicesH3> 
         <ServicesWrapper>
         
         <ServicesCard>
               <ServicesIcons src={Icon6}/>
               <ServicesH2> Instagramlike Website</ServicesH2>
               <ServicesP> for my watercolor paintings using Firebase as a backend server and React in frontend.</ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcons src={Icon3}/>
               <ServicesH2>Poker Game</ServicesH2>
               <ServicesP>  A 3D Poker Game implemented with Unreal Engine.</ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcons src={Icon4}/>
               <ServicesH2>Shipit</ServicesH2>
               <ServicesP>  A Spring based shipping company website.</ServicesP>
            </ServicesCard>

            <ServicesCard>
               <ServicesH2>CS473/573 Algorithms I Programming Assignment</ServicesH2>
               <ServicesP> Implemented the Dijkstra’s algorithm using binary heap-based implementation of priority queues to solve a network reliability problem.
               </ServicesP>
            </ServicesCard>

            <ServicesCard>
               <ServicesIcons src={Icon1}/>
               <ServicesH2>Remake of the Defender</ServicesH2>
               <ServicesP> Waves of invading aliens must be defeated while protecting astronauts. </ServicesP>
            </ServicesCard>

            <ServicesCard>
               <ServicesIcons src={Icon5}/>
               <ServicesH2>Login</ServicesH2>
               <ServicesP> Netflix login and sign up page for Selenium Testing.</ServicesP>
            </ServicesCard>
         
               
         </ServicesWrapper>

      </ServicesContainer>
   )
}

export default Services
