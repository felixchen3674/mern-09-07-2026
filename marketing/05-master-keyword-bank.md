# Master Keyword Bank

Every technology, tool and concept the curriculum touches, split into small **buckets** (B01–B28). A bucket is a building block, not a resume category. The resume categories live in [06-skill-section-layouts.md](06-skill-section-layouts.md), and each layout says which buckets feed which line, so students can mix and match.

**Markers**
- *(no mark)* = hands-on or working knowledge. Safe to list.
- **†** = conceptual only (covered as interview questions or comparisons, not built in lectures). List only if you've built something with it, or put it in a "Familiar with" line.
- **[DAY n]** = where it's taught, for checking your claim.

See [01-tech-stack-by-tier.md](01-tech-stack-by-tier.md) for the tier reasoning.

---

## Frontend

### B01 · Languages & Markup
JavaScript, JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL, Bash, JSON, YAML, Markdown, GraphQL (SDL), JSX/TSX

### B02 · Frontend Frameworks & Libraries
React, React 19, React DOM, Single-Page Applications (SPA), Component-Based Architecture, Reusable Components, Higher-Order Components †, Render Props †, Error Boundaries, Suspense, `React.memo`, Next.js †, Angular †, React Native †, Expo †, Web Components †

### B03 · React Hooks & Patterns
React Hooks, `useState`, `useEffect`, `useRef`, `useReducer`, `useMemo`, `useCallback`, `useContext`, `useLayoutEffect`, `useTransition`, Custom Hooks, Controlled Components, Lifting State Up, Conditional Rendering, List Rendering with Keys, Forms and Input Handling, Form Validation, Debounce, Throttle

### B04 · State, Routing & Data Fetching
Context API, React Router, React Router v7, Client-Side Routing, Protected Routes, Auth Guards, URL Search Params, Axios, Axios Interceptors, Fetch API, AbortController, Async Data Fetching, Loading and Error States, Pagination (client and server), Infinite Scrolling, Redux †, Redux Toolkit †, Redux Thunk †, Zustand †, React Query / TanStack Query †, RTK Query †, Recoil †, MobX †

### B05 · Styling & UI
CSS Flexbox, CSS Grid, Responsive Design, Media Queries, Mobile-First Design, CSS Variables, BEM, CSS Modules †, Sass / SCSS †, Tailwind CSS †, styled-components †, Material UI †, Ant Design †, Chakra UI †, shadcn/ui †, Bootstrap †, Design Systems †, Storybook †

### B06 · Frontend Performance, Accessibility & Browser
Core Web Vitals, LCP, INP, CLS, Lighthouse, Web Vitals, Code Splitting, Lazy Loading, Dynamic Imports, Tree Shaking, List Virtualization, react-window, AG Grid †, Memoization, Bundle Optimization, Image Optimization, CDN, Web Workers, Service Workers †, Intersection Observer, Browser DevTools, Chrome DevTools, Network Tab Debugging, Critical Rendering Path, DOM Manipulation, Event Delegation, Browser Storage (localStorage, sessionStorage, cookies), Web Accessibility, WCAG, ARIA, Semantic HTML, Keyboard Navigation, Cross-Browser Compatibility, Polyfills, SEO Fundamentals, Server-Side Rendering (SSR) †, Static Site Generation (SSG) †, Microfrontends †, Module Federation †, Data Visualization †, Chart.js †, D3.js †, Highcharts †, SVG, Canvas

### B07 · Build Tools & Package Management
Vite, Webpack †, npm, Node Version Manager (nvm), package.json, Monorepos †, Workspaces, Hot Module Replacement (HMR), Bundling, Transpiling, Babel †, ESM and CommonJS Modules

---

## Backend

### B08 · Backend Runtime & Frameworks
Node.js, Node.js Event Loop, libuv, Non-Blocking I/O, Streams, `worker_threads`, `cluster`, Express.js, Middleware, Layered Architecture, Controller-Service-Repository Pattern, MVC, Dependency Injection, Error-Handling Middleware, Custom Error Classes, Environment Variables, dotenv, NestJS †, Java †, Spring Boot †, Spring MVC †, Node.js CLI Tools, `fs`, `path`, `os`, `http` modules

