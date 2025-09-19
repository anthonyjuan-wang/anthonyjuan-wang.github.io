import styled from 'styled-components';


export const AppContainer = styled.div`
    width: 100%;
    min-height: auto;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    box-sizing: border-box;
`;

export const Header = styled.h1`
    font-size: 60px;
    font-weight: bold;
    line-height: 1.5;
    word-wrap: break-word;
    overflow-wrap: break-word;

    @media (max-width: 768px) {
        font-size: 45px;
    }

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubHeader = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;
`;


