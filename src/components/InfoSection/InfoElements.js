import styled from 'styled-components'


export const InfoContainer = styled.div`
   color:#fff;
   padding-top: -60px;
   background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
   
   @media screen and (max-width: 768px){
      height:1000px;
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
   height: 800px;
   width: 100%;
   max-width: 1100px;
   margin-right: auto;
   margin-left: auto;
   padding-top: 610px;
   padding: 0 24px;
   justify-content: center;
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
   max-width: 350px;
   padding-top: 0;
   padding-left: 50px;
`

export const TopLine = styled.p`
   color: #FF9999;
   font-size: 16px;
   font-family: "Montserrat";
   line-height: 16px;
   font-weight: 400;
   letter-spacing: 1.7px;
   margin-bottom: 30px;
`

export const Heading = styled.h1`
   margin-bottom: 24px;
   font-size: 48px;
   line-height: 1.1;
   font-weight: 600;
   color: ${({lightText}) => (lightText ? 'white' : 'black')};

   @media screen and (max-width: 480px){
      font-size: 32px;
      margin-top:40px;
   }

   @media screen and (max-width: 1280px){
      
      margin-top:60px;
   }
`

export const Subtitle = styled.p`
   max-width: 440px;
   margin-bottom: 35px;
   font-size: 18px;
   line-height: 24px;
   font-family: "Montserrat";
   color: ${({darkText}) => (darkText ? 'black' : 'white')};
`

export const Subtitle2 = styled.p`
   max-width: 440px;
   margin-bottom: 35px;
   font-size: 16px;
   font-family: "Montserrat";
   line-height:24px;
   color: white;
`

export const BtnWrap = styled.div`
   display: flex;
   flex-direction: left;
   align-items: center;

`

export const ImgWrap = styled.div`
   max-width: 555px;
   height: 100%;
   padding-top: 0;
   padding-left: 60px;


   
`
export const Img = styled.img`
   width: 80%;/*
   margin :0;
   padding-right: 10px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   */

   background: #fff;
  padding: 0.2em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  @media screen and (max-width: 1280px){
      
   width: 80%;
}

@media screen and (max-width: 760px){
      
   width: 50%;
}

@media screen and (max-width: 360px){
      
   width: 20%;
}
`



