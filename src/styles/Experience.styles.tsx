import styled from "styled-components";
import { AppContainer } from "./Global.styles";

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
`;  

export const WhiteAppContainer = styled(AppContainer)`
    margin: 0 auto;
    background: linear-gradient(135deg, var(--matcha-primary) 0%, var(--matcha-light) 100%);
    padding: 80px 20px;
`;
export const BlueAppContainer = styled(AppContainer)`
    margin: 0 auto;
    background: linear-gradient(135deg, var(--matcha-light) 0%, var(--matcha-primary) 100%);
    padding: 80px 20px;
`;

export const ExpContainer = styled.div<{ bgColor: string}>`
    padding: 2rem;
    margin-bottom: 2rem;
    background: var(${props => props.bgColor});
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 2rem;
    box-shadow: 0 10px 30px var(--shadow-soft);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    backdrop-filter: blur(10px);
    background-blend-mode: soft-light;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px var(--shadow-medium);
    }
`;

export const LeadershipContainer = styled(ExpContainer)`
    padding: 2rem;
    display:flex;
    flex-direction: row;
    background: var(${props => props.bgColor});
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
`;

export const ExpLogo = styled.img`
    width: 20%;
    border-radius: 2rem;
    box-shadow: 0 5px 15px var(--shadow-soft);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const ExpDate = styled.h3`
    margin: 0.5rem 0;
    font-weight: 500;
    font-size: 1.4rem;
    color: var(--matcha-accent);
    opacity: 0.9;
`;  

export const ExpHeader = styled.h1`
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;
    color: var(--matcha-dark);
`;

export const DetailList = styled.ul`
    margin-bottom: 2rem;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 1.5;
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
