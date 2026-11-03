# Tech Stack by Tier

**Tier 1 — Hands-on:** we wrote code with it in lectures/labs/projects. Safe as a headline skill.
**Tier 2 — Working knowledge:** demoed or configured, understood end to end, but less repetition. Safe in a skills list; be ready for "how did you use it?".
**Tier 3 — Conceptual:** covered as interview questions or comparison topics. List only under "Familiar with", or omit.

"Day" refers to the curriculum day (see `curriculum/src/curriculum.ts`).

---

## Frontend

| Technology | Tier | Day(s) | Notes for the resume |
|---|---|---|---|
| HTML5, semantic HTML | 1 | 1 | Add "accessibility (WCAG, ARIA)" if you did the a11y work |
| CSS3, Flexbox, CSS Grid, responsive design, media queries | 1 | 1 | |
| JavaScript (ES6+) | 1 | 3–5 | Closures, async/await, Promises, modules, destructuring |
| TypeScript | 1 | 2 | Generics, union/intersection types, utility types |
| React 19 | 1 | 6–10 | Hooks, function components, controlled forms |
| React Hooks (useState, useEffect, useRef, useReducer, useMemo, useCallback, custom hooks) | 1 | 7–9, additional | |
| React Router (v7) | 1 | 10 | Protected routes, `useParams`, `useSearchParams` |
| Context API | 1 | 10 | |
| Axios, Fetch API | 1 | 5, 9 | Interceptors, AbortController |
| Vite | 1 | all | Tooling used by every project |
| Vitest, React Testing Library | 1 | 21 | |
| react-window (list virtualization) | 2 | additional | Pair with "performance optimization" |
| Web Vitals (LCP, INP, CLS), Lighthouse | 2 | 23 | |
| Redux / Redux Toolkit | 3 | questions | Flux, slices, thunk, persist |
| Zustand | 3 | questions | |
| React Query (TanStack Query) | 3 | questions | queryKey, caching, invalidation, optimistic updates |
| Tailwind CSS, Sass/SCSS, CSS Modules, styled-components | 3 | questions | Add only if used in a real project |
| Material UI / Ant Design / shadcn | 3 | questions | |
| Next.js (SSR, SSG, ISR, App Router) | 3 | questions | |
| Angular, RxJS, NgRx | 3 | questions | |
| React Native, Expo | 3 | questions | |
| Storybook | 3 | questions | |
| Webpack | 3 | questions | Vite vs Webpack comparison |
| Microfrontends / Module Federation | 3 | questions | |
| Chart.js / D3 / Highcharts | 3 | questions | |

## Backend

| Technology | Tier | Day(s) | Notes for the resume |
|---|---|---|---|
| Node.js | 1 | 11 | Event loop, libuv, streams, `worker_threads`, `cluster` |
| Express.js | 1 | 11, 13 | Middleware, error handling, CORS |
| REST API design | 1 | 11, 13 | Status codes, idempotency, pagination, versioning |
| Layered architecture (Controller / Service / Repository) | 1 | 13 | |
| TypeScript on the backend | 1 | 11–13 | |
| PostgreSQL | 1 | 12, 14 | Joins, transactions, indexing, `EXPLAIN ANALYZE` |
| SQL (DDL, DML, joins, aggregates, window queries) | 1 | 12, 14 | See `additional/backend/full-sql` |
| `pg` driver / raw SQL | 1 | 12–14 | |
| Query optimization (indexes, N+1 fixes, pagination) | 1 | 14 | |
| Drizzle ORM | 2 | final-eval project | Mention only if used in your own work |
| Zod (schema validation) | 1 | 13, 27 | |
| Swagger / OpenAPI | 2 | final-eval project | |
| JWT, bcrypt, session auth | 1 | 16 | Access and refresh tokens, RBAC |
| OAuth 2.0, SSO | 3 | 16 / questions | |
| Security (XSS, CSRF, CSP, SQL injection, CORS, rate limiting) | 2 | 16 | |
| Microservices | 2 | 17 | API Gateway, service-to-service communication |
| Kafka | 2 | 18 | Topics, partitions, consumer groups, offsets |
| RabbitMQ | 2 | 18 | |
| Event-driven architecture, Pub/Sub, Outbox, Sagas | 2 | 18, additional | |
| Redis | 2 | 14 / 17–18 | Caching, eviction, cache hit/miss |
| WebSockets (`ws`), Socket.IO | 1–2 | 19 | |
| GraphQL, Apollo | 2 | 19 | Overfetching and underfetching, schema, resolvers |
| System design | 2 | 20 | |
| Circuit breaker (Opossum) | 3 | questions | |
| NestJS | 3 | questions | Modules, controllers, providers |
| Java, Spring Boot | 3 | questions | Don't list unless you've built something |
| MongoDB / NoSQL / Mongoose | 3 | questions | Compared against SQL |

