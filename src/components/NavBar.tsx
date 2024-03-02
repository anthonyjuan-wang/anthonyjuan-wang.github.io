import styled from "styled-components";
import "../index.css";
import { FaBars }  from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";
interface NavMenuProps {
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

export const NavMenu = styled.ul<NavMenuProps>`
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    @media screen and (max-width: 768px){
        display: ${props => (props.isNavOpen ? "none" : "flex")};
        width: 100%; 
        flex-direction: column;
        transition: all 0.5s ease-in-out;
    }
`;

const NavLogo = styled.div`
    padding: 0;
    margin-left: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.25rem;
`;


export const NavMenuItem = styled.li`
    padding: 0;
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
    padding: 1rem;
    display: block;
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

export const NavButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    margin: 0 1rem;
    cursor: pointer;
    color: black;
    border: black 2px solid;
    outline: none;
    &:hover{
        color: black;
    }
    @media screen and (max-width: 768px){
        display: flex;
    }
`;

export const FaClass = styled(FaBars)`
    color: black;
    &:visited{
        color: black;
    }
    &:hover{  
        color: black;
    }
    &:active {
        color: black;
    }
    &:link {
        color: black;
    }
`;

const NavBar = () => {

    const [isNavOpen, setNavOpen] = useState(true);
    const handleNavClick = () => { 
        setNavOpen(!isNavOpen);
    }

    return (
        <NavBarContainer>
            <NavLogo>anthony</NavLogo>
            <NavButton onClick={handleNavClick}> 
                <FaClass />
            </NavButton >
                <NavMenu isNavOpen = {isNavOpen}>
                    <NavMenuItem><NavMenuLink href = "#about"> about </NavMenuLink></NavMenuItem>
                    <NavMenuItem><NavMenuLink href = "#experience"> experience </NavMenuLink></NavMenuItem>
                    <NavMenuItem><NavMenuLink href = "#projects"> projects </NavMenuLink></NavMenuItem>
                    <NavMenuItem><NavMenuLink href = "#contact"> contact </NavMenuLink></NavMenuItem>
                </NavMenu>

        </NavBarContainer>
    );
};

export default NavBar;
