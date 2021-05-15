import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`

   background: ${({primary}) => (primary ? '' : '')};
   white-space: nowrap;
   padding: ${({big})=> (big ? '14px 48px' : '12px')};
   color: ${({dark})=> (dark ? 'black' : 'blue')};
   font-size ${({fontBig})=> (fontBig ? '20px' : '16px')};
   outline: none;
   border-radius: 20px;
   border: ${({primary}) => (primary ? '2px solid gray' : '2px solid white')};

   cursor: pointer;
   display: flex;
   justify-content:center;
   align-items: center;
   transition: all 0.2s ease-in-out;

   &:hover{
      transition: all 0.2s ease-in-out;
      color:palevioletred;
      text-shadow: 0px 0px 0.5px black;
   }
`