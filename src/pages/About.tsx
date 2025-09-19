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

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px var(--shadow-medium);
  }
`;

const AboutContainer = styled(AppContainer)`
    align-items: center;
    background: linear-gradient(135deg, var(--matcha-light) 0%, var(--matcha-primary) 100%);
    padding: 80px 20px;
`;

const AboutSection = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media screen and ${device.mobileM} {
        flex-direction: column;
    }
`;

const AboutImage = styled(motion.img)`
    display: flex;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    border-radius: 30px;
    box-shadow: 0 20px 40px var(--shadow-medium);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 25px 50px var(--shadow-medium);
    }
`;

const AboutText = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 100%;
    @media  screen and ${device.mobileM} {
        width: 90%;
    }
`;

const ImgWrapper = styled(motion.div)`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35rem;
`;

const AnimatedHeader = styled(motion(Header))`
    color: var(--matcha-dark);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 50px;
`;

const About = () => {
    const aboutContent = [
        "I'm a Statistics major at the University of Waterloo, with a minor in Computer Science. Currently, I'm employed at Standard BioTools, where I'm working on automating data workflow processes and simulating manual testing methods.",
        "I'm passionate about using data to drive decision-making and solve complex problems.",
        "In my spare time I like to go the gym, watch anime, and cook (message me your best recipes)!",
        "Feel free to contact me at the links below. I'm always open to new opportunities and connections.",
    ];

    return (
        <AboutContainer id="about">
            <AnimatedHeader
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                    once: false,
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
                        once: false,
                        amount: 0.3
                    }}
                    variants={fadeInLeft}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: "easeOut"
                    }}
                >
                    <AboutImage
                        src={coverPhoto}
                        alt="Anthony Wang"
                    />
                </ImgWrapper>
                <AboutText
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: false,
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
                                once: false,
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

export default About;