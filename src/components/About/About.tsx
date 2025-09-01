import React from 'react';
import styled from 'styled-components';
import { Container, Section, Card } from '../../styles/GlobalStyles';
import { personalInfo } from '../../data/portfolio';

const AboutSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.surface}44;
`;

const AboutContent = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.xl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const AboutText = styled.div`
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
`;

const SkillItem = styled(Card)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.surface} 0%,
    ${({ theme }) => theme.colors.background} 100%
  );
  border: 1px solid ${({ theme }) => theme.colors.primary}22;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }

  span {
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    margin: 0;
  }
`;

const HighlightText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <AboutText>
          <h2>About Me</h2>
          <p>
            I'm a <HighlightText>passionate full-stack developer</HighlightText> with a strong background in both software engineering and hardware design. 
            My journey in technology has taken me through diverse domains, from enterprise software development to 
            cutting-edge cybersecurity solutions.
          </p>
          <p>
            I thrive on solving complex challenges and building innovative solutions that make a real impact. 
            From developing <HighlightText>autonomous vehicle platforms</HighlightText> to creating intelligent bots and designing RF circuits, 
            I bring a unique perspective that bridges software and hardware domains.
          </p>
          <p>
            I've had the privilege of working on transformative projects in <HighlightText>autonomous vehicle platforms</HighlightText>, 
            enterprise SaaS solutions, and innovative bot technologies. When I'm not coding, you'll find me exploring new technologies, 
            contributing to open-source projects, or tinkering with circuit designs.
          </p>

          <StatsContainer>
            <StatItem>
              <h3>5+</h3>
              <p>Years Experience</p>
            </StatItem>
            <StatItem>
              <h3>20+</h3>
              <p>Projects Delivered</p>
            </StatItem>
            <StatItem>
              <h3>10+</h3>
              <p>Technologies Mastered</p>
            </StatItem>
          </StatsContainer>
        </AboutText>

        <SkillsContainer>
          <div>
            <h3 style={{ marginBottom: '1rem', textAlign: 'center' }}>Skills & Technologies</h3>
            <SkillsGrid>
              {personalInfo.skills.map((skill, index) => (
                <SkillItem key={index}>
                  <span>{skill}</span>
                </SkillItem>
              ))}
            </SkillsGrid>
          </div>
        </SkillsContainer>
      </AboutContent>
    </AboutSection>
  );
};

export default About;