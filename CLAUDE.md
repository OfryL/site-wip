# Claude 007 Agents System Configuration

## Commit Attribution Requirements
CRITICAL: All commits must include the attribution footer:
```
🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## Core Agent System

### Universal Core Agents (Always Active)
- `@software-engineering-expert` - Code quality, architecture, and engineering best practices
- `@code-reviewer` - Quality assurance, code review, and optimization
- `@orchestrator` - Multi-dimensional analysis and coordination
- `@vibe-coding-coordinator` - Autonomous development preparation and workflow optimization
- `@security-specialist` - Security analysis, vulnerability assessment, and best practices
- `@documentation-specialist` - Technical documentation and API documentation
- `@git-expert` - Version control, branching strategies, and collaboration workflows

### Development Environment Agents
- `@devops-expert` - CI/CD, deployment, and infrastructure automation
- `@testing-specialist` - Test strategy, test automation, and quality assurance
- `@performance-optimizer` - Performance analysis, optimization, and monitoring
- `@database-expert` - Database design, optimization, and data modeling

### Technology Stack Agents (Auto-activated based on project needs)

#### Frontend Development
- `@react-expert` - React development, hooks, state management
- `@nextjs-expert` - Next.js applications, SSR, routing, and optimization
- `@tailwind-css-expert` - Tailwind CSS styling and responsive design
- `@typescript-expert` - TypeScript development and type safety

#### Backend Development  
- `@nodejs-expert` - Node.js server development and architecture
- `@fastapi-expert` - FastAPI Python development and async programming
- `@django-expert` - Django framework and Python web development
- `@gin-expert` - Go web development with Gin framework
- `@fiber-expert` - Go web development with Fiber framework
- `@rails-expert` - Ruby on Rails development
- `@laravel-expert` - PHP Laravel framework development

#### Specialized Libraries & Tools
- `@typescript-cockatiel-resilience` - Resilience patterns and circuit breakers
- `@typescript-pino-logging` - Structured logging with Pino
- `@python-hyx-resilience` - Python resilience and fault tolerance
- `@go-zap-logging` - High-performance Go logging

## Task Master Integration

### Bridge Agents for Task Management
- `@task-executor` - Execute tasks with proper validation and error handling
- `@task-checker` - Validate task completion and quality assurance
- `@workflow-coordinator` - Coordinate multi-step workflows and dependencies
- `@priority-manager` - Intelligent task prioritization and resource allocation

### Task Management Capabilities
- Automated task breakdown and dependency analysis
- Intelligent agent selection for specific tasks
- Progress tracking and milestone management
- Quality gate enforcement
- Automated testing and validation

## MCP Server Configuration

### Core MCP Servers
```json
{
  "mcpServers": {
    "browsermcp": {
      "command": "npx",
      "args": ["browsermcp"],
      "env": {}
    },
    "filesystem": {
      "command": "uvx",
      "args": ["mcp-server-filesystem", "/Users/ofri/repos/temp-site"],
      "env": {}
    },
    "git": {
      "command": "uvx", 
      "args": ["mcp-server-git", "--repository", "/Users/ofri/repos/temp-site"],
      "env": {}
    },
    "postgres": {
      "command": "uvx",
      "args": ["mcp-server-postgres"],
      "env": {
        "POSTGRES_CONNECTION_STRING": "postgresql://localhost/temp_site_dev"
      }
    }
  }
}
```

### Optional MCP Servers (Enable as needed)
- **SQLite**: Local database operations
- **Redis**: Caching and session management  
- **MongoDB**: Document database operations
- **AWS**: Cloud services integration
- **Docker**: Container management
- **Kubernetes**: Orchestration and deployment

## Development Workflow

### Code Quality Standards
- Automated code review by `@code-reviewer`
- Security analysis by `@security-specialist` 
- Performance validation by `@performance-optimizer`
- Documentation updates by `@documentation-specialist`

### Testing Strategy
- Unit tests for all core functionality
- Integration tests for API endpoints
- End-to-end tests for critical user flows
- Performance tests for scalability validation

### Git Workflow
- Feature branch development
- Pull request reviews with agent assistance
- Automated quality checks via git hooks
- Commit message standardization

## Agent Coordination Rules

### Multi-Agent Collaboration
1. `@orchestrator` coordinates complex multi-step tasks
2. `@vibe-coding-coordinator` prepares development environment
3. Specialized agents handle domain-specific tasks
4. `@task-checker` validates all outputs before completion

### Quality Gates
- Code must pass security review
- All tests must pass
- Documentation must be updated
- Performance benchmarks must be met

### Error Handling
- Automatic rollback on critical failures
- Error escalation to appropriate specialists
- Learning from failures to improve future performance

## Project-Specific Configuration

### Environment Setup
- Development environment auto-configuration
- Dependency management and updates
- IDE/editor configuration optimization
- Debugging and profiling tools setup

### Monitoring & Observability
- Application performance monitoring
- Error tracking and alerting
- Log aggregation and analysis
- User experience monitoring

## Usage Instructions

### Starting Development
1. Initialize git repository if not already done
2. Choose your technology stack (agents will auto-activate)
3. Run setup commands provided by agents
4. Begin development with agent assistance

### Agent Interaction
- Use `@agent-name` to invoke specific agents
- Complex tasks automatically involve multiple agents
- Ask for help with architecture, debugging, or optimization
- Agents will provide code, tests, and documentation

### Task Management
- Create tasks using natural language descriptions
- Agents will break down complex tasks automatically
- Track progress through built-in task management
- Quality validation at each step

## Advanced Features

### AI-Powered Development
- Intelligent code generation and optimization
- Automated refactoring suggestions
- Performance bottleneck identification
- Security vulnerability detection

### Continuous Improvement
- Code quality metrics tracking
- Development velocity optimization
- Technical debt identification
- Best practices enforcement

### Collaboration Enhancement
- Multi-developer coordination
- Knowledge sharing and documentation
- Code review automation
- Onboarding assistance for new team members

---

*This configuration provides a complete Claude 007 Agents development environment optimized for modern software development practices. The system adapts to your technology choices and scales with project complexity.*