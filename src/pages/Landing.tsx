import styled, { keyframes } from 'styled-components';
import yinyang from '../assets/halfcircle.svg';

const LandingContainer = styled.div`
    display: flex;
    height: 100dvh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const spinAnimation = keyframes`
    0% { 
        transform: rotate(360deg);
    }
    100% { 
        transform: rotate(0deg); 
    }  
`;

const Spin = styled.div`
    animation: ${spinAnimation} 2s linear 0s infinite reverse;
    animation-play-state: paused;
    &:hover {
        animation-play-state: running;
    }
`;

const CenterLogo = styled.img`
    position: relative;
    width: 300px;
    height: 300px;
    animation: ${spinAnimation} 4s linear 0s infinite normal;
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const LandingHeader = styled.h1`   
    animation: ${fadeIn} 5s;
    font-size: 80px;
    font-weight: 1000;
    text-align: center;
    margin: 40px 0;
    line-height: 1.5;
    max-width: 960px;
    @media (max-width: 800px) {
        font-size: 40px;
        margin: 40px 0;
    }
`;
const Landing = () => {   
    return (
        <LandingContainer>
            <LandingHeader>Hey there, I'm Anthony. Nice to meet you!</LandingHeader>
            <Spin> 
                <CenterLogo src = {yinyang} alt=""/>
            </Spin>
        </LandingContainer>
    )
};

export default Landing;