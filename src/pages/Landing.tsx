import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import NetworkGraph from '../components/NetworkGraph';

const LandingContainer = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    overflow: hidden;
`;

const LandingHeader = styled(motion.h1)`
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    font-size: 56px;
    font-weight: 900;
    text-align: center;
    width: 100%;
    padding: 0 20px;
    background: linear-gradient(135deg, var(--matcha-dark) 0%, var(--matcha-accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    z-index: 10;
    pointer-events: none;
    box-sizing: border-box;
    word-wrap: break-word;
    overflow-wrap: break-word;

    @media (max-width: 800px) {
        font-size: 36px;
        top: 50px;
    }

    @media (max-width: 600px) {
        font-size: 28px;
        top: 40px;
        padding: 0 15px;
    }
`;

const SubHeader = styled(motion.div)`
    position: absolute;
    top: 180px;
    left: 0;
    right: 0;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    width: 100%;
    padding: 0 20px;
    z-index: 10;
    pointer-events: none;
    box-sizing: border-box;
    color: var(--matcha-medium);
    word-wrap: break-word;
    overflow-wrap: break-word;

    span {
        color: var(--matcha-dark);
    }

    @media (max-width: 800px) {
        font-size: 24px;
        top: 140px;
    }

    @media (max-width: 600px) {
        font-size: 18px;
        top: 110px;
        padding: 0 15px;
    }
`;

const Landing: React.FC = () => {
    const [showGraph, setShowGraph] = useState(false);
    const [showTyping, setShowTyping] = useState(false);

    useEffect(() => {
        // Show typing animation after a short delay
        const typingTimer = setTimeout(() => {
            setShowTyping(true);
        }, 800);

        // Show graph after 1.5 seconds
        const graphTimer = setTimeout(() => {
            setShowGraph(true);
        }, 1500);

        return () => {
            clearTimeout(typingTimer);
            clearTimeout(graphTimer);
        };
    }, []);

    return (
        <LandingContainer id="landing">
            <LandingHeader
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut"
                }}
            >
                Hey there, I'm Anthony.
            </LandingHeader>

            {showTyping && (
                <SubHeader
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                >
                    I'm{' '}
                    <TypeAnimation
                        sequence={[
                            'a software developer',
                            2000,
                            'a student (still)',
                            2000,
                            'feeling sleepy...',
                            2000,
                            'a problem solver',
                            2000,
                            'trying to beat the unemployment allegations',
                            2000,
                        ]}
                        wrapper="span"
                        speed={40}
                        repeat={Infinity}
                        cursor={true}
                        style={{
                            display: 'inline-block',
                            color: 'var(--matcha-accent)'
                        }}
                    />
                </SubHeader>
            )}

            <NetworkGraph isVisible={showGraph} />
        </LandingContainer>
    );
};

export default Landing;