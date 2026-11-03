# [CANDIDATE NAME]

[Email] | [Phone]

---

## SUMMARY

- **Senior Full-Stack Software Engineer** with 8 years of experience designing and building React/TypeScript frontends and Node.js backends for enterprise platforms across retail/e-commerce, fintech/banking, and insurance domains. Proven track record architecting cloud-native microservices, optimizing complex operational workflows, and delivering secure, compliant backend services at scale.
- **Frontend & UI Development:** Building React applications using Hooks, Redux Toolkit and RTK Query for unified workflow and server-state caching, TanStack Query paired with Zustand for decoupled server- and UI-state management, and Context API for stable cross-cutting values. Specializing in performance optimization through Vite/Webpack code splitting and Core Web Vitals tuning, while maintaining WCAG/ARIA accessibility standards.
- **Backend & API Development:** Designing and shipping Node.js/Express services with RESTful and GraphQL BFF architectures. Experienced in event-driven design with Kafka and RabbitMQ, along with OAuth 2.0, JWT-based authentication, and role-based access control (RBAC) to support compliance-sensitive enterprise workflows, including integration with existing Java-based enterprise services.
- **Data Persistence & Synchronization:** Working across PostgreSQL (transactional/relational data), MySQL (legacy system integration), MongoDB (semi-structured data), and Redis (caching) to ensure data consistency and low-latency retrieval across distributed services and cross-system integrations.
- **Testing & DevOps:** Establishing automated testing strategies using Jest, React Testing Library, Cypress, Playwright, Axe DevTools; implementing CI/CD pipelines with GitHub Actions, AWS CodeBuild, Jenkins, and GitLab CI. Deploying cloud infrastructure on AWS (ECS/Fargate, Lambda, API Gateway, EC2, S3, CloudFront, CloudWatch) with Docker and Terraform, supported by Sentry, OpenTelemetry, Datadog, and ELK Stack observability.
- **Team Leadership & Cross-functional Collaboration:** Partnering with product, compliance, and operations stakeholders within Agile/Scrum delivery cycles. Mentoring engineers on frontend state-management architecture and React/TypeScript best practices, leading technology-selection decisions, and integrating applied GenAI/RAG capabilities into operational workflows.

---

## TECHNICAL SKILLS

- **Languages:** JavaScript (ES6+), TypeScript, Python
- **Frontend & Web:** React, React Router, HTML5, CSS3, SASS, Bootstrap, Vite, Webpack, Babel, AG-Grid, D3.js, Storybook, Ant Design-style component systems, Core Web Vitals, Lighthouse, WCAG/ARIA accessibility standards
- **React Core:** Functional Components, React Hooks (useEffect, useMemo, useCallback), Custom Hooks, Controlled Components, Context API
- **State Management:** Redux, Redux Toolkit, RTK Query, TanStack Query / React Query, Zustand
- **Backend & APIs:** Node.js, Express.js, RESTful APIs, GraphQL (BFF pattern), OpenAPI/Swagger, OAuth 2.0, JWT, Role-Based Access Control (RBAC), Kafka, Amazon SQS/SNS, RabbitMQ
- **Database:** PostgreSQL (transactional/relational data), MySQL (legacy system integration), MongoDB (semi-structured data), Redis (caching), Prisma ORM
- **Testing:** Unit Testing, Integration Testing, End-to-End Testing, TDD, Jest, Vitest, React Testing Library, Cypress, Playwright, Axe DevTools, MSW
- **DevOps & Infrastructure:** AWS (ECS/Fargate, Lambda, API Gateway, EC2, S3, CloudFront, CloudWatch), Docker, Kubernetes, Terraform, CI/CD (GitHub Actions, AWS CodeBuild, Jenkins, GitLab CI/CD), Sentry, OpenTelemetry, Datadog, ELK Stack, Splunk
- **Tools & Methodology:** Agile/Scrum, Git, Postman, RAG, LLM API Integration

---

## PROFESSIONAL EXPERIENCE

### Chewy — Seattle, WA
**Senior Software Engineer** | Jan 2025 – Present

*System Context:* Lead full-stack development for Chewy Vet Care Clinical Operations & Practice Management Platform, an internal enterprise system supporting expansion into multi-location veterinary clinic operations, connecting appointment scheduling, pet medical records, prescription workflows, clinic inventory, and billing across 20+ clinic locations.

