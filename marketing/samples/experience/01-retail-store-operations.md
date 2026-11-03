# Sample 1 · Retail: store inventory and markdown tool

Test input for the Experience Builder. Paste everything below the line into the "Job details" box.
Header the student would format themselves: John Smith · Senior Software Engineer · Northfield Retail Group · Jan 2022 – Present · Chicago, IL

---

Dates: 2022 – Present

I worked at a big department store chain, around 400 stores. The project was an internal web app for store managers and the merchandising team to see inventory levels and approve price markdowns. Before this, managers emailed spreadsheets back and forth and the numbers were always a day or two old. About 3,000 people used it, mostly store managers on tablets and laptops.

My role: I was one of 5 engineers, and I owned the inventory dashboard and the markdown approval workflow, front to back.

What I built:
- Inventory dashboard in React and TypeScript with a big filterable table (search by store, department, SKU). The table got slow with 10k+ rows so I added list virtualization and debounced the search box. Used React Router for the pages and Axios for API calls.
- Markdown approval flow: a manager submits a markdown request, the regional director approves or rejects it. Built it as a multi-step form with validation, and protected routes so only the right roles see the approval pages.
- Node.js and Express REST API for inventory and markdown requests. Role-based access, JWT auth. Wrote the endpoints with pagination because the inventory list was huge.
- PostgreSQL database. Added indexes after the inventory search was slow, and rewrote a couple of queries that were doing full table scans. Used Redis to cache the store and department lookups.
- Nightly job that pulls stock counts from the warehouse system into our database.
- Deployed on AWS (EC2 and S3, CloudFront for the frontend) with Docker. GitHub Actions pipeline that ran lint, tests and deploy.
- Wrote unit tests with Jest and React Testing Library, and a few Playwright tests for the markdown approval flow.
- Worked in 2-week sprints with product and the merchandising team, did code reviews for the other devs, and onboarded two new engineers.

Results I remember: the dashboard page load went from about 8 seconds to under 2 seconds. Managers stopped sending the spreadsheets. Markdown approvals that took days could be done the same day.
