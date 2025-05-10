import React from 'react';
import styled from 'styled-components';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import GitHubIcon from '@mui/icons-material/GitHub';
import { Bio } from '../../data/constants';
import { motion } from 'framer-motion';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled(motion.a)`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: ${({ theme }) => theme.type === "dark" ? "invert(1)" : "none"};
`;

function Footer() {
  return (
    <FooterContainer as={motion.div}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <FooterWrapper>
        <Logo>Balaji Saker</Logo>

        <Nav>
          {["#about", "#skills", "#experience", "#projects", "#education"].map((link, index) => (
            <NavLink key={index}
              href={link}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {link.replace("#", "").charAt(0).toUpperCase() + link.replace("#", "").slice(1)}
            </NavLink>
          ))}
        </Nav>

        <SocialMediaIcons>
          {/* <SocialMediaIcon href={Bio.facebook} target="display" whileHover={{ scale: 1.2 }}>
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display" whileHover={{ scale: 1.2 }}>
            <TwitterIcon />
          </SocialMediaIcon> */}
          {/* <SocialMediaIcon href={Bio.linkedin} target="display" whileHover={{ scale: 1.2 }}>
            <LinkedInIcon />
          </SocialMediaIcon> */}
          {/* <SocialMediaIcon href={Bio.insta} target="display" whileHover={{ scale: 1.2 }}>
            <InstagramIcon />
          </SocialMediaIcon> */}
          {/* <SocialMediaIcon href={Bio.github} target="display" whileHover={{ scale: 1.2 }}>
            <GitHubIcon />
          </SocialMediaIcon> */}

          {/* LinkedIn */}     
          <SocialMediaIcon href={Bio.linkedin} target="display" whileHover={{ scale: 1.2 }}>
            <IconImage src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          </SocialMediaIcon>

          {/* GitHub */}
          <SocialMediaIcon href={Bio.github} target="display" whileHover={{ scale: 1.2 }}>
            <IconImage src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
          </SocialMediaIcon>

          {/* HackerRank */}
          <SocialMediaIcon href={Bio.hackerrank} target="display" whileHover={{ scale: 1.2 }}>
            <IconImage src="https://cdn.worldvectorlogo.com/logos/hackerrank.svg" alt="HackerRank" />
          </SocialMediaIcon>

          {/* LeetCode */}
          <SocialMediaIcon href={Bio.leetcode} target="display" whileHover={{ scale: 1.2 }}>
            <IconImage src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" />
          </SocialMediaIcon>

          {/* CodeChef */}
          <SocialMediaIcon href={Bio.codechef} target="display" whileHover={{ scale: 1.2 }}>
            <IconImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEVYNyJUMRpNJgdJHwBVMx1PKQ5IHQBMJABRLBNWNR9SLhaGcWHFvK3n5NeHc2RrUD21qJnc18nSy7yklYVjRjP7++79/fDt697///SuoJL///Z1Wkj08uVdOySOe2qVhHRdPiqdjX3Uzb+9s6UG9M0gAAAA1UlEQVR4Ad2QxQHDMAxFY6q5QclY3n/GMmeD/Istll6zOBHKGCX3LxdsJZV+h7Sxznu31leXabveD+NEXkHTAd7kVGNsiIgYfcsfMZEiYMwRAyGlIty+0T5K9QYAvW1TXRs5INSx3Xonn013CLFV3JRrXoWYJFft9NxIdIj96rZnw0uFPF2n3Vb7Deq/4KstEKJVu+ebgPFANdlPz2W1roBDq7dhVNRFCFtejj199R1vp9SIdf84BTLGnfmDcDJzCC98W3LHl/pwfOH7gDdP8PIBflG6AAaYETfXpxQdAAAAAElFTkSuQmCC" alt="CodeChef" />
          </SocialMediaIcon>

          {/* Cridly */}
          <SocialMediaIcon href={Bio.cridly} target="display" whileHover={{ scale: 1.2 }}>
            <IconImage src="https://info.credly.com/hubfs/Credly_orange-favicon-2.png" alt="Cridly" />
          </SocialMediaIcon>

          

        </SocialMediaIcons>

        <Copyright>
          &copy; 2025 Balaji Saker. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
