import styled from 'styled-components';

export const ExpElementsContainer = styled.div`
   display: flex;
   grid-template-columns: 1fr 1fr 1fr;
   display: inline-block;
   vertical-align: middle;
   height: 140vh;
   z-index: 1;
   width: 100%;
   padding-right: 50px;
   padding-left: 30px;
   padding-top: 80px;
   padding-bottom: 80px;
   color:white;
   background-color: black;

   @media screen and (max-width: 1280px){
      height:1300px;
   }


   @media screen and (max-width: 760px){
      height:1350px;
                     }

   @media screen and (max-width: 480px){
      height:1050px;
                     }

                     @media screen and (max-width: 320px){
                        height:1200px;
                                       }

   a{
      color: white;
      font-family: "Acme";
      font-size: 1.25rem;
   }

   a:link {
      text-decoration: none ;
   }
    
   a:hover {
      color:rgb(217, 59, 31);
   }            
`

export const ExpElementsContent = styled.div`
   position: flex;
   min-height: 800px;
   max-width: 1100px;
   margin-right: auto;
   font-family: "Montserrat";
   margin-left: auto;
   padding: 0 24px;
   justify-content: center;
   list-style:none;
   margin-bottom:-50px;
`


export const ExpElementsH1 = styled.h1`
font-size: 48px;
font-weight: 900;
margin-bottom: 10px;
@media screen and (max-width: 480px){
   font-size: 24px;
}
`

export const ExpElementsP = styled.p`
   font-size: 16px;
   color:blue;
`

export const role = styled.p`
   font-size: 0.8rem;
   color: white;
`

export const loc = styled.p`
   font-size: 0.8rem;
   margin-bottom: 10px;
   color: rgb(205, 88, 88);
`

export const date = styled.p`
   font-size: 0.8rem;
   color: rgb(242, 121, 121);
   font-style: italic;
`

export const TopLine = styled.p`
   color: white;
   font-size: 14px;
   line-height: 16px;
   font-weight: 700;
   letter-spacing: 1.2px;
   margin-bottom: 16px;
   font-family: "Montserrat";   
`

export const TextWrapper = styled.div`
   padding: 14px 32px;
   margin-top: 1rem;
   margin-left: 1rem;
   margin-right: 1rem;
   width: 100%;
`