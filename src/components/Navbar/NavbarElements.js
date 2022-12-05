import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`

text-decoration: none;
   height: 60px;
   margin-top: -60px; 
   display: flex;
   justify-content: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 10;
   background: black;
   @media screen and (max-width: 960px){
      transition: 0.8 all ease;
   }

   :before {
      content: '';
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
      linear-gradient(6deg, 
                     rgba(0,0,0,0), 
                     rgba(0,0,0,0.1));
   }

`
export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1100px;

   text-decoration: none;

`

export const NavLogo = styled(LinkR)`
   justify-self: flex-start;
   cursor:pointer;
   font-size: 1.5rem;
   display: flex;
   align-items: center;
   margin-left: 10px;
   margin-top: -20px;
   text-decoration: none;
   color: rgb(242, 121, 121);
   font-family: "Acme";

   &:hover {
      opacity: 1;
      text-decoration: none;
   }
`

export const MobileIcon = styled.div`
   display: none;
   
   @media screen and (max-width: 768px){
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 5px;
      transform: translate(-100%, 60%); /*centers it*/
      font-size: 1rem;
      cursor: pointer;
      color:#fff;
   } 
`

export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;

   text-decoration: none;

   /*margin-right: -22px;*/
   @media screen and (max-width: 768px) {
      display: none;
   }
`

export const NavItem = styled.li`
   height: 30px;
   text-decoration: none;
`

export const NavLinks = styled(LinkS)`  /*react scroll link*/
   margin-top: -10px;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   color: white;

   &:hover{

      text-decoration: none;
      color: #17f5f5;
   }

   &.active {
      color: rgb(242, 121, 121);
   }
   
`

export const NavBtn = styled.nav`
   display: flex;
   align-items: center;
   
   text-decoration: none;

   @media screen and (max-width: 768px){
      display:none;
   } 
`

export const NavBtnLink = styled(LinkR)`
   border-radius: 20px;
   background: #01bf71;
   white-space: nowrap;
   padding 10px 22px;
   color: #010606;
   font-size: 16px;
   border: none;
   cursor: pointer;
   transition: all 0.2 ease-in-out;
   text-decoration: none;

   text-decoration: none;


   &:hover{
      transition: all 0.2 ease-in-out;
      background: #fff;
      color: #010606;
   }
`

