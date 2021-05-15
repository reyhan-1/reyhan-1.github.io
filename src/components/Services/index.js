import React from 'react'
import Icon1 from '../../images/icon1.png'
import Icon2 from '../../images/oldsite.gif'
import Icon3 from '../../images/icon3.png'
import Icon4 from '../../images/icon4.png'
import Icon5 from '../../images/icon5.png'
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
         <ServicesH1>Projects</ServicesH1>
         <ServicesH3> Codes can be found on my <a href="https://github.com/reyhan-1" target="myTab">github page.</a> </ServicesH3> 
         <ServicesWrapper>
         
         <ServicesCard>
               <ServicesIcons src={Icon6}/>
               <ServicesH2> Instagramlike Website</ServicesH2>
               <ServicesP> for my watercolor paintings using Firebase as a backend server and React in frontend development.</ServicesP>
            </ServicesCard>

            <ServicesCard>
               <ServicesIcons src={Icon2}/> 
               <ServicesH2> Space Themed Website</ServicesH2>
               <ServicesP> You can access online <a style={{ color: 'black' }} href="https://reyhan-1.github.io/space-website/" target="myTab">here </a>   </ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcons src={Icon3}/>
               <ServicesH2>Poker Game</ServicesH2>
               <ServicesP>  A 3D Poker Game implemented with Unreal Engine</ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcons src={Icon4}/>
               <ServicesH2>Shipit</ServicesH2>
               <ServicesP>  A Spring based shipping company website</ServicesP>
            </ServicesCard>


        
            <ServicesCard>
               <ServicesH2>Battleship Game</ServicesH2>
               <ServicesP> Basic implemenation of battleship game in Java.</ServicesP>
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
               <ServicesP> Netflix login and sign up page for Selenium Testing</ServicesP>
            </ServicesCard>
         
               
         </ServicesWrapper>

      </ServicesContainer>
   )
}

export default Services
