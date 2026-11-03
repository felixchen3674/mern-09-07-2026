# Resume Bullet Bank

**Pattern:** strong verb + what you built + tools + measurable result.
Every `[bracket]` is a placeholder. **Fill in only real numbers from your own project.** If you have no metric, drop it rather than invent one.

Verbs to rotate: Built · Designed · Implemented · Developed · Optimized · Integrated · Automated · Reduced · Migrated · Secured · Deployed · Instrumented · Evaluated

---

## Frontend (React / TypeScript)

- Built a [type of app] with **React 19** and **TypeScript**, using hooks (`useState`, `useEffect`, `useReducer`) and custom hooks to share logic across [N] components.
- Implemented **client-side routing** with React Router, including protected routes and URL-driven filters via `useSearchParams`.
- Managed global state with the **Context API**, removing prop drilling across [N] component levels.
- Integrated REST APIs using **Axios** with interceptors for auth headers and centralized error handling; added loading and error states.
- Built **controlled forms** with validation, reducing invalid submissions by [X%].
- Improved list performance with **virtualization (react-window)**, memoization, and **code splitting**, cutting initial render time from [X] to [Y].
- Improved accessibility with **semantic HTML, ARIA attributes, and keyboard navigation**, targeting WCAG compliance.
- Wrote component tests with **Vitest and React Testing Library**, reaching [X%] coverage.

## Backend (Node.js / Express / PostgreSQL)

- Designed and built a **RESTful API** with **Node.js, Express, and TypeScript** exposing [N] endpoints for [domain].
- Structured the service in a **Controller → Service → Repository** layered architecture, with centralized error-handling middleware and custom error classes.
- Validated request payloads with **Zod**, returning consistent error responses with correct HTTP status codes.
- Designed a normalized **PostgreSQL** schema ([N] tables) with foreign keys, constraints, and transactions to protect data integrity.
- Reduced query time from [X ms] to [Y ms] by adding **indexes**, fixing an **N+1 query**, and analyzing plans with `EXPLAIN ANALYZE`.
- Implemented **cursor-based pagination** to serve [N] records without full table scans.
- Documented the API with **Swagger/OpenAPI**.
- Added a **Redis** cache layer, raising cache hit rate to [X%] and cutting average response time by [Y%].

## Auth & Security

- Implemented **JWT authentication** with access/refresh tokens, **bcrypt** password hashing, and **role-based access control (RBAC)** middleware.
- Hardened the API against **XSS, CSRF, and SQL injection** using input validation, parameterized queries, secure cookies, and **rate limiting**.
- Configured **CORS** policies and kept secrets in environment variables rather than source control.

## Architecture (Microservices / Events / Real-time)

- Decomposed a monolith into [N] **microservices** behind an **API Gateway**, communicating via REST and **Kafka** events.
- Built an **event-driven** order/notification flow with **Kafka** topics and consumer groups, decoupling [service A] from [service B].
- Implemented real-time features with **WebSockets / Socket.IO** supporting [N] concurrent connections.
- Built a **GraphQL** API (Apollo) that removed over-fetching and consolidated [N] REST calls into one query.

## Cloud, DevOps & Testing

- Containerized [N] services with **Docker** and orchestrated the local stack with **Docker Compose**.
- Deployed the application to **AWS** (EC2, S3, RDS), with static assets served through **CloudFront**.
- Built a **CI/CD pipeline** with **GitHub Actions** that runs lint, type-check, and tests on every pull request.
- Wrote unit and integration tests with **Vitest/Jest** and **Supertest**, and E2E tests with **Playwright**, covering [N] critical user flows.
- Enforced code quality with **ESLint, Prettier**, and code-review checklists.
- Added **OpenTelemetry** tracing and **Grafana/Prometheus** dashboards to monitor latency and error rates; used **Sentry** for error tracking.

## AI / LLM

- Built an LLM-powered [feature] using the **Anthropic Claude API** with engineered prompts and **structured outputs**, handling [use case].
- Implemented **tool use / function calling** and an **agent loop** so the model can [action, e.g. query the database or call internal APIs].
- Exposed [tools/data] through a **Model Context Protocol (MCP)** server so any MCP-compatible client can use them.
- Built a **RAG pipeline** with document chunking, embeddings, and **pgvector** semantic search, improving answer accuracy on [N] test questions from [X%] to [Y%].
- Orchestrated multi-step agent workflows with **LangGraph** (stateful graph, conditional routing, human-in-the-loop checkpoints).
- Built an **evaluation harness** (code checks, yes/no checks, **LLM-as-judge**) with **LangSmith** to compare prompt versions before release.
- Defended against **prompt injection** with input/output guardrails, and cut token costs by [X%] through caching and model routing.
- Used **Claude Code** for AI-assisted development (planning, refactoring, test generation), with project conventions captured in `CLAUDE.md`.

## Process & Collaboration

- Worked in **Agile/Scrum** sprints: daily standups, sprint planning, demos, and retrospectives; estimated work in **story points** in **Jira**.
- Followed a **Git feature-branch + pull-request workflow**; reviewed [N] PRs for correctness, readability, and test coverage.
- Collaborated with [UX designers / QA / DevOps] to deliver [feature] on schedule.

---

## Project-level examples (adapt to your real capstone)

**Help-desk ticketing app** *(React 19, TypeScript, Vite, Axios, Express, Drizzle ORM, Swagger)*
- Built ticket list, create-ticket form, dashboard, and login flow in React with filtering, pagination, and SLA countdowns.
- Implemented ticket controller and service logic in a layered Express API, enforcing valid status transitions and SLA deadlines by priority.
- Documented the REST API with OpenAPI served through Swagger UI.

**AI pizza-ordering assistant** *(Claude API, LangGraph, LangSmith, evals)*
- Built an agent with tool calling, then improved it from v1 (prompt-only) to v2 (guardrails + validation), measured with code, yes/no, and LLM-judge evaluators.

## Do not write

- "Responsible for…" or "Worked on…" (no result, no ownership).
- Invented percentages or user counts.
- Tools you only read about. See [01-tech-stack-by-tier.md](01-tech-stack-by-tier.md).
