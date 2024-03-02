import { Section } from '../styles/Section.styles';
import { ExpHeader,  DetailList, Detail, ExpDate, ExpLogo, TextContainer, LeadershipContainer, WhiteAppContainer } from '../styles/Experience.styles'
import CSA from '../assets/csalogo.png';
import CSC from  '../assets/csclogo.png';
import COK from '../assets/coklogo.png';


const Leadership= () => {
    const leadershipData = [
        {
            company: 'UW Computer Science Club',
            position: 'Lead Event Coordinator',
            date: 'Winter 2022 - Present',
            details: ['Leading a team of event coordinators to run fun and educational events for the CS comunity at Waterloo'],
            color: "--tea-green",
            logo: CSC
        },
        {
            company: 'UW Chinese Students Association',
            position: 'VP Internal',
            date: 'Summer 2022 - Present',
            details: ['Overseeing creating a dynamic and inclusive community for Chinese students at UW'],
            color: "--mint-cream",
            logo: CSA
        },
        {
            company: 'City of Kitchener',
            position: 'Swim Instructor & Lifeguard',
            date: '2016 - 2022',
            details: ['Instructing children and adults of all ages in swimming and water safety!'],
            color: "--sky-blue",
            logo: COK
        },
        // Add more work experience data as needed
    ];
    
    return (
        <WhiteAppContainer>
            <Section heading="LEADERSHIP">
                {leadershipData.map((experience) => (
                    <LeadershipContainer bgColor={experience.color}>
                        <ExpLogo src={experience.logo} alt="logo"></ExpLogo>
                        <TextContainer>
                            <ExpHeader>{experience.company}, {experience.position} </ExpHeader>
                            <ExpDate> {experience.date}</ExpDate>
                            <DetailList>{experience.details.map((detail) => (
                                <Detail>{detail}</Detail> 
                            ))}</DetailList>
                        </TextContainer>
                    </LeadershipContainer>
                ))}
            </Section>
        </WhiteAppContainer>
    );
};

export default Leadership;