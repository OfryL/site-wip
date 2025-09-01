export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'personal' | 'professional';
  featured: boolean;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string;
  location: string;
  email?: string;
  skills: string[];
}

export const personalInfo: PersonalInfo = {
  name: 'Ofry Linkovsky',
  tagline: 'Always looking for new technologies and exciting challenges.',
  bio: 'Full-stack developer passionate about creating innovative solutions and exploring cutting-edge technologies. Experienced in both frontend and backend development with a strong focus on user experience and performance.',
  location: 'Israel',
  skills: [
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'Go',
    'Docker',
    'AWS',
    'PostgreSQL',
    'MongoDB',
    'Circuit Design',
    'RF Engineering'
  ]
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ofryl',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ofry-linkovsky/',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/0fry',
    icon: 'twitter'
  }
];

export const projects: Project[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'Modern portfolio website built with React 19 and styled-components, featuring dark/light themes and smooth animations.',
    technologies: ['React', 'TypeScript', 'Styled Components', 'Vite', 'PostHog'],
    category: 'personal',
    featured: true,
    links: {
      github: 'https://github.com/ofryl/portfolio'
    }
  },
  {
    id: 'telegram-weather-bot',
    title: 'Telegram Weather Bot',
    description: 'Intelligent weather bot for Telegram with location-based forecasts and customizable notifications.',
    technologies: ['Node.js', 'Telegram Bot API', 'Weather API', 'MongoDB'],
    category: 'personal',
    featured: true,
    links: {
      github: 'https://github.com/ofryl/weather-bot'
    }
  },
  {
    id: 'autofleet',
    title: 'Autofleet',
    description: 'Fleet management and optimization platform for autonomous and connected vehicles.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    category: 'professional',
    featured: true,
    links: {
      live: 'https://autofleet.io'
    }
  },
  {
    id: 'panaya-saas',
    title: 'Panaya SaaS Software',
    description: 'Enterprise SaaS solution for SAP change management and testing automation.',
    technologies: ['Angular', 'Java', 'Spring', 'Oracle', 'Jenkins'],
    category: 'professional',
    featured: true,
    links: {
      live: 'https://panaya.com'
    }
  },
  {
    id: 'morfix-plugin',
    title: 'Morfix Dictionary Firefox Plugin',
    description: 'Browser extension providing instant Hebrew-English dictionary translations.',
    technologies: ['JavaScript', 'WebExtensions API', 'HTML', 'CSS'],
    category: 'personal',
    featured: false,
    links: {
      github: 'https://github.com/ofryl/morfix-plugin'
    }
  },
  {
    id: 'telegram-bot-flow-api',
    title: 'Telegram Bot Flow API',
    description: 'RESTful API framework for building complex conversational flows in Telegram bots.',
    technologies: ['Python', 'FastAPI', 'Redis', 'Docker', 'PostgreSQL'],
    category: 'personal',
    featured: false,
    links: {
      github: 'https://github.com/ofryl/bot-flow-api'
    }
  },
  {
    id: 'board-design',
    title: 'Board Design (RF/Digital Circuits)',
    description: 'Custom PCB design for RF and digital circuits, including antenna design and signal processing.',
    technologies: ['Altium Designer', 'KiCad', 'MATLAB', 'Simulation', 'RF Design'],
    category: 'personal',
    featured: false,
    links: {}
  }
];

export const experience = [
  {
    id: 'autofleet-lead',
    title: 'Lead Full-Stack Developer',
    company: 'Autofleet',
    period: '2020 - Present',
    description: 'Leading development of fleet management platform for autonomous vehicles.'
  },
  {
    id: 'panaya-senior',
    title: 'Senior Software Engineer',
    company: 'Panaya',
    period: '2018 - 2020',
    description: 'Developed enterprise SaaS solutions for SAP change management.'
  },
];