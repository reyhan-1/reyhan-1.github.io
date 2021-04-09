/*<HeroP>
<span> instagram <a href="https://instagram.com/uyanikre" target="myTab">
  <FontAwesomeIcon icon={['fab', 'instagram']} /> </a> </span>
</HeroP> */


import React, {useState} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap, faMapMarkerAlt, faPlane,faEnvelope, faPaperPlane, faFile  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button} from '../ButtonElement'
import {
   HeroContainer, 
   HeroBg,
   HeroContent, 
   HeroH1,
   HeroP, 
   HeroBtnWrapper, 
   ArrowForward, 
   ArrowRight, 
   myImg,
   Img, 
   ImgWrap} from './HeroElements';
   
   import ParticlesBg from 'particles-bg'
import logo from '../../images/rey.png'

const HeroSection = () => {
   const [hover, setHover] = useState(false)

   const onHover = () => {
      setHover(!hover)
   }

   library.add(fab, faInstagram, faEnvelope, faPaperPlane, faLinkedin, faGithub, faGraduationCap, faFile, faMapMarkerAlt, faPlane);
 
   return (
      <HeroContainer>
         <ParticlesBg type="cobweb"  num={35} bg={true} />
         <HeroContent >
            
            <HeroH1> Hi! I'm Reyhan </HeroH1> 
            <HeroP> 
            <FontAwesomeIcon icon="graduation-cap"/> CS student @ 
        <a  href="https://w3.bilkent.edu.tr/bilkent/" target="myTab"> Bilkent University</a>
            </HeroP>


            <HeroP> 
            <FontAwesomeIcon icon="map-marker-alt"/>     
        <text  style={{ color: 'black' }} > &#160;Ankara, Turkey</text> </HeroP> 
            
            <HeroP>
            <FontAwesomeIcon icon="envelope"/> 
        <a href="mailto:reyhanuyanik@icloud.com">&#160; reyhanuyanik@icloud.com </a>
            </HeroP>

            <HeroP> 
            
            <FontAwesomeIcon icon="file" /> 
            <a href="https://reyhan-1.github.io/resume/" target="myTab">&#160; Resume</a>
           
            </HeroP>
            
            <HeroP>
            <FontAwesomeIcon icon={['fab', 'github']} />
            <a href="https://github.com/reyhan-1" target="myTab">
            &#160; GitHub </a>
            </HeroP>

            <HeroP>
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />  
            <a href="https://www.linkedin.com/in/reyhan-uyanik" target="myTab">
            &#160; Linkedin</a>
           
            </HeroP>

                       
            <HeroBtnWrapper>
               <Button to="about" onMouseEnter={onHover}
               onMouseLeave={onHover}
               primary = "false"
               dark = "false"
               smooth={true}
                        duration={550}
                        spy={true}
                        exact='true'
                        offset={-60}
               > more about me {hover ? <ArrowForward /> : <ArrowRight/> } 
               </Button>
            </HeroBtnWrapper>
            
         </HeroContent>
      </HeroContainer>
   )
}

export default HeroSection
