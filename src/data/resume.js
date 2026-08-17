export const quickStats = [
  { value: '27+', label: 'Years' },
  { value: '$250M+', label: 'Contracts' },
  { value: '50', label: 'Eng Team' },
  { value: 'TS/SCI', label: 'Clearance' },
]

export const experience = [
  {
    id: 'ai', logo: '✦', color: '#10a37f',
    company: 'Independent AI-Augmented Builds', title: 'Selected 2026 Projects · Solo',
    period: '2026',
    tagline: 'Directing — and extending — AI coding agents to architect and ship production systems, with senior engineering judgment on every change',
    context: "In 2026, alongside earning AWS Professional certifications, Jamie moved into AI-augmented engineering — using agentic coding tools (Claude Code) as a force multiplier on top of decades of software architecture and DevSecOps experience. The approach is deliberately disciplined: rather than letting AI generate unsupervised code, Jamie directs agents through a structured, issue-driven SDLC — defining the architecture, decomposing work into issues and merge requests, and reviewing every change before it merges. Beyond directing agents, Jamie extends them — building custom Claude Code skills, slash commands, hooks, and CI-gateable quality-gate tooling — and orchestrates them in parallel via git-worktree workflows and Model Context Protocol (MCP) integrations. The result is production-grade software shipped in days and weeks instead of months, across five projects spanning a Cloudflare edge application, a ~70K-line AWS-deployed Python platform (ECS/EKS/S3 via CDK), a Terraform/Ansible/Argo CD Kubernetes GitOps platform hardened for SSM-only operations, and a personal agentic-developer toolkit — 1,400+ commits and 390+ reviewed merge requests.",
    stats: [
      { value: '5', label: 'Projects' },
      { value: '1,400+', label: 'Commits' },
      { value: '390+', label: 'Merge Requests' },
      { value: 'Claude', label: 'Primary Agent' },
    ],
    projects: [
      {
        id: 'channel-surf-tv', icon: '🏄', name: 'Channel Surf TV', customer: 'Independent Product',
        blurb: 'Full-stack worldwide surf-spot atlas on the Cloudflare edge — architected and shipped to production in ~4 days by directing AI agents through a disciplined issue→branch→merge-request workflow, then iterated over ~3 weeks.',
        description: "Channel Surf TV is a production Cloudflare-native web application — Astro frontend, Cloudflare Workers API, D1 (SQLite) database, and R2 media delivery — featuring a worldwide surf-spot atlas with interactive Leaflet maps, an infinite-scroll spot feed, OSM and Wikidata bulk-import pipelines, and an Instagram Graph API content feed. Jamie stood up the production stack solo in roughly four days by directing Claude Code — including parallel agents working separate issues in isolated git worktrees — then iterated it over ~3 weeks to 249 commits and 105 merge requests, applying decades of architecture and DevSecOps judgment to steer the agents, review every change, and keep the codebase production-grade.",
        tech: ['Astro', 'Cloudflare Workers', 'Cloudflare D1', 'Cloudflare R2', 'TypeScript', 'Leaflet', 'SQLite', 'Wrangler', 'Claude Code', 'Agentic Workflows'],
        outcome: 'Cloudflare-native worldwide surf atlas, edge-deployed · production in ~4 days · 249 commits & 105 MRs over ~3 weeks · 13.5K LOC app + 34 D1 migrations',
        bullets: [
          'Directed AI coding agents to build a full Cloudflare-native stack (Astro, Workers, D1, R2) from zero to production in roughly four days',
          'Drove a disciplined issue→branch→merge-request workflow — 249 commits across 105 reviewed merge requests — with human review on every change',
          'Architected a D1 (SQLite) schema across 34 migrations (schema + seed), populating a worldwide surf-spot atlas from OpenStreetMap and Wikidata bulk-import pipelines',
          'Built interactive Leaflet maps, an infinite-scroll spot feed, R2-backed media delivery, and an Instagram Graph API content feed',
          'Applied decades of architectural and DevSecOps discipline to steer the agent, catch regressions, and hold code to production standards',
        ]
      },
      {
        id: 'safe-sim', icon: '📊', name: 'SAFe Portfolio Simulator', customer: 'Independent / Agile Tooling',
        blurb: 'A ~70K-line Python platform that bootstraps and analyzes Scaled Agile (SAFe) portfolios on GitLab — WSJF, flow metrics, a JQL-style query language, interactive dashboards, compliance evidence, and auto-generated sprint-review decks — fully containerized for one-command deployment to AWS ECS, EKS, S3/CloudFront, or a workstation.',
        description: "The SAFe Portfolio Simulator is a Python automation platform that bootstraps and manages realistic Scaled Agile Framework (SAFe) portfolios against the GitLab API — generating epics, issues, labels, milestones, and value-stream hierarchies, then computing WSJF prioritization and flow metrics and publishing interactive Quarto and Marimo/WASM reports — with a Vue 3 web console over a FastAPI service (with WebSocket job streaming) for launching jobs, watching them live, and browsing results. It includes a JQL-style query language over GitLab work items with temporal operators (WAS / CHANGED), a per-finding security-evidence disposition register reconciled in CI, and auto-generated sprint-review PowerPoint decks (python-pptx) from Playwright screenshots — published to a per-fleet bucket so any box can cut the weekly deck. AWS CDK deploys the identical workload to Amazon ECS (Fargate), Amazon EKS, or an S3/CloudFront static site — provisioning ECR, EFS persistent storage, an ALB/CloudFront edge, and Amazon Managed Grafana — and a workstation mode serves HTTPS on the box's own public IP. Built since April 2026 by directing AI agents through 970 commits and 254 merge requests in a fully issue-driven workflow.",
        tech: ['Python', 'AWS CDK', 'Amazon ECS (Fargate)', 'Amazon EKS', 'S3/CloudFront', 'Docker', 'Helm', 'Amazon ECR', 'GitLab API', 'FastAPI', 'WebSockets', 'Vue 3', 'Playwright', 'Quarto', 'Marimo', 'JQL', 'GitLab CI', 'Claude Code'],
        outcome: 'Deployable to AWS ECS, EKS, S3/CloudFront, or a workstation · ~70K LOC Python (git-tracked) + a Vue 3 console · 970 commits · 254 merge requests',
        bullets: [
          'Directed AI agents to build a ~70,000-line Python SAFe-automation platform (plus a Vue 3 console) since April 2026 (970 commits, 254 merge requests)',
          'Automated SAFe portfolio bootstrap — epics, issues, labels, milestones, and value-stream hierarchies — via the GitLab REST API',
          'Implemented WSJF prioritization and flow-metrics analytics as interactive Quarto and Marimo/WASM reports, with a Vue 3 web console over a FastAPI backend (WebSocket job streaming) for running jobs live and browsing results',
          'Added a JQL-style query language over GitLab work items, including temporal operators (WAS / CHANGED) with fail-fast validation on unsupported fields',
          'Shipped a per-finding security-evidence disposition register with a CI recipe that answers whether the register is still true, plus a GitLab token-rotation runbook',
          'Auto-generated sprint-review PowerPoint decks (python-pptx) from Playwright screenshots, published to the fleet\'s own bucket so any workstation can cut the weekly deck',
          'Authored AWS CDK provisioning three deployment targets — Amazon ECS (Fargate), Amazon EKS, and S3/CloudFront — with ECR, EFS, ALB/CloudFront, and Amazon Managed Grafana, plus a workstation mode that serves HTTPS on the box\'s public IP',
          'Containerized the platform (Docker + Helm, Kaniko-built images in GitLab CI) for one-command redeploy — directly exercising the AWS DevOps/CloudOps certifications and CKA Kubernetes track',
        ]
      },
      {
        id: 'gitops', icon: '☸', name: 'Kubernetes GitOps Platform', customer: 'Independent / Platform Engineering',
        blurb: 'An Argo CD GitOps platform that stands up a full Rancher / Keycloak / cert-manager / ingress-nginx stack on an ephemeral kubeadm Kubernetes cluster on AWS EC2 — from a single `make up` — with SSM-only host configuration, MFA-gated operators, and per-box workstations.',
        description: "A from-scratch Kubernetes GitOps platform built by directing AI agents through an issue-driven, epic-sequenced workflow. Terraform provisions the AWS foundation (VPC, three arm64/Graviton EC2 nodes, Route 53, S3-backed state); Ansible roles run kubeadm cluster init with the Cilium CNI; Argo CD ApplicationSets then deploy a Rancher, Keycloak, cert-manager, and ingress-nginx stack via pinned Helm wrapper charts. Hosts are configured over SSM so a build never opens an inbound port; the operator path is deny-unless-MFA; workstations and a CSDK devbox have their own Terraform + Ansible; teardown and rebuild can be lifted from a WSL laptop. A self-documenting Makefile drives the full cluster lifecycle (`make up` / `make down`) plus a smoke test. The AI workflow itself integrated the Model Context Protocol (Atlassian Rovo) so the agent could read program context from Confluence and Jira. Built on an open-source platform baseline (Joseph Jung's nce-platform-gitops), with vendored charts replaced by pinned wrapper charts.",
        tech: ['Terraform', 'Ansible', 'Kubernetes (kubeadm)', 'Cilium', 'Argo CD', 'Helm', 'AWS EC2', 'AWS SSM', 'IAM MFA', 'Keycloak', 'cert-manager', 'MCP (Atlassian Rovo)', 'Claude Code'],
        outcome: 'One-command GitOps platform on AWS EC2 (kubeadm) · SSM-only, MFA-gated · Terraform + Ansible + Argo CD · 159 commits · 34 MRs',
        bullets: [
          'Built a from-scratch Kubernetes GitOps platform on an ephemeral kubeadm cluster (AWS EC2), driven entirely by Argo CD ApplicationSets and pinned Helm wrapper charts',
          'Authored Terraform (arm64/Graviton EC2, Route 53, S3-backed state) and Ansible roles (kubeadm init + Cilium CNI) for repeatable, one-command cluster lifecycle',
          'Configured boxes over SSM as the instance role so a build never opens an inbound port; codified a deny-unless-MFA operator policy and WSL-lifted teardown/rebuild',
          'Added per-box workstation and CSDK devbox stacks (own Terraform + Ansible) and cross-platform Terraform locks (linux_amd64 alongside arm64)',
          'Deployed a Rancher / Keycloak / cert-manager / ingress-nginx stack as GitOps applications with a self-documenting Makefile and smoke test',
          'Integrated the Model Context Protocol (Atlassian Rovo) into the agent workflow so Claude could pull program context directly from Confluence and Jira',
          'Directly exercises the SAIC cloud-infrastructure toolchain (Terraform, Helm, Ansible, Kubernetes, Zero Trust) and the in-progress CKA certification',
        ]
      },
      {
        id: 'toolkit', icon: '🧰', name: 'Agentic Dev Toolkit', customer: 'Independent / Developer Tooling',
        blurb: 'A personal, version-controlled toolkit that extends Claude Code itself — custom skills, slash commands, and hooks, plus a CI-gateable code-health quality-gate system — turning the AI agent into a disciplined, repeatable engineering platform.',
        description: "Rather than only using an AI coding agent, Jamie built tooling that extends one. This is a git-versioned repository of custom Claude Code skills, slash commands, and hooks, symlinked into the live agent config and kept in sync across machines by a three-part self-syncing infrastructure (a SessionStart git-pull hook, a shell launch wrapper, and a shared symlink-reconcile helper). Its centerpiece is `code-health`, a portable quality-gate standard: 16 tested Node.js scripts measuring eight metric families — LOC growth, per-file complexity, churn×complexity hotspots, duplication (jscpd), test/coverage health, dependency health, dependency-cruiser conformance, and two-way OpenAPI drift — behind a CI-gateable check that fails the build on breaches. August 2026 added an architecture explorer that cannot go stale (curated model merged with a live import scan), a work-MSR publisher that writes PMW 120-style status bullets to a GitLab wiki, a purpose-first work-rollup for leadership decks, and an hours estimator that auto-discovers companion repos and clusters git history into sessions. Other original tooling includes a multi-session work-state handoff protocol (including mid-task checkpointing), a one-command machine bootstrap, and a local (no-API-cost) video-transcription pipeline. Custom work only — the repo also vendors third-party Cloudflare skill packs purely for cross-machine sync.",
        tech: ['Claude Code', 'Node.js', 'Bash', 'Git (hooks/symlinks)', 'MCP', 'GitLab CLI (glab)', 'GitHub CLI (gh)', 'OpenAPI', 'dependency-cruiser', 'jscpd'],
        outcome: 'Custom agent skills/commands/hooks + CI-gateable quality gates, architecture explorer, MSR/rollup automation · self-syncing across machines',
        bullets: [
          'Built custom Claude Code skills, slash commands, and hooks that extend the agent into a repeatable, disciplined engineering platform',
          'Authored `code-health` — 16 tested Node.js scripts across 8 metric families (incl. churn×complexity hotspots and two-way OpenAPI drift) behind a CI-gateable quality gate',
          'Added an architecture explorer that merges a curated model with a live import scan so the diagram cannot go stale, plus wiki-published MSR and leadership-rollup generators',
          'Engineered a three-part self-syncing infrastructure (SessionStart pull hook + launch wrapper + symlink-reconcile helper) and a one-command machine bootstrap',
          'Added a multi-session work-state handoff protocol with mid-task checkpointing, a session-clustering hours estimator that auto-discovers companion repos, and a local no-API-cost video-transcription pipeline',
          'Applies decades of DevSecOps discipline as tooling — turning quality gates and code review into automation that holds AI-built code to production standards',
        ]
      },
      {
        id: 'portfolio', icon: '💻', name: 'This Portfolio Site', customer: 'Independent Product',
        blurb: "The interactive resume you're reading — a Vue 3 single-page app built with AI assistance and continuously deployed to a custom domain on a global edge CDN.",
        description: "This site itself is a Vue 3 + Vite single-page portfolio with animated modal navigation, swipe gestures, and a fully data-driven content model. It was designed and built with AI assistance, then wired for continuous deployment via GitHub Actions to GitHub Pages behind a custom apex domain (jamiepowers.org) with automatic TLS — including the Route 53 DNS and custom-domain delegation.",
        tech: ['Vue 3', 'Vite', 'JavaScript', 'GitHub Actions', 'GitHub Pages', 'Route 53', 'Claude Code'],
        outcome: 'Live at jamiepowers.org · CI/CD auto-deploy on push · custom apex domain with enforced HTTPS',
        bullets: [
          'Built a Vue 3 + Vite interactive portfolio with modal navigation, swipe gestures, and a data-driven content model — with AI assistance',
          'Automated deployment via GitHub Actions to GitHub Pages with a custom apex domain and enforced HTTPS',
          'Configured Route 53 DNS, GitHub Pages custom-domain delegation, and end-to-end TLS',
        ]
      }
    ]
  },
  {
    id: 'saic', logo: '☁', color: '#0066cc',
    company: 'SAIC', title: 'Cloud Infrastructure Engineer',
    period: 'April 2026 – Present',
    tagline: 'AWS cloud infrastructure for DoD/Navy PEO C4I and NAVWAR programs in a DevSecOps software factory',
    context: "SAIC (Science Applications International Corporation) is one of the largest defense IT contractors in the US, delivering technology solutions across the DoD, intelligence community, and federal agencies. Jamie joined SAIC's San Diego team as a Cloud Infrastructure Engineer supporting Navy PEO C4I and NAVWAR programs — bringing deep DoD systems experience and AWS certifications (DevOps Engineer Pro, CloudOps, CCP) to bear on cloud-native infrastructure delivery for Agile DevSecOps software teams.",
    stats: [
      { value: 'AWS', label: 'Platform' },
      { value: 'TS/SCI', label: 'Clearance' },
      { value: 'PEO C4I', label: 'Customer' },
      { value: 'SAFe', label: 'Methodology' },
    ],
    projects: [
      {
        id: 'saic-cloud', icon: '☁', name: 'AWS Cloud Infrastructure', customer: 'DoD / Navy PEO C4I / NAVWAR',
        blurb: 'Design and deploy AWS cloud infrastructure supporting Navy C4I systems modernization within a classified DevSecOps software factory.',
        description: "Supporting Navy PEO C4I and NAVWAR programs, Jamie designs and deploys AWS cloud infrastructure enabling DoD software development teams to build, test, and operate cloud-native applications. The role involves Infrastructure as Code (Terraform, Helm, Ansible), Kubernetes container orchestration, Zero Trust security architecture, and hybrid cloud/on-premise connectivity — all within a classified SAFe Agile DevSecOps environment at SAIC's San Diego location.",
        tech: ['AWS', 'Terraform', 'Helm', 'Ansible', 'Kubernetes', 'Docker', 'Python', 'Zero Trust', 'SAFe Agile'],
        outcome: 'Supporting Navy C4I systems modernization for PEO C4I / NAVWAR',
        bullets: [
          'Design and deploy AWS cloud infrastructure for DoD Agile software teams using Infrastructure as Code (Terraform, Helm, Ansible)',
          'Provision and manage Kubernetes container environments within a classified DevSecOps software factory',
          'Support hybrid cloud/on-premise connectivity aligned to Zero Trust architecture and DoD C-ATO requirements',
          'Collaborate within SAFe Agile teams to deliver cloud-native solutions supporting Navy PEO C4I / NAVWAR C4I modernization',
        ]
      }
    ]
  },
  {
    id: 'galt', logo: '🛰', color: '#00d4ff',
    company: 'GALT Aerospace', title: 'Director of Engineering',
    period: '2019 – 2023',
    tagline: "Airborne C3 networks, rapid prototyping, and JADC2 — zero to $250M+",
    context: "GALT Aerospace is a non-traditional, veteran-owned defense contractor delivering premier C3 solutions for airborne systems — specializing in open-architecture rapid-prototyping for the warfighter. Jamie joined an early ~6–7-person team and grew the software engineering organization to 50, helping win $250M+ in contracts against major industry primes.",
    stats: [
      { value: '$250M+', label: 'Contracts Won' },
      { value: '~7→50', label: 'Team Scaled' },
      { value: '$35M+', label: 'SkyTower II Win' },
      { value: 'IATT', label: 'Accreditations' },
    ],
    projects: [
      {
        id: 'finn', icon: '📡', name: 'FINN Program', customer: 'Marine Corps Warfighting Lab',
        blurb: 'Airborne comms status/control system on microservices & pub-sub architecture. Led end-to-end DevSecOps from ground up.',
        description: 'The FINN program required a full-stack airborne communications status and control software system built on a microservices/pub-sub architecture. Jamie architected and developed the system using Python, Redis, Vue3, Ansible, and Docker on Linux — while simultaneously standing up the entire DevSecOps pipeline including Jenkins CI/CD, automated DISA STIG compliance, SonarQube static analysis, and automated testing.',
        tech: ['Python', 'Vue3', 'Redis', 'Ansible', 'Docker', 'Linux', 'Jenkins', 'SonarQube', 'PyTest', 'Selenium'],
        outcome: 'Successful DoD flight tests; multiple IATT accreditations achieved',
        bullets: [
          'Architected microservices/pub-sub system for real-time airborne comms status and control',
          'Built Jenkins CI/CD pipeline with automated builds, deployments, and DISA STIG compliance',
          'Implemented SonarQube static analysis and PyTest/Selenium automated test suites',
          'Achieved IATT accreditation through rigorous automated security practices',
          'Led system through successful DoD flight test milestones with Marine Corps Warfighting Lab',
        ]
      },
      {
        id: 'skytower', icon: '🛸', name: 'SkyTower II', customer: 'DoD / Marine Corps',
        blurb: 'Scalable airborne C3 software that beat major industry primes and secured a landmark $35M+ contract win.',
        description: 'SkyTower II was a high-stakes competitive DoD program where GALT competed directly against major industry primes and won. Jamie led the software architecture and engineering execution — delivering a scalable, secure, mission-ready airborne C3 system under aggressive timelines with full DevSecOps compliance.',
        tech: ['Python', 'JavaScript', 'Docker', 'Ansible', 'Jenkins', 'SonarQube', 'BitBucket', 'RedHat Linux'],
        outcome: '$35M+ contract win against major defense industry primes',
        bullets: [
          'Architected full software stack for SkyTower II airborne communications system',
          'Competed directly against major defense primes — and won on technical merit',
          'Delivered on aggressive DoD timelines with full DevSecOps and STIG compliance',
          'Integrated automated vulnerability management throughout the development pipeline',
          'Win positioned GALT for $250M+ total contract portfolio growth',
        ]
      },
      {
        id: 'devsecops-galt', icon: '⚙', name: 'DevSecOps Org Build', customer: 'Internal / DoD Programs',
        blurb: 'Grew the software engineering organization and matured its DevSecOps pipeline — scaling from ~7 to 50 engineers.',
        description: 'When Jamie joined GALT, the software team was just ~6–7 people. He grew it into a 50-engineer organization — hiring engineers, maturing DevSecOps culture and tooling, implementing CI/CD pipelines, automated testing, code review processes, and security compliance automation — all while delivering production software for live DoD programs.',
        tech: ['Jenkins', 'Ansible', 'Docker', 'SonarQube', 'Fortify', 'BitBucket', 'JIRA', 'Selenium', 'PyTest', 'Bash'],
        outcome: 'Org scaled from ~7 to 50 engineers; enabled $250M+ in contract wins',
        bullets: [
          'Hired and developed the engineering team from ~7 to 50 professionals',
          'Established full DevSecOps culture, tooling, and processes',
          'Implemented Jenkins CI/CD with automated builds, tests, and deployments',
          'Integrated SonarQube static analysis and Fortify vulnerability management',
          'Created automated DISA STIG compliance pipeline supporting multiple IATT accreditations',
          'Mentored engineers on best practices, code review, and security-first development',
        ]
      }
    ]
  },
  {
    id: 'northrop', logo: '🛩', color: '#ff6b35',
    company: 'Northrop Grumman', title: 'Software Engineer → Team Leader',
    period: '2005 – 2018',
    tagline: '13 years — CBRN modeling, GCCS integration, and the BACN airborne gateway',
    context: "Jamie spent 13 years at Northrop Grumman across two major programs. From 2005–2008 he led a ~20-person team on the Joint Effects Model (JEM) — a DoD CBRN modeling and simulation system integrated into GCCS-J and GCCS-M. From 2009–2018 he was a core developer and team leader on BACN (Battlefield Airborne Communications Node) — the high-altitude airborne gateway flying on the E-11A with 200,000+ combat flight hours, a $3.6B IDIQ contract, and 98%+ mission availability.",
    stats: [
      { value: '13 yrs', label: 'Tenure' },
      { value: '$3.6B', label: 'BACN IDIQ' },
      { value: '200K+', label: 'Combat Flight Hrs' },
      { value: '~20', label: 'Developers Led (JEM)' },
    ],
    projects: [
      {
        id: 'bacn-bib', icon: '🗺', name: 'BACN Information Broker', customer: 'US Air Force / Joint DoD',
        blurb: 'Full-stack web-based situational awareness & mission planning app with 3D geospatial visualization — globally forward-deployed.',
        description: 'The BACN Information Broker (BIB) was the primary situational awareness and mission planning application for BACN — a real-time 3D geospatial view of the battlespace fusing data from Link 16, EPLRS, SADL and other tactical data links. Jamie led development across 3 major baselines working the full stack from Python/Java backend through React/Redux/CesiumJS 3D frontend.',
        tech: ['React', 'Redux', 'Backbone', 'CesiumJS', 'Python', 'Java', 'ElasticSearch', 'Node.js', 'Jenkins', 'RedHat Linux', 'PyTest', 'Selenium', 'Fortify'],
        outcome: '3 major baselines delivered ahead of schedule; globally forward-deployed',
        bullets: [
          'Led full-stack BIB development across 3 major baselines over 9 years',
          'Built 3D geospatial visualization in CesiumJS fusing multi-source tactical data links',
          'Implemented ElasticSearch backend for high-performance real-time data queries',
          'Oversaw 3 cyber security upgrade cycles with Fortify and automated STIG compliance',
          'Supported forward-deployed field installations globally across numerous extended deployments',
          'Delivered all baselines ahead of schedule through disciplined scope management',
        ]
      },
      {
        id: 'bacn-gateway', icon: '🌐', name: 'BACN', customer: 'US Air Force / DoD Joint',
        blurb: 'Core BACN payload software — the airborne gateway that translates and bridges Link 16, CDL, EPLRS, SADL, VOIP, and Inmarsat across the battlespace on the E-11A at 51,000 ft.',
        description: "BACN (Battlefield Airborne Communications Node) is a high-altitude airborne gateway carried on the E-11A that acts as a universal translator between otherwise incompatible tactical data links and voice systems — bridging Link 16, EPLRS, CDL, SADL, VOIP, Inmarsat and more in real time. Jamie worked hands-on at the code level on the BACN payload software, debugging data link integrations and personally supporting operational deployments worldwide. Over 15,500 missions flown with 98%+ mission availability.",
        tech: ['C', 'C++', 'Java', 'Python', 'Link16', 'CDL', 'VOIP', 'SADL', 'EPLRS', 'Inmarsat', 'RedHat Linux'],
        outcome: '15,500+ missions flown; 98%+ availability; $3.6B IDIQ; globally forward-deployed',
        bullets: [
          'Developed and debugged BACN payload software for real-time tactical data link translation and relay',
          'BACN acts as a universal translator between incompatible military comms on the E-11A at 51,000 ft',
          'Worked across full data link suite: Link 16, CDL, Inmarsat, SADL, EPLRS, and VOIP',
          'Supported field deployments and upgrades at forward-deployed operational locations worldwide',
          'Provided on-site integration support across many extended deployments',
          'Administered Windows and RedHat Linux server infrastructure in operational environments',
        ]
      },
      {
        id: 'jem', icon: '☢', name: 'Joint Effects Model (JEM)', customer: 'DoD Joint Command',
        blurb: 'Web-based CBRN modeling and simulation for DoD commanders. Led ~20 developers across full stack on Windows and Solaris.',
        description: 'JEM was a DoD web application for real-time modeling and simulation of CBRN events, providing commanders with effects prediction integrated into the global command picture. Jamie led ~20 developers across the full stack — Fortran scientific code, C/C++ middleware, Java web tier, and JSP/JavaScript frontend — running cross-platform on Windows and SUN Solaris.',
        tech: ['Fortran', 'C', 'C++', 'Java', 'JSP', 'JavaScript', 'Windows', 'SUN Solaris'],
        outcome: 'Operational CBRN modeling capability for DoD joint command',
        bullets: [
          'Led ~20 developer team across full CBRN modeling application stack',
          'Managed scheduling, peer reviews, technical documentation, and team development',
          'Developed across Fortran scientific computing, C/C++ middleware, and Java/JSP web tier',
          'Maintained cross-platform support across Windows desktop and SUN Solaris servers',
          'Regular travel to DC/Virginia area for on-site customer integration support',
        ]
      },
      {
        id: 'gccs', icon: '🖥', name: 'GCCS-J / GCCS-M Integration', customer: 'DoD Joint Command / US Navy',
        blurb: 'Ported JEM into Global Command and Control System Joint and Maritime, administering all Windows and Solaris infrastructure.',
        description: 'Integrating JEM into GCCS-J and GCCS-M required deep systems integration work — porting from standalone Windows into the tightly controlled GCCS ecosystem and administering all associated infrastructure. Also led development of an automated test framework for ongoing JEM quality assurance.',
        tech: ['Java', 'C++', 'Windows Server', 'SUN Solaris', 'GCCS-J', 'GCCS-M', 'Active Directory'],
        outcome: 'CBRN modeling capability fully integrated into global DoD command systems',
        bullets: [
          'Ported JEM from standalone Windows into GCCS-J and GCCS-M environments',
          'Administered Windows Domain Controllers and SUN Solaris servers for GCCS',
          'Led development of automated test framework for JEM quality assurance',
          'Regular travel to Virginia/DC area for on-site integration coordination',
        ]
      }
    ]
  },
  {
    id: 'predicate', logo: '⚓', color: '#bf5fff',
    company: 'Predicate Logic Inc.', title: 'Software Engineer',
    period: '1999 – 2005',
    tagline: 'Navy submarine C4ISR engineering & TychoMetrics metrics platform',
    context: 'Predicate Logic was a San Diego defense software company focused on submarine communications systems and advanced data metrics platforms. Jamie spent 6 years gaining deep expertise in low-level C systems programming on HPUX Unix, Berkeley sockets IPC, and building data-driven reporting tools across DoD and commercial customers.',
    stats: [
      { value: 'US Navy', label: 'Primary Customer' },
      { value: 'HPUX', label: 'Platform' },
      { value: 'C/C++', label: 'Core Stack' },
      { value: '.NET', label: 'Web Migration' },
    ],
    projects: [
      {
        id: 'slvr', icon: '🌊', name: 'SLVR Submarine Integration', customer: 'US Navy',
        blurb: 'Full lifecycle integration of submarine Low Frequency/VLF receiver into the Integrated Resource Manager using C, Berkeley sockets, and SNMP on HPUX Unix.',
        description: 'The SLVR (Submarine Low Frequency/Very Low Frequency VME Bus Receiver) integration into the Integrated Resource Manager required deep low-level systems programming on HPUX Unix. Jamie was responsible for GUI design, inter-process communication via Berkeley sockets, and SNMP protocol implementation — all in C on a submarine platform.',
        tech: ['C', 'HPUX Unix', 'Berkeley Sockets', 'SNMP', 'Neuron Data', 'VME Bus'],
        outcome: 'Operational submarine VLF communications integration for US Navy',
        bullets: [
          'Developed GUI using Neuron Data Development software suite on HPUX Unix',
          'Implemented inter-process communication using Berkeley sockets and SNMP protocol',
          'Provided full lifecycle support from design through operational deployment',
          'Integrated VME Bus receiver hardware interface with IRM software',
        ]
      },
      {
        id: 'tychometrics', icon: '📊', name: 'TychoMetrics Platform', customer: 'DoD Contractors / Commercial',
        blurb: 'Automated data collection and advanced metrics platform. Took it over mid-development and drove ~2–3 years of improvements, including the redesign from Windows desktop to a web-based ASP.NET application.',
        description: 'TychoMetrics was an automated data collection and reporting platform applying advanced metrics across disparate data sources. Jamie took over the existing platform mid-stream and spent roughly 2–3 years substantially improving and extending it — including the redesign from a Visual C++/MFC Windows desktop application to a web-based .NET application, significantly expanding reach and maintainability.',
        tech: ['Visual C++', 'MFC', 'Versant OODB', 'C#', 'ASP.NET', 'COM', 'IIS', 'ADO.NET', 'Perl', 'SQL Server', 'Oracle'],
        outcome: 'Scalable web-based metrics platform serving multiple DoD and commercial customers',
        bullets: [
          'Took over the existing Visual C++/MFC desktop application (Versant OODB) and drove substantial improvements over ~2–3 years',
          'Drove the redesign to a web-based ASP.NET application (C#, COM, IIS)',
          'Implemented OLE automation to integrate Excel as a reporting output via COM and C++',
          'Developed custom metrics solutions against SQL Server, Oracle, Access, and XML sources',
          'Created Perl and UNIX shell scripts for monthly data extraction and transformation',
        ]
      }
    ]
  }
]

