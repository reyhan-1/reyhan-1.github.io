import React from 'react'
import {SidebarContainer, Icon, CloseIcon,
        SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

import ParticlesBg from 'particles-bg'
const Sidebar = ({isOpen, toggle}) => {
   return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon inClick={toggle}>
            <CloseIcon />
            
         </Icon>
         <SidebarWrapper>

            <SidebarMenu>
               <SidebarLink to="about" onClick={toggle}>
                  About
               </SidebarLink>
               <SidebarLink to="discover" onClick={toggle}>
                  Education & Experience
               </SidebarLink>
               <SidebarLink to="services" onClick={toggle}>
                  Projects
               </SidebarLink>
               <SidebarLink to="sketches" onClick={toggle}>
                  Sketches
               </SidebarLink>
            </SidebarMenu>
            
         </SidebarWrapper>
      </SidebarContainer>
   )
}

export default Sidebar
