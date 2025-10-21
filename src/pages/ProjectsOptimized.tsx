import React, { memo, useRef } from 'react';
import { AppContainer } from '../styles/Global.styles';
import { Section } from '../styles/Section.styles';
import { motion } from 'framer-motion';
import { scaleIn } from '../hooks/useScrollAnimation';
import styled from 'styled-components';
import {
    ProjectGrid,
    ProjectCard,
    ProjectContent,
    ProjectImage,
    ProjectTitle,
    ProjectDescription,
    TechStack,
    TechBadge,
    ProjectLinks,
    ProjectLink
} from '../styles/Projects.styles';

const ProjectsContainer = styled(AppContainer)`
    margin: -2px auto 0 auto;
    background: linear-gradient(180deg,
        rgba(184, 216, 184, 0.3) 0%,
        rgba(184, 216, 184, 0.4) 100%);
    backdrop-filter: blur(5px);
    padding: 80px 20px;
    min-height: 400px;
    position: relative;
    will-change: transform;
`;

interface Project {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    image?: string;
    featured?: boolean;
}

const projectsData: Project[] = [
    {
        title: "Personal Portfolio",
        description: "Modern, responsive portfolio website showcasing my projects and experience. Built with React, TypeScript, and styled-components, featuring smooth animations and a personal design aesthetic.",
        tech: ["React", "TypeScript", "styled-components", "Framer Motion", "GitHub Pages"],
        github: "https://github.com/anthonyjuan-wang/anthonyjuan-wang.github.io",
        demo: "https://anthonyjwang.me",
        featured: true
    },
];

const ProjectItem = memo(({ project, index, isOnlyProject }: {
    project: Project;
    index: number;
    isOnlyProject: boolean;
}) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
        transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: "easeOut"
        }}
        style={{ height: '100%' }}
    >
        <ProjectCard featured={project.featured} isOnlyProject={isOnlyProject}>
            {project.image ? (
                <ProjectImage>
                    <img src={project.image} alt={project.title} loading="lazy" />
                </ProjectImage>
            ) : (
                <ProjectImage />
            )}
            <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                    {project.tech.map((tech, techIndex) => (
                        <TechBadge key={techIndex}>{tech}</TechBadge>
                    ))}
                </TechStack>
                <ProjectLinks>
                    {project.github && (
                        <ProjectLink
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github"
                        >
                            <span>GitHub</span>
                        </ProjectLink>
                    )}
                    {project.demo && (
                        <ProjectLink
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="demo"
                        >
                            <span>Live Demo</span>
                        </ProjectLink>
                    )}
                </ProjectLinks>
            </ProjectContent>
        </ProjectCard>
    </motion.div>
));

ProjectItem.displayName = 'ProjectItem';

const ProjectsOptimized = () => {
    const sectionRef = useRef(null);
    const isOnlyProject = projectsData.length === 1;

    return (
        <ProjectsContainer id="projects" ref={sectionRef}>
            <Section heading='projects'>
                <ProjectGrid>
                    {projectsData.map((project, index) => (
                        <ProjectItem
                            key={project.title}
                            project={project}
                            index={index}
                            isOnlyProject={isOnlyProject}
                        />
                    ))}
                </ProjectGrid>
            </Section>
        </ProjectsContainer>
    );
};

export default memo(ProjectsOptimized);