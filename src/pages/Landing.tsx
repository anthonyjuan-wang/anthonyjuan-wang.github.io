import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
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
    font-size: 72px;
    font-weight: 900;
    text-align: center;
    max-width: 960px;
    padding: 0 20px;
    background: linear-gradient(135deg, var(--matcha-dark) 0%, var(--matcha-accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    z-index: 10;

    @media (max-width: 800px) {
        font-size: 36px;
    }
`;

const Landing: React.FC = () => {
    const [showText, setShowText] = useState(true);
    const [showGraph, setShowGraph] = useState(false);

    useEffect(() => {
        // Show text for 3 seconds, then fade out and show graph
        const textTimer = setTimeout(() => {
            setShowText(false);
        }, 3000);

        const graphTimer = setTimeout(() => {
            setShowGraph(true);
        }, 3500);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(graphTimer);
        };
    }, []);

    return (
        <LandingContainer id="landing">
            <AnimatePresence>
                {showText && (
                    <LandingHeader
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >
                        Hey there, I'm Anthony. Nice to meet you!
                    </LandingHeader>
                )}
            </AnimatePresence>

            <NetworkGraph isVisible={showGraph} />
        </LandingContainer>
    );
};

export default Landing;