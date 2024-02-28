import WorkExperience from '../components/WorkExperience';
import LeadershipExperience from '../components/LeadershipExperience';
import { AppContainer } from '../styles/Global.styles';
import styled from 'styled-components';



export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    
`;  

const ExpsContainer = styled(AppContainer)`
    margin: 0 auto;
    background: var(--cherry-blossom-pink);
`;

export const ExpContainer = styled.div<{ bgColor: string}>`
    padding-left: 1rem;
    padding-bottom: 1rem;
    position: relative;
    background: var(${props => props.bgColor}); 
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 1.5rem;
`;

export const LeadershipContainer = styled(ExpContainer)`
    padding: 0;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    position: relative;
`;

export const ExpLogo = styled.img`
    width: 20%;
    border-radius: 3rem;
`;

export const ExpDate = styled.h3`
    margin: 0;
    font-weight: 500;
    font-size: 1.5rem;
`;  

export const ExpHeader = styled.h1`
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;
`;

export const DetailList = styled.ul`
    margin: 0;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 1.5;
`; 

export const Detail = styled.li`
    margin-bottom: 0rem;
`;  

export const Link = styled.a`
    &:visited{
        color: black;
    }
    &:link{
        color: black;
    }
    &:hover{
        background-color: var(--beige);
        text-decoration-thickness: 0rem;
    }
`


const Experience = () => {
    return (
        <ExpsContainer id = "experience">
            <WorkExperience />
            <LeadershipExperience />
        </ExpsContainer>
    );
};

export default Experience;