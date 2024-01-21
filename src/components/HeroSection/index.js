/*<HeroP>
<span> instagram <a href="https://instagram.com/uyanikre" target="myTab">
  <FontAwesomeIcon icon={['fab', 'instagram']} /> </a> </span>
</HeroP> */


import React, {useState} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap, faBriefcase, faMapMarkerAlt, faPlane,faEnvelope, faPaperPlane, faFile, faLaptop  } from '@fortawesome/free-solid-svg-icons'
import {
   HeroContainer,
   Row,
   Column,} from './HeroElements';


const HeroSection = () => {
   const [hover, setHover] = useState(false)

   const onHover = () => {
      setHover(!hover)
   }

   library.add(fab, faInstagram, faBriefcase, faLaptop, faEnvelope, faPaperPlane, faLinkedin, faGithub, faGraduationCap, faFile, faMapMarkerAlt, faPlane);
 
   return (
      
      <HeroContainer id="education" >
         <Row> 
            <Column>
               {/* <HeroH1> Hi! I'm Reyhan </HeroH1>  */}
               <h2> Education</h2>
               <h3> Bilkent University</h3>
               <p> B.S. Computer Engineering (2021) </p>
            
            </Column>
            <Column> 
            <h2>Coursework</h2>
            <p> • Algorithms &amp; Complexity </p>
				<p>• Machine Learning</p>
            <p>• Database Systems</p>
            <p>• Information Retrieval Systems</p>
            <p>• Linear Programming</p>
            <p>• Computer Vision</p>
            <p>• Application Lifecycle Management</p>
            <p>•Software Verification and Validation</p>
            <p>• Software Engineering Project Management</p>
               
            </Column> 
         </Row>         
            {/* <HeroBtnWrapper>
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
            </HeroBtnWrapper> */}
      </HeroContainer>
      
   )
}

export default HeroSection
