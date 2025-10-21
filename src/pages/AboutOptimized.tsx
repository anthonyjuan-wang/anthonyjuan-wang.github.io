import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { AppContainer, Header } from '../styles/Global.styles';
import coverPhoto from '../assets/aboutimage.jpeg';
import { device } from "../styles/breakpoints";
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '../hooks/useScrollAnimation';

const AboutItem = styled(motion.p)`
  line-height: 1.6;
  font-size: 24px;
  margin: 0 0 15px;
  color: #333;
  background: var(--white-soft);
  padding: 20px 25px;
  border-radius: 20px;
  box-shadow: 0 5px 15px var(--shadow-soft);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;
  will-change: transform;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px var(--shadow-medium);
  }

  @media ${device.tablet} {
    font-size: 20px;
    padding: 15px 20px;
  }

  @media ${device.mobileM} {
    font-size: 18px;
    padding: 12px 15px;
  }
`;

const AboutContainer = styled(AppContainer)`
    align-items: center;
    background: linear-gradient(180deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(250, 255, 254, 0.7) 15%,
        rgba(212, 232, 212, 0.5) 50%,
        rgba(184, 216, 184, 0.5) 100%);
    backdrop-filter: blur(5px);
    padding: 80px 20px;
    padding-top: 120px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 150px;
        background: linear-gradient(180deg,
            rgba(255, 255, 255, 0.95) 0%,
            transparent 100%);
        pointer-events: none;
    }
`;

const AboutSection = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;

    @media ${device.tablet} {
        flex-direction: column;
        gap: 30px;
    }
`;

const AboutImage = styled(motion.img)<{ loaded: boolean }>`
    display: ${props => props.loaded ? 'flex' : 'none'};
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    border-radius: 30px;
    box-shadow: 0 20px 40px var(--shadow-medium);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    will-change: transform;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 25px 50px var(--shadow-medium);
    }
`;

const ImagePlaceholder = styled.div<{ show: boolean }>`
    display: ${props => props.show ? 'block' : 'none'};
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
    border-radius: 30px;
    animation: shimmer 1.5s ease-in-out infinite;

    @keyframes shimmer {
        0% { opacity: 0.7; }
        50% { opacity: 1; }
        100% { opacity: 0.7; }
    }
`;

const AboutText = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 600px;

    @media ${device.tablet} {
        width: 100%;
        max-width: 500px;
    }
`;

const ImgWrapper = styled(motion.div)`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35rem;
    max-width: 100%;
    position: relative;

    @media ${device.tablet} {
        height: 25rem;
    }

    @media ${device.mobileM} {
        height: 20rem;
    }
`;

const AnimatedHeader = styled(motion(Header))`
    color: var(--matcha-dark);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 50px;
`;

const aboutContent = [
    "Hi! I'm Anthony, a student in my final year at the University of Waterloo, majoring in Stat with a minor in CS.",
    "I'm currently completing my final internship at Shopify, working on improving A-B testing methods and platforms.",
    "In my life outside code, I love to EAT, play video games, watch anime, and am currently (learning) to cook!"
];

const AboutOptimized = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <AboutContainer id="about">
            <AnimatedHeader
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                    once: true,
                    amount: 0.5
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }}
            >
                about me
            </AnimatedHeader>
            <AboutSection>
                <ImgWrapper
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3
                    }}
                    variants={fadeInLeft}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: "easeOut"
                    }}
                >
                    <ImagePlaceholder show={!imageLoaded} />
                    <AboutImage
                        src={coverPhoto}
                        alt="Anthony Wang"
                        loaded={imageLoaded}
                        loading="lazy"
                        onLoad={() => setImageLoaded(true)}
                    />
                </ImgWrapper>
                <AboutText
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2
                    }}
                    variants={fadeInRight}
                    transition={{
                        duration: 0.6,
                        delay: 0.3,
                        ease: "easeOut"
                    }}
                >
                    {aboutContent.map((content, index) =>
                        <AboutItem
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                amount: 0.5
                            }}
                            transition={{
                                duration: 0.4,
                                delay: 0.4 + index * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            {content}
                        </AboutItem>
                    )}
                </AboutText>
            </AboutSection>
        </AboutContainer>
    );
};

export default memo(AboutOptimized);