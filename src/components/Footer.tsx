import styled from "styled-components";
import GitHub from "../assets/github.svg";
import Mail from "../assets/envelope.svg";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/instagram-svgrepo-com.svg";
import { Header } from "../styles/Global.styles";
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    margin: -2px auto 0 auto;
    padding: 60px 20px;
    background: linear-gradient(180deg,
        rgba(184, 216, 184, 0.4) 0%,
        rgba(168, 213, 168, 0.6) 50%,
        rgba(122, 184, 122, 0.8) 100%);
    backdrop-filter: blur(5px);
    box-shadow: 0 -2px 10px var(--shadow-soft);
`;

const FooterList = styled(motion.div)`
    display:flex;
    flex-direction: row;
    margin-top: 20px;
`;

const FooterHeader = styled(motion(Header))`
    color: var(--white-soft);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    margin-bottom: 30px;
`;
const FooterIcon = styled(motion.img)`
    width: 4.5rem;
    margin: 0 1.5rem;
    padding: 1rem;
    background: var(--white-soft);
    border-radius: 1.5rem;
    box-shadow: 0 5px 15px var(--shadow-soft);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1) translateY(-5px);
        box-shadow: 0 10px 25px var(--shadow-medium);
        background: linear-gradient(135deg, var(--white-soft) 0%, var(--matcha-light) 100%);
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
            link: "https://www.instagram.com/anthony.wang_/",
            icon: Instagram,
        },
        {
            link: "mailto:anthony.wang1@uwaterloo.ca",
            icon: Mail,
        },
    ];
    return (
        <FooterContainer
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <FooterHeader
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                contact
            </FooterHeader>
            <FooterList
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.1 }}
            >
                {FooterData.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Visit Link"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.1,
                            ease: "easeOut"
                        }}
                    >
                        <FooterIcon
                            src={item.icon}
                            alt="icon"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        />
                    </motion.a>
                ))}
            </FooterList>
        </FooterContainer>
    );
};

export default Footer;