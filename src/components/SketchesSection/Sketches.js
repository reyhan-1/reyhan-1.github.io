import styled from 'styled-components';



export const SketchesContainer = styled.div`
   background-color: black;
   color: white;
   align-items: center;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 30px;
   min-height: 1000px;
   height: 100%;
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
    
       
   @media screen and (max-width: 768px) {
      height: 100%;
      min-height: 1200px;
      
   }
   @media screen and (max-width: 480px) {
      height: 100%;
      min-height: 2000px;
   }
`
export const SketchesWrapper = styled.div`
   max-width: 1000px;
   align-items: center;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   align-items: left;
   grid-gap: 16px;
   padding: 10px 50px;

   @media screen and (max-width: 1100px) {
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

      margin-bottom: 20px;
   }
`

export const SketchesContent = styled.div`
position: absolute;
padding: 0px 90px;
align-items: center;
flex-direction: column;
list-style:none;
   
`
export const SketchesH1 = styled.h1`
font-size: 48px;
color: white;

@media screen and (max-width: 768px){
   margin-left:20px;
   margin-right:20px;
}

@media screen and (max-width: 480px){
   margin-right:20px;
   margin-left:20px;
}



`

export const SketchesP = styled.p`
color: pink;
font-size: 14px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.2px;
margin-bottom: 10px;
margin-top: 10px;
align-items: center;
`


export const TopLine = styled.p`
   color: #666600;
   font-size: 14px;
   line-height: 16px;
   font-weight: 700;
   letter-spacing: 1.2px;
   margin-bottom: 16px;
   align-items: center;
`


export const SketchesCard = styled.div`

   display: inline;
   flex-direction: column;
   align-items: center;
   height: auto;
   width:auto;
   transition: all 0.2s ease-in-out;
`

export const SketchesPictures = styled.img`
   max-height: 300px;
   align-items: center;
   max-width: 280px;
   transition: all 0.4s ease-in-out;
  vertical-align: middle;

  
`

