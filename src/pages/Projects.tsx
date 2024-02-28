import styled from 'styled-components';
import { AppContainer } from '../styles/Global.styles';
import { Section } from '../styles/Section.styles';

const AboutItem = styled.p`
  line-height: 1.75;
  margin: 0 0 24px;
`;

const About = () => {
    const AboutContent = [
        "I'm a Statistics major at the University of Waterloo, with a minor in Computer Science.",
        "I'm passionate about using data to drive decision-making and solve complex problems.", 
        "I'm also interested in software development and data engineering.",
    ];
    return (
        <AppContainer id ="projects">
            <Section heading='PROJECTS: Coming soon!'>
            </Section>
        </AppContainer>
    );
};

export default About;