### B09 · API Design & Protocols
RESTful APIs, REST API Design, API Versioning, HTTP Methods, HTTP Status Codes, Idempotency, Path and Query Parameters, DTOs, Request Validation, Zod, Pagination, Cursor-Based Pagination, Offset Pagination, Swagger, OpenAPI, Postman, GraphQL, Apollo Server, Apollo Client, Resolvers, GraphQL Schema, GraphQL Federation †, WebSockets, `ws`, Socket.IO, Server-Sent Events, Real-Time Communication, API Gateway, CORS, HTTP Caching, HTTP/2, HTTP/3 †, Rate Limiting, Data Serialization

### B10 · Authentication & Security
Authentication, Authorization, JWT, Access Tokens, Refresh Tokens, Session-Based Auth, Cookies (HTTP-only), bcrypt, Password Hashing, Salting, RBAC, OAuth 2.0 †, SSO †, OWASP Top 10, XSS, CSRF, CSP, SQL Injection Prevention, Parameterized Queries, HTML Injection Prevention, Input Sanitization, HTTPS/TLS, CORS, Secrets Management, AWS Secrets Manager †, DDoS Mitigation †, Secure Coding Practices

---

## Data

### B11 · Relational Databases
PostgreSQL, SQL, `pg` (node-postgres), Relational Database Design, Schema Design, Primary Keys, Foreign Keys, One-to-Many, Many-to-Many, Joins (Inner, Left, Right, Outer), Aggregations, Subqueries, Transactions, ACID, Constraints, Database Migrations, Drizzle ORM, ORM, Prisma †, Sequelize †, TypeORM †, Knex †, SQLite, MySQL †, JSONB

### B12 · Database Performance & Scaling
Indexing, B-Tree Indexes, Query Optimization, `EXPLAIN ANALYZE`, N+1 Query Problem, Slow Query Analysis, Connection Pooling, Normalization, Denormalization, Partitioning, Sharding, Read Replicas, Vertical and Horizontal Scaling, Batch Operations, Keyset Pagination, Database Performance Tuning

### B13 · NoSQL, Caching & Search
Redis, Caching, Cache Invalidation, Cache Eviction (LRU), TTL, Cache Hit Rate, Redis Cluster †, Redis Replication †, MongoDB †, Mongoose †, NoSQL †, Document Databases †, Key-Value Stores †, BASE †, Graph Databases †, Elasticsearch †

---

## Architecture & Messaging

### B14 · Architecture & Design Principles
System Design, Microservices, Monolith-to-Microservices Migration, Service-to-Service Communication, API Gateway, Event-Driven Architecture, Domain-Driven Design †, Circuit Breaker, Opossum, Outbox Pattern, Saga Pattern, CQRS †, Pub/Sub, Scalability, High Availability, Fault Tolerance, Load Balancing, Horizontal Scaling, SOLID Principles, DRY, Singleton, Design Patterns, Dependency Injection, Separation of Concerns, Functional Programming, Object-Oriented Programming (OOP), Clean Code

### B15 · Messaging & Event Streaming
Apache Kafka, Kafka Topics, Partitions, Consumer Groups, Offsets, Producers and Consumers, Message Queues, RabbitMQ, Event Streaming, Asynchronous Processing, Idempotent Consumers, Dead Letter Queues, At-Least-Once Delivery, Message Ordering

---

## Cloud, DevOps & Quality

### B16 · Cloud Platforms
AWS, EC2, S3, RDS, CloudFront, Route 53, Lambda, ECS †, EKS †, IAM, VPC, CloudWatch, Elastic Beanstalk †, Cloud Deployment, Serverless †, Static Site Hosting, Environment Configuration

### B17 · Containers & Orchestration
Docker, Dockerfile, Docker Images, Docker Containers, Docker Compose, Multi-Container Applications, Kubernetes †, Pods †, Deployments †, Services †, Helm †, Container Registries