- Architect a cloud-native microservices platform using React, TypeScript, Node.js, AWS ECS/Fargate, Lambda, API Gateway, Docker, and Terraform, defining service boundaries and deployment strategy across 20+ clinic locations and cutting new-clinic onboarding effort by 35%.
- Engineer a GraphQL BFF layer that aggregates clinic, pharmacy, inventory, and customer-portal data behind Kafka event streams and Redis caching, replacing scattered REST calls with a single aggregated query and cutting cross-system lookup time by 40%.
- Orchestrate a workflow state machine spanning appointment, visit, prescription, billing, and fulfillment statuses using Kafka domain events, reducing manual status reconciliation by 40% across clinic, pharmacy, and customer care teams.
- Integrated a RAG-enabled internal knowledge-retrieval workflow with LLM API support for clinic operations documentation, surfacing relevant policies, prescription-handling procedures, and troubleshooting steps for customer care, front-desk, and pharmacy operations teams, improving cross-team support resolution speed by 20%.
- Modernize the appointment scheduling module's state management by migrating to Redux Toolkit for global workflow state and RTK Query for server-state caching, improving scheduling workflow efficiency by 25%.
- Harden platform security by implementing RBAC, OAuth 2.0, JWT, API Gateway policies, and multi-location access controls for veterinarians, technicians, pharmacy staff, and regional managers, reducing permission-related support tickets by 30%.
- Deliver pet medical record and care plan features using PostgreSQL for relational data, MongoDB for semi-structured clinical notes, S3 for attachments, and WCAG/ARIA design tokens, improving clinical note completion speed by 25% and raising automated accessibility check coverage to 95%+.
- Contribute reusable components and accessibility patterns to the team's internal React component library, documenting them in Storybook with shared design tokens and covering them with fast Vitest watch-mode tests, reducing duplicate component implementations by 30% across the clinic operations, pharmacy, and customer-portal frontends.
- Optimize frontend performance with Vite code splitting, CloudFront, and Core Web Vitals tuning, improving dashboard load time by 35%.
- Instrument production services with Sentry, CloudWatch, and OpenTelemetry-based distributed tracing, reducing incident triage time by 30%.
- Automate quality gates across the delivery pipeline with Playwright end-to-end tests, Jest/React Testing Library unit tests, Axe DevTools accessibility checks, and GitHub Actions/AWS CodeBuild CI/CD with Terraform validation, raising automated test coverage to 85%+ and cutting regression defects by 30%.
- Set technical direction across the clinic operations platform by establishing service-boundary and API-design standards, leading architecture reviews, conducting code reviews, and partnering cross-functionally with product, pharmacy, inventory, and customer care leadership within Agile/Scrum delivery cycles.

### SoFi — Seattle, WA
**Full-Stack Software Engineer** | Oct 2023 – Jan 2025

*System Context:* Contributed to the Fraud & AML Investigation Operations Platform, an internal system for fraud analysts and AML compliance teams to investigate suspicious activity across banking, lending, and account workflows, processing 50K+ monthly risk events.

- Built Node.js/Express.js services for fraud case lifecycle management, AML alert disposition, and KYC review status using RabbitMQ-driven escalation routing on a REST-first service architecture, supporting 50K+ monthly risk events.
- Re-architected the investigation console's server-state layer with TanStack Query/React Query to cache and synchronize fraud case data, AML alert queues, and risk score dashboards, cutting average analyst case-triage time from 22 minutes to under 15 minutes on high-priority queues.
- Introduced Zustand to manage client-side UI state such as filters, panel layout, and analyst workspace preferences, decoupling it from the server-state layer and cutting filter/workspace-related UI bugs by 25%.
- Synchronized fraud investigation data across PostgreSQL for fraud-case records, a legacy MySQL-based KYC system, and Redis for risk-profile caching, using Prisma ORM for typed data access in internal investigation services while keeping legacy KYC integrations behind REST-based adapters, reducing analyst lookup time by 38% during peak review periods.
- Implemented OAuth 2.0, JWT, and RBAC-based authentication and authorization to enforce fine-grained role permissions across 8+ internal user groups handling sensitive fraud, AML, and PII workflows.
- Strengthened release quality with Cypress end-to-end tests alongside Jest and React Testing Library coverage for fraud case queues, AML alert workflows, and risk dashboard components, reducing post-merge defects by 22%.
- Streamlined deployment workflows with GitHub Actions, Docker, AWS Lambda, and API Gateway, cutting deployment rollback incidents by 29% across risk operations services.
- Rolled out Datadog monitoring across fraud and AML services for real-time alerting and SLA tracking, reducing mean-time-to-detection for service degradations by 30%.
- Refactored operational dashboards with pagination, API response normalization, and D3.js visualizations, improving dashboard load time from 4.6s to 2.4s while maintaining accessibility standards.
- Partnered with Fraud Operations, AML Compliance, Risk Engineering, and Product teams in Agile/Scrum cycles while mentoring junior engineers on React Query/Zustand architecture patterns, supporting investigation workflows for 150+ users.

### SHEIN — Shenzhen, China
**Full-Stack Developer** | Aug 2020 – Sep 2023

