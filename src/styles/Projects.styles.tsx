import styled from "styled-components";

// Grid container for projects
export const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 0 20px;
    }

    @media (max-width: 600px) {
        padding: 0 15px;
        gap: 1.2rem;
    }
`;

// Individual project card
export const ProjectCard = styled.div<{ featured?: boolean; isOnlyProject?: boolean }>`
    background: var(--white-soft);
    border-radius: 1.5rem;
    border: 2px solid var(--matcha-accent);
    box-shadow: 0 10px 30px rgba(122, 184, 122, 0.15);
    overflow: hidden;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    min-height: 450px;

    ${props => props.featured && !props.isOnlyProject && `
        grid-column: 1 / -1;
    `}

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--matcha-primary) 0%, var(--matcha-accent) 100%);
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(122, 184, 122, 0.25);
        border-color: var(--matcha-dark);
    }
`;

// Project content container
export const ProjectContent = styled.div`
    padding: 2.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
        padding: 2rem;
    }

    @media (max-width: 600px) {
        padding: 1.5rem;
    }
`;

// Project image/screenshot
export const ProjectImage = styled.div`
    width: 100%;
    height: 220px;
    background: linear-gradient(135deg, var(--matcha-light) 0%, var(--matcha-accent) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: scale(1.05);
    }

    // Placeholder when no image
    &:empty:before {
        content: '🚀';
        font-size: 3rem;
        opacity: 0.5;
    }

    @media (max-width: 768px) {
        height: 200px;
    }

    @media (max-width: 600px) {
        height: 180px;
    }
`;

// Project title
export const ProjectTitle = styled.h3`
    margin: 0;
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--matcha-dark);
    line-height: 1.3;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 600px) {
        font-size: 1.35rem;
    }
`;

// Project description
export const ProjectDescription = styled.p`
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.8;
    color: #333333;
    flex-grow: 1;

    @media (max-width: 768px) {
        font-size: 1.15rem;
        line-height: 1.7;
    }

    @media (max-width: 600px) {
        font-size: 1.05rem;
        line-height: 1.6;
    }
`;

// Tech stack container
export const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.5rem 0;
`;

// Individual tech badge
export const TechBadge = styled.span`
    padding: 0.3rem 0.8rem;
    background: var(--matcha-light);
    color: var(--matcha-dark);
    border-radius: 1rem;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid var(--matcha-accent);
    transition: all 0.2s ease;

    &:hover {
        background: var(--matcha-accent);
        transform: translateY(-2px);
    }

    @media (max-width: 600px) {
        font-size: 0.85rem;
        padding: 0.25rem 0.6rem;
    }
`;

// Project links container
export const ProjectLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: auto;
`;

// Link button style
export const ProjectLink = styled.a`
    padding: 0.6rem 1.2rem;
    border-radius: 0.8rem;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    &.github {
        background: var(--white-soft);
        color: var(--matcha-dark);
        border: 2px solid var(--matcha-accent);

        &:hover {
            background: var(--matcha-light);
            transform: translateX(-3px);
        }
    }

    &.demo {
        background: linear-gradient(135deg, var(--matcha-primary) 0%, var(--matcha-accent) 100%);
        color: white;
        border: 2px solid transparent;

        &:hover {
            transform: translateX(3px);
            box-shadow: 0 5px 15px rgba(122, 184, 122, 0.3);
        }
    }

    @media (max-width: 600px) {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
    }
`;