# Sample 4 · Healthcare: clinic intake and visit summaries

Test input for the Experience Builder. Paste everything below the line into the "Job details" box.
Header the student would format themselves: John Smith · Senior Full-Stack Engineer · BrightPath Health · Aug 2023 – Present · Remote

---

Dates: 2023 – Present

BrightPath runs about 40 outpatient clinics. I'm on the team building an internal app for clinic staff (front desk, nurses, doctors): patient check-in, intake forms, and visit notes in one place. Before, the front desk used paper forms and typed them into the records system by hand, and nurses spent a lot of time writing up visit summaries after each appointment.

Team of 7 engineers, I'm one of the senior ones. I do both frontend and backend, plus some of the AI feature.

Frontend: React 19 and TypeScript, built with Vite. I built the digital intake form (it's a multi-step form that saves progress so a patient can stop and continue on a tablet), the front desk check-in queue, and the nurse's visit note editor. Wrote custom hooks for form state and autosave. Responsive because staff use tablets in the exam rooms. Followed WCAG guidelines since some patients have vision problems.

Backend: Node.js and Express APIs, PostgreSQL with Drizzle ORM. Authentication and role permissions for front desk, nurse and doctor, and since it is patient data we were careful about HIPAA: access logging, only exposing the fields each role needs, and encrypting sensitive columns. Added WebSockets so the check-in queue updates live when a patient checks in at the kiosk.

AI feature: I built a "draft visit summary" feature. The nurse's rough notes go to the Anthropic Claude API and it returns a draft summary that the nurse reviews and edits before saving. I wrote the prompts, used structured output so the result fits the form, and set up a small evaluation set of old (de-identified) notes to compare prompt versions. A nurse always has to approve it, nothing is saved automatically. Also looked at adding retrieval over clinic policy documents with embeddings and pgvector but that is still a prototype.

DevOps: Docker, GitHub Actions for CI, deployed on AWS. Playwright tests for the check-in and intake flows, Vitest for the rest. Sentry for errors.

Used Claude Code day to day for refactors and tests. Pair with the product designer weekly, and review other people's PRs.

Early numbers from the pilot: nurses said summaries take roughly half the time, and front desk intake data entry dropped a lot. I don't have exact figures.
