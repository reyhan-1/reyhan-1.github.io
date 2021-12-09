import styled from 'styled-components';

export const ServicesContainer = styled.div`
   min-height: 800px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;
   padding: 82px 30px;
   background: black;
   background: linear-gradient(to top, black,  #494902);
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;

   .custom-shape-divider-top-1631009843 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
  }
  
  .custom-shape-divider-top-1631009843 svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 88px;
  }
  
  .custom-shape-divider-top-1631009843 .shape-fill {
      fill: white;
  }

   @media screen and (max-width: 1000px) {
      height: auto;
   } 
   
   @media screen and (max-width: 768px) {
      height: auto;
   }
   @media screen and (max-width: 480px) {
      height: auto;
   }
   a{
      color: white;
    }
   a:link {
      text-decoration: underline ;
    }
    
   a:hover {
    color:black;
    }
   

`

export const ServicesWrapper = styled.div`
   max-width: 1000px;
   margin: 0 auto;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   align-items: left;
   grid-gap: 16px;
   padding: 10 50px;

   

   @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 0 10px;
      margin-bottom: 20px;
   } 

   @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr; 
      padding: 0 10px;
      margin-bottom: 20px;
   }

   @media screen and (max-width: 480px) {
      grid-template-columns: 1fr; 
      padding: 0 10px;
      margin-bottom: 20px;
   }
`

export const ServicesCard = styled.div`
   background: white;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   border-radius: 10px;
   max-height: 300px;
   height: relative;
   width:auto;
   padding: 10px 3px;
   box-shadow: 0 1px 3px rgba(0,0,0,0.2);
   transition: all 0.2s ease-in-out;

   &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
   }
`

export const ServicesIcons = styled.img`
   width: 200px;
   margin-bottom: 10px;
   margin-top: 10px;
   max-width:200px;
   max-height: 200px;
`

export const ServicesH1 = styled.h1`
   font-size: 2.5rem;
   color: #fff;
   align-self:center;
   padding: 0px;
   margin-top:120px;
   @media screen and (max-width: 1000px) {
      font-size: 2.5rem;

   } 
   @media screen and (max-width: 480px) {
      font-size: 2.5rem;

   }
`
export const ServicesH2 = styled.h2`
   font-size: 0.8rem;
   margin-bottom: 0.1em;
   text-align: center;
`

export const ServicesH3 = styled.h1`
   font-size: 0.9rem;
   color: #fff;
   margin-bottom: 0.9em;

   @media screen and (max-width: 480px) {
      font-size: 0.8rem;
   }
`

export const ServicesP = styled.p`
   font-size: 0.8rem;
   text-align:center;
   //padding:50px 0 50px;
`