*System Context:* Contributed to the Supplier Collaboration & Production Visibility Platform, an internal supply chain operations system used by supplier operations, production planning, merchandising, quality control, and vendor management teams to centralize supplier capacity, sample development, production scheduling, quality inspection, delivery risk alerts, and supplier performance analytics during fast-turnaround apparel production cycles.

- Built production visibility dashboards in React, Redux, and React Router, incrementally adopting TypeScript across selected workflow modules and integrating REST API responses from MySQL-backed production services and Redis-cached dashboard endpoints, giving 600+ internal users a unified view of supplier capacity, sample progress, production status, and delivery risk signals.
- Converted manual supplier-tracking workflows into reusable frontend pages using Context API, REST APIs, and Ant Design-style internal components, reducing Excel-based status follow-ups by 35% across production planning and vendor management teams.
- Enhanced large data-table experiences for supplier schedules, QC records, and production orders using AG-Grid with pagination, filter persistence, and column configuration, cutting average task completion time for operations users by 22%.
- Developed Node.js and Express.js REST endpoints with OpenAPI/Swagger documentation for supplier profiles, production tasks, QC review records, and delivery-risk summaries, supporting 20K+ monthly supplier and production workflow records.
- Optimized high-frequency dashboard queries with Redis caching, API pagination, and normalized REST response patterns, reducing average supplier-performance and production-status API latency by 37% during peak planning periods.
- Enabled RabbitMQ-based asynchronous notifications for production status changes, QC failures, and delivery-risk alerts, reducing manual follow-up delays across supplier operations and production planning teams.
- Validated high-risk user flows by writing tests ahead of implementation with Jest, React Testing Library, and Cypress smoke tests, covering supplier schedule updates, QC submissions, and file uploads with 70%+ test coverage for core frontend modules.
- Tuned Webpack and Babel configurations, lazy-loaded dashboard modules, and applied Lighthouse-guided rendering fixes, reducing initial page load time by 34% on large production visibility dashboards.
- Supported production releases through GitLab CI/CD, Jenkins, Docker-based builds, Sentry error tracking, and ELK Stack log review, helping the team maintain 2–3 internal frontend releases per week while cutting regression defects by 20%.
- Partnered with product managers, backend engineers, QA, and supplier/quality-control teams in Agile/Scrum workflows to translate supply chain requirements into frontend user flows, dashboard KPIs, and sprint delivery tasks.

### Ping An Insurance — China
**Frontend Developer** | Sep 2018 – Jun 2020

*System Context:* Contributed to the Intelligent Claims Operations Platform, an internal insurance operations system used by claims adjusters, fraud investigators, QA reviewers, branch managers, and customer service escalation teams to manage claims queues, case status tracking, manual review tasks, fraud risk flags, SLA visibility, quality review records, and settlement workflow updates.

- Built a React Class Components and Redux-based claims operations dashboard using JavaScript, HTML5, CSS3, SASS, and Bootstrap for claims queues, case status tracking, manual review tasks, fraud risk flags, and SLA visibility, cutting average manual case-lookup time from 9 minutes to 5 minutes.
- Integrated Node.js/Express-based REST APIs for claims case search, workflow status updates, image damage assessment results, branch-level performance reports, and quality review records, supporting 30K+ monthly claims workflow actions across internal operations users.
- Implemented JWT-based authentication, RBAC permission checks, and frontend API security practices for claims adjusters, fraud investigators, QA reviewers, branch managers, and customer service escalation teams across 6+ internal user roles.
- Worked with MySQL-backed claims records and cached dashboard responses through REST API integrations, improving average case-detail retrieval latency by 35%.
- Refactored duplicated Redux store updates and optimized large-table rendering for claims queues, decreasing initial dashboard load time from 5.2s to 3.1s and improving claims queue interaction responsiveness by 32%.
- Established automated frontend testing with Jest, Enzyme, early React Testing Library adoption, and BrowserStack cross-browser validation, raising test coverage for claims queue, review workflow, and RBAC modules to 72% and cutting regression defects by 27%.
- Improved Jenkins-based CI workflows for internal claims frontend modules, reducing manual release steps and improving release consistency across staging environments.
- Monitored production issues using Splunk logs and partnered with backend and QA teams to triage claims workflow errors, cutting recurring UI/API integration incidents by 24% through improved logging and error handling.
- Coordinated with claims operations, fraud investigation, QA, customer service escalation, and branch operations teams in Agile/Scrum cycles to deliver React/Redux workflow screens covering SLA metrics, audit-trail fields, and dashboard KPIs for 120+ internal users.

---

## EDUCATION

- **University of Washington** — Master of Science | Seattle, WA
- **Tsinghua University** — Master of Design | China
- **Beijing Forestry University** — Master of Engineering | China
