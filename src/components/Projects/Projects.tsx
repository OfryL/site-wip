import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Section, Card, Button } from '../../styles/GlobalStyles';
import { projects } from '../../data/portfolio';
import type { Project } from '../../data/portfolio';
import { useAnalytics } from '../../utils/analytics';

const ProjectsSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.background};
`;

const ProjectsContent = styled(Container)`
  text-align: center;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
`;

const FilterButton = styled(Button)<{ active?: boolean }>`
  ${({ active, theme }) =>
    active &&
    `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.background};
  `}
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const ProjectCard = styled(Card)`
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.secondary} 100%
    );
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

const ProjectCategory = styled.span<{ category: 'personal' | 'professional' }>`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  ${({ category, theme }) =>
    category === 'personal'
      ? `
        background-color: ${theme.colors.accent}22;
        color: ${theme.colors.accent};
      `
      : `
        background-color: ${theme.colors.success}22;
        color: ${theme.colors.success};
      `}
`;

const ProjectDescription = styled.p`
  flex-grow: 1;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TechTag = styled.span`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.text.secondary}33;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: auto;
`;

const LinkButton = styled(Button)`
  flex: 1;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Projects: React.FC = () => {
  const { trackEvent } = useAnalytics();
  const [filter, setFilter] = useState<'all' | 'personal' | 'professional' | 'featured'>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.category === filter;
  });

  const handleLinkClick = (project: Project, linkType: string, url: string) => {
    trackEvent('project_link_click', {
      project_id: project.id,
      project_title: project.title,
      link_type: linkType,
      url: url,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'personal', label: 'Personal' },
    { key: 'professional', label: 'Professional' },
  ] as const;

  return (
    <ProjectsSection id="projects">
      <ProjectsContent>
        <h2>My Projects</h2>
        <p>
          A collection of projects I've worked on, ranging from personal experiments 
          to professional solutions that serve thousands of users.
        </p>

        <FilterContainer>
          {filters.map(({ key, label }) => (
            <FilterButton
              key={key}
              active={filter === key}
              variant={filter === key ? 'primary' : 'secondary'}
              onClick={() => {
                setFilter(key);
                trackEvent('project_filter_change', { filter: key });
              }}
            >
              {label}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id}>
              {project.featured && <FeaturedBadge>Featured</FeaturedBadge>}
              
              <ProjectHeader>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <ProjectTitle>{project.title}</ProjectTitle>
                </div>
                <ProjectCategory category={project.category}>
                  {project.category}
                </ProjectCategory>
              </ProjectHeader>

              <ProjectDescription>{project.description}</ProjectDescription>

              <TechStack>
                {project.technologies.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechStack>

              <ProjectLinks>
                {project.links.github && (
                  <LinkButton
                    variant="ghost"
                    onClick={() => handleLinkClick(project, 'github', project.links.github!)}
                  >
                    GitHub
                  </LinkButton>
                )}
                {project.links.live && (
                  <LinkButton
                    variant="primary"
                    onClick={() => handleLinkClick(project, 'live', project.links.live!)}
                  >
                    Company Site
                  </LinkButton>
                )}
                {project.links.demo && (
                  <LinkButton
                    variant="secondary"
                    onClick={() => handleLinkClick(project, 'demo', project.links.demo!)}
                  >
                    Demo
                  </LinkButton>
                )}
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default Projects;