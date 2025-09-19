import { Section } from '../styles/Section.styles';
import { DetailList, Detail, LeadershipContainer, BlueAppContainer, TimelineWrapper, TimelineItem, TimelineLogo, RoleContainer, RoleHeader, RoleDate, CompanyHeader, Link } from '../styles/Experience.styles'
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
            logo: CSC,
            link: 'https://csclub.uwaterloo.ca/',
            color: "--matcha-accent",
            roles: [
                {
                    position: 'Lead Event Coordinator',
                    date: 'Winter 2022 - Summer 2024',
                    tech: '',
                    details: ['Lead team of 15 + event coordinators to run fun and educational events for the CS community at Waterloo!']
                }
            ]
        },
        {
            company: 'UW Chinese Students Association',
            logo: CSA,
            link: 'https://www.instagram.com/uwcsa/',
            color: "--matcha-primary",
            roles: [
                {
                    position: 'Co-President',
                    date: 'Winter 2024',
                    tech: '',
                    details: [
                        'Managed a group of 60+ executives to run the largest social events at the University of Waterloo',
                        'Reached over 5000+ followers on our Instagram pages'
                    ]
                },
                {
                    position: 'VP Internal',
                    date: 'Summer 2022 - Summer 2024',
                    tech: '',
                    details: ['Overseeing creating a dynamic and inclusive community for Chinese students at UW']
                },
            ]
        },
        {
            company: 'City of Kitchener',
            logo: COK,
            link: 'https://www.kitchener.ca/',
            color: "--matcha-medium",
            roles: [
                {
                    position: 'Swim Instructor & Lifeguard',
                    date: '2016 - 2022',
                    tech: '',
                    details: ['Instructing children and adults of all ages in swimming and water safety!']
                }
            ]
        },
        // Add more work experience data as needed
    ];
    
    const containerRef = useRef(null);

    return (
        <BlueAppContainer ref={containerRef} id="leadership">
            <Section heading="leadership">
                <TimelineWrapper>
                    {leadershipData.map((experience, index) => (
                        <TimelineItem key={index}>
                            <TimelineLogo
                                bgColor={experience.color}
                                as={motion.div}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                            >
                                <img src={experience.logo} alt="logo" />
                            </TimelineLogo>

                            <motion.div
                                style={{ width: '100%' }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: false,
                                    amount: 0.3
                                }}
                                variants={scaleIn}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                    ease: "easeOut"
                                }}
                            >
                                <LeadershipContainer bgColor={experience.color}>
                                    <CompanyHeader>
                                        {experience.link !== '#' ? (
                                            <Link href={experience.link} target="_blank" rel="noopener noreferrer">{experience.company}</Link>
                                        ) : (
                                            experience.company
                                        )}
                                    </CompanyHeader>
                                    {experience.roles.map((role, roleIndex) => (
                                        <RoleContainer key={roleIndex}>
                                            <RoleHeader>{role.position}</RoleHeader>
                                            <RoleDate>{role.date}{role.tech && ` • ${role.tech}`}</RoleDate>
                                            <DetailList>
                                                {role.details.map((detail: string, detailIndex: number) => (
                                                    <Detail key={detailIndex}>{detail}</Detail>
                                                ))}
                                            </DetailList>
                                        </RoleContainer>
                                    ))}
                                </LeadershipContainer>
                            </motion.div>
                        </TimelineItem>
                    ))}
                </TimelineWrapper>
            </Section>
        </BlueAppContainer>
    );
};

export default Leadership;