import styled from 'styled-components';
import { AppContainer, Header } from '../styles/Global.styles';
import coverPhoto from '../assets/aboutimage.jpeg';


const AboutItem = styled.p`
  line-height: 1.5;
  font-size: 25px;
  margin: 0 0 10px;
`;

const AboutContainer = styled(AppContainer)`
    align-items: center;
    background: var(--tea-green);
`;

const AboutSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }   
`;

const AboutImage = styled.img`
    display: flex;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    border-radius: 20px;
`;

const AboutText = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 100%;
    @media  screen and (max-width: 600px) {
        width: 90%;
    }
`;

const ImgWrapper = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35rem;
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
            <Header> ABOUT ME </Header>
            <AboutSection>
                <ImgWrapper>  <AboutImage src = {coverPhoto} alt="Anthony Wang"/></ImgWrapper>
                <AboutText>
                    {aboutContent.map((content) => 
                    <AboutItem>{content}</AboutItem>
                    )}
                </AboutText>
            </AboutSection>
        </AboutContainer>
    );
};

export default About;