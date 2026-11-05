import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";
import { Link } from "react-router-dom";
import { En, Zh } from "../../components/Lang";
import { Arrow, ArrowDefs, Box, T } from "../../components/Diagram";

export default function Notes() {
  return (
    <div className="page notes-page">
      <title>Day 22 Notes</title>
      <DayNav day="day22-ci-cd" current="notes" />
      <ArrowDefs />
      <header className="lecture-header">
        <p className="eyebrow">Week 5 · Day 22 · Notes</p>
        <h1>CI / CD</h1>
        <p className="subtitle">Executive summary → full walkthrough</p>
      </header>

      <section id="executive-summary" className="exec-summary">
        <h2>Section 1 — Executive Summary</h2>
        <p>
          <En>The essentials — what you must be able to explain by the end of today. You will not be asked to write a Dockerfile or a pipeline from memory; you will be asked to show you understand how code reaches production.</En>
          <Zh>核心要点——今天结束时你必须能讲清楚的内容。面试不会要求你默写 Dockerfile 或 pipeline，而是考察你是否理解代码是如何一步步上线的。</Zh>
        </p>
        <ul>
          <li>
            <En>Walk through your workflow from receiving a ticket to a merged Pull Request: branch, commits, PR, CI checks, code review</En>
            <Zh>讲清楚你从接到 ticket 到 PR 被合并的完整工作流：branch、commit、PR、CI 检查、code review</Zh>
          </li>
          <li>
            <En>Explain the pain of shipping by hand, and how CI and CD each remove part of it</En>
            <Zh>讲清楚手动上线有哪些痛点，以及 CI 和 CD 各自解决了哪一部分</Zh>
          </li>
          <li>
            <En>Explain what problem Docker solves, and what an image, a container, a Dockerfile, and Docker Compose each are</En>
            <Zh>讲清楚 Docker 解决什么问题，以及 image、container、Dockerfile、Docker Compose 各自是什么</Zh>
          </li>
          <li>
            <En>Describe what a pipeline runs and in what order, and where testing fits into it</En>
            <Zh>描述 pipeline 会跑哪些步骤、按什么顺序，以及测试在其中的位置</Zh>
          </li>
          <li>
            <En>Explain environments (dev / QA / staging / prod) and which Git event deploys to which one</En>
            <Zh>讲清楚各个环境（dev / QA / staging / prod），以及哪个 Git 事件会部署到哪个环境</Zh>
          </li>
          <li>
            <En>Explain feature flags, and how rolling, blue/green, and canary deployments achieve zero downtime</En>
            <Zh>讲清楚 feature flag，以及 rolling、blue/green、canary 三种部署方式如何做到零停机</Zh>
          </li>
          <li>
            <En>Describe release day: monitoring, on-call, and when you roll back versus ship a hotfix</En>
            <Zh>描述 release 当天的流程：监控、on-call，以及什么时候 rollback、什么时候发 hotfix</Zh>
          </li>
          <li>
            <En>Compare GitHub Actions with Jenkins, and say what job Kubernetes does</En>
            <Zh>对比 GitHub Actions 和 Jenkins，并说出 Kubernetes 的核心职责</Zh>
          </li>
        </ul>
        <p>
          Want more? <Link to="/week5/day22-ci-cd/concepts">View all concepts?</Link>
        </p>
      </section>

      <section id="full-walkthrough">
        <h2>Section 2 — Full Walkthrough</h2>

        {/* ───────────────────────── 1. Ticket to PR ───────────────────────── */}
        <h3>
          <En>1. Your first day on the job: from ticket to Pull Request</En>
          <Zh>1. 入职后的日常：从 ticket 到 Pull Request</Zh>
        </h3>
        <p>
          <En>Before any pipeline runs, a piece of work has to get from an idea to a merged branch:</En>
          <Zh>在任何 pipeline 运行之前，一份工作要先从想法变成一个被合并的 branch：</Zh>
        </p>
        <svg viewBox="0 0 680 100" role="img" aria-label="From ticket to merge: at sprint planning you pick a ticket such as ORD-123, create a feature branch and write code, open a pull request where CI checks run automatically, get two approvals from teammates, then merge into main.">
          <Box x={10} y={24} w={116} h={52} kind="muted" label="Sprint planning" sub="you pick ORD-123" />
          <Box x={146} y={24} w={116} h={52} label="Feature branch" sub="write code, push" />
          <Box x={282} y={24} w={116} h={52} label="Pull request" sub="CI runs automatically" />
          <Box x={418} y={24} w={116} h={52} label="2 approvals" sub="teammates review" />
          <Box x={554} y={24} w={116} h={52} kind="ok" label="Merge to main" sub="shared, always works" />
          <Arrow d="M126,50 L144,50" />
          <Arrow d="M262,50 L280,50" />
          <Arrow d="M398,50 L416,50" />
          <Arrow d="M534,50 L552,50" />
        </svg>
        <CodeBlock
          language="bash"
          code={`git clone git@github.com:acme/orders.git
cd orders

# one branch per ticket — the ticket key in the name links Jira, GitHub, and the build
git checkout -b feature/ORD-123-order-status-filter

# ...write code, then:
git add .
git commit -m "ORD-123: add status filter to the orders list"
git push -u origin feature/ORD-123-order-status-filter

# now open a Pull Request on GitHub, targeting main`}
        />
        <ul>
          <li>
            <En><code>main</code> is the shared, always-working version of the product. Nobody commits to it directly.</En>
            <Zh><code>main</code> 是团队共享的、始终可用的产品版本。没有人直接往上面提交。</Zh>
          </li>
          <li>
            <En>A <strong>PR</strong> asks &quot;please review my branch and merge it into <code>main</code>.&quot; The pipeline checks it automatically, then teammates review it by hand.</En>
            <Zh><strong>PR</strong> 就是请求&quot;请 review 我的 branch 并合并进 <code>main</code>&quot;。pipeline 先自动检查，再由同事人工 review。</Zh>
          </li>
          <li>
            <En>Reviewers first check that every automated check is green, then read the diff: does it do what the ticket says, is it readable, does it follow the team&apos;s conventions?</En>
            <Zh>Reviewer 先确认所有自动检查都是绿色，再读 diff：是否完成了 ticket 的要求、可读性如何、是否符合团队规范？</Zh>
          </li>
        </ul>

        {/* ───────────────────────── 2. Why CI/CD ───────────────────────── */}
        <h3>
          <En>2. Why CI/CD exists: the pain of shipping by hand</En>
          <Zh>2. 为什么需要 CI/CD：手动上线的痛点</Zh>
        </h3>
        <p>
          <En>Imagine there is no automation. To release, someone does this on their own laptop:</En>
          <Zh>假设没有任何自动化。要上线，某个人得在自己的电脑上这样操作：</Zh>
        </p>
        <CodeBlock
          language="bash"
          code={`git pull                      # hope you have the latest code
npm ci                        # hope your Node version matches the server's
npm test                      # ...if you remember to
npm run build                 # bundle the app
scp -r dist/ me@prod-server:/var/www/app      # copy files to the server by hand
ssh me@prod-server "pm2 restart app"          # restart it, and hope`}
        />
        <svg viewBox="0 0 680 232" role="img" aria-label="Shipping by hand: one person on their laptop runs pull, test, build, then copies files to the production server by hand. Six things go wrong: tests get skipped, it works on my machine, integration hell at release week, releases are rare and therefore big and risky, only one person knows how, and typos in production with no record.">
          <Box x={20} y={14} w={190} h={54} kind="muted" label="Your laptop" sub="pull · test (maybe) · build" />
          <Arrow d="M210,41 L468,41" />
          <T x={339} y={33}>scp + ssh, by hand</T>
          <Box x={470} y={14} w={190} h={54} kind="warn" label="Production server" sub="restart and hope" />
          <T x={340} y={98} size={11} bold color="#c0392b">what goes wrong</T>
          <Box x={20} y={110} w={200} h={46} kind="fail" label="Tests get skipped" sub="'I'll run them later'" />
          <Box x={240} y={110} w={200} h={46} kind="fail" label="Works on my machine" sub="depends on one laptop" />
          <Box x={460} y={110} w={200} h={46} kind="fail" label="Integration hell" sub="code first meets at release" />
          <Box x={20} y={170} w={200} h={46} kind="fail" label="Slow and rare" sub="releases are big and risky" />
          <Box x={240} y={170} w={200} h={46} kind="fail" label="One person knows how" sub="on holiday, nobody ships" />
          <Box x={460} y={170} w={200} h={46} kind="fail" label="Typos in production" sub="wrong server, no record" />
        </svg>
        <p className="callout">
          <En><strong>CI/CD = write those steps down once, as code, and let a machine run them on every change.</strong> Same steps, same order, every time, with a record of each run.</En>
          <Zh><strong>CI/CD = 把这些步骤一次性写成代码，让机器在每次改动时自动执行。</strong>步骤相同、顺序相同、每次都有运行记录。</Zh>
        </p>
        <svg viewBox="0 0 680 172" role="img" aria-label="The pipeline in two halves. Continuous Integration covers merge to main, CI checks (build, lint, test) and packaging the result. Continuous Delivery or Deployment covers an approval step and the deploy to servers. With Continuous Delivery a person presses the approval button; with Continuous Deployment there is no approval step.">
          <Box x={10} y={20} w={100} h={50} kind="muted" label="Merge to main" />
          <Box x={140} y={20} w={120} h={50} label="CI" sub="build · lint · test" />
          <Box x={290} y={20} w={110} h={50} kind="broker" label="Package" sub="image / artifact" />
          <Box x={440} y={20} w={100} h={50} kind="primary" dashed label="Approval" sub="a person?" />
          <Box x={570} y={20} w={100} h={50} kind="ok" label="Deploy" sub="to servers" />
          <Arrow d="M110,45 L138,45" />
          <Arrow d="M260,45 L288,45" />
          <Arrow d="M400,45 L438,45" />
          <Arrow d="M540,45 L568,45" />
          <path d="M10,86 L10,94 L400,94 L400,86" fill="none" stroke="#999" strokeWidth={1.5} />
          <T x={205} y={112} size={11} bold color="#3b4a63">CI: verify every change</T>
          <path d="M440,86 L440,94 L670,94 L670,86" fill="none" stroke="#999" strokeWidth={1.5} />
          <T x={555} y={112} size={11} bold color="#3b4a63">CD: ship what passed</T>
          <T x={10} y={142} size={11} anchor="start" color="#1c1c1c">Continuous Delivery: a person presses the Approval button.</T>
          <T x={10} y={160} size={11} anchor="start" color="#1c1c1c">Continuous Deployment: no Approval step. Every green build goes to production.</T>
        </svg>
        <ul>
          <li>
            <En><strong>CI (Continuous Integration)</strong> fixes &quot;integration hell&quot;: small changes are merged into <code>main</code> often, and each merge is built and tested automatically, so problems show up in minutes.</En>
            <Zh><strong>CI（持续集成）</strong>解决&quot;集成噩梦&quot;：小改动频繁合并进 <code>main</code>，每次合并都会自动构建和测试，问题几分钟内就能暴露。</Zh>
          </li>
          <li>
            <En><strong>CD (Continuous Delivery / Deployment)</strong> fixes &quot;ship by hand&quot;: code that passed CI is packaged and sent to servers automatically.</En>
            <Zh><strong>CD（持续交付 / 持续部署）</strong>解决&quot;手动上线&quot;：通过 CI 的代码会被自动打包并发送到服务器。</Zh>
          </li>
        </ul>
        <p className="callout">
          <En>Delivery and deployment use the same pipeline — the only difference is whether a person is in the loop. Most companies keep a human approval before production.</En>
          <Zh>Delivery 和 deployment 用的是同一条 pipeline——唯一的区别是有没有人参与。大多数公司在上生产环境前仍保留人工审批。</Zh>
        </p>

        {/* ───────────────────────── 3. Docker ───────────────────────── */}
        <h3>
          <En>3. Docker: what the pipeline actually ships</En>
          <Zh>3. Docker：pipeline 真正交付的东西</Zh>
        </h3>
        <h4 className="topic">
          <En>3.1 The problem Docker solves</En>
          <Zh>3.1 Docker 解决什么问题</Zh>
        </h4>
        <p>
          <En>An app needs more than code: a specific Node version, libraries, an operating system. If your laptop, your teammate&apos;s, and the server differ, the same code behaves differently.</En>
          <Zh>一个应用不只是代码：它还需要特定版本的 Node、依赖库、操作系统。如果你的电脑、同事的电脑和服务器不一样，同一份代码的表现就会不一样。</Zh>
        </p>
        <svg viewBox="0 0 680 304" role="img" aria-label="Without Docker you ship code plus setup instructions: it works on your laptop with Node 22, but breaks on a teammate's laptop with Node 18 and on a server with a different Linux. With Docker you ship an image containing the code, Node and libraries, and it runs the same on all three.">
          <T x={20} y={18} anchor="start" size={12} bold color="#c0392b">Without Docker</T>
          <Box x={240} y={28} w={200} h={40} kind="muted" label="Code + setup instructions" />
          <Arrow d="M300,68 L95,100" />
          <Arrow d="M340,68 L340,100" />
          <Arrow d="M380,68 L585,100" />
          <Box x={20} y={102} w={150} h={42} kind="ok" label="Your laptop" sub="Node 22 → works" />
          <Box x={265} y={102} w={150} h={42} kind="fail" label="Teammate" sub="Node 18 → breaks" />
          <Box x={510} y={102} w={150} h={42} kind="fail" label="Server" sub="other Linux → breaks" />
          <T x={20} y={176} anchor="start" size={12} bold color="#3d8b40">With Docker</T>
          <Box x={240} y={186} w={200} h={40} kind="broker" label="Image" sub="code + Node + libraries" />
          <Arrow d="M300,226 L95,256" />
          <Arrow d="M340,226 L340,256" />
          <Arrow d="M380,226 L585,256" />
          <Box x={20} y={258} w={150} h={40} kind="ok" label="Your laptop" sub="same result" />
          <Box x={265} y={258} w={150} h={40} kind="ok" label="Teammate" sub="same result" />
          <Box x={510} y={258} w={150} h={40} kind="ok" label="Server" sub="same result" />
        </svg>
        <p className="callout">
          <En>Without Docker you hand over a <em>recipe</em> and hope their kitchen matches yours. With Docker you ship the <em>sealed, ready-to-heat meal</em>. A container is not a virtual machine: it shares the host&apos;s OS kernel, so it starts in seconds and is small.</En>
          <Zh>没有 Docker，就像递给别人一张<em>菜谱</em>，祈祷他们的厨房和你的一样。有了 Docker，你交付的是<em>密封好、加热即食的成品餐</em>。container 不是虚拟机：它共用宿主机的操作系统内核，所以启动只要几秒，体积也小。</Zh>
        </p>

        <h4 className="topic">
          <En>3.2 The four words to know</En>
          <Zh>3.2 要记住的四个词</Zh>
        </h4>
        <ul>
          <li>
            <En><strong>Dockerfile = the recipe.</strong> A text file listing the steps to build your package: start from Node, copy in the code, install the libraries.</En>
            <Zh><strong>Dockerfile = 菜谱。</strong>一个文本文件，列出构建这个包的步骤：从 Node 开始、拷入代码、安装依赖库。</Zh>
          </li>
          <li>
            <En><strong>Image = the sealed, ready-to-heat meal.</strong> What you get after following the recipe: your code, Node, and the libraries in one read-only package. Built once, never edited.</En>
            <Zh><strong>Image = 密封好、加热即食的成品餐。</strong>照着菜谱做出来的东西：代码、Node 和依赖库打成一个只读的包。构建一次，不再修改。</Zh>
          </li>
          <li>
            <En><strong>Container = the meal being served.</strong> A running copy of an image. Start ten containers from one image and you get ten identical copies.</En>
            <Zh><strong>Container = 正在上桌的那份餐。</strong>image 的一个运行实例。从一个 image 启动十个 container，就得到十个一模一样的副本。</Zh>
          </li>
          <li>
            <En><strong>Registry = the warehouse.</strong> Where finished images are stored (Docker Hub, AWS ECR). The pipeline pushes new images in; servers pull them out to run.</En>
            <Zh><strong>Registry = 仓库。</strong>存放做好的 image 的地方（Docker Hub、AWS ECR）。pipeline 把新 image 推进去，服务器再从里面拉出来运行。</Zh>
          </li>
        </ul>
        <p>
          <En>Here is how they connect:</En>
          <Zh>它们之间是这样连起来的：</Zh>
        </p>
        <svg viewBox="0 0 680 176" role="img" aria-label="Docker's four words as a flow. A Dockerfile, the recipe, is built into an image, the sealed meal. The image is pushed to a registry, the warehouse. Servers pull the image from the registry and run it as containers, which are running copies of the image.">
          <Box x={10} y={36} w={110} h={52} kind="muted" label="Dockerfile" sub="the recipe" />
          <Arrow d="M120,62 L168,62" />
          <T x={144} y={52} size={9}>build</T>
          <Box x={170} y={36} w={110} h={52} kind="broker" label="Image" sub="the sealed meal" />
          <Arrow d="M280,62 L328,62" />
          <T x={304} y={52} size={9}>push</T>
          <Box x={330} y={36} w={120} h={52} kind="primary" label="Registry" sub="the warehouse" />
          <Box x={540} y={8} w={130} h={34} label="Container" sub="running copy" />
          <Box x={540} y={48} w={130} h={34} label="Container" sub="running copy" />
          <Box x={540} y={88} w={130} h={34} label="Container" sub="running copy" />
          <Arrow d="M450,62 L538,25" />
          <Arrow d="M450,62 L538,65" />
          <Arrow d="M450,62 L538,105" />
          <T x={494} y={140} size={9}>pull + run</T>
          <T x={340} y={166} size={11}>Image: built once, never edited. Containers: as many identical copies as you start.</T>
        </svg>
        <p>
          <En>The Dockerfile is a short list of steps. You won&apos;t write one from memory — just know what it looks like:</En>
          <Zh>Dockerfile 就是一份简短的步骤清单。你不需要默写——只要知道它长什么样：</Zh>
        </p>
        <CodeBlock
          language="bash"
          code={`FROM node:22-alpine              # start from a base image that already has Node
WORKDIR /app                     # work inside the /app folder
COPY package*.json ./
RUN npm ci                       # install the dependencies
COPY . .                         # copy the source code in
RUN npm run build                # compile it
CMD ["node", "dist/server.js"]   # what runs when a container starts`}
        />
        <p className="callout">
          <En>Images carry a <strong>tag</strong> (a version label) like <code>orders:a1b2c3d</code>. Tag with the Git commit ID and every running container traces back to one commit; rolling back just means redeploying an older tag.</En>
          <Zh>image 会带一个 <strong>tag</strong>（版本标签），比如 <code>orders:a1b2c3d</code>。用 Git commit ID 做 tag，每个运行中的 container 都能追溯到唯一的一次提交；rollback 就是重新部署一个旧 tag。</Zh>
        </p>

        <h4 className="topic">
          <En>3.3 Compose and Kubernetes: more than one container</En>
          <Zh>3.3 Compose 与 Kubernetes：不止一个 container</Zh>
        </h4>
        <svg viewBox="0 0 680 190" role="img" aria-label="Docker Compose runs several containers, an API, Postgres and Kafka, on one machine from a single file. Kubernetes runs copies of a service across many machines; if one container crashes it starts a replacement, so three copies are always running.">
          <rect x={10} y={26} width={300} height={140} rx={8} fill="#f7f9fc" stroke="#9fb3d1" strokeWidth={1.5} strokeDasharray="5,4" />
          <T x={160} y={46} size={11} bold color="#3b4a63">Docker Compose · one machine</T>
          <Box x={24} y={64} w={80} h={40} label="API" />
          <Box x={115} y={64} w={80} h={40} kind="broker" label="Postgres" />
          <Box x={206} y={64} w={90} h={40} kind="broker" label="Kafka" />
          <T x={160} y={134} size={10}>one file describes them all</T>
          <T x={160} y={152} size={10}>docker compose up starts everything</T>
          <rect x={370} y={26} width={300} height={140} rx={8} fill="#f7f9fc" stroke="#9fb3d1" strokeWidth={1.5} strokeDasharray="5,4" />
          <T x={520} y={46} size={11} bold color="#3b4a63">Kubernetes · many machines</T>
          <Box x={384} y={64} w={82} h={40} label="core" sub="machine 1" />
          <Box x={479} y={64} w={82} h={40} kind="fail" dashed label="core" sub="crashed" />
          <Box x={574} y={64} w={82} h={40} label="core" sub="machine 3" />
          <T x={520} y={134} size={10}>you declare: always keep 3 copies running</T>
          <T x={520} y={152} size={10}>a crashed one is replaced automatically</T>
        </svg>
        <ul>
          <li>
            <En><strong>Docker Compose</strong> describes all your containers (API, database, broker) in one file, and <code>docker compose up</code> starts the whole stack on one machine. Great for local development.</En>
            <Zh><strong>Docker Compose</strong> 把所有 container（API、数据库、broker）写进一个文件，<code>docker compose up</code> 就能在一台机器上启动整套系统。非常适合本地开发。</Zh>
          </li>
          <li>
            <En><strong>Kubernetes</strong> (K8s) runs containers across many machines. You declare the state you want, like &quot;3 copies of <code>core</code>&quot;, and it makes reality match: replacing crashed containers, scaling up under load, and rolling out new versions gradually.</En>
            <Zh><strong>Kubernetes</strong>（K8s）在很多台机器上运行 container。你声明想要的状态，比如&quot;3 个 <code>core</code> 副本&quot;，它负责让现实和声明一致：替换崩溃的 container、流量大时扩容、逐步滚动发布新版本。</Zh>
          </li>
        </ul>

        {/* ───────────────────────── 4. Pipeline anatomy ───────────────────────── */}
        <h3>
          <En>4. Inside a pipeline: what runs, and where testing fits</En>
          <Zh>4. Pipeline 内部：跑什么、测试放在哪</Zh>
        </h3>
        <p>
          <En>A <strong>pipeline</strong> is the written-down list of steps, run by a CI/CD tool whenever something happens in Git (a PR is opened, a branch is merged, a tag is created). On a PR, it looks like this:</En>
          <Zh><strong>Pipeline</strong> 就是写下来的步骤清单，由 CI/CD 工具在 Git 上发生某些事件时（开 PR、合并分支、打 tag）自动运行。在一个 PR 上，它大致是这样：</Zh>
        </p>
        <svg viewBox="0 0 680 140" role="img" aria-label="A pipeline on a pull request: Install, Lint, Unit tests, Build, Integration tests, Code scan run left to right. If any step fails, the pipeline stops and the author is notified. If all pass, the PR can be merged.">
          <Box x={24} y={24} w={92} h={46} label="Install" sub="npm ci" />
          <Box x={132} y={24} w={92} h={46} label="Lint" sub="style rules" />
          <Box x={240} y={24} w={92} h={46} label="Unit tests" sub="fast" />
          <Box x={348} y={24} w={92} h={46} label="Build" sub="compile" />
          <Box x={456} y={24} w={92} h={46} label="Integration" sub="parts together" />
          <Box x={564} y={24} w={92} h={46} label="Code scan" sub="SonarQube" />
          <Arrow d="M116,47 L130,47" />
          <Arrow d="M224,47 L238,47" />
          <Arrow d="M332,47 L346,47" />
          <Arrow d="M440,47 L454,47" />
          <Arrow d="M548,47 L562,47" />
          <Arrow d="M286,70 L286,98" ink="red" dashed />
          <Box x={196} y={98} w={180} h={34} kind="fail" label="Any step fails → stop" sub="PR blocked, author notified" />
          <Arrow d="M610,70 L610,98" ink="green" />
          <Box x={546} y={98} w={124} h={34} kind="ok" label="All green" sub="PR can merge" />
        </svg>
        <table className="ref-table">
          <thead>
            <tr>
              <th><En>Step</En><Zh>步骤</Zh></th>
              <th><En>Job</En><Zh>作用</Zh></th>
              <th><En>Why this position</En><Zh>为什么放在这里</Zh></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Install + Lint</td>
              <td><En>Get dependencies; check formatting and common mistakes</En><Zh>安装依赖；检查格式和常见错误</Zh></td>
              <td><En>Takes seconds — find the cheap mistakes first</En><Zh>只要几秒——先抓出最便宜的错误</Zh></td>
            </tr>
            <tr>
              <td>Unit tests</td>
              <td><En>Check one function or component at a time</En><Zh>一次检查一个函数或组件</Zh></td>
              <td><En>Fast, and catches most logic bugs</En><Zh>速度快，能抓出大部分逻辑 bug</Zh></td>
            </tr>
            <tr>
              <td>Build</td>
              <td><En>Prove the project compiles and bundles</En><Zh>证明项目能编译、能打包</Zh></td>
              <td><En>No point testing something that can&apos;t be built</En><Zh>连构建都过不了，测试就没意义</Zh></td>
            </tr>
            <tr>
              <td>Integration tests</td>
              <td><En>Check several parts working together, e.g. the API against a test database</En><Zh>检查多个部分协同工作，比如 API 配合测试数据库</Zh></td>
              <td><En>Slower, so run after the quick checks pass</En><Zh>更慢，所以放在快速检查通过之后</Zh></td>
            </tr>
            <tr>
              <td>Code scan (SonarQube)</td>
              <td><En>Static analysis: security vulnerabilities, code smells, test coverage</En><Zh>静态分析：安全漏洞、代码异味、测试覆盖率</Zh></td>
              <td><En>Acts as a &quot;quality gate&quot; — the PR fails if the score drops below the team&apos;s bar</En><Zh>相当于&quot;质量门禁&quot;——分数低于团队标准，PR 就过不了</Zh></td>
            </tr>
          </tbody>
        </table>

        {/* ───────────────────────── 5. Tools ───────────────────────── */}
        <h3>
          <En>5. Tools: GitHub Actions vs. Jenkins</En>
          <Zh>5. 工具：GitHub Actions 与 Jenkins</Zh>
        </h3>
        <p>
          <En>The pipeline is defined in a <strong>workflow file</strong> that lives in your repo (a YAML file for GitHub Actions). Think of it as an <strong>event listener for Git</strong>: it says &quot;when this happens, run these steps.&quot;</En>
          <Zh>pipeline 是由仓库里的一个 <strong>workflow 文件</strong> 定义的（GitHub Actions 里是一个 YAML 文件）。可以把它想成 <strong>Git 的事件监听器</strong>：它写明&quot;当这件事发生时，就运行这些步骤&quot;。</Zh>
        </p>
        <svg viewBox="0 0 680 146" role="img" aria-label="A workflow file works like an event listener. Git events such as a pull request being opened, a push or merge to main, or a tag being created trigger the workflow file. The workflow file then automatically runs its steps on a fresh machine: install, test, build, deploy.">
          <Box x={10} y={10} w={150} h={34} kind="muted" label="PR opened" size={11} />
          <Box x={10} y={56} w={150} h={34} kind="muted" label="Push / merge to main" size={11} />
          <Box x={10} y={102} w={150} h={34} kind="muted" label="Tag created" size={11} />
          <Arrow d="M160,27 L248,58" />
          <Arrow d="M160,73 L248,70" />
          <Arrow d="M160,119 L248,82" />
          <Box x={250} y={38} w={170} h={64} kind="primary" label="Workflow file" sub="when X happens, run Y" />
          <T x={205} y={20} size={9}>Git events</T>
          <Arrow d="M420,70 L468,70" />
          <rect x={470} y={8} width={200} height={130} rx={8} fill="#f7f9fc" stroke="#9fb3d1" strokeWidth={1.5} strokeDasharray="5,4" />
          <T x={570} y={25} size={10} bold color="#3b4a63">runs automatically</T>
          <Box x={490} y={34} w={160} h={22} label="Install" size={10} />
          <Box x={490} y={60} w={160} h={22} label="Test" size={10} />
          <Box x={490} y={86} w={160} h={22} label="Build" size={10} />
          <Box x={490} y={112} w={160} h={22} kind="ok" label="Deploy" size={10} />
        </svg>
        <p>
          <En>Many tools can do this. GitHub Actions and Jenkins are the two you will meet most. You won&apos;t write either from memory — just get a feel for what the file looks like:</En>
          <Zh>很多工具都能做到这一点，GitHub Actions 和 Jenkins 是你最常遇到的两个。你不需要默写——只要大概知道文件长什么样：</Zh>
        </p>
        <div className="code-compare tight">
          <div>
            <p className="compare-label">GitHub Actions · .github/workflows/ci.yml</p>
            <CodeBlock
              language="yaml"
              code={`name: ci
on: [pull_request]       # every PR
jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test`}
            />
          </div>
          <div>
            <p className="compare-label">Jenkins · Jenkinsfile</p>
            <CodeBlock
              language="groovy"
              code={`pipeline {
  agent any            // any free machine
  stages {
    stage('Install') {
      steps { sh 'npm ci' }
    }
    stage('Test') {
      steps { sh 'npm test' }
    }
  }
}`}
            />
          </div>
        </div>
        <div className="code-compare">
          <div>
            <p className="compare-label">GitHub Actions</p>
            <ul>
              <li>
                <En>Hosted by GitHub: nothing to install, just add a file</En>
                <Zh>由 GitHub 托管：无需安装，加一个文件就行</Zh>
              </li>
              <li>
                <En>Config is a YAML file in your repo</En>
                <Zh>配置是仓库里的一个 YAML 文件</Zh>
              </li>
              <li>
                <En>Great for standard workflows. Used by startups and teams already on GitHub</En>
                <Zh>适合标准流程。创业公司和已经在用 GitHub 的团队常用</Zh>
              </li>
            </ul>
          </div>
          <div>
            <p className="compare-label">Jenkins</p>
            <ul>
              <li>
                <En>A server your company installs and maintains</En>
                <Zh>公司自己安装和维护的服务器</Zh>
              </li>
              <li>
                <En>Config is a Jenkinsfile (Groovy)</En>
                <Zh>配置是一个 Jenkinsfile（Groovy）</Zh>
              </li>
              <li>
                <En>Very flexible, huge plugin ecosystem. Used by large or older companies with complex or regulated delivery</En>
                <Zh>非常灵活，插件生态庞大。流程复杂或有合规要求的大型 / 老牌公司常用</Zh>
              </li>
            </ul>
          </div>
        </div>
        <p className="callout">
          <En>The idea is identical in both: trigger → stages → pass or fail. Others you may meet: GitLab CI, CircleCI, and Argo CD (deploys to Kubernetes).</En>
          <Zh>两者的思路完全一样：触发 → 各个 stage → 通过或失败。你还可能遇到 GitLab CI、CircleCI，以及 Argo CD（负责部署到 Kubernetes）。</Zh>
        </p>

        {/* ───────────────────────── 6. Environments ───────────────────────── */}
        <h3>
          <En>6. Environments, and which Git event deploys where</En>
          <Zh>6. 环境，以及哪个 Git 事件部署到哪里</Zh>
        </h3>
        <p>
          <En>Code doesn&apos;t jump from your laptop straight to users. It climbs a ladder of <strong>environments</strong>: separate copies of the whole system, each with a different audience.</En>
          <Zh>代码不会从你的电脑直接跳到用户面前。它要爬一段 <strong>环境</strong> 阶梯：整个系统的多份独立副本，每一份面向不同的人。</Zh>
        </p>
        <svg viewBox="0 0 680 152" role="img" aria-label="The environment ladder: dev, QA or test, staging, prod. Dev is a temporary environment per pull request for developers to check that their change works when really deployed, with fake data. QA is for QA engineers to run regression, end-to-end and performance tests, with fake but stable data. Staging is for the product owner to do user acceptance testing against production-like data. Prod is the real system for real customers with real data.">
          <Box x={20} y={12} w={140} h={46} kind="warn" label="dev" sub="temporary, per PR" />
          <Box x={190} y={12} w={140} h={46} label="QA / test" />
          <Box x={360} y={12} w={140} h={46} label="staging" />
          <Box x={530} y={12} w={140} h={46} kind="primary" label="prod" />
          <Arrow d="M160,35 L188,35" />
          <Arrow d="M330,35 L358,35" />
          <Arrow d="M500,35 L528,35" />
          <T x={90} y={80} size={11} bold color="#1c1c1c">Developers</T>
          <T x={90} y={96}>does my change work</T>
          <T x={90} y={110}>when really deployed?</T>
          <T x={90} y={130} color="#999">fake data</T>
          <T x={260} y={80} size={11} bold color="#1c1c1c">QA engineers</T>
          <T x={260} y={96}>regression · E2E</T>
          <T x={260} y={110}>performance tests</T>
          <T x={260} y={130} color="#999">fake, stable data</T>
          <T x={430} y={80} size={11} bold color="#1c1c1c">Product owner</T>
          <T x={430} y={96}>UAT: does it meet</T>
          <T x={430} y={110}>the business need?</T>
          <T x={430} y={130} color="#999">prod-like, anonymized</T>
          <T x={600} y={80} size={11} bold color="#1c1c1c">Real customers</T>
          <T x={600} y={96}>the real thing</T>
          <T x={600} y={110}>live traffic</T>
          <T x={600} y={130} color="#999">real data</T>
        </svg>
        <p className="callout">
          <En>Anything QA or UAT finds becomes a bug ticket, and the cycle starts again from step 1.</En>
          <Zh>QA 或 UAT 发现的问题会变成 bug ticket，流程从第 1 步重新开始。</Zh>
        </p>

        <h4 className="topic">
          <En>A simple strategy that is easy to reason about</En>
          <Zh>一个简单、好理解的策略</Zh>
        </h4>
        <p>
          <En>Every team wires this differently. A common shape: each PR gets its own <strong>temporary dev environment</strong>, and merging moves the code up the ladder.</En>
          <Zh>每个团队的配置都不一样。一种常见的形态：每个 PR 都有自己的 <strong>临时 dev 环境</strong>，合并之后代码再沿着阶梯往上走。</Zh>
        </p>
        <svg viewBox="0 0 680 174" role="img" aria-label="What each Git event does, left to right over time. Opening a pull request creates a temporary dev environment just for that PR, so only you use it and there are no conflicts with other developers. Merging the PR deletes that temporary environment and deploys the new main branch to QA. When the team thinks a version is ready, cutting a release tag promotes the same image to staging for UAT. After approval, the same image goes to production.">
          <Box x={20} y={12} w={140} h={44} kind="muted" label="Open a PR" sub="push your branch" />
          <Box x={190} y={12} w={140} h={44} kind="muted" label="Merge the PR" sub="reviewed + approved" />
          <Box x={360} y={12} w={140} h={44} kind="muted" label="Cut a release" sub="when we think it is ready" />
          <Box x={530} y={12} w={140} h={44} kind="muted" label="Approve" sub="go-ahead for prod" />
          <Arrow d="M160,34 L188,34" />
          <Arrow d="M330,34 L358,34" />
          <Arrow d="M500,34 L528,34" />
          <Arrow d="M90,56 L90,84" />
          <Arrow d="M260,56 L260,84" />
          <Arrow d="M430,56 L430,84" />
          <Arrow d="M600,56 L600,84" />
          <Box x={20} y={86} w={140} h={44} kind="warn" dashed label="Temporary dev" sub="created for this PR" />
          <Box x={190} y={86} w={140} h={44} label="QA" sub="new main is deployed" />
          <Box x={360} y={86} w={140} h={44} label="Staging" sub="UAT, tagged v1.4.0" />
          <Box x={530} y={86} w={140} h={44} kind="primary" label="Production" sub="same image, no downtime" />
          <T x={90} y={150}>only you use it</T>
          <T x={90} y={164}>so no conflicts</T>
          <T x={260} y={150} color="#c0392b">the temporary dev</T>
          <T x={260} y={164} color="#c0392b">environment is deleted</T>
          <T x={430} y={150}>the same image</T>
          <T x={430} y={164}>that passed QA</T>
          <T x={600} y={150}>the same image</T>
          <T x={600} y={164}>that passed UAT</T>
        </svg>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li>
              <En><strong>Why a temporary dev environment per PR?</strong> You can test your new feature on your own copy, with no conflict with other developers. When the PR is merged, it is deleted.</En>
              <Zh><strong>为什么每个 PR 一个临时 dev 环境？</strong>你可以在自己专属的副本上测试新功能，不会和其他开发冲突。PR 合并后，这个环境就会被删除。</Zh>
            </li>
            <li>
              <En><strong>One image is promoted through every environment.</strong> If you rebuilt for each one, QA would never test the thing that actually ships.</En>
              <Zh><strong>同一个 image 逐级晋升到每个环境。</strong>如果每个环境都重新构建，QA 测试的就不是最终上线的那个东西。</Zh>
            </li>
            <li>
              <En>Environments differ only by <strong>configuration</strong> (database URL, API keys), injected when the container starts. Secrets come from a secret manager, never from the repo or the image.</En>
              <Zh>各环境之间只有<strong>配置</strong>不同（数据库地址、API key），在 container 启动时注入。密钥来自 secret manager，绝不放在仓库或 image 里。</Zh>
            </li>
          </ul>
        </div>
        <p className="callout">
          <En>Your company may differ. Ask on your first week. The ideas (verify, then promote the same artifact upward) are the same.</En>
          <Zh>你们公司可能不一样，入职第一周问一下即可。核心思路（先验证，再把同一个产物逐级晋升）是一样的。</Zh>
        </p>

        {/* ───────────────────────── 7. Releasing ───────────────────────── */}
        <h3>
          <En>7. Releasing safely: flags, strategies, and zero downtime</En>
          <Zh>7. 安全发布：feature flag、部署策略与零停机</Zh>
        </h3>
        <h4 className="topic">
          <En>7.1 The release plan</En>
          <Zh>7.1 发布计划</Zh>
        </h4>
        <ul>
          <li>
            <En>Teams ship on a <strong>release cycle</strong>: every two weeks, every month, or daily.</En>
            <Zh>团队按 <strong>发布周期</strong> 上线：每两周、每月，或每天。</Zh>
          </li>
          <li>
            <En>Some features aren&apos;t ready when the release date arrives. Two ways to handle it: <strong>cherry-pick</strong> only the finished work into the release, or ship everything and hide the unfinished work behind a <strong>feature flag</strong>.</En>
            <Zh>发布日到了，有些功能还没做完。有两种处理办法：只把做完的部分 <strong>cherry-pick</strong> 进 release；或者全部上线，把没做完的藏在 <strong>feature flag</strong> 后面。</Zh>
          </li>
        </ul>
        <p>
          <En><strong>Option 1: cherry-pick.</strong> Copy only the finished commits onto a release branch. Commit C isn&apos;t ready, so it stays behind.</En>
          <Zh><strong>办法一：cherry-pick。</strong>只把做完的 commit 复制到 release branch 上。commit C 没做完，所以留在后面。</Zh>
        </p>
        <svg viewBox="0 0 680 184" role="img" aria-label="Cherry-picking. The main branch has four commits: A done, B done, C not ready, D done. The release branch copies A, B and D, skips C, and is then tagged v1.4.0.">
          <T x={8} y={66} anchor="start" size={11} bold color="#3b4a63">main</T>
          <Box x={70} y={44} w={80} h={40} label="A" sub="done" />
          <Box x={190} y={44} w={80} h={40} label="B" sub="done" />
          <Box x={310} y={44} w={80} h={40} kind="fail" dashed label="C" sub="not ready" />
          <Box x={430} y={44} w={80} h={40} label="D" sub="done" />
          <Arrow d="M150,64 L188,64" />
          <Arrow d="M270,64 L308,64" />
          <Arrow d="M390,64 L428,64" />
          <T x={8} y={146} anchor="start" size={11} bold color="#3b4a63">release</T>
          <Box x={70} y={124} w={80} h={40} kind="ok" label="A" sub="copied" />
          <Box x={190} y={124} w={80} h={40} kind="ok" label="B" sub="copied" />
          <Box x={430} y={124} w={80} h={40} kind="ok" label="D" sub="copied" />
          <Box x={560} y={124} w={110} h={40} kind="primary" label="v1.4.0" sub="tagged release" />
          <Arrow d="M110,84 L110,122" dashed />
          <Arrow d="M230,84 L230,122" dashed />
          <Arrow d="M470,84 L470,122" dashed />
          <Arrow d="M150,144 L188,144" />
          <Arrow d="M270,144 L428,144" />
          <T x={350} y={136} size={9} color="#c0392b">skip C</T>
          <Arrow d="M510,144 L558,144" />
        </svg>
        <CodeBlock
          language="bash"
          code={`git checkout -b release/1.4 v1.3.0     # start a release branch from the last release
git cherry-pick <A> <B> <D>            # copy only the finished commits; C stays behind
git tag v1.4.0                         # tag it, then send it through the pipeline`}
        />
        <p>
          <En><strong>Option 2: feature flag.</strong> Ship everything, and keep the unfinished feature switched off.</En>
          <Zh><strong>办法二：feature flag。</strong>全部上线，把没做完的功能关掉。</Zh>
        </p>
        <CodeBlock
          language="typescript"
          code={`function Checkout({ user }: { user: User }) {
  // The code for the new checkout is already deployed — but switched off.
  // Flip the flag in a dashboard to turn it on: no new deploy needed.
  if (flags.isEnabled("new-checkout", user)) {
    return <NewCheckout />;
  }
  return <OldCheckout />;
}`}
        />
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li>
              <En><strong>Deploying</strong> means the code is on the servers. <strong>Releasing</strong> means users can see it. A feature flag separates the two.</En>
              <Zh><strong>Deploy</strong> 指代码已经在服务器上；<strong>release</strong> 指用户已经能看到。feature flag 把这两件事拆开了。</Zh>
            </li>
            <li>
              <En>Flags can turn a feature on for 5% of users, for staff only, or off again instantly if it misbehaves — a much faster &quot;undo&quot; than redeploying.</En>
              <Zh>flag 可以只对 5% 的用户、或只对内部员工打开；出问题时也能立刻关掉——比重新部署快得多的&quot;撤销&quot;。</Zh>
            </li>
          </ul>
        </div>

        <h4 className="topic">
          <En>7.2 Zero downtime and deployment strategies</En>
          <Zh>7.2 零停机与部署策略</Zh>
        </h4>
        <p>
          <En>The naive deploy — stop the old version, start the new one — leaves a gap where users get errors. <strong>Zero downtime</strong> means users never notice a deploy. The trick in every strategy is the same: <strong>the old version keeps serving until the new one is ready.</strong></En>
          <Zh>最朴素的部署方式——先停掉旧版本，再启动新版本——中间会有一段空档，用户会看到报错。<strong>零停机</strong>意味着用户根本察觉不到发布。所有策略的诀窍都一样：<strong>在新版本就绪之前，旧版本继续提供服务。</strong></Zh>
        </p>
        <p>
          <En><strong>Rolling:</strong> replace instances one by one. Rollback: roll the other way. Cost: cheap, but the update is gradual.</En>
          <Zh><strong>Rolling：</strong>一个一个地替换实例。回滚：往反方向再滚一遍。代价：成本低，但更新是渐进的。</Zh>
        </p>
        <svg viewBox="0 0 680 162" role="img" aria-label="Rolling deployment. Four instances all run v1.3. One is replaced with v1.4, then two, then all four, while the rest keep serving users.">
          <T x={140} y={16} anchor="start" size={11} bold color="#3b4a63">4 server instances (each box = one running copy of the server)</T>
          <g transform="translate(0,26)">
            <T x={10} y={26} anchor="start" size={11} bold color="#3b4a63">start</T>
            <Box x={140} y={8} w={80} h={26} label="v1.3" size={11} />
            <Box x={230} y={8} w={80} h={26} label="v1.3" size={11} />
            <Box x={320} y={8} w={80} h={26} label="v1.3" size={11} />
            <Box x={410} y={8} w={80} h={26} label="v1.3" size={11} />
            <T x={10} y={56} anchor="start" size={11} bold color="#3b4a63">1 replaced</T>
            <Box x={140} y={38} w={80} h={26} kind="ok" label="v1.4" size={11} />
            <Box x={230} y={38} w={80} h={26} label="v1.3" size={11} />
            <Box x={320} y={38} w={80} h={26} label="v1.3" size={11} />
            <Box x={410} y={38} w={80} h={26} label="v1.3" size={11} />
            <T x={10} y={86} anchor="start" size={11} bold color="#3b4a63">2 replaced</T>
            <Box x={140} y={68} w={80} h={26} kind="ok" label="v1.4" size={11} />
            <Box x={230} y={68} w={80} h={26} kind="ok" label="v1.4" size={11} />
            <Box x={320} y={68} w={80} h={26} label="v1.3" size={11} />
            <Box x={410} y={68} w={80} h={26} label="v1.3" size={11} />
            <T x={10} y={116} anchor="start" size={11} bold color="#3b4a63">all replaced</T>
            <Box x={140} y={98} w={80} h={26} kind="ok" label="v1.4" size={11} />
            <Box x={230} y={98} w={80} h={26} kind="ok" label="v1.4" size={11} />
            <Box x={320} y={98} w={80} h={26} kind="ok" label="v1.4" size={11} />
            <Box x={410} y={98} w={80} h={26} kind="ok" label="v1.4" size={11} />
          </g>
          <T x={520} y={78} anchor="start">one instance at a time;</T>
          <T x={520} y={92} anchor="start">the rest keep serving users</T>
          <T x={520} y={116} anchor="start">blue = old version (v1.3)</T>
          <T x={520} y={130} anchor="start">green = new version (v1.4)</T>
        </svg>
        <p>
          <En><strong>Blue/green:</strong> stand up a full second copy, test it, then switch all traffic over. Rollback: switch back, instantly. Cost: double the infrastructure while both run.</En>
          <Zh><strong>Blue/green：</strong>搭一整套新副本，测试后再把所有流量切过去。回滚：切回来，瞬间完成。代价：两套同时运行时，基础设施成本翻倍。</Zh>
        </p>
        <svg viewBox="0 0 680 190" role="img" aria-label="Blue/green deployment. Users send traffic to a load balancer. The load balancer sends all traffic to Blue, running version 1.3. Green, running version 1.4, is deployed and tested but receives no traffic yet; after the flip, traffic goes to Green. Blue stays up so switching back is instant.">
          <Box x={20} y={70} w={90} h={44} kind="muted" label="Users" />
          <Arrow d="M110,92 L128,92" />
          <Box x={130} y={62} w={110} h={60} kind="primary" label="Load balancer" sub="the traffic switch" />
          <Arrow d="M240,82 L358,46" />
          <T x={282} y={52} size={9}>all traffic now</T>
          <Box x={360} y={20} w={170} h={52} label="Blue · v1.3" sub="live" />
          <Arrow d="M240,102 L358,138" dashed />
          <T x={298} y={150} size={9}>after the flip</T>
          <Box x={360} y={116} w={170} h={52} kind="ok" label="Green · v1.4" sub="deployed + tested, waiting" />
          <T x={558} y={44} anchor="start" size={10}>kept running →</T>
          <T x={558} y={58} anchor="start" size={10}>instant rollback</T>
        </svg>
        <p>
          <En><strong>Canary release:</strong> send a small slice of real traffic (say 5%) to the new version, watch the errors, then widen. Rollback: route the 5% back. Cost: needs good monitoring to judge &quot;is it healthy?&quot;</En>
          <Zh><strong>Canary：</strong>先把一小部分真实流量（比如 5%）导给新版本，观察错误，再逐步扩大。回滚：把那 5% 切回去。代价：需要完善的监控来判断&quot;是否健康&quot;。</Zh>
        </p>
        <svg viewBox="0 0 680 134" role="img" aria-label="Canary deployment. Users send traffic to a load balancer. 95 percent goes to the current version 1.3 and 5 percent goes to the new version 1.4, the canary. If the canary is healthy, widen it; if not, route its traffic back.">
          <Box x={20} y={44} w={90} h={44} kind="muted" label="Users" />
          <Arrow d="M110,66 L128,66" />
          <Box x={130} y={36} w={110} h={60} kind="primary" label="Load balancer" sub="the traffic switch" />
          <Arrow d="M240,56 L358,36" />
          <Arrow d="M240,76 L358,98" />
          <Box x={360} y={10} w={170} h={52} label="v1.3 · current" sub="95% of traffic" />
          <Box x={360} y={72} w={170} h={52} kind="warn" label="v1.4 · canary" sub="5% of traffic" />
          <T x={558} y={90} anchor="start" size={10}>healthy: widen the slice</T>
          <T x={558} y={104} anchor="start" size={10}>broken: route it back</T>
        </svg>
        <p className="callout">
          <En>All three run two versions at once, so a database change must work with <em>both</em>. Add the new column first, deploy, and only remove the old one in a later release.</En>
          <Zh>这三种方式都会让两个版本同时运行，所以数据库的改动必须对<em>两个版本</em>都兼容。先加新字段、部署，等到之后的某次 release 再删旧字段。</Zh>
        </p>

        {/* ───────────────────────── 8. Release day ───────────────────────── */}
        <h3>
          <En>8. Release day: on-call, monitoring, rollback</En>
          <Zh>8. 发布当天：on-call、监控、回滚</Zh>
        </h3>
        <p>
          <En>Passing every test doesn&apos;t guarantee production is fine — real users do things tests never imagined. So release day has a routine:</En>
          <Zh>通过所有测试并不保证生产环境没问题——真实用户会做出测试从没想到过的操作。所以发布当天有一套固定流程：</Zh>
        </p>
        <svg viewBox="0 0 680 128" role="img" aria-label="The release day routine. Release a tagged version with a developer on call. A monitoring tool watches error rates, latency and crashes. If a threshold is crossed, an alert fires and PagerDuty pages the on-call engineer. The engineer then either rolls back to restore service first, or ships a hotfix for a small, understood bug.">
          <Box x={10} y={26} w={130} h={52} label="Release" sub="tagged, on-call ready" />
          <Box x={170} y={26} w={130} h={52} kind="ok" label="Monitor" sub="errors · latency · crashes" />
          <Box x={330} y={26} w={130} h={52} kind="fail" label="Alert" sub="PagerDuty pages on-call" />
          <Box x={500} y={6} w={170} h={46} kind="warn" label="Rollback" sub="restore service first" />
          <Box x={500} y={66} w={170} h={46} label="Hotfix" sub="small, understood, safe fix" />
          <Arrow d="M140,52 L168,52" />
          <Arrow d="M300,52 L328,52" />
          <Arrow d="M460,44 L498,30" />
          <Arrow d="M460,60 L498,88" />
          <T x={235} y={100} size={9}>Datadog · Grafana · Sentry</T>
          <T x={395} y={100} size={9}>a phone call, even at 3 a.m.</T>
        </svg>
        <ul>
          <li>
            <En><strong>Rollback:</strong> put the previous release tag back (flip blue/green, redeploy the old image, or turn the feature flag off). Use it when the impact is serious or the cause is unclear: restore service first, investigate after.</En>
            <Zh><strong>Rollback：</strong>把上一个 release tag 放回去（切回 blue/green、重新部署旧 image，或关掉 feature flag）。影响严重或原因不明时用它：先恢复服务，再慢慢排查。</Zh>
          </li>
          <li>
            <En><strong>Hotfix:</strong> a small, urgent fix on its own branch, pushed through the same pipeline (expedited). Use it when the bug is understood and the fix is tiny and safe.</En>
            <Zh><strong>Hotfix：</strong>在单独的 branch 上做一个小而紧急的修复，走同一条 pipeline（加急）。bug 已经搞清楚、修复很小且安全时用它。</Zh>
          </li>
        </ul>

        <h4 className="topic">
          <En>Troubleshooting a bug in production, step by step</En>
          <Zh>排查生产环境 bug 的步骤</Zh>
        </h4>
        <p>
          <En>A favourite interview question: &quot;You find a complicated bug in production. What do you do?&quot;</En>
          <Zh>面试高频题：&quot;你在生产环境发现了一个复杂的 bug，你会怎么做？&quot;</Zh>
        </p>
        <svg viewBox="0 0 680 180" role="img" aria-label="Six steps to troubleshoot a production bug. One: assess the impact, and roll back first if it is serious. Two: locate it with monitoring logs and traces. Three: reproduce it locally with the same input. Four: find the root cause and fix it, adding a test that fails before and passes after. Five: ship the fix through the pipeline as a hotfix or in the next release. Six: verify in monitoring that the error rate is back to normal.">
          <Box x={20} y={16} w={190} h={52} label="1  Assess the impact" sub="serious? roll back first" />
          <Box x={245} y={16} w={190} h={52} label="2  Locate it" sub="monitoring: logs, traces" />
          <Box x={470} y={16} w={190} h={52} label="3  Reproduce it" sub="locally, same input and data" />
          <Arrow d="M210,42 L243,42" />
          <Arrow d="M435,42 L468,42" />
          <Arrow d="M565,68 L565,92 L115,92 L115,112" />
          <Box x={20} y={112} w={190} h={52} label="4  Root cause + fix" sub="add a test that failed before" />
          <Box x={245} y={112} w={190} h={52} label="5  Ship the fix" sub="hotfix or next release" />
          <Box x={470} y={112} w={190} h={52} kind="ok" label="6  Verify" sub="error rate back to normal" />
          <Arrow d="M210,138 L243,138" />
          <Arrow d="M435,138 L468,138" />
        </svg>
        <p className="callout">
          <En>A classic production bug: the backend returns <code>null</code> where the frontend expected <code>[]</code>, and <code>.map()</code> crashes the page.</En>
          <Zh>一个经典的生产 bug：后端返回了 <code>null</code>，而前端预期的是 <code>[]</code>，结果 <code>.map()</code> 让整个页面崩溃。</Zh>
        </p>
        <div className="concept">
          <p className="concept-label">Concept</p>
          <ul>
            <li>
              <En>The pipeline ships the code; <strong>monitoring tells you whether it is healthy.</strong> A release you can&apos;t observe is a release you can&apos;t trust.</En>
              <Zh>pipeline 负责把代码送出去；<strong>监控告诉你它是否健康。</strong>一个你看不见的发布，是你无法信任的发布。</Zh>
            </li>
            <li>
              <En>A dashboard tells you <em>that</em> something broke. Finding out <em>where</em> and <em>why</em> across many services takes richer data — logs, metrics, and traces — which is the next topic.</En>
              <Zh>仪表盘只能告诉你<em>出事了</em>。要在众多服务里找出<em>在哪里</em>、<em>为什么</em>，需要更丰富的数据——logs、metrics 和 traces——这就是接下来的主题。</Zh>
            </li>
          </ul>
        </div>

        {/* ───────────────────────── 9. Big picture ───────────────────────── */}
        <h3>
          <En>9. The whole journey in one picture</En>
          <Zh>9. 一张图看完整个旅程</Zh>
        </h3>
        <svg viewBox="0 0 680 235" role="img" aria-label="The full path from idea to production. Top row: a Jira ticket, a feature branch and pull request, CI checks, code review and merge, then build and push the image from main. Once the CI checks pass on the pull request, the feature branch is deployed to a temporary dev environment. After review and approval, merging deletes that temporary dev environment and deploys the main branch to QA. Bottom row: the temporary dev environment, QA, staging with UAT, production after a tagged release and approval, then monitoring. If monitoring raises an alert, a rollback arrow goes back to the previous version in production.">
          <Box x={30} y={24} w={108} h={50} kind="muted" label="Ticket" sub="Jira story" />
          <Box x={158} y={24} w={108} h={50} label="Branch + PR" sub="ORD-123" />
          <Box x={286} y={24} w={108} h={50} label="CI checks" sub="lint · test · scan" />
          <Box x={414} y={24} w={108} h={50} label="Review + merge" sub="2 approvals" />
          <Box x={542} y={24} w={108} h={50} kind="broker" label="Build image" sub="push to registry" />
          <Arrow d="M138,49 L156,49" />
          <Arrow d="M266,49 L284,49" />
          <Arrow d="M394,49 L412,49" />
          <Arrow d="M522,49 L540,49" />
          <Arrow d="M340,74 L340,88 L84,88 L84,126" />
          <T x={212} y={84}>CI passes → deploy branch</T>
          <Arrow d="M596,74 L596,108 L212,108 L212,126" />
          <T x={404} y={102} color="#c0392b">merged → delete dev, deploy main to QA</T>
          <Box x={30} y={128} w={108} h={50} kind="warn" dashed label="dev" sub="temp · per PR" />
          <Box x={158} y={128} w={108} h={50} label="QA" sub="main · E2E" />
          <Box x={286} y={128} w={108} h={50} label="staging" sub="UAT · approval" />
          <Box x={414} y={128} w={108} h={50} kind="primary" label="prod" sub="tag · zero downtime" />
          <Box x={542} y={128} w={108} h={50} kind="ok" label="Monitor" sub="alerts · on-call" />
          <Arrow d="M138,153 L156,153" />
          <Arrow d="M266,153 L284,153" />
          <Arrow d="M394,153 L412,153" />
          <Arrow d="M522,153 L540,153" />
          <Arrow d="M596,178 L596,204 L468,204 L468,180" ink="red" dashed />
          <T x={532} y={220} color="#c0392b">alert → roll back to the previous tag</T>
        </svg>
        <ul>
          <li>
            <En><strong>CI</strong> is the top row up to the merge: small changes, verified automatically, merged often.</En>
            <Zh><strong>CI</strong> 是上排到合并为止：改动小、自动验证、频繁合并。</Zh>
          </li>
          <li>
            <En><strong>CD</strong> is everything after: the same image moves down the environment ladder, with approvals along the way.</En>
            <Zh><strong>CD</strong> 是之后的全部：同一个 image 沿着环境阶梯逐级往下走，途中有若干审批。</Zh>
          </li>
          <li>
            <En><strong>Docker</strong> is what makes that image identical everywhere; <strong>Kubernetes</strong> keeps its containers running in production.</En>
            <Zh><strong>Docker</strong> 让这个 image 在任何地方都一模一样；<strong>Kubernetes</strong> 负责让它的 container 在生产环境持续运行。</Zh>
          </li>
          <li>
            <En>The red arrow is the loop that keeps releases safe: monitor, alert, roll back.</En>
            <Zh>红色箭头是让发布保持安全的闭环：监控、告警、回滚。</Zh>
          </li>
        </ul>
      </section>
    </div>
  );
}
