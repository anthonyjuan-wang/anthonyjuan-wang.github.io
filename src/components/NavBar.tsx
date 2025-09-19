import styled  from "styled-components";
import "../index.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { device, size } from "../styles/breakpoints";
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
interface NavBarProps {
    isNavOpen: boolean;
}

const NavBarContainer = styled(motion.div)`
    display: flex;
    position: sticky;
    z-index: 100;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(135deg, var(--white-soft) 0%, var(--matcha-light) 100%);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px var(--shadow-soft);

    @media screen and ${device.mobileM} {
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

    @media screen and (min-width: ${size.sm}){
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
    @media screen and ${device.mobileM}{
        display: none;
    }

    li {
        margin: 1rem;
        list-style: none;
        font-size: 1.25rem;
        font-weight: bold;
        text-decoration: none;
        transition: all 0.3s ease;
        &:hover {
            transform: scale(1.10) translateY(-2px);
            text-decoration: underline;
            text-underline-offset: 1rem;
            text-decoration-thickness: 2px;
            text-decoration-color: var(--matcha-accent);
        }
    }
`;

const NavLogo = styled(motion.a)`
    transition: all 0.5s ease-out;
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Georgia', 'Times New Roman', serif;
    letter-spacing: normal;
    background: linear-gradient(135deg, var(--matcha-dark) 0%, var(--matcha-accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;

    &:hover {
        transform: scale(1.05);
    }
`;


const NavMenuItem = styled.li`
`;

const NavMenuLink = styled(motion.a)<{ $isActive?: boolean }>`
    text-decoration: none;
    color: ${props => props.$isActive ? 'var(--matcha-accent)' : 'var(--matcha-dark)'};
    transition: all 0.3s ease;
    &:active{
        color: var(--matcha-accent);
    }
    &:visited{
        color: ${props => props.$isActive ? 'var(--matcha-accent)' : 'var(--matcha-dark)'};
    }
    &:link{
        color: ${props => props.$isActive ? 'var(--matcha-accent)' : 'var(--matcha-dark)'};
    }
    &:hover {
        color: var(--matcha-accent);
    }
`;

const NavRouterLink = styled(motion(Link))<{ $isActive?: boolean }>`
    text-decoration: none;
    color: ${props => props.$isActive ? 'var(--matcha-accent)' : 'var(--matcha-dark)'};
    transition: all 0.3s ease;
    &:hover {
        color: var(--matcha-accent);
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
    @media screen and ${device.mobileM}{
        display: block;
    }
`;

const NavBar = () => {

    const [isNavOpen, setNavOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isBlogPage = location.pathname.startsWith('/blog');

    const handleNavClick = () => {
        setNavOpen(!isNavOpen);
    }

    return (
        <NavBarContainer
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <NavLogo
                as={isHomePage ? motion.a : Link}
                href={isHomePage ? "#landing" : "/"}
                to={!isHomePage ? "/" : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                anthony wang
            </NavLogo>
            <NavMenu>
                <NavMenuItem>
                    <NavMenuLink
                        href={isHomePage ? "#landing" : "/#landing"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        home
                    </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavMenuLink
                        href={isHomePage ? "#about" : "/#about"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        about
                    </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavMenuLink
                        href={isHomePage ? "#experience" : "/#experience"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        experience
                    </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavMenuLink
                        href={isHomePage ? "#leadership" : "/#leadership"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        leadership
                    </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavMenuLink
                        href={isHomePage ? "#projects" : "/#projects"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        projects
                    </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavMenuLink
                        href={isHomePage ? "#contact" : "/#contact"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        contact
                    </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavRouterLink
                        to="/blog"
                        $isActive={isBlogPage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        blog
                    </NavRouterLink>
                </NavMenuItem>
            </NavMenu>
            <NavMobileMenu isNavOpen={isNavOpen}>
                <NavMenuItem>
                    <NavMenuLink href={isHomePage ? "#landing" : "/#landing"}> home </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavMenuLink href={isHomePage ? "#about" : "/#about"}> about </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavMenuLink href={isHomePage ? "#experience" : "/#experience"}> experience </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavMenuLink href={isHomePage ? "#leadership" : "/#leadership"}> leadership </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavMenuLink href={isHomePage ? "#projects" : "/#projects"}> projects </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavMenuLink href={isHomePage ? "#contact" : "/#contact"}> contact </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                    <NavRouterLink to="/blog" $isActive={isBlogPage}> blog </NavRouterLink>
                </NavMenuItem>
            </NavMobileMenu>
            <NavButton isNavOpen={isNavOpen} onClick={handleNavClick}>
                {isNavOpen? <FontAwesomeIcon icon={faX} size="2x" />
                    : <FontAwesomeIcon icon={faBars} size="2x" /> }
            </NavButton>
        </NavBarContainer>
    );
};

export default NavBar;
