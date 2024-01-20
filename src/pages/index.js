import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import ExpElements from '../components/ExpSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import { ExpElementsP } from '../components/ExpSection/ExpElements';
import Footer from '../components/Footer';
import Sketches from '../components/SketchesSection'


const Home = () => {
   const[isOpen, setIsOpen] = useState(false)

   const toggle = () => {
      setIsOpen(!isOpen) 
   }


   return (
      <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/>
         <InfoSection {...homeObjOne}/>
         <ExpElements/>
         <HeroSection/>
         <Services/>
         <Footer/>

      </>
   )
};

export default Home;
