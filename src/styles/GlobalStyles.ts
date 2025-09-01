import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
    height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background};
    transition: ${({ theme }) => theme.transitions.normal};
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
    }
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }

  h5 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }

  h6 {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  a {
    color: ${({ theme }) => theme.colors.text.accent};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
      opacity: 0.8;
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    transition: ${({ theme }) => theme.transitions.fast};

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style: none;
  }

  input, textarea {
    font-family: inherit;
    border: none;
    outline: none;
    transition: ${({ theme }) => theme.transitions.fast};
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.text.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.full};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 0 ${({ theme }) => theme.spacing['2xl']};
  }
`;

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.lg} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing['3xl']} 0;
  }
`;

export const Button = styled.button<{
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.background};
          &:hover {
            transform: translateY(-1px);
            box-shadow: ${theme.shadows.lg};
          }
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.surface};
          color: ${theme.colors.text.primary};
          border: 1px solid ${theme.colors.text.secondary}33;
          &:hover {
            background-color: ${theme.colors.text.secondary}11;
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: ${theme.colors.text.accent};
          &:hover {
            background-color: ${theme.colors.primary}11;
          }
        `;
    }
  }}

  ${({ size = 'md', theme }) => {
    switch (size) {
      case 'sm':
        return `
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: ${theme.typography.fontSize.sm};
        `;
      case 'md':
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.typography.fontSize.base};
        `;
      case 'lg':
        return `
          padding: ${theme.spacing.md} ${theme.spacing.lg};
          font-size: ${theme.typography.fontSize.lg};
        `;
    }
  }}
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;