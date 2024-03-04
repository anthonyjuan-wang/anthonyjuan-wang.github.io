import styled from "styled-components";
import { AppContainer } from "./Global.styles";

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
`;  

export const WhiteAppContainer = styled(AppContainer)`
    margin: 0 auto;
    background: var(--mint-cream);
`;
export const BlueAppContainer = styled(AppContainer)`
    margin: 0 auto;
    background: var(--sky-blue);
`;

export const ExpContainer = styled.div<{ bgColor: string}>`
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 2rem;
    background: var(--beige);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 1.5rem;
`;

export const LeadershipContainer = styled(ExpContainer)`
    padding: 0;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
`;

export const ExpLogo = styled.img`
    width: 20%;
    border-radius: 3rem;
`;

export const ExpDate = styled.h3`
    margin: 0;
    font-weight: 500;
    font-size: 1.5rem;
`;  

export const ExpHeader = styled.h1`
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;
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
        color: black;
    }
    &:link{
        color: black;
    }
    &:hover{
        background-color: var(--beige);
        text-decoration-thickness: 0rem;
    }
`
