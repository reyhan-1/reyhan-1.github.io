import styled from 'styled-components';


/*import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const ArrowForward = styled(MdArrowForward)`
   margin-left: 8px;
   font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
   margin-left: 8px;
   font-size: 20px;
`*/

export const ExpElementsContainer = styled.div`
   background-color: #f9f9f9;
   color: black;  
   display: grid;
   align-items: center;
   min-height: 800px;
   position: relative;

   @media screen and (max-width: 1280px){
      height:1000px;
   }


   @media screen and (max-width: 760px){
      height:1050px;
                     }

   @media screen and (max-width: 480px){
      height:1050px;
                     }

                     @media screen and (max-width: 320px){
                        height:1200px;
                                       }

   a{
      color: black;
      
    }
   a:link {
      text-decoration: none ;
    }
    
   a:hover {
    color: CornflowerBlue;
    }

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

               
       
`


export const ExpElementsContent = styled.div`
position: absolute;
min-height: 800px;
display: grid;
width: 100%;
max-width: 1100px;
margin-right: auto;
   font-family: "Montserrat";
margin-left: auto;
margin-top: 30px;
padding: 0 24px;
justify-content: center;
list-style:none;

`
export const InfoRow = styled.div`
   display: grid;
   grid-auto-columns: minmax(auto, 1fr);
   align-items: center;
   grid-template-areas: ${({imgStart}) => (imgStart ? `'col2
    col1'` : `'col1 col2'`)};

   @media screen and (max-width: 768px){
      grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
      height: 
   }

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
      font-family: "Montserrat";
      font-weight: 800;
  
`


export const TopLine = styled.p`
   color: #666600;
   font-size: 14px;
   line-height: 16px;
   font-weight: 700;
   letter-spacing: 1.2px;
   margin-bottom: 16px;
   font-family: "Montserrat";
   
`


export const Column1 = styled.div`
   margin-bottom: 15px;
   padding: 0 15px;
   grid-area: col1;
   margin-left:-10px;
`

export const Column2 = styled.div`
   grid-area: col2;
   margin-right:50px;
`

export const TextWrapper = styled.div`
max-width: 500px;
height: 100%;
padding-left: 50px;

`


export const ImgWrap = styled.div`
max-width: 500px;
height: 100%;
padding-left: 50px;   
`