import styled from 'styled-components';

export const ServicesContainer = styled.div`
   height: 800px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;

   padding: 8px 24px;
   background: black;
   background: linear-gradient(to top, black, indigo, purple);
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 30px;
   height: 800px;
   position: relative;

   
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
    color:#AFEEEE;
    }
   

`

export const ServicesWrapper = styled.div`
   max-width: 1000px;
   margin: 0 auto;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   align-items: center;
   grid-gap: 16px;
   padding: 0 50px;

   @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr 1fr;
   } 

   @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr; 
      padding: 0 10px;
   }

   @media screen and (max-width: 480px) {
      grid-template-columns: 1fr; 
      padding: 0 10px;
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
   width:auto;
   padding: 3px;
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

   @media screen and (max-width: 480px) {
      font-size: 2.5rem;
      padding-top: 60px;
   }
`
export const ServicesH2 = styled.h2`
   font-size: 0.8rem;
   margin-bottom: 0.1em;
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
`