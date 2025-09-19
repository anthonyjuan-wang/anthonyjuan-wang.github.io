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
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(122, 184, 122, 0.25);
        border-color: var(--matcha-accent);
    }
`;

export const LeadershipContainer = styled(ExpContainer)`
    padding: 2rem;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
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
