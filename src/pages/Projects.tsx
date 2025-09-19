import { AppContainer } from '../styles/Global.styles';
import { Section } from '../styles/Section.styles';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';
import styled from 'styled-components';


const ProjectsContainer = styled(AppContainer)`
    margin: -2px auto 0 auto;
    background: linear-gradient(180deg,
        rgba(184, 216, 184, 0.3) 0%,
        rgba(184, 216, 184, 0.4) 100%);
    backdrop-filter: blur(5px);
    padding: 80px 20px;
    min-height: 400px;
    position: relative;
`;

const ComingSoonText = styled(motion.div)`
    font-size: 24px;
    color: var(--matcha-dark);
    text-align: center;
    padding: 40px;
    background: var(--white-soft);
    box-shadow: 0 10px 30px var(--shadow-soft);
    max-width: 600px;
    width: 90%;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 768px) {
        font-size: 20px;
        padding: 30px;
    }

    @media (max-width: 600px) {
        font-size: 18px;
        padding: 20px;
        width: 95%;
    }
`;

const Projects = () => {
    const sectionRef = useRef(null);
    const controls = useScrollAnimation(sectionRef, 0.3);

    return (
        <ProjectsContainer id="projects" ref={sectionRef}>
            <Section heading='projects'>
                <ComingSoonText
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                >
                    coming soon 🚀
                </ComingSoonText>
            </Section>
        </ProjectsContainer>
    );
};

export default Projects;