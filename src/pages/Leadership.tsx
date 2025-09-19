import { Section } from '../styles/Section.styles';
import { ExpHeader,  DetailList, Detail, ExpDate, ExpLogo, TextContainer, LeadershipContainer, BlueAppContainer } from '../styles/Experience.styles'
import CSA from '../assets/csalogo.png';
import CSC from  '../assets/csclogo.png';
import COK from '../assets/coklogo.png';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { scaleIn } from '../hooks/useScrollAnimation';


const Leadership= () => {
    const leadershipData = [
        {
            company: 'UW Computer Science Club',
            position: 'Lead Event Coordinator',
            date: 'Winter 2022 - Present',
            details: ['Leading a team of event coordinators to run fun and educational events for the CS comunity at Waterloo'],
            color: "--matcha-accent",
            logo: CSC
        },
        {
            company: 'UW Chinese Students Association',
            position: 'VP Internal',
            date: 'Summer 2022 - Present',
            details: ['Overseeing creating a dynamic and inclusive community for Chinese students at UW'],
            color: "--matcha-primary",
            logo: CSA
        },
        {
            company: 'City of Kitchener',
            position: 'Swim Instructor & Lifeguard',
            date: '2016 - 2022',
            details: ['Instructing children and adults of all ages in swimming and water safety!'],
            color: "--matcha-medium",
            logo: COK
        },
        // Add more work experience data as needed
    ];
    
    const containerRef = useRef(null);

    return (
        <BlueAppContainer ref={containerRef}>
            <Section heading="LEADERSHIP">
                <div>
                    {leadershipData.map((experience, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: false,
                                amount: 0.3,
                                margin: "0px 0px -100px 0px"
                            }}
                            variants={scaleIn}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                                ease: "easeOut"
                            }}
                        >
                            <LeadershipContainer bgColor={experience.color}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.15 + 0.1,
                                        ease: "easeOut"
                                    }}
                                >
                                    <ExpLogo src={experience.logo} alt="logo"></ExpLogo>
                                </motion.div>
                                <TextContainer>
                                    <ExpHeader>{experience.company}, {experience.position} </ExpHeader>
                                    <ExpDate> {experience.date}</ExpDate>
                                    <DetailList>{experience.details.map((detail, detailIndex) => (
                                        <Detail key={detailIndex}>{detail}</Detail>
                                    ))}</DetailList>
                                </TextContainer>
                            </LeadershipContainer>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </BlueAppContainer>
    );
};

export default Leadership;