### B18 · CI/CD & Release Engineering
CI/CD, Continuous Integration, Continuous Deployment, GitHub Actions, Jenkins †, YAML Pipelines, Automated Builds, Automated Test Pipelines, Pull Request Checks, Environments (Local, Dev, QA, Staging, Production), Blue/Green Deployment †, Canary Release †, Feature Flags †, Rollbacks, Release Management, Linux, Shell Scripting

### B19 · Testing
Unit Testing, Integration Testing, End-to-End (E2E) Testing, Test-Driven Development (TDD), Behavior-Driven Development (BDD), Vitest, Jest, React Testing Library, Supertest, Playwright, Cypress, Cucumber, Gherkin, Mocking, Stubbing, Test Coverage, Code Coverage Reports, Snapshot Testing, Regression Testing, Smoke Testing, Headless Testing, API Testing, `@testing-library/user-event`

### B20 · Code Quality & Developer Tooling
Git, GitHub, Git Branching Workflow, Pull Requests, Code Review, Merge Conflict Resolution, ESLint, Prettier, SonarQube †, Linting, Static Analysis, Type Checking, Husky †, VS Code, IDE Shortcuts, Debugging, Claude Code, Postman, Jira, Confluence †

### B21 · Monitoring & Observability
Application Monitoring, Logging, Structured Logging, Distributed Tracing, OpenTelemetry, Metrics, Prometheus, Grafana, Sentry, Error Tracking, APM (Application Performance Monitoring), New Relic †, Splunk †, AWS CloudWatch, Alerting, Dashboards, Log Aggregation, Performance Profiling, Root-Cause Analysis, Incident Response

---

## AI / LLM

### B22 · LLM APIs & Prompting
Large Language Models (LLMs), Generative AI, Anthropic Claude API, Anthropic SDK, Claude, Prompt Engineering, System Prompts, Few-Shot Prompting, Chain-of-Thought, Structured Outputs, JSON Mode, Streaming Responses, Token Management, Context Windows, Temperature and Sampling, Multi-Turn Conversations, Conversation Memory, OpenAI API †, Gemini †

### B23 · Tools, Agents & MCP
Tool Use, Function Calling, Model Context Protocol (MCP), MCP Servers, MCP Clients, AI Agents, Agent Loop, Agentic Workflows, Prompt Chaining, Routing, Parallelization, Orchestrator-Workers, Human-in-the-Loop, Multi-Agent Systems, Context Engineering, Agent Memory, Workflow Automation

### B24 · RAG & Vector Search
Retrieval-Augmented Generation (RAG), Embeddings, Vector Databases, pgvector, Semantic Search, Similarity Search, Cosine Similarity, Chunking Strategies, Reranking, Metadata Filtering, Hybrid Search, Hugging Face Transformers, Document Ingestion, Pinecone †, Chroma †, Qdrant †, Knowledge Bases

### B25 · AI Frameworks & Orchestration
LangChain, LangGraph, LangSmith, Stateful Agents, Graph-Based Workflows, Checkpointing, Conditional Routing, Thread Management, Langfuse †, LlamaIndex †

### B26 · AI Evaluation, Safety & Cost
LLM Evaluation, LLM-as-Judge, Evaluation Datasets, Golden Datasets, Prompt Versioning, A/B Testing Prompts, LLM Observability, Tracing LLM Calls, Guardrails, Prompt Injection Defense, Jailbreak Resistance, PII Handling, Token Cost Optimization, Prompt Caching, Model Routing, Latency Optimization, Responsible AI, AI System Design

### B27 · AI-Assisted Development
Claude Code, AI-Assisted Development, Agentic Coding, `CLAUDE.md`, Claude Skills, AI Pair Programming, Prompting for Code, Code Generation Review, GitHub Copilot †, Cursor †

---

## Process

### B28 · Methodology & Collaboration
Agile, Scrum, Kanban, SDLC, Sprint Planning, Daily Standup, Sprint Review / Demo, Sprint Retrospective, Backlog Grooming, Story Points, User Stories, Acceptance Criteria, Definition of Done, Jira, Cross-Functional Collaboration, Stakeholder Communication, Code Review, Technical Documentation, Estimation, Production Support, Mentoring

---

## Quick counts

28 buckets, 450+ keywords. Entries marked † (about 20%) should not appear on a resume without real project experience.
