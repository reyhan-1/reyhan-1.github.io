import React from 'react'
import {
   FooterContainer, 
   FooterWrap,
   FooterLinksContainer,
   FooterLinksWrapper,
   FooterLinkItems,
   FooterLinkTitle
} from './FooterElements';


const Footer = () => {
   return (
      <FooterContainer>
         <FooterWrap>
            <FooterLinksContainer>
               <FooterLinksWrapper>
                  <FooterLinkItems>
                     <FooterLinkTitle>
                     This website is an open-source project made by Reyhan Uyanik 
                     </FooterLinkTitle>
                  </FooterLinkItems>
               </FooterLinksWrapper>
            </FooterLinksContainer>
         </FooterWrap>
      </FooterContainer>
   )
}

export default Footer
