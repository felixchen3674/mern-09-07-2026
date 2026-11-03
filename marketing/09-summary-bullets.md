# Summary Bullets

The areas the **Summary Builder** asks the AI to cover, in order. The summary's first line (title, years of experience, industries) is **not** generated: each student writes it. Everything below it is general capability that any developer who finished the training can claim, so every student gets a similar set of bullets.

Each area maps onto buckets of [07-technical-skills-bank.md](07-technical-skills-bank.md). The AI may only name technologies from those buckets (plus anything the student types into the optional extra-info box).

The builder reads the `### N · Label` headings and the `Key: value` lines under each (`Bullets`, `Buckets`, `Covers`, and an optional `Split`). `Split` fixes the exact label and focus of each bullet when an area has more than one. Keep that shape.

---

### 1 · Frontend
Bullets: 2
Buckets: S01, S02, S03
Covers: React and TypeScript applications, component architecture, state management, responsive and accessible UIs, performance
Split: Frontend Development = building React and TypeScript applications (languages, React, routing, build tooling, HTTP clients); Frontend Architecture & Quality = responsive design, SPAs, component-based architecture, state management, accessibility, performance, cross-browser compatibility

### 2 · Backend & APIs
Bullets: 2
Buckets: S04, S05, S07
Covers: Node.js and Express services, REST and GraphQL APIs, authentication, microservices, event-driven messaging
Split: Backend Development = Node.js and Express services, REST and GraphQL APIs, real-time communication, API documentation; Backend Architecture & Security = authentication and authorization, application security, microservices, event-driven and messaging systems

### 3 · Data
Bullets: 1
Buckets: S06
Covers: relational databases and caching, data modeling, query optimization

### 4 · Cloud Architecture
Bullets: 1
Buckets: S08, S11
Covers: AWS services, containers and Linux, cloud architecture, monitoring and observability

### 5 · DevOps & Testing
Bullets: 1
Buckets: S09, S10
Covers: Git workflows, CI/CD pipelines, automated testing at every level, code quality tooling

### 6 · Generative AI & LLMs
Bullets: 1-2
Buckets: S12, S13, S14, S15
Covers: LLM API integration, prompt engineering, RAG and vector search, agents and tool use, evaluation, AI-assisted development
Split: Generative AI & LLMs = LLM applications, prompt engineering, tool use, MCP, agents, AI-assisted development (always write this one); RAG & AI Engineering = retrieval, embeddings, vector search, AI frameworks, evaluation (optional second bullet)

### 7 · Collaboration & Leadership
Bullets: 1
Buckets: S16
Covers: Agile/Scrum delivery, code reviews, cross-functional work, design discussions, mentoring
