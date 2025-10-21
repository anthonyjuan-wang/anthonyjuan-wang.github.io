import React, { memo, useRef } from 'react';
import { Section } from '../styles/Section.styles';
import { WhiteAppContainer, ExpContainer, Link, DetailList, Detail, TimelineWrapper, TimelineItem, TimelineLogo, RoleContainer, RoleHeader, RoleDate, CompanyHeader } from '../styles/Experience.styles';
import { motion } from 'framer-motion';
import { scaleIn } from '../hooks/useScrollAnimation';
import ShopifyLogo from '../assets/shopify.png';
import StandardBioLogo from '../assets/standardbiotools.png';
import BlueRoverLogo from '../assets/bluerover.png';
import FirstHXLogo from '../assets/firsthx.png';

const experienceData = [
    {
        company: 'Shopify',
        logo: ShopifyLogo,
        link: 'https://www.shopify.com/',
        color: '--matcha-dark',
        roles: [
            {
                position: 'Software Engineer Intern',
                date: 'Summer 2025',
                tech: 'TypeScript, Python, Vowpal Wabbit, Ruby, Rails, BigQuery',
                details: [
                    "Accelerated feature flag adoption for 10+ teams by architecting on-call support workflows and debugging complex configuration issues, and achieving 99.5% uptime using TypeScript, Ruby, Redis, and GraphQL APIs",
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
                    "Upgraded front-end of website from Node 7 to Node 16 "
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
                ],
            }
        ]
    },
];

const ExperienceItem = memo(({ experience, index }: { experience: typeof experienceData[0], index: number }) => (
    <TimelineItem>
        <TimelineLogo
            bgColor={experience.color}
            as={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
                damping: 20
            }}
        >
            <img src={experience.logo} alt={`${experience.company} logo`} loading="lazy" />
        </TimelineLogo>
        <ExpContainer bgColor={experience.color}>
            <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut"
                }}
                style={{ width: '100%' }}
            >
                {experience.roles.map((role, roleIndex) => (
                    <RoleContainer key={roleIndex}>
                        <RoleHeader>{role.position}</RoleHeader>
                        <CompanyHeader>
                            <Link
                                href={experience.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {experience.company}
                            </Link>
                        </CompanyHeader>
                        <RoleDate>{role.date}</RoleDate>
                        <DetailList>
                            {role.details.map((detail, detailIndex) => (
                                <Detail key={detailIndex}>{detail}</Detail>
                            ))}
                        </DetailList>
                    </RoleContainer>
                ))}
            </motion.div>
        </ExpContainer>
    </TimelineItem>
));

ExperienceItem.displayName = 'ExperienceItem';

const ExperienceOptimized = () => {
    const containerRef = useRef(null);

    return (
        <WhiteAppContainer id="experience" ref={containerRef}>
            <Section heading="experience">
                <TimelineWrapper>
                    {experienceData.map((experience, index) => (
                        <ExperienceItem
                            key={experience.company}
                            experience={experience}
                            index={index}
                        />
                    ))}
                </TimelineWrapper>
            </Section>
        </WhiteAppContainer>
    );
};

export default memo(ExperienceOptimized);