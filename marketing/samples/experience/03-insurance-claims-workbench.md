# Sample 3 · Insurance: claims adjuster workbench

Test input for the Experience Builder. Paste everything below the line into the "Job details" box.
Header the student would format themselves: John Smith · Software Engineer · Harbor Mutual Insurance · Jun 2018 – Feb 2022 · Hartford, CT

---

Dates: 2018 – 2022

Harbor Mutual sells auto and home insurance. I worked on the claims adjuster workbench, an internal tool that adjusters use all day to handle claims after a customer reports an accident or damage. Before, adjusters had to jump between four or five old systems to see the policy, the claim notes, photos, and payments. The workbench put it all on one screen. Around 600 adjusters used it.

I joined as a mid-level developer, then became the person who looked after the claim documents and payments parts. We were a team of 8 across two time zones, with an offshore QA team.

Frontend was React (we moved from class components to hooks and function components while I was there). I built the claim timeline, the document viewer where adjusters upload and preview photos and PDFs, and the payment request screen. For state we used Redux Toolkit. I also set up shared components so the different screens looked the same.

Backend was Node.js with Express. I wrote the REST APIs for documents, notes and payment requests, and an integration layer that called the legacy policy system (a mainframe, through a SOAP service) and converted the data into JSON for our frontend. Photos and PDFs went to S3 with pre-signed URLs, so the files never passed through our servers.

Database: MongoDB for claim notes and documents metadata because the shape varied a lot between auto and home claims, and PostgreSQL for payments since that needed transactions. Payments over a certain amount needed a second approver, and I built that approval step.

Ops: Docker, Jenkins builds, deployed to AWS. Wrote Jest tests and some Cypress tests. Fixed a bunch of production bugs and was on the support rotation every few weeks.

I also mentored two junior developers and did most of the code reviews for the payments code. Joined the planning meetings with the claims business people to figure out what adjusters needed.

One number: the photo upload change made uploads for large claims about 3 times faster. Not sure about the rest.
