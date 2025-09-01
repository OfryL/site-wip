# Portfolio Site Technical Documentation

## Architecture Overview

This is a modern portfolio website built with React 19, TypeScript, and styled-components. The application features a component-based architecture with a theme system, analytics integration, and automated deployment.

## Technology Stack

### Core Technologies
- **React 19**: Latest React with modern features and hooks
- **TypeScript**: Type-safe development environment
- **Styled Components 6.1**: CSS-in-JS styling solution
- **Vite 5.4**: Fast build tool and development server

### Development Tools
- **ESLint**: Code linting and formatting
- **TypeScript**: Static type checking
- **PostHog**: User analytics and behavior tracking

### Deployment
- **GitHub Actions**: Automated CI/CD pipeline
- **GitHub Pages**: Static site hosting

## Project Structure

```
portfolio-site/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Header/        # Navigation header with mobile menu
│   │   ├── Hero/          # Landing section with animations
│   │   ├── About/         # About section with skills
│   │   ├── Projects/      # Projects showcase with filtering
│   │   └── Contact/       # Contact section with social links
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.tsx    # Theme provider and dark/light mode
│   ├── data/              # Data and content
│   │   └── portfolio.ts   # Portfolio data, projects, and personal info
│   ├── styles/            # Styling system
│   │   ├── theme.ts       # Theme configuration and design tokens
│   │   └── GlobalStyles.ts # Global styles and reusable components
│   ├── utils/             # Utilities
│   │   └── analytics.ts   # PostHog analytics integration
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml         # Automated deployment workflow
├── .env.example           # Environment variables template
└── package.json           # Dependencies and scripts
```

## Component Architecture

### Theme System
- **ThemeProvider**: Centralized theme management with dark/light mode
- **GlobalStyles**: Global CSS styles with theme integration
- **Theme Interface**: TypeScript interfaces for theme consistency

### Reusable Components
- **Container**: Responsive container with consistent padding
- **Button**: Styled button with variants (primary, secondary, ghost)
- **Card**: Elevated card component with hover effects
- **Section**: Consistent section spacing

### Page Sections
1. **Header**: Fixed navigation with theme toggle and mobile menu
2. **Hero**: Landing section with typewriter animation and CTAs
3. **About**: Personal introduction with skills showcase
4. **Projects**: Filterable project grid with categories
5. **Contact**: Social links and contact information

## Data Management

### Portfolio Data Structure
```typescript
interface Project {
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
}

interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string;
  skills: string[];
}
```

### Content Organization
- **projects**: Array of project objects with metadata
- **socialLinks**: Social media and professional links
- **personalInfo**: Personal details and bio
- **experience**: Professional experience timeline

## Styling System

### Design Tokens
```typescript
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      accent: string;
    };
  };
  typography: {
    fontFamily: { primary: string; mono: string };
    fontSize: { xs: string; sm: string; /* ... */ };
    fontWeight: { light: number; /* ... */ };
  };
  spacing: { xs: string; sm: string; /* ... */ };
  breakpoints: { xs: string; sm: string; /* ... */ };
}
```

### Responsive Design
- **Mobile-first approach**: Base styles for mobile, progressively enhanced
- **Breakpoints**: xs (480px), sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible layouts**: CSS Grid and Flexbox for responsive components

## Analytics Integration

### PostHog Setup
```typescript
import { analytics } from './utils/analytics';

// Track events
analytics.track('project_link_click', {
  project_id: 'portfolio',
  link_type: 'github'
});

// Track page views
analytics.page('projects');
```

### Event Tracking
- **Navigation clicks**: Header navigation usage
- **Project interactions**: Project links and filter usage
- **Social links**: Contact link engagement
- **Theme toggles**: Dark/light mode preferences

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

### Environment Variables
```bash
# .env (create from .env.example)
VITE_POSTHOG_API_KEY=your_posthog_api_key_here
```

## Deployment Pipeline

### GitHub Actions Workflow
1. **Build**: Install dependencies and build the project
2. **Quality checks**: Run linting and type checking
3. **Deploy**: Upload build artifacts to GitHub Pages

### Deployment Configuration
```yaml
# .github/workflows/deploy.yml
name: Build and Deploy to GitHub Pages
on:
  push:
    branches: [ main, master ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci --legacy-peer-deps
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
```

## Performance Considerations

### Optimization Strategies
- **Code splitting**: Dynamic imports for large components
- **Lazy loading**: Images and non-critical resources
- **Theme caching**: LocalStorage for theme preferences
- **Analytics**: Conditional loading based on environment

### Bundle Size
- **React 19**: Latest optimizations and concurrent features
- **Styled Components**: CSS-in-JS with runtime optimization
- **Tree shaking**: Vite automatically removes unused code

## Browser Compatibility

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Fallbacks
- **System theme detection**: Fallback to light theme
- **LocalStorage**: Graceful degradation for theme persistence
- **CSS features**: Progressive enhancement for modern CSS

## Customization Guide

### Adding New Projects
1. Edit `src/data/portfolio.ts`
2. Add project object to `projects` array
3. Include required fields: id, title, description, technologies, category

### Theme Customization
1. Modify `src/styles/theme.ts`
2. Update color palette, typography, or spacing
3. Theme changes apply globally via ThemeProvider

### Analytics Configuration
1. Sign up for PostHog account
2. Add API key to `.env` file
3. Configure event tracking in components

## Security Considerations

### Environment Variables
- **API keys**: Never commit to repository
- **Client-side exposure**: Only `VITE_` prefixed variables are exposed
- **Production secrets**: Configure in GitHub repository settings

### Content Security
- **External links**: `noopener,noreferrer` attributes
- **User inputs**: Sanitization for any dynamic content
- **Dependencies**: Regular security audits with `npm audit`

## Maintenance

### Dependencies Updates
```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Security audit
npm audit
```

### Performance Monitoring
- **Lighthouse scores**: Aim for 90+ in all categories
- **Core Web Vitals**: Monitor loading, interactivity, visual stability
- **Analytics insights**: User behavior and performance metrics

## Troubleshooting

### Common Issues

**Development server won't start**
- Check Node.js version (requires 20+)
- Clear `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install --legacy-peer-deps`

**Build failures**
- TypeScript errors: Run `npx tsc --noEmit` to check types
- Missing environment variables: Verify `.env` configuration

**Deployment issues**
- GitHub Pages not updating: Check Actions tab for build errors
- 404 errors: Ensure `index.html` is in build output

### Performance Issues
- **Slow initial load**: Enable code splitting and lazy loading
- **Large bundle size**: Analyze with `npm run build -- --analyze`
- **Memory leaks**: Check for unused event listeners and timers