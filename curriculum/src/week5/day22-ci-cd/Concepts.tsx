import DayNav from "../../components/DayNav";

export default function Concepts() {
  return (
    <div className="page concepts-page">
      <title>Day 22 — Concepts Reference</title>
      <DayNav day="day22-ci-cd" current="concepts" />
      <h1>Day 22 — Concepts Reference</h1>
      <p className="intro">
        A reference list of concept questions — try answering each one before revealing it.
      </p>

      <section id="tier-1">
        <h2>1. Basic concepts</h2>
        <p className="tier-note">
          Foundational stuff — straight from the lecture and/or comes up constantly in interviews. If
          you&apos;re shaky on any of these, that&apos;s the priority to fix.
        </p>

        <details>
          <summary>What problem does CI/CD solve?</summary>
          <div className="answer">
            <p>
              Shipping by hand is slow, error-prone, and depends on one person remembering every step — tests get skipped, branches collide late, and releases are rare and risky. CI/CD writes those steps down as a pipeline that a machine runs the same way on every change.
            </p>
          </div>
        </details>

        <details>
          <summary>What&apos;s the difference between CI and CD?</summary>
          <div className="answer">
            <ul>
              <li>
                <strong>CI (continuous integration):</strong> every change is merged into <code>main</code> often and built and tested automatically, so conflicts and breakages surface in minutes.
              </li>
              <li>
                <strong>CD (continuous delivery / deployment):</strong> the code that passed CI is shipped to environments automatically.
              </li>
            </ul>
          </div>
        </details>

        <details>
          <summary>What&apos;s the difference between continuous delivery and continuous deployment?</summary>
          <div className="answer">
            <ul>
              <li>
                <strong>Delivery:</strong> every green build is <em>ready</em> to release, and a human approves the final step to production.
              </li>
              <li>
                <strong>Deployment:</strong> every green build goes to production automatically.
              </li>
            </ul>
            <p>The pipeline is the same — the difference is whether a person is in the loop.</p>
          </div>
        </details>

        <details>
          <summary>Walk me through your workflow when you receive a ticket.</summary>
          <div className="answer">
            <ol>
              <li>Take the ticket in sprint planning.</li>
              <li>Clone the repo and create a feature branch named after the ticket.</li>
              <li>Commit, push, and open a Pull Request into <code>main</code> — this triggers the CI checks.</li>
              <li>Get the checks green and the required approvals (usually two).</li>
              <li>Merge — and the pipeline deploys it onward.</li>
            </ol>
          </div>
        </details>

        <details>
          <summary>What is a Pull Request, and what does a reviewer check?</summary>
          <div className="answer">
            <p>
              A PR is a request to merge your branch into <code>main</code>, and it is the gate where automated checks and human review happen. The reviewer first confirms the pipeline is green, then checks the change does what the ticket says, is readable and maintainable, and follows the team&apos;s conventions.
            </p>
          </div>
        </details>

        <details>
          <summary>What problem does Docker solve?</summary>
          <div className="answer">
            <p>
              &quot;It works on my machine.&quot; An app depends on its Node version, libraries, OS, and settings, and any difference between laptops and servers becomes a bug. Docker packages the app together with its environment so the same package runs identically everywhere.
            </p>
          </div>
        </details>

        <details>
          <summary>What&apos;s the difference between a Dockerfile, an image, and a container?</summary>
          <div className="answer">
            <ul>
              <li>
                <strong>Dockerfile:</strong> the recipe — step-by-step build instructions.
              </li>
              <li>
                <strong>Image:</strong> the built, read-only package that recipe produces.
              </li>
              <li>
                <strong>Container:</strong> a running instance of an image — many containers can start from one image.
              </li>
            </ul>
          </div>
        </details>

        <details>
          <summary>What does Docker Compose do, and why is it useful?</summary>
          <div className="answer">
            <p>
              It describes a multi-container app — API, database, message broker — in one file and starts all of it with <code>docker compose up</code>, with the networking and settings wired up. Without it, each container needs a long hand-typed command every time.
            </p>
          </div>
        </details>

        <details>
          <summary>What job does Kubernetes do?</summary>
          <div className="answer">
            <p>
              You declare the desired state (say, 3 replicas of a service) and Kubernetes keeps reality matching it across many machines:
            </p>
            <ul>
              <li>
                <strong>Keeps N containers up</strong> — replaces any that crash or whose machine dies.
              </li>
              <li>
                <strong>Scales</strong> — raises or lowers the count as traffic changes.
              </li>
              <li>
                <strong>Rolls out new versions</strong> gradually, and rolls back if the new version is unhealthy.
              </li>
              <li>
                <strong>Spreads the load</strong> — decides which machine runs which container and routes traffic across them.
              </li>
            </ul>
          </div>
        </details>

        <details>
          <summary>What does a CI pipeline run, in what order, and where does testing fit?</summary>
          <div className="answer">
            <ol>
              <li><strong>Install</strong> dependencies.</li>
              <li><strong>Lint</strong> — formatting and common mistakes.</li>
              <li><strong>Unit tests.</strong></li>
              <li><strong>Build</strong> — prove it compiles and bundles.</li>
              <li><strong>Integration tests.</strong></li>
              <li><strong>Code scan</strong> (e.g. SonarQube).</li>
            </ol>
            <p>
              Cheap, fast checks run first so mistakes fail early. Testing is a stage inside the pipeline: red means the PR can&apos;t merge. E2E tests run later, against a deployed environment.
            </p>
          </div>
        </details>

        <details>
          <summary>What does a SonarQube-style scan add to the pipeline?</summary>
          <div className="answer">
            <p>
              Static analysis of the code itself — security vulnerabilities, code smells, coverage — enforced as a quality gate that can fail the PR, catching problems that tests don&apos;t exercise.
            </p>
          </div>
        </details>

        <details>
          <summary>What are the common environments, and what is each for?</summary>
          <div className="answer">
            <ul>
              <li>
                <strong>dev:</strong> a temporary environment for each PR, so a developer can test the change alone with no conflicts. It is deleted when the PR merges.
              </li>
              <li>
                <strong>QA:</strong> where the QA team does regression, E2E, and performance testing.
              </li>
              <li>
                <strong>staging:</strong> a production-like rehearsal where the business does UAT.
              </li>
              <li>
                <strong>prod:</strong> serves real customers.
              </li>
            </ul>
            <p>Data gets more realistic at each step.</p>
          </div>
        </details>

        <details>
          <summary>Where should secrets live, and where must they never live?</summary>
          <div className="answer">
            <p>
              In a secret manager, injected as environment variables when the container starts. Never in the repo or inside an image — an image is permanent, and anyone who can pull it can read what is in it.
            </p>
          </div>
        </details>

        <details>
          <summary>Which Git events trigger which pipeline actions?</summary>
          <div className="answer">
            <p>A common setup:</p>
            <ol>
              <li>
                <strong>Open or update a PR</strong> → CI checks (lint, test, build, scan), plus a temporary dev environment just for that PR.
              </li>
              <li>
                <strong>Merge into <code>main</code></strong> → delete that temporary environment, and auto-deploy the new <code>main</code> to QA.
              </li>
              <li>
                <strong>Create a release tag</strong> (when the team thinks it is ready) → promote the same image to staging for UAT, then to prod after approval.
              </li>
            </ol>
            <p>Teams differ, but the idea is the same.</p>
          </div>
        </details>

        <details>
          <summary>What is zero-downtime deployment, and how do rolling, blue/green, and canary achieve it?</summary>
          <div className="answer">
            <p>
              Users never see a gap, because the old version keeps serving until the new one is ready:
            </p>
            <ul>
              <li>
                <strong>Rolling:</strong> replace instances a few at a time while the rest keep serving.
              </li>
              <li>
                <strong>Blue/green:</strong> run a full second copy, test it, then flip all traffic over — flipping back is an instant rollback.
              </li>
              <li>
                <strong>Canary release:</strong> send a small slice of real traffic (say 5%) to the new version first, watch the errors, then widen.
              </li>
            </ul>
          </div>
        </details>

        <details>
          <summary>What is a feature flag, and how is it different from a deployment?</summary>
          <div className="answer">
            <p>
              A flag is a runtime switch around a feature. Deploying puts code on servers; releasing makes it visible to users, and a flag separates the two — you can ship unfinished work turned off, enable it for a small group, and switch it off instantly if it misbehaves.
            </p>
          </div>
        </details>

        <details>
          <summary>What happens on release day, and how do you decide between a rollback and a hotfix?</summary>
          <div className="answer">
            <p>
              Someone is on call, a monitoring tool watches error rates and response times, and an alert (paged through something like PagerDuty) reaches the engineer if they spike. Then:
            </p>
            <ul>
              <li>
                <strong>Roll back</strong> to the previous release tag when the impact is serious or the cause is unclear.
              </li>
              <li>
                <strong>Hotfix</strong> when the bug is understood and the fix is small and safe.
              </li>
            </ul>
          </div>
        </details>

        <details>
          <summary>You find a complicated bug in production. How do you handle it?</summary>
          <div className="answer">
            <ol>
              <li>Assess the impact — if it&apos;s serious and came with the release, roll back first to restore service.</li>
              <li>Locate it with the monitoring tool&apos;s logs and traces.</li>
              <li>Reproduce it locally.</li>
              <li>Fix the root cause, with a test that guards against regression.</li>
              <li>Ship it through the pipeline — hotfix or next release.</li>
              <li>Confirm in monitoring that errors are back to normal.</li>
            </ol>
          </div>
        </details>
      </section>
    </div>
  );
}
