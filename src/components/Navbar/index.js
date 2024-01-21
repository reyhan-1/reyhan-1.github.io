import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, NavBtn, NavBtnLink,
        MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'


const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);


    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
     <>
        <Nav> 
            <NavbarContainer>
                <NavLogo to= "/ " onClick={toggleHome}> REYHAN UYANIK </NavLogo> 
                <MobileIcon onClick={toggle}> 
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                <NavItem>
                        <NavLinks to='about'
                        smooth={true}
                        duration={550}
                        spy={true}
                        exact='true'
                        offset={-60}
                        >
                            About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'
                        smooth={true}
                        duration={550}
                        spy={true}
                        
                        exact='true'
                        offset={-60}
                        >
                            Experience </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='education'
                        smooth={true}
                        duration={550}
                        spy={true}
                        
                        exact='true'
                        offset={-60}
                        >
                            Education </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'
                        smooth={true}
                        duration={550}
                        spy={true}
                        exact='true'
                        offset={-60}>
                        
                            Certifications & Projects</NavLinks>
                    </NavItem>



                </NavMenu>
            
            </NavbarContainer>    
        </Nav>
     </>
    )   
}

export default Navbar
