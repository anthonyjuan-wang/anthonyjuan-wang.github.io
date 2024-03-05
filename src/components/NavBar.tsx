import styled  from "styled-components";
import "../index.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
interface NavBarProps {
    isNavOpen: Boolean;
}

const NavBarContainer = styled.div`
    display: flex;
    position: sticky;
    z-index: 1;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--cherry-blossom-pink);
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
    }
`;


const NavMobileMenu = styled.div<NavBarProps>`
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 100%; 
    text-align: center;
    flex-direction: column;
    @media screen and (min-width: 768px){
        display: none;
    }
    height: ${props => (props.isNavOpen ? "35dvh" : 0)};
    transition: all 0.5s ease-in-out;
    li {
        transition: all 0.4s ease-in-out;
        opacity: ${props => (props.isNavOpen ? "1" : "0")};
        padding: 1rem;
        list-style: none;
        font-size: 1.25rem;
        font-weight: bold;
        text-decoration: none;
        &:hover {
            transform: scale(1.10);
            text-decoration: underline;
            text-underline-offset: 1rem;
            text-decoration-thickness: 2px;
        }
    }
`;

const NavMenu = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    @media screen and (max-width: 768px){
        display: none;
    }

    li {
        margin: 1rem;
        list-style: none;
        font-size: 1.25rem;
        font-weight: bold;
        text-decoration: none;
        &:hover {
            transform: scale(1.10);
            text-decoration: underline;
            text-underline-offset: 1rem;
            text-decoration-thickness: 2px;
        }
    }
`;

const NavLogo = styled.div`
    transition: all 0.5s ease-out;
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.25rem;
`;


const NavMenuItem = styled.li`
`;

const NavMenuLink = styled.a`
    text-decoration: none;
    &:active{
        color: var(--cherry-blossom-pink);
    }
    &:visited{
        color: black;
    }
    &:link{
        color: black;
    }
`;

const NavButton = styled.button<NavBarProps>` 
    position: absolute;
    top: 0.25rem;
    right: 0.5rem;
    display: none;
    margin: 1rem;
    cursor: pointer;
    color: black;
    outline: none;
    background: transparent;
    border: none;
    &:hover{
        color: black;
    }
    @media screen and (max-width: 768px){
        display: block;
    }
`;

const NavBar = () => {

    const [isNavOpen, setNavOpen] = useState(false);
    const handleNavClick = () => {
        setNavOpen(!isNavOpen);
    }

    return (
        <NavBarContainer>
            <NavLogo>anthony</NavLogo>
            <NavMenu>
                <NavMenuItem><NavMenuLink href="#about"> about </NavMenuLink></NavMenuItem>
                <NavMenuItem><NavMenuLink href="#experience"> experience </NavMenuLink></NavMenuItem>
                <NavMenuItem><NavMenuLink href="#projects"> projects </NavMenuLink></NavMenuItem>
                <NavMenuItem><NavMenuLink href="#contact"> contact </NavMenuLink></NavMenuItem>
            </NavMenu>
                <NavMobileMenu isNavOpen={isNavOpen}>
                    <NavMenuItem><NavMenuLink href="#about"> about </NavMenuLink></NavMenuItem>
                    <NavMenuItem><NavMenuLink href="#experience"> experience </NavMenuLink></NavMenuItem>
                    <NavMenuItem><NavMenuLink href="#projects"> projects </NavMenuLink></NavMenuItem>
                    <NavMenuItem><NavMenuLink href="#contact"> contact </NavMenuLink></NavMenuItem>
                </NavMobileMenu>
            <NavButton isNavOpen={isNavOpen} onClick={handleNavClick}>
                {isNavOpen? <FontAwesomeIcon icon={faX} size="2x" />
                    : <FontAwesomeIcon icon={faBars} size="2x" /> }
            </NavButton>
        </NavBarContainer>
    );
};

export default NavBar;
