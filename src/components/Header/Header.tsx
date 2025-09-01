import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import { Container } from '../../styles/GlobalStyles';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background}dd;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.secondary}22;
  z-index: 1000;
  transition: ${({ theme }) => theme.transitions.normal};
`;

const HeaderContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.background};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
    transition: all 0.3s ease-in-out;
    z-index: 9999;
    gap: ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    
    /* Ensure full coverage */
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  position: relative;
  transition: ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text.accent};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transitions.fast};
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    color: ${({ theme }) => theme.colors.text.primary};
    padding: ${({ theme }) => theme.spacing.md} 0;
    text-align: center;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ThemeToggle = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    transform: rotate(180deg);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  z-index: 10000;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;


const MenuLine = styled.div<{ isOpen: boolean; index: number }>`
  width: 24px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.text.primary};
  transition: ${({ theme }) => theme.transitions.fast};
  transform-origin: center;

  ${({ isOpen, index }) => {
    if (isOpen) {
      if (index === 0) return 'transform: rotate(45deg) translate(6px, 6px);';
      if (index === 1) return 'opacity: 0;';
      if (index === 2) return 'transform: rotate(-45deg) translate(6px, -6px);';
    }
    return '';
  }}
`;

const DesktopNav = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo onClick={() => scrollToSection('home')}>
          OL
        </Logo>

        <DesktopNav>
          <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
          <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
          <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          <ThemeToggle onClick={toggleTheme}>
            {isDark ? '☀️' : '🌙'}
          </ThemeToggle>
        </DesktopNav>

        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <MenuLine isOpen={mobileMenuOpen} index={0} />
          <MenuLine isOpen={mobileMenuOpen} index={1} />
          <MenuLine isOpen={mobileMenuOpen} index={2} />
        </MobileMenuButton>

        <Nav isOpen={mobileMenuOpen}>
          <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
          <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
          <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          <ThemeToggle onClick={toggleTheme}>
            {isDark ? '☀️' : '🌙'}
          </ThemeToggle>
        </Nav>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;