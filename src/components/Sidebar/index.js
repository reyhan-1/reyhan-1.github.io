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
                  Experience
               </SidebarLink>
               <SidebarLink to="services" onClick={toggle}>
                  Projects
               </SidebarLink>
            </SidebarMenu>
            
         </SidebarWrapper>
      </SidebarContainer>
   )
}

export default Sidebar
