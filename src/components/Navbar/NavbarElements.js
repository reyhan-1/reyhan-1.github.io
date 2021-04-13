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
   background: #f0f0f0;
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
   font-weight: bold;
   text-decoration: none;

   -webkit-text-stroke: 1px black;
   color: white;
   text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;

   &:hover {
      
      opacity: 1;

      text-decoration: none;

      -webkit-text-stroke: 1px black;
      color: #C0B8E8;
      text-shadow:
          3px 3px 0 #000,
        -1px -1px 0 #000,  
         1px -1px 0 #000,
         -1px 1px 0 #000,
          1px 1px 0 #000;
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
   margin-top: 0;
   opacity: 0.5;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   font-weight: bolder;

   -webkit-text-stroke: 0.5px black;
   color: white;
   text-shadow:
       2px 1.2px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
   }
   
    

   &:hover{

      text-decoration: none;

      transition: all 0.2 ease-in-out;
      opacity: 0.7;
      -webkit-text-stroke: 1px black;
      color: #C0B8E8;
      text-shadow:
      2px 1.2px 0 #000,
    -1px -1px 0 #000,  
     1px -1px 0 #000,
     -1px 1px 0 #000,
      1px 1px 0 #000;
   }

   &.active {
      opacity: 0.7;
      -webkit-text-stroke: 1px black;
      color: #7FFFD4;
      text-shadow:
      2px 1.2px 0 #000,
    -1px -1px 0 #000,  
     1px -1px 0 #000,
     -1px 1px 0 #000,
      1px 1px 0 #000;
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