export const skillGroups = [
  {
    title: 'AI-Augmented Engineering',
    items: [
      { name: 'Claude Code', desc: "Anthropic's agentic command-line coding tool and Jamie's primary AI development environment. Used to architect, build, test, and ship production applications by directing the agent through disciplined, issue-driven workflows with human review on every change.", companies: ['Independent AI-Augmented Builds'], projects: ['Channel Surf TV', 'SAFe Portfolio Simulator', 'Kubernetes GitOps Platform', 'Agentic Dev Toolkit', 'This Portfolio Site'], link: 'https://www.claude.com/product/claude-code' },
      { name: 'Agentic Workflows', desc: "Directing AI coding agents through a structured SDLC — decomposing work into issues, branches, and merge requests while the engineer owns architecture and reviews every change. Used to ship five production projects with 1,400+ commits and 390+ merge requests in 2026.", companies: ['Independent AI-Augmented Builds'], projects: ['Channel Surf TV', 'SAFe Portfolio Simulator', 'Kubernetes GitOps Platform', 'Agentic Dev Toolkit'], link: 'https://www.anthropic.com/engineering/claude-code-best-practices' },
      { name: 'AI-Driven DevSecOps', desc: "Applying decades of DevSecOps discipline to AI-generated code — CI/CD quality gates, automated testing, mandatory code review, and security practices that hold agent-built software to production and compliance standards.", companies: ['Independent AI-Augmented Builds'], projects: ['Channel Surf TV', 'SAFe Portfolio Simulator', 'Kubernetes GitOps Platform', 'Agentic Dev Toolkit'], link: 'https://www.anthropic.com/engineering' },
      { name: 'Prompt Engineering', desc: "Designing precise, context-rich instructions and feedback loops that get reliable, high-quality output from large language models — the core skill behind directing agents to produce correct, maintainable code at speed.", companies: ['Independent AI-Augmented Builds'], projects: ['Channel Surf TV', 'SAFe Portfolio Simulator', 'This Portfolio Site'], link: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
      { name: 'Multi-Agent Orchestration', desc: "Running multiple AI coding agents in parallel against separate issues in isolated git worktrees — decomposing work so several features are developed simultaneously without collision, then integrated through review. Used to accelerate Channel Surf TV, the SAFe Portfolio Simulator, and the GitOps platform.", companies: ['Independent AI-Augmented Builds'], projects: ['Channel Surf TV', 'SAFe Portfolio Simulator', 'Kubernetes GitOps Platform'], link: 'https://www.anthropic.com/engineering/claude-code-best-practices' },
      { name: 'Custom Agent Tooling', desc: "Building tooling that extends the AI agent itself — custom Claude Code skills, slash commands, and hooks, a self-syncing config infrastructure, and a CI-gateable code-health quality-gate system. Moves the work from using an agent to engineering a repeatable platform around one.", companies: ['Independent AI-Augmented Builds'], projects: ['Agentic Dev Toolkit'], link: 'https://docs.anthropic.com/en/docs/claude-code/overview' },
      { name: 'MCP Integration', desc: "Wiring the Model Context Protocol into agent workflows so Claude can read and act on external systems — e.g. pulling program context from Confluence and Jira (Atlassian Rovo) while building the Kubernetes GitOps platform.", companies: ['Independent AI-Augmented Builds'], projects: ['Kubernetes GitOps Platform'], link: 'https://modelcontextprotocol.io' },
    ]
  },
  {
    title: 'Languages',
    items: [
      { name: 'Python', desc: "Primary scripting and backend language for DoD systems and the 2026 SAFe Portfolio Simulator (~70K git-tracked lines). Used for automation, microservices, data processing, query engines, and CI/CD scripting across GALT, BACN, and independent platform work.", companies: ['Independent AI-Augmented Builds', 'GALT Aerospace', 'Northrop Grumman'], projects: ['SAFe Portfolio Simulator', 'FINN Program', 'SkyTower II', 'BIB', 'DevSecOps Org Build'], link: 'https://www.python.org' },
      { name: 'Java', desc: "Enterprise backend language used for web services, data processing, and cross-platform DoD applications including BACN and the Joint Effects Model.", companies: ['Northrop Grumman'], projects: ['BIB', 'Joint Effects Model'], link: 'https://dev.java' },
      { name: 'JavaScript', desc: "Full-stack web language used across all DoD web UIs — spanning Backbone, React/Redux, and Vue3. Present on every program from JEM through GALT.", companies: ['GALT Aerospace', 'Northrop Grumman'], projects: ['FINN Program', 'BIB', 'Joint Effects Model'], link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'Vue3', desc: "Modern progressive JavaScript framework used for reactive DoD web interfaces at GALT, the SAFe Simulator console, and this portfolio. Composition API with TypeScript-friendly architecture and pub/sub integration.", companies: ['Independent AI-Augmented Builds', 'GALT Aerospace'], projects: ['SAFe Portfolio Simulator', 'This Portfolio Site', 'FINN Program', 'SkyTower II'], link: 'https://vuejs.org' },
      { name: 'TypeScript', desc: "Typed superset of JavaScript used across the Cloudflare Workers API and Astro frontend of Channel Surf TV — bringing compile-time safety and maintainability to AI-built full-stack code.", companies: ['Independent AI-Augmented Builds'], projects: ['Channel Surf TV'], link: 'https://www.typescriptlang.org' },
      { name: 'React', desc: "Component-based UI library used for the BACN situational awareness platform with Redux state management and CesiumJS 3D geospatial visualization.", companies: ['Northrop Grumman'], projects: ['BIB'], link: 'https://react.dev' },
      { name: 'Redux', desc: "Predictable state container used alongside React for managing complex real-time battlefield data in the BACN Information Broker application.", companies: ['Northrop Grumman'], projects: ['BIB'], link: 'https://redux.js.org' },
      { name: 'C', desc: "Low-level systems language for submarine communications hardware integration and UNIX inter-process communications via Berkeley sockets and SNMP on HPUX.", companies: ['Predicate Logic Inc.'], projects: ['SLVR Submarine Integration'], link: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
      { name: 'C++', desc: "Object-oriented systems language for CBRN modeling, Windows desktop apps, and the TychoMetrics platform with COM and OLE automation integration.", companies: ['Northrop Grumman', 'Predicate Logic Inc.'], projects: ['Joint Effects Model', 'TychoMetrics Platform'], link: 'https://isocpp.org' },
      { name: 'C#', desc: "Microsoft .NET language used to redesign TychoMetrics from a Windows desktop application into a scalable web-based ASP.NET platform using COM, IIS, and ADO.NET.", companies: ['Predicate Logic Inc.'], projects: ['TychoMetrics Platform'], link: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
      { name: 'Fortran', desc: "Scientific computing language used in the Joint Effects Model for CBRN physics simulation — still widely used in DoD modeling and simulation programs today.", companies: ['Northrop Grumman'], projects: ['Joint Effects Model'], link: 'https://fortran-lang.org' },
      { name: 'Bash', desc: "Shell scripting for CI/CD automation, STIG compliance checks, system administration, and deployment orchestration across all Linux-based DoD environments.", companies: ['GALT Aerospace', 'Northrop Grumman'], projects: ['DevSecOps Org Build', 'FINN Program'], link: 'https://www.gnu.org/software/bash/' },
    ]
  },
  {
    title: 'DevSecOps',
    items: [
      { name: 'Terraform', desc: "Infrastructure as Code tool for declaratively provisioning and managing AWS cloud resources. Used at SAIC for Navy PEO C4I / NAVWAR environments and to stand up the independent Kubernetes GitOps platform (VPC, Graviton EC2, Route 53, S3 state, workstations).", companies: ['SAIC', 'Independent AI-Augmented Builds'], projects: ['AWS Cloud Infrastructure', 'Kubernetes GitOps Platform'], link: 'https://www.terraform.io' },
      { name: 'Kubernetes', desc: "Container orchestration platform for deploying, scaling, and managing containerized workloads. Used at SAIC within a classified DevSecOps software factory, on Amazon EKS for the SAFe Simulator, and as a from-scratch kubeadm cluster on the GitOps platform.", companies: ['SAIC', 'Independent AI-Augmented Builds'], projects: ['AWS Cloud Infrastructure', 'SAFe Portfolio Simulator', 'Kubernetes GitOps Platform'], link: 'https://kubernetes.io' },
      { name: 'Helm', desc: "Kubernetes package manager for templating and deploying complex cloud-native applications. Used at SAIC alongside Terraform and Ansible, and as pinned wrapper charts driven by Argo CD ApplicationSets on the GitOps platform.", companies: ['SAIC', 'Independent AI-Augmented Builds'], projects: ['AWS Cloud Infrastructure', 'Kubernetes GitOps Platform', 'SAFe Portfolio Simulator'], link: 'https://helm.sh' },
      { name: 'Jenkins CI/CD', desc: "Automated build, test, and deployment pipelines. Built GALT entire Jenkins infrastructure from scratch including STIG-compliant deployment gates and approval workflows.", companies: ['GALT Aerospace', 'Northrop Grumman'], projects: ['DevSecOps Org Build', 'FINN Program', 'BIB'], link: 'https://www.jenkins.io' },
      { name: 'Docker', desc: "Container platform for packaging and deploying microservices and platform workloads — GALT airborne pub/sub services and the SAFe Simulator image built in GitLab CI with Kaniko.", companies: ['Independent AI-Augmented Builds', 'GALT Aerospace'], projects: ['SAFe Portfolio Simulator', 'FINN Program', 'SkyTower II', 'DevSecOps Org Build'], link: 'https://www.docker.com' },
      { name: 'Ansible', desc: "Infrastructure-as-code and configuration management tool used for automated provisioning, STIG remediation, and deployment orchestration — including kubeadm init + Cilium over SSM on the GitOps platform, with no inbound ports opened.", companies: ['SAIC', 'Independent AI-Augmented Builds', 'GALT Aerospace'], projects: ['AWS Cloud Infrastructure', 'Kubernetes GitOps Platform', 'FINN Program', 'DevSecOps Org Build'], link: 'https://www.ansible.com' },
      { name: 'SonarQube', desc: "Continuous static code analysis platform for detecting bugs, vulnerabilities, and code smells. Used as a quality gate in all CI/CD pipelines at GALT.", companies: ['GALT Aerospace'], projects: ['DevSecOps Org Build', 'FINN Program', 'SkyTower II'], link: 'https://www.sonarsource.com/products/sonarqube/' },
      { name: 'Fortify', desc: "Static application security testing (SAST) tool for identifying vulnerabilities in source code. Required for DoD software security compliance on the BACN program.", companies: ['Northrop Grumman'], projects: ['BIB', 'Cyber Security Upgrades'], link: 'https://www.opentext.com/products/fortify-static-code-analyzer' },
      { name: 'DISA STIGs', desc: "Defense Information Systems Agency Security Technical Implementation Guides — mandatory security configurations for all DoD software. Automated STIG compliance was a core GALT capability enabling IATT accreditations.", companies: ['GALT Aerospace', 'Northrop Grumman'], projects: ['FINN Program', 'SkyTower II', 'BIB'], link: 'https://public.cyber.mil/stigs/' },
      { name: 'Selenium', desc: "Browser automation framework for end-to-end testing of DoD web applications. Part of all automated test suites across GALT and BACN programs.", companies: ['GALT Aerospace', 'Northrop Grumman'], projects: ['DevSecOps Org Build', 'BIB'], link: 'https://www.selenium.dev' },
      { name: 'PyTest', desc: "Python testing framework used for unit, integration, and system testing of backend services across multiple DoD programs at GALT and Northrop Grumman.", companies: ['GALT Aerospace', 'Northrop Grumman'], projects: ['FINN Program', 'BIB', 'DevSecOps Org Build'], link: 'https://docs.pytest.org' },
      { name: 'Git / BitBucket', desc: "Distributed version control and code hosting. BitBucket used for DoD programs requiring on-premise or government-cloud repositories with audit trail compliance.", companies: ['GALT Aerospace', 'Northrop Grumman'], projects: ['All programs'], link: 'https://bitbucket.org' },
    ]
  },
  {
    title: 'Systems & Comms',
    items: [
      { name: 'Link 16', desc: "NATO primary tactical data link — a TDMA-based network for real-time exchange of voice, data, and surveillance between air, ground, and sea platforms. Core to the BACN gateway mission.", companies: ['Northrop Grumman'], projects: ['BIB', 'BACN'], link: 'https://en.wikipedia.org/wiki/Link_16' },
      { name: 'CDL', desc: "Common Data Link — a family of wideband point-to-point data links for transmitting imagery and sensor data from airborne ISR platforms to ground stations. Integrated via BACN.", companies: ['Northrop Grumman'], projects: ['BACN'], link: 'https://en.wikipedia.org/wiki/Common_data_link' },
      { name: 'EPLRS', desc: "Enhanced Position Location Reporting System — a digital radio system providing position location, navigation, and data communications for ground forces. Bridged through BACN gateway.", companies: ['Northrop Grumman'], projects: ['BACN'], link: 'https://en.wikipedia.org/wiki/Enhanced_Position_Location_Reporting_System' },
      { name: 'VOIP', desc: "Voice over IP integration for BACN voice bridging subsystem, allowing ground forces and aircraft to communicate across incompatible radio systems via the airborne gateway.", companies: ['Northrop Grumman'], projects: ['BACN'], link: 'https://en.wikipedia.org/wiki/Voice_over_IP' },
      { name: 'GCCS-J / GCCS-M', desc: "Global Command and Control System — Joint and Maritime. The DoD primary C2 system integrating operational data across all services. Jamie integrated JEM into both variants.", companies: ['Northrop Grumman'], projects: ['GCCS-J / GCCS-M Integration'], link: 'https://en.wikipedia.org/wiki/Global_Command_and_Control_System' },
      { name: 'BACN', desc: "Battlefield Airborne Communications Node — Northrop Grumman high-altitude airborne gateway with 200K+ combat flight hours and a $3.6B IDIQ contract. Jamie was a core developer for 9 years.", companies: ['Northrop Grumman'], projects: ['BIB', 'BACN'], link: 'https://www.northropgrumman.com/what-we-do/mission-solutions/battlefield-airborne-communications-node-bacn' },
      { name: 'Microservices', desc: "Architectural pattern decomposing applications into small, independently deployable services. Used at GALT for airborne C3 systems with pub/sub messaging between services.", companies: ['GALT Aerospace'], projects: ['FINN Program', 'SkyTower II'], link: 'https://microservices.io' },
      { name: 'Pub/Sub', desc: "Publish/Subscribe messaging pattern enabling decoupled, real-time communication between microservices. Core to GALT airborne comms architecture using Redis as the message broker.", companies: ['GALT Aerospace'], projects: ['FINN Program', 'SkyTower II'], link: 'https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern' },
      { name: 'SNMP', desc: "Simple Network Management Protocol — used for inter-process communication in the SLVR submarine receiver integration on HPUX Unix systems at Predicate Logic.", companies: ['Predicate Logic Inc.'], projects: ['SLVR Submarine Integration'], link: 'https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol' },
    ]
  },
  {
    title: 'Platforms & Tools',
    items: [
      { name: 'RedHat Linux', desc: "Enterprise Linux OS used as the primary platform for all GALT and BACN server deployments. DISA STIG hardening applied across all systems per DoD requirements.", companies: ['GALT Aerospace', 'Northrop Grumman'], projects: ['FINN Program', 'SkyTower II', 'BIB'], link: 'https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux' },
      { name: 'NGINX', desc: "High-performance web server and reverse proxy used for serving DoD web applications and routing traffic between microservices in GALT architecture.", companies: ['GALT Aerospace'], projects: ['FINN Program', 'DevSecOps Org Build'], link: 'https://nginx.org' },
      { name: 'Apache HTTP', desc: "Web server used for serving the BACN Information Broker web application and other DoD web interfaces on RedHat Linux in operational environments.", companies: ['Northrop Grumman'], projects: ['BIB'], link: 'https://httpd.apache.org' },
      { name: 'Node.js', desc: "JavaScript runtime used for backend services and build tooling in the BACN Information Broker alongside Webpack and Yarn for asset bundling.", companies: ['Northrop Grumman'], projects: ['BIB'], link: 'https://nodejs.org' },
      { name: 'ElasticSearch', desc: "Distributed search and analytics engine providing real-time tactical data querying for the BACN situational awareness platform across large operational datasets.", companies: ['Northrop Grumman'], projects: ['BIB'], link: 'https://www.elastic.co/elasticsearch' },
      { name: 'Redis', desc: "In-memory data store used as the pub/sub message broker for GALT microservices architecture, enabling real-time status updates across airborne systems.", companies: ['GALT Aerospace'], projects: ['FINN Program', 'SkyTower II'], link: 'https://redis.io' },
      { name: 'AWS', desc: "Amazon Web Services cloud platform. Jamie holds AWS DevOps Engineer Pro, CloudOps Engineer, and Cloud Practitioner certifications (all earned early 2026) and designs AWS infrastructure at SAIC for Navy PEO C4I / NAVWAR — and independently via CDK (ECS/EKS/CloudFront) and Terraform/EC2/SSM on the GitOps platform.", companies: ['SAIC', 'Independent AI-Augmented Builds'], projects: ['AWS Cloud Infrastructure', 'SAFe Portfolio Simulator', 'Kubernetes GitOps Platform'], link: 'https://aws.amazon.com' },
      { name: 'JIRA', desc: "Agile project management and issue tracking used to manage sprints, backlogs, and program-level tracking across all programs from Northrop Grumman forward.", companies: ['Northrop Grumman', 'GALT Aerospace'], projects: ['BIB', 'Joint Effects Model', 'GCCS-J / GCCS-M Integration', 'FINN Program', 'SkyTower II', 'DevSecOps Org Build'], link: 'https://www.atlassian.com/software/jira' },
      { name: 'Webpack', desc: "JavaScript module bundler used to build and optimize the BACN Information Broker frontend application for production deployment on RedHat Linux.", companies: ['Northrop Grumman'], projects: ['BIB'], link: 'https://webpack.js.org' },
    ]
  },
]

export const credsAndEdu = [
  {
    id: 'devops-pro', icon: '⚙', badge: 'AWS PRO', color: '#ff9500',
    verify: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/7a92ec1f57bc4c2586e0176a0e3526d1',
    name: 'AWS DevOps Engineer – Professional',
    issuer: 'Amazon Web Services', date: 'Apr 2026',
    why: 'Widely regarded as the hardest AWS certification (rated 8.5/10 difficulty), the DevOps Engineer Pro validates mastery of CI/CD pipelines, infrastructure as code, monitoring, and automated security at scale. Unlike associate-level exams that test recall, this exam presents multi-paragraph real-world scenarios requiring architectural judgment. Earning this while actively building DoD-grade DevSecOps systems demonstrates the rarest combination: hands-on depth plus formal AWS validation.',
    tags: ['Hardest AWS Cert', 'CI/CD Mastery', 'IaC', 'Security Automation', '$300 Exam'],
  },
  {
    id: 'cloudops', icon: '☁', badge: 'AWS ASSOC', color: '#00d4ff',
    verify: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/8539182aa69f49c9853626b5d922d256',
    name: 'AWS CloudOps Engineer',
    issuer: 'Amazon Web Services', date: 'Feb 2026',
    why: 'The SysOps Administrator Associate is the operations backbone of the AWS certification path — covering monitoring, high availability, networking, cost optimization, and incident response across live AWS environments. It is typically a prerequisite before tackling the DevOps Pro. Passing both in rapid succession (Feb → Apr 2026) demonstrates accelerated, systematic cloud mastery rather than credential collection.',
    tags: ['Operations Focus', 'High Availability', 'AWS Monitoring', 'Cost Optimization'],
  },
  {
    id: 'ccp', icon: '🌐', badge: 'AWS FOUND', color: '#4eff9a',
    verify: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/c264415e14d04d7f81861cd6f9c950f2',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services', date: 'Feb 2026',
    why: 'The Cloud Practitioner is the structured entry point into the AWS certification path — covering core services, pricing models, security fundamentals, and cloud architecture concepts. For a 27-year DoD software veteran pivoting to cloud-native development, earning this alongside Security+ and CloudOps in a single month signals a deliberate, disciplined upskilling sprint — not a casual checkbox.',
    tags: ['AWS Foundation', 'Cloud Economics', 'Core Services', 'Architecture Basics'],
  },
  {
    id: 'cka', icon: '☸', badge: 'IN PROGRESS', color: '#326ce5',
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'The Linux Foundation / CNCF', date: 'In Progress',
    why: "The CKA is the industry-standard, hands-on proof of Kubernetes operational competency — a performance-based exam requiring candidates to install, configure, and troubleshoot live clusters under time pressure, not answer multiple choice. Jamie is actively pursuing it to formalize the Kubernetes and Amazon EKS work already shipped in the SAFe Portfolio Simulator (dual ECS/EKS deployment via AWS CDK, Helm charts, and EFS-backed persistence). It is the natural next step after the AWS DevOps Engineer Professional and CloudOps certifications — extending cloud mastery from AWS-native services into vendor-neutral container orchestration.",
    tags: ['In Progress', 'Kubernetes', 'Amazon EKS', 'Hands-On Exam', 'CNCF'],
  },
  {
    id: 'secplus', icon: '🔒', badge: 'DoD 8570', color: '#ff6b35',
    verify: 'https://cp.certmetrics.com/CompTIA/en/public/verify/credential/71e3f9eb23c8468bb9918b23a0b1a915',
    name: 'CompTIA Security+',
    issuer: 'CompTIA', date: 'Feb 2026',
    why: 'Security+ is mandated by DoD Directive 8570/8140 as the baseline cybersecurity credential for IAT Level II roles — covering anyone with privileged access to DoD systems, including all defense contractors. For a TS/SCI-cleared engineer shipping code into DISA STIG-compliant DoD environments, this is the formal seal on what Jamie has been practicing operationally for over a decade. This is not just a cert — it is the DoD required proof of cybersecurity competency.',
    tags: ['DoD 8570/8140 Required', 'IAT Level II', 'STIG Compliance', 'Vendor-Neutral'],
  },
  {
    id: 'mas', icon: '🎓', badge: 'GRADUATE', color: '#bf5fff',
    name: 'M.A.S. — Architecture-Based Enterprise Systems Engineering',
    issuer: 'UC San Diego', date: '2014',
    why: 'UCSD Master of Advanced Study in Enterprise Systems Engineering is a practitioner-focused graduate degree designed for engineers leading complex system-of-systems programs — exactly the scale Jamie operates at. The architecture-based framework provides rigorous tools for designing systems where technical, organizational, and mission requirements must all align. For a Director of Engineering winning $250M+ DoD contracts, this degree is the formal articulation of how to think at the enterprise level.',
    tags: ['Systems Architecture', 'Enterprise Engineering', 'DoD Scale', 'UCSD'],
  },
  {
    id: 'ba', icon: '🧠', badge: 'UNDERGRAD', color: '#a8ff3e',
    name: 'B.A. — Cognitive Science & Music',
    issuer: 'UC San Diego', date: '1999',
    why: 'UCSD Cognitive Science program is ranked #7 nationally and is the most attended program of its kind in the country. The degree uniquely fuses computer science, neuroscience, psychology, and linguistics — training graduates to understand how humans process information, make decisions, and interact with complex systems. Paired with Music (a discipline built on pattern recognition, structure, and performance under pressure), this background directly informs Jamie ability to build intuitive software systems and lead high-performing engineering teams.',
    tags: ['#7 Nationally Ranked', 'HCI Foundation', 'Systems Thinking', 'Pattern Recognition'],
  },
]
