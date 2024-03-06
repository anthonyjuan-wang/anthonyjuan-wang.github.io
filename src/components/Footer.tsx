import styled from "styled-components";
import GitHub from "../assets/github.svg";
import Mail from "../assets/envelope.svg";
import LinkedIn from "../assets/linkedin.svg";
import { Header } from "../styles/Global.styles";

const FooterContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    margin: 0 auto;
    background: var(--cherry-blossom-pink);
`;

const FooterList = styled.div`
    display:flex;
    flex-direction: row;
`;
const FooterIcon = styled.img`
    width: 5rem;
    margin-right: 2rem;
    &:hover {
        transform: scale(1.2);
        fill: black;
    }
`;

const Footer = () => {
    const FooterData = [
        {
            link: "https://github.com/anthonyjuan-wang",
            icon: GitHub,
        },
        {
            link: "https://www.linkedin.com/in/anthony-wang3/",
            icon: LinkedIn,
        },
        {
            link: "mailto:anthony.wang1@uwaterloo.ca",
            icon: Mail,
        },
    ];
    return (
        <FooterContainer id = "contact">
            <Header>CONTACT</Header>
            <FooterList>
                {FooterData.map((item) => (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" title="Visit Link">
                        <FooterIcon src={item.icon} alt="icon"></FooterIcon>
                    </a>
                ))}
            </FooterList>
        </FooterContainer>
    );
};

export default Footer;