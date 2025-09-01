import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Section, Button } from '../../styles/GlobalStyles';
import { personalInfo } from '../../data/portfolio';
import { useAnalytics } from '../../utils/analytics';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const HeroSection = styled(Section)`
  min-height: 100vh;
  min-height: 100svh; /* Support for modern browsers */
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: 
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.background}dd 0%,
      ${({ theme }) => theme.colors.surface}dd 50%,
      ${({ theme }) => theme.colors.background}dd 100%
    ),
    url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center/cover;
  background-attachment: fixed;
  padding-top: 80px; /* Account for fixed header */

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 90vh;
    padding-top: 70px;
    background-attachment: scroll; /* Better mobile performance */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 85vh;
    padding-top: 60px;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  background-image: radial-gradient(
    circle at 20% 80%,
    ${({ theme }) => theme.colors.primary} 0%,
    transparent 50%
  ),
  radial-gradient(
    circle at 80% 20%,
    ${({ theme }) => theme.colors.secondary} 0%,
    transparent 50%
  );
`;

const HeroContent = styled(Container)`
  text-align: center;
  z-index: 1;
`;

const Name = styled.h1`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.text.primary} 0%,
    ${({ theme }) => theme.colors.primary} 50%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeInUp} 1s ease-out;
`;

const Tagline = styled.p`
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
`;

const TypewriterContainer = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: ${({ theme }) => theme.colors.text.accent};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  min-height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInUp} 1s ease-out 0.4s both;
`;

const TypewriterText = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  &::after {
    content: '|';
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  animation: ${fadeInUp} 1s ease-out 0.6s both;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  animation: ${float} 3s ease-in-out infinite;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  &::after {
    content: '↓';
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const Hero: React.FC = () => {
  const { trackEvent } = useAnalytics();
  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterIndex, setTypewriterIndex] = useState(0);

  const phrases = [
    'Full-Stack Developer',
    'Technology Enthusiast',
    'Problem Solver',
    'Innovation Seeker'
  ];

  useEffect(() => {
    const currentPhrase = phrases[typewriterIndex % phrases.length];
    let charIndex = 0;
    let isDeleting = false;

    const typeInterval = setInterval(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setTypewriterText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        setTypewriterText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && charIndex === 0) {
        setTypewriterIndex(prev => prev + 1);
        isDeleting = false;
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeInterval);
  }, [typewriterIndex]);

  const scrollToProjects = () => {
    trackEvent('hero_cta_click', { action: 'view_projects' });
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    trackEvent('hero_cta_click', { action: 'get_in_touch' });
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <BackgroundPattern />
      <HeroContent>
        <Name>{personalInfo.name}</Name>
        <Tagline>{personalInfo.tagline}</Tagline>
        
        <TypewriterContainer>
          <TypewriterText>{typewriterText}</TypewriterText>
        </TypewriterContainer>

        <CTAButtons>
          <Button onClick={scrollToProjects} size="lg">
            View My Work
          </Button>
          <Button variant="secondary" onClick={scrollToContact} size="lg">
            Get In Touch
          </Button>
        </CTAButtons>
      </HeroContent>

      <ScrollIndicator onClick={scrollToNext}>
        <span>Scroll to explore</span>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;