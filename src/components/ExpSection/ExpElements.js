import styled from 'styled-components';

export const ExpElementsContainer = styled.div`
   display: flex;
   vertical-align: middle;
   z-index: 1;
   width: 100%;
   padding-right: 30px;
   padding-left: 30px;
   padding-top: 80px;
   padding-bottom: -20px;
   color:black;
   background-color: rgb(211,211,211);

   @media screen and (max-width: 1280px){
      height:900px;
   }


   @media screen and (max-width: 760px){
      height:1200px;
                     }

   @media screen and (max-width: 480px){
      height:1500px;
                     }

   a{
      color: black;
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
   margin-right: auto;
   font-family: "Montserrat";
   margin-left: auto;
   padding: 0 24px;
   list-style:none;
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
`

export const role = styled.p`
   font-size: 0.8rem;
`

export const loc = styled.p`
   font-size: 0.8rem;
   color: rgb(205, 88, 88);
`

export const date = styled.p`
   font-size: 0.8rem;
   color: rgb(242, 121, 121);
   font-style: italic;
`

export const TopLine = styled.p`
   color: black;
   font-size: 14px;
   line-height: 16px;
   // letter-spacing: px;
   margin-bottom: 12px;
   font-family: "Montserrat";
`

export const TextWrapper = styled.div`
   width: 100%;
`

export const Column = styled.div`
   box-sizing: border-box;
   float: left;
   width: 50%;
   padding: 5px;
   height: 300px;
   
   @media screen and (max-width: 1280px){
      height:350px;
   }

   @media screen and (max-width: 760px){
      height:500px;
   }

   @media screen and (max-width: 480px){
      box-sizing: border-box;
      width: 100%;
      float: none;
      height:500px;

   }

`

export const Row = styled.div`
&:after {
   float: left;
   width: 50%;
   padding: 10px;
   height: 200px;
}
`