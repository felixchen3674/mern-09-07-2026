# Sample 2 · Banking: loan exception review platform

Test input for the Experience Builder. Paste everything below the line into the "Job details" box.
Header the student would format themselves: John Smith · Full-Stack Engineer · Meridian National Bank · Mar 2020 – Dec 2023 · Charlotte, NC

---

Dates: 2020 – 2023

Meridian is a regional retail bank. The project was an internal platform for loan officers and the credit risk team to handle "policy exceptions". That is when a loan application doesn't meet the normal lending rules and someone senior has to review and approve it, with a record of why. It used to be tracked in email and a shared Excel file, which auditors did not like because there was no clear trail of who approved what.

I was one of the main developers on a team of 6 (plus a QA and a product owner). I built most of the review queue screens and the backend services behind them.

Things I did:
- Built the review queue and case detail pages in React with TypeScript. Reviewers can filter, sort and bulk assign cases. Forms have a lot of validation rules. Used React Query for fetching and caching server data and Context for the logged-in user.
- Made the screens accessible (keyboard navigation, ARIA labels, tested with a screen reader) because the bank had an accessibility requirement.
- Node.js and Express services that exposed a GraphQL API (Apollo Server) to the frontend, plus some REST endpoints for the other internal systems.
- Authentication through the bank's single sign-on using OAuth 2.0 and JWT. Role-based access control: loan officer, credit analyst, risk manager, auditor each saw and could do different things.
- Every change to a case is written to an audit log table (who, what, when, old value, new value). Auditors could export it.
- When a case was approved or rejected, we published an event to Kafka so the downstream loan servicing system and the notification service could react.
- PostgreSQL for case data. Designed the schema for cases, reviewers, decisions and the audit trail.
- Deployed to AWS using Docker containers and Jenkins pipelines. Added logging and monitoring with CloudWatch and Splunk.
- Tests with Jest, Cypress for the main review flow. TDD for the approval rules.
- Took part in design reviews with the security team and compliance, and ran the sprint demos for the credit risk team.

No exact numbers, but the audit team signed off on it and the manual spreadsheet process was fully retired. Review time got noticeably shorter.
