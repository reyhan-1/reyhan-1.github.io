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
   color: black;   ;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 30px;
   height: 700px;
   position: relative;
   }

   a{
      color: black;
    }
   a:link {
      text-decoration: none ;
    }
    
   a:hover {
    color:IndianRed;
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
       
   @media screen and (max-width: 768px){
      padding: 100px 0;
   }
`


export const ExpElementsContent = styled.div`
position: absolute;
padding: 0px 90px;
display: flex;
flex-direction: column;
list-style:none;
   
`
export const ExpElementsH1 = styled.h1`
font-size: 48px;
margin-bottom: 10px;
@media screen and (max-width: 480px){
   font-size: 32px;
}

`

export const ExpElementsP = styled.p`
font-size: 16px;
`


export const TopLine = styled.p`
   color: #666600;
   font-size: 14px;
   line-height: 16px;
   font-weight: 700;
   letter-spacing: 1.2px;
   margin-bottom: 16px;
`


