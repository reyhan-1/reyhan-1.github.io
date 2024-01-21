import styled from 'styled-components'


export const InfoContainer = styled.div`
   color:#fff;
   background: ${({lightBg}) => (lightBg ? 'white' : 'black')};
   font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Acme, Verdana, sans-serif;

   @media screen and (max-width: 768px){
      height:1000px;
   }

   @media screen and (max-width: 480px){
      padding-right:20px;
   }
   
   a{
      font-size: 20px;
      color: RosyBrown;
      text-decoration: underline;
      
   }

   a:hover{
      color: white;
   }

   a:link {
      text-decoration: none;
    }
    
`

export const InfoWrapper = styled.div`
   display: grid;
   z-index:1;
   height: 900px;
   max-width: 1100px;
   margin-right: auto;
   margin-left: auto;
   padding-top: 100px;

   a{
      color: black;
      margin-left: 20px;
   }

   a:link {
      text-decoration: none;
    }
    
   a:hover {
    color:IndianRed;
   }
`

export const InfoRow = styled.div`
   display: grid;
   grid-auto-columns: minmax(auto, 1fr);
   align-items: center;
   grid-template-areas: ${({imgStart}) => (imgStart ? `'col2
    col1'` : `'col1 col2'`)};

   @media screen and (max-width: 768px){
      grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
      /* */
   }
`

export const Column1 = styled.div`
   margin-bottom: 15px;
   padding: 0 15px;
   grid-area: col1;
`

export const Column2 = styled.div`
   margin-bottom: 15px;
   grid-area: col2;
`


export const TextWrapper = styled.div`
   max-width: 550px;
   padding-top: 0;
   padding-left: 50px;

   a{
      font-size: 20px;
      color: black;
      text-decoration: underline;
      padding-left: 10px;
      padding-right: 10px;
   }

   a:hover{
      color: RosyBrown;
   }

   a:link {
      text-decoration: none;
    }
`

export const TopLine = styled.p`
   color: black;
   font-size: 16px;
   font-family: "Montserrat";
   line-height: 16px;
   font-weight: 400;
   letter-spacing: 1.7px;
   margin-bottom: 30px;
`

export const Heading = styled.h1`
   margin-bottom: 24px;
   font-size: 40px;
   line-height: 1.1;
   font-weight: 600;
   color: black;

   @media screen and (max-width: 480px){
      font-size: 32px;
      margin-top:40px;
   }

   @media screen and (max-width: 1280px){
      margin-top:10px;
   }
`

export const Subtitle = styled.p`
   max-width: 840px;
   min-width: 500px;
   font-size: 15px;
   display: inline;
   font-family: "Montserrat";
   color: black;
   font-weight: ${({boldFont}) => (boldFont ? '' : '700')}; 
`


export const BtnWrap = styled.div`
   display: flex;
   flex-direction: left;
   align-items: center;

`

export const ImgWrap = styled.div`
   max-width: 555px;
   height: 100%;
   margin-left: 60px;
`
export const Img = styled.img`
   width: 80%;
   background: #fff;
   padding: 0.1em;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`



