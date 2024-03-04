import styled from 'styled-components';
import {ReactNode} from 'react';
interface SectionProps {
  heading?: string;
  children?: ReactNode;
}

const SectionHeading = styled.h1`
    text-align: center;
    margin-bottom: 0;
    font-size: 4rem;
    font-weight: bold;
`;

const SectionContainer = styled.div`
    display: flex;
    width: 50rem;
    margin: 0 auto;
    max-width: 100%;
    flex-direction: column;
`;

export const Section = ({ heading, children }: SectionProps) => {
  return (
    <SectionContainer>
      <SectionHeading>{heading}</SectionHeading>
      {children}
    </SectionContainer>
  );
};