import styled from "styled-components";
import { AppContainer } from "./Global.styles";

// Base container with glassmorphism effect
const BaseGlassContainer = styled(AppContainer)`
    backdrop-filter: blur(5px);
    padding: 80px 20px;
    position: relative;
`;

export const WhiteAppContainer = styled(BaseGlassContainer)`
    margin: 0 auto;
    background: linear-gradient(180deg,
        rgba(184, 216, 184, 0.3) 0%,
        rgba(200, 224, 200, 0.25) 100%);
`;

export const BlueAppContainer = styled(BaseGlassContainer)`
    margin: -2px auto 0 auto;
    background: linear-gradient(180deg,
        rgba(200, 224, 200, 0.25) 0%,
        rgba(184, 216, 184, 0.3) 100%);
`;

// Timeline container wrapper
export const TimelineWrapper = styled.div`
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding-left: 60px;

    &:before {
        content: '';
        position: absolute;
        left: 39px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(180deg, var(--matcha-light) 0%, var(--matcha-accent) 50%, var(--matcha-light) 100%);
    }

    @media (max-width: 768px) {
        padding-left: 40px;

        &:before {
            left: 19px;
        }
    }
`;

export const TimelineItem = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 3rem;
    position: relative;
    width: 100%;
`;

export const TimelineLogo = styled.div<{ bgColor: string }>`
    position: absolute;
    left: -60px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--white-soft);
    border: 3px solid var(${props => props.bgColor});
    box-shadow: 0 5px 15px rgba(122, 184, 122, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    img {
        width: 70%;
        height: 70%;
        object-fit: contain;
        border-radius: 50%;
    }

    &:hover {
        transform: scale(1.15);
        box-shadow: 0 8px 20px rgba(122, 184, 122, 0.3);
    }

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        left: -40px;
    }
`;

export const ExpContainer = styled.div<{ bgColor: string}>`
    padding: 1.5rem;
    margin-left: 30px;
    background: var(--white-soft);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 2rem;
    border: 2px solid var(${props => props.bgColor});
    box-shadow: 0 10px 30px rgba(122, 184, 122, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    position: relative;
    overflow: hidden;
    flex: 1;
    max-width: 800px;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(${props => props.bgColor}) 0%, var(--matcha-accent) 100%);
    }

    &:hover {
        transform: translateX(5px);
        box-shadow: 0 15px 40px rgba(122, 184, 122, 0.25);
        border-color: var(--matcha-accent);
    }

    @media (max-width: 768px) {
        margin-left: 15px;
        padding: 1rem;
    }
`;

export const LeadershipContainer = styled(ExpContainer)`
    // Inherits all styles from ExpContainer
`;

export const ExpLogo = styled.img`
    width: 20%;
    border-radius: 2rem;
    box-shadow: 0 5px 15px rgba(122, 184, 122, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 2px solid var(--matcha-light);

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(122, 184, 122, 0.3);
    }
`;

export const ExpDate = styled.h3`
    margin: 0.5rem 0;
    font-weight: 500;
    font-size: 1.4rem;
    color: var(--matcha-medium);
    opacity: 1;
`;

export const RoleContainer = styled.div`
    margin-bottom: 1rem;

    &:not(:last-child) {
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--matcha-light);
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

export const RoleHeader = styled.h2`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--matcha-dark);
`;

export const RoleDate = styled.p`
    margin: 0.3rem 0 0.5rem 0;
    font-size: 1.2rem;
    color: var(--matcha-medium);
    font-weight: 500;
`;

export const CompanyHeader = styled.h1`
    margin-top: 0;
    margin-bottom: 0.2rem;
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--matcha-dark);
`;  

export const ExpHeader = styled.h1`
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;
    color: var(--matcha-dark);
`;

export const DetailList = styled.ul`
    margin-top: 0.25rem;
    margin-bottom: 0;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 1.5;
    color: #333333;
`; 

export const Detail = styled.li`
    margin-bottom: 0rem;
`;  

export const Link = styled.a`
    &:visited{
        color: var(--matcha-dark);
    }
    &:link{
        color: var(--matcha-dark);
    }
    &:hover{
        background: linear-gradient(135deg, var(--matcha-accent) 0%, var(--matcha-dark) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-decoration-thickness: 0rem;
    }
`
