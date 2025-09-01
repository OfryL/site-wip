import React from 'react';
import styled from 'styled-components';
import { Container, Section, Button } from '../../styles/GlobalStyles';
import { socialLinks, personalInfo } from '../../data/portfolio';
import { useAnalytics } from '../../utils/analytics';

const ContactSection = styled(Section)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.surface} 0%,
    ${({ theme }) => theme.colors.background} 50%,
    ${({ theme }) => theme.colors.surface} 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at top,
      ${({ theme }) => theme.colors.primary}11 0%,
      transparent 70%
    );
  }
`;

const ContactContent = styled(Container)`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const ContactHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    max-width: 600px;
    margin: 0 auto ${({ theme }) => theme.spacing.lg};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  }
`;

const TaglineHighlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-style: italic;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SocialCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.text.secondary}22;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.secondary} 100%
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary}44;

    &::before {
      transform: scaleX(1);
    }
  }
`;

const SocialIcon = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SocialName = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const SocialHandle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
`;

const CTASection = styled.div`
  background-color: ${({ theme }) => theme.colors.surface}66;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.primary}22;

  h3 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const Contact: React.FC = () => {
  const { trackEvent } = useAnalytics();

  const getIconForSocial = (name: string): string => {
    const icons: Record<string, string> = {
      GitHub: '🐙',
      LinkedIn: '💼',
      Telegram: '✈️',
      Facebook: '📘',
      Twitter: '🐦',
    };
    return icons[name] || '🔗';
  };

  const getHandleForSocial = (name: string, url: string): string => {
    if (name === 'GitHub') return '@ofryl';
    if (name === 'LinkedIn') return '/in/ofry-linkovsky';
    if (name === 'Telegram') return '@OfryL';
    if (name === 'Facebook') return '/ofryL';
    if (name === 'Twitter') return '@0fry';
    return new URL(url).pathname;
  };

  const handleSocialClick = (social: { name: string; url: string }) => {
    trackEvent('social_link_click', {
      platform: social.name.toLowerCase(),
      url: social.url,
    });
    window.open(social.url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    trackEvent('contact_action', { action: 'email_click' });
    // You can add actual email here or a contact form
    window.open('mailto:contact@ofry.net', '_blank');
  };

  const handleGitHubClick = () => {
    trackEvent('contact_action', { action: 'github_visit' });
    window.open('https://github.com/ofryl', '_blank', 'noopener,noreferrer');
  };

  return (
    <ContactSection id="contact">
      <ContactContent>
        <ContactHeader>
          <h2>Let's Connect</h2>
          <p>
            <TaglineHighlight>"{personalInfo.tagline}"</TaglineHighlight>
          </p>
          <p>
            I'm always interested in new opportunities, collaborations, and exciting projects. 
            Whether you want to discuss technology, share ideas, or explore potential partnerships, 
            I'd love to hear from you!
          </p>
        </ContactHeader>

        <SocialGrid>
          {socialLinks.map((social, index) => (
            <SocialCard
              key={index}
              onClick={() => handleSocialClick(social)}
            >
              <SocialIcon>{getIconForSocial(social.name)}</SocialIcon>
              <SocialName>{social.name}</SocialName>
              <SocialHandle>{getHandleForSocial(social.name, social.url)}</SocialHandle>
            </SocialCard>
          ))}
        </SocialGrid>

        <CTASection>
          <h3>Ready to Start Something Amazing?</h3>
          <p>
            Let's build the future together. Check out my latest work or drop me a message!
          </p>
          
          <CTAButtons>
            <Button onClick={handleGitHubClick} size="lg">
              View My GitHub
            </Button>
            <Button variant="secondary" onClick={handleEmailClick} size="lg">
              Send an Email
            </Button>
          </CTAButtons>
        </CTASection>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;