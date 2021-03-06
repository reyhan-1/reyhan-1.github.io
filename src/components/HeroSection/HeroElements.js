import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'



export const ArrowForward = styled(MdArrowForward)`
   margin-left: 8px;
   font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
   margin-left: 8px;
   font-size: 20px;
`


export const ImgWrap = styled.div`
   max-width: 555px;
   height: 100%;
   padding-top: 0;
   padding-left: 50px;
`
export const Img = styled.img`
   width: 85%;
   margin :0;
   padding-right: 0;
   padding: 1em;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   
`

export const HeroContainer = styled.div`

   background-color: #f9f9f9;
   /* For browsers that do not support gradients 
   background: linear-gradient(to bottom, #372f6a, #372f6a, darkslateblue, #396a93, SteelBlue, #7eaacd, #91b6d4);
   */  
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 30px;
   height: 800px;
   position: relative;
   z-index:1;
   :before {
      content: '';
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
      linear-gradient(60deg, 
                     rgba(0,0,0,0), 
                     rgba(0,0,0,0.1));
   }
                          
      z-index: 2;
   

   a{
      color: black;
    }
   a:link {

      text-decoration: none ;
    }
    
   a:hover {
    color:IndianRed;

    }
`

export const HeroBg = styled.div`
   position: absolute;
   top: 0;
   bottom:0;
   right: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden;
`
export const HeroContent = styled.div`
   z-index: 3;
   max-width: 1200px;
   position: absolute;
   padding: 8px 24px;
   display: flex;
   flex-direction: column;
   align-items:left;
`
export const HeroH1 = styled.h1`
   color: black;
   font-size: 36px;
   text-align: center;
   -webkit-text-stroke: 1px black;
   color: #939E9E;

   @media screen and (max-width: 768px){
      font-size: 32px;
   }
   @media screen and (max-width: 480px){
      font-size: 28px;
   }
`

export const HeroP = styled.h1`
   margin-top: 24px;
   color: black;
   font-size: 20px;
   text-align: left;
   max-width: 600px;

   @media screen and (max-width: 768px){
      font-size: 20px;
   }

   @media screen and (max-width: 480px){
      font-size: 16px;
   }
`

export const HeroBtnWrapper = styled.div`
   margin-top: 32px;
   flex-direction: column;
   border-radius: 100px;
`

