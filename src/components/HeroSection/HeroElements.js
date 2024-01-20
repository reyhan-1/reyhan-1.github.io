import styled from 'styled-components';

export const HeroContainer = styled.div`
   background-color: #f9f9f9;
   /* For browsers that do not support gradients 
   background: linear-gradient(to bottom, #372f6a, #372f6a, darkslateblue, #396a93, SteelBlue, #7eaacd, #91b6d4);
   */  
   font-family: 'Montserrat', sans-serif;
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
      text-decoration: none;
    }
    
   a:hover {
    color:IndianRed;

    }
    .custom-shape-divider-bottom-1631006309 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      z-index: -11;
  }
  
  .custom-shape-divider-bottom-1631006309 svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 88px;
  }
  
  .custom-shape-divider-bottom-1631006309 .shape-fill {
   fill: black;
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
`

export const Column = styled.div`
   box-sizing: border-box;
   float: left;
   width: 50%;
   padding: 10px;
   height: 300px;

`

export const Row = styled.div`
&:after {
   float: left;
   width: 50%;
   padding: 10px;
   height: 300px;
}
`