## DevOps, Cloud, Testing, Monitoring

| Technology | Tier | Day(s) | Notes for the resume |
|---|---|---|---|
| Git, GitHub, pull requests, branching workflow | 1 | all | |
| Docker, Docker Compose | 2 | 15, 22 / `docker-compose.yml` | Dockerfile, images vs containers |
| AWS: EC2, S3, RDS | 2 | 15 | |
| AWS: Lambda, CloudFront, Route 53, CloudWatch, ECS/EKS | 3 | 15 / 23 | |
| Kubernetes | 3 | questions | Pods, deployments, services |
| CI/CD, GitHub Actions | 2 | 22 | |
| Jenkins | 3 | 22 | |
| Deployment strategies (Blue/Green, Canary), feature flags | 3 | 22 | |
| ESLint, Prettier | 1 | 21 | |
| SonarQube | 3 | 21–22 | |
| Vitest, Jest, Supertest | 1 | 21 | Unit and integration testing |
| React Testing Library | 1 | 21 | |
| Playwright | 2 | 21 | E2E |
| Cypress, Cucumber (BDD) | 2–3 | 21 | |
| TDD | 2 | 21 | |
| OpenTelemetry (tracing) | 2 | 23 | |
| Prometheus, Grafana | 2 | 23 | |
| Sentry | 2 | 23 | |
| New Relic, Splunk, CloudWatch | 3 | 23 | |
| Agile, Scrum, Jira, sprint ceremonies, SDLC | 2 | 24 | |

## AI / LLM

| Technology | Tier | Day(s) | Notes for the resume |
|---|---|---|---|
| Claude Code, AI-assisted development | 1 | 26 | Agentic coding workflows, `CLAUDE.md`, skills |
| Anthropic Claude API / SDK (`@anthropic-ai/sdk`) | 1 | 27 | Streaming, system prompts, structured output |
| Prompt engineering | 1 | 27 | Few-shot, chain-of-thought, structured outputs |
| Tool use / function calling | 1 | 28 | |
| Model Context Protocol (MCP) | 1–2 | 28 | Building or consuming MCP servers |
| Agent loop, agentic workflows | 1–2 | 28, 30 | Prompt chaining, routing, parallelization |
| RAG (Retrieval-Augmented Generation) | 1–2 | 29 | Chunking, embeddings, retrieval, reranking |
| Embeddings (Hugging Face Transformers) | 2 | 29 | |
| Vector databases: pgvector | 2 | 29 | |
| Vector databases: Pinecone, Chroma, Qdrant | 3 | 29 | |
| Advanced RAG (reranking, metadata filtering, chunking strategy) | 2 | additional | |
| Context engineering | 2 | 30 | |
| LangChain | 2 | 31 | |
| LangGraph (stateful agents) | 2 | 31, 34 | |
| LangSmith (tracing and evals) | 2 | 31–32 | |
| LLM evaluation, LLM-as-judge, test datasets | 2 | 32 | |
| Observability and tracing for LLM apps (Langfuse) | 2–3 | 32 | |
| LLM security: prompt injection, guardrails | 2 | 33 | |
| Cost and latency optimization (caching, model routing, token budgets) | 2 | 33 | |
| AI system design | 2 | 34 | |
| OpenAI API | 3 | various | Compared against Anthropic; list only if used |

## Practices and soft skills (all tiers apply)

Code review, Git workflow, Agile/Scrum, SOLID, DRY, design patterns (Singleton, DI), debugging in production, cross-functional collaboration (PO, PM, QA, UX, DevOps), estimating with story points.
