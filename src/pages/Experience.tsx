import { Section } from '../styles/Section.styles';
import { BlueAppContainer, ExpContainer, ExpHeader, Link, ExpDate, DetailList, Detail } from '../styles/Experience.styles';

const Experience = () => {
    const experienceData = [
        {
            company: 'Standard BioTools',
            position: 'Software Developer',
            date: 'Winter 2024',
            tech: 'C#, .NET, Python',
            details: ['Automated manual data extraction process from MCD files, decreasing average processing time by 300% with Python', 
                "Developed program simulating Suspension and Imaging mode on StandardBioTools medical instruments, using Signal Generators, .NET & C#, enhancing software testing workflow & productivity by over 200%"],
            link: 'https://www.standardbio.com/',
            color: '--tea-green',
        },
        {
            company: 'blueRover',
            position: 'Software Developer',
            date: 'Winter 2023',
            tech: 'React, JavaScript, HTML, CSS',
            details: [
                        "Upgraded front-end of website from Node 7 to Node 16" + 
                        "updating over 10+ pages and 50+ React and MaterialUI" + 
                        "components, improving user accessibility to critical temperature data",
                        "Developed 5+ user customization customization features using React.js & MaterialUI, " + 
                        "improving user satisfaction by over 10% according to consumer survey",
                        "Optimized data pipeline to the server by minimizing latency for expedited data transmission," +
                        "allowing for more efficientdata parsing & contributing to a 13% overall improvement in system responsiveness"
                    ],
            link:  'https://www.bluerover.ai/',
            color: '--mint-cream',
        },
        {
            company: 'FirstHX',
            position: 'Software Developer',         
            date: 'Summer 2022',
            tech: 'React, JavaScript, HTML, CSS',
            details: [
                        "Refactored the existing UI to UI 2.0 by recreating over" + 
                        "12+ PHP components in React, modernizing the outdated user interface",
                        "Ensured production stability by writing 20+ unit tests for 10+ components" +
                        "with Jest & React Testing Library, enabling the safe production launch of UI 2.0",
                        "Enhanced system performance by optimizing the transmission efficiency of user data" + 
                        "to the server, resulting in accelerated data processing and improved overall application responsivenes"
                     ],
            link:  'https://firsthx.com/',
            color: '--sky-blue',
        },
        // Add more work experience data as needed
    ];
    
    return (
        <BlueAppContainer id="experience">
            <Section heading="EXPERIENCE">
                {experienceData.map((experience) => (
                    <ExpContainer bgColor={experience.color}>
                        <ExpHeader>
                            {experience.position} @ <Link href = {experience.link} target="_blank" rel="noopener noreferrer" > {experience.company} </Link>
                        </ExpHeader>
                        <ExpDate> {experience.date} - {experience.tech}</ExpDate>
                        <DetailList>{experience.details.map((detail) => (
                            <Detail>{detail}</Detail> 
                        ))}</DetailList>
                    </ExpContainer>
                ))}
            </Section>
        </BlueAppContainer>
    );
};

export default Experience;