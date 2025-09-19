import { Section } from '../styles/Section.styles';
import { WhiteAppContainer, ExpContainer, ExpHeader, Link, ExpDate, DetailList, Detail, TimelineWrapper, TimelineItem, TimelineLogo, RoleContainer, RoleHeader, RoleDate, CompanyHeader } from '../styles/Experience.styles';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp } from '../hooks/useScrollAnimation';
import ShopifyLogo from '../assets/shopify.png';
import StandardBioLogo from '../assets/standardbiotools.png';
import BlueRoverLogo from '../assets/bluerover.png';
import FirstHXLogo from '../assets/firsthx.png';

const Experience = () => {
    const experienceData = [
        {
            company: 'Shopify',
            logo: ShopifyLogo,
            link: 'https://www.shopify.com/',
            color: '--matcha-dark',
            roles: [
                {
                    position: 'Software Engineer Intern',
                    date: 'May 2025 - August 2025',
                    tech: 'TypeScript, Python, Vowpal Wabbit, Ruby, Rails, BigQuery',
                    details: [
                        "Accelerated feature flag adoption for 10+ teams by architecting on-call support workflows and debugging complex configuration issues, and achieving 99.5% uptime using TypeScript, Ruby, Redis, and GraphQL APIs",
                        "Championed automation of contextual bandit parameter tuning, cutting manual analysis hours by 70–90% and reducing time-to-decision from 3 days to same day, by building an end-to-end Vertex AI pipeline with Docker, Sidekiq, and Ruby",
                        "Integrated Off Policy Evaluation to find the best parameters for a pricing page multi-armed bandit using Python and Vowpal Wabbit, increasing user reward score by 15% compared to uniformly random"
                    ],
                },  
            ]
        },
        {
            company: 'Standard BioTools',
            logo: StandardBioLogo,
            link: 'https://www.standardbio.com/',
            color: '--matcha-accent',
            roles: [
                {
                    position: 'Software Developer',
                    date: 'Winter 2024',
                    tech: 'C#, .NET, Python',
                    details: [
                        "Automated manual data extraction process from MCD files, decreasing average processing time by 300% with Python",
                        "Developed program simulating Suspension and Imaging mode on StandardBioTools medical instruments, using Signal Generators, .NET & C#, enhancing software testing workflow & productivity by over 200%"
                    ],
                }
            ]
        },
        {
            company: 'blueRover',
            logo: BlueRoverLogo,
            link: 'https://www.bluerover.ai/',
            color: '--matcha-primary',
            roles: [
                {
                    position: 'Software Developer',
                    date: 'Winter 2023',
                    tech: 'React, JavaScript, HTML, CSS',
                    details: [
                        "Upgraded front-end of website from Node 7 to Node 16 " +
                        "updating over 10+ pages and 50+ React and MaterialUI " +
                        "components, improving user accessibility to critical temperature data ",
                        "Developed 5+ user customization customization features using React.js & MaterialUI, " +
                        "improving user satisfaction by over 10% according to consumer survey",
                        "Optimized data pipeline to the server by minimizing latency for expedited data transmission, " +
                        "allowing for more efficient data parsing & contributing to a 13% overall improvement in system responsiveness"
                    ],
                }
            ]
        },
        {
            company: 'FirstHX',
            logo: FirstHXLogo,
            link: 'https://firsthx.com/',
            color: '--matcha-medium',
            roles: [
                {
                    position: 'Software Developer',
                    date: 'Summer 2022',
                    tech: 'React, JavaScript, HTML, CSS',
                    details: [
                        "Refactored the existing UI to UI 2.0 by recreating over " +
                        "12+ PHP components in React, modernizing the outdated user interface",
                        "Ensured production stability by writing 20+ unit tests for 10+ components " +
                        "with Jest & React Testing Library, enabling the safe production launch of UI 2.0",
                        "Enhanced system performance by optimizing the transmission efficiency of user data " +
                        "to the server, resulting in accelerated data processing and improved overall application responsivenes"
                    ],
                }
            ]
        },
        // Add more work experience data as needed
    ];
    
    const containerRef = useRef(null);

    return (
        <WhiteAppContainer id="experience" ref={containerRef}>
            <Section heading="experience">
                <TimelineWrapper>
                    {experienceData.map((experience, index) => (
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
                                <img
                                    src={experience.logo}
                                    alt={`${experience.company} logo`}
                                    style={{
                                        width: experience.company === 'FirstHX' ? '85%' : '70%',
                                        height: experience.company === 'FirstHX' ? '85%' : '70%',
                                    }}
                                />
                            </TimelineLogo>

                            <motion.div
                                style={{ width: '100%' }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: false,
                                    amount: 0.3
                                }}
                                variants={fadeInUp}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: "easeOut"
                                }}
                            >
                                <ExpContainer bgColor={experience.color}>
                                    <CompanyHeader>
                                        <Link href={experience.link} target="_blank" rel="noopener noreferrer">{experience.company}</Link>
                                    </CompanyHeader>
                                    {experience.roles.map((role, roleIndex) => (
                                        <RoleContainer key={roleIndex}>
                                            <RoleHeader>{role.position}</RoleHeader>
                                            <RoleDate>{role.date} • {role.tech}</RoleDate>
                                            <DetailList>
                                                {role.details.map((detail: string, detailIndex: number) => (
                                                    <Detail key={detailIndex}>{detail}</Detail>
                                                ))}
                                            </DetailList>
                                        </RoleContainer>
                                    ))}
                                </ExpContainer>
                            </motion.div>
                        </TimelineItem>
                    ))}
                </TimelineWrapper>
            </Section>
        </WhiteAppContainer>
    );
};

export default Experience;