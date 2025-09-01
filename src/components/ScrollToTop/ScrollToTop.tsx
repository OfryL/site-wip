import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAnalytics } from '../../utils/analytics';

const ScrollButton = styled.button<{ visible: boolean }>`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  color: ${({ theme }) => theme.colors.background};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transform: ${({ visible }) => visible ? 'translateY(0)' : 'translateY(100px)'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;

  &:hover {
    transform: ${({ visible }) => visible ? 'translateY(-2px) scale(1.05)' : 'translateY(100px)'};
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }

  &:active {
    transform: ${({ visible }) => visible ? 'translateY(0) scale(0.95)' : 'translateY(100px)'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: ${({ theme }) => theme.spacing.md};
    right: ${({ theme }) => theme.spacing.md};
    width: 45px;
    height: 45px;
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: ${({ theme }) => theme.spacing.sm};
    right: ${({ theme }) => theme.spacing.sm};
    width: 40px;
    height: 40px;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    trackEvent('scroll_to_top_click');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollButton
      visible={isVisible}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      ↑
    </ScrollButton>
  );
};

export default ScrollToTop;