import styled from 'styled-components';
import {ReactNode} from 'react';
import { motion } from 'framer-motion';
interface SectionProps {
  heading?: string;
  children?: ReactNode;
}

const SectionHeading = styled(motion.h1)`
    text-align: center;
    margin-bottom: 40px;
    font-size: 3.5rem;
    font-weight: bold;
    color: var(--matcha-dark);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
`;

const SectionContainer = styled.div`
    display: flex;
    width: 50rem;
    margin: 0 auto;
    max-width: 100%;
    flex-direction: column;
    padding: 20px;
`;

export const Section = ({ heading, children }: SectionProps) => {
  return (
    <SectionContainer>
      <SectionHeading
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {heading}
      </SectionHeading>
      {children}
    </SectionContainer>
  );
};