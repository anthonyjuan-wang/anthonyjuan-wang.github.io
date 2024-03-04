import styled from "styled-components";
import "../index.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
interface NavBarProps {
    isNavOpen: Boolean;
}

export const NavBarContainer = styled.div`
    position: sticky;
    display: flex;
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

export const NavMenu = styled.ul<NavBarProps>`
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    @media screen and (max-width: 768px){
        width: 100%; 
        text-align: center;
        flex-direction: column;
        display: ${props => (props.isNavOpen ? "flex" : "none")};
    }
`;

const NavLogo = styled.div<NavBarProps>`
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.25rem;
`;


export const NavMenuItem = styled.li`
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
    @media screen and (max-width: 768px){
        text-align: center;
    }
`;

export const NavMenuLink = styled.a`
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

export const NavOpenButton = styled.button<NavBarProps>` 
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
            <NavLogo isNavOpen={isNavOpen}>anthony</NavLogo>
            <NavMenu isNavOpen={isNavOpen}>
                <NavMenuItem><NavMenuLink href="#about"> about </NavMenuLink></NavMenuItem>
                <NavMenuItem><NavMenuLink href="#experience"> experience </NavMenuLink></NavMenuItem>
                <NavMenuItem><NavMenuLink href="#projects"> projects </NavMenuLink></NavMenuItem>
                <NavMenuItem><NavMenuLink href="#contact"> contact </NavMenuLink></NavMenuItem>
            </NavMenu>
            <NavOpenButton isNavOpen={isNavOpen} onClick={handleNavClick}>
                <FontAwesomeIcon icon={faBars} size="2x" />
            </NavOpenButton>
        </NavBarContainer>
    );
};

export default NavBar;
