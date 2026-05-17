<template>
  <div id="app">
    <Transition name="modal">
      <div v-if="activeCompany && !activeProject" class="modal-overlay" @click.self="closeCompany">
        <div class="modal company-modal" :style="{ '--c': activeCompany.color }">
          <button class="modal-close" @click="closeCompany">✕</button>
          <div class="modal-header">
            <div class="modal-logo">{{ activeCompany.logo }}</div>
            <div class="modal-header-text">
              <div class="modal-period">{{ activeCompany.period }}</div>
              <h2 class="modal-company-name">{{ activeCompany.company }}</h2>
              <div class="modal-role">{{ activeCompany.title }}</div>
              <p class="modal-context">{{ activeCompany.context }}</p>
            </div>
          </div>
          <div class="modal-stats">
            <div v-for="s in activeCompany.stats" :key="s.label" class="modal-stat">
              <div class="modal-stat-val">{{ s.value }}</div>
              <div class="modal-stat-label">{{ s.label }}</div>
            </div>
          </div>
          <div class="modal-section-label">Projects — click to drill down</div>
          <div class="project-cards">
            <div v-for="p in activeCompany.projects" :key="p.id" class="project-card" @click="openProject(p)">
              <div class="pc-top">
                <div class="pc-name">{{ p.name }}</div>
                <div class="pc-customer">{{ p.customer }}</div>
              </div>
              <p class="pc-desc">{{ p.blurb }}</p>
              <div class="pc-tech">
                <span v-for="t in p.tech.slice(0,5)" :key="t" class="tech-pill">{{ t }}</span>
              </div>
              <div class="pc-outcome">▸ {{ p.outcome }}</div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="modal">
      <div v-if="activeProject" class="modal-overlay" @click.self="closeProject">
        <div class="modal project-modal" :style="{ '--c': activeCompany?.color }">
          <button class="modal-close" @click="closeProject">✕</button>
          <button class="modal-back" @click="closeProject">← {{ activeCompany?.company }}</button>
          <div class="pm-header">
            <div class="pm-customer">{{ activeProject.customer }}</div>
            <h2 class="pm-name">{{ activeProject.name }}</h2>
            <p class="pm-desc">{{ activeProject.description }}</p>
          </div>
          <div class="pm-outcome-banner">
            <div class="pm-outcome-icon">✓</div>
            <div>
              <div class="pm-outcome-label">OUTCOME</div>
              <div class="pm-outcome-text">{{ activeProject.outcome }}</div>
            </div>
          </div>
          <div class="pm-body">
            <div class="pm-col">
              <div class="pm-section-label">Tech Stack</div>
              <div class="pm-tech-grid">
                <div v-for="t in activeProject.tech" :key="t" class="pm-tech-item">
                  <span class="pm-tech-dot"></span>{{ t }}
                </div>
              </div>
            </div>
            <div class="pm-col">
              <div class="pm-section-label">Key Contributions</div>
              <div class="pm-bullets">
                <div v-for="b in activeProject.bullets" :key="b" class="pm-bullet">
                  <span class="pm-b-arrow">▸</span>{{ b }}
                </div>
              </div>
            </div>
          </div>
          <div v-if="activeCompany?.projects.length > 1" class="pm-other">
            <div class="pm-section-label">Other projects at {{ activeCompany?.company }}</div>
            <div class="pm-other-list">
              <button v-for="p in activeCompany?.projects.filter(p => p.id !== activeProject.id)" :key="p.id" class="pm-other-btn" @click="openProject(p)">{{ p.name }} →</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <div class="page">
      <aside class="panel-left">
        <div class="left-inner">
          <div class="clearance-badge">TS/SCI CLEARED ●</div>
          <h1 class="name">Jamie<br>Powers</h1>
          <div class="title-line">Software Engineering Leader</div>
          <p class="summary">24+ years delivering secure, scalable software for DoD customers across Navy, Air Force, and Marine Corps — from hands-on coding to leading 50-engineer orgs and winning $250M+ in contracts.</p>
          <div class="quick-stats">
            <div v-for="s in quickStats" :key="s.label" class="qs">
              <div class="qs-val">{{ s.value }}</div>
              <div class="qs-label">{{ s.label }}</div>
            </div>
          </div>
          <div class="contact-block">
            <div class="contact-item">📍 Vista, CA</div>
            <a class="contact-item" href="mailto:jgpowers52@hotmail.com">✉ jgpowers52@hotmail.com</a>
            <a class="contact-item" href="tel:4424047185">📞 442-404-7185</a>
            <a class="contact-item linkedin" href="https://www.linkedin.com/in/jamie-powers-94348a7/" target="_blank" rel="noopener">LinkedIn Profile</a>
          </div>
        </div>
      </aside>

      <main class="panel-right">
        <section class="content-section">
          <div class="section-header">
            <span class="section-eyebrow">Career</span>
            <h2 class="section-title">Experience</h2>
          </div>
          <div class="company-cards">
            <div v-for="(job, i) in experience" :key="job.id" class="company-card" :style="{ '--c': job.color, '--i': i }" @click="openCompany(job)">
              <div class="cc-stripe"></div>
              <div class="cc-body">
                <div class="cc-top">
                  <div class="cc-logo">{{ job.logo }}</div>
                  <div class="cc-period">{{ job.period }}</div>
                </div>
                <div class="cc-company">{{ job.company }}</div>
                <div class="cc-role">{{ job.title }}</div>
                <div class="cc-tagline">{{ job.tagline }}</div>
                <div class="cc-footer">
                  <span class="cc-proj-count">{{ job.projects.length }} projects</span>
                  <span class="cc-cta">Explore →</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="content-section">
          <div class="section-header">
            <span class="section-eyebrow">Expertise</span>
            <h2 class="section-title">Skills</h2>
          </div>
          <div class="skills-layout">
            <div v-for="group in skillGroups" :key="group.title" class="skill-group">
              <div class="sg-title">{{ group.title }}</div>
              <div class="sg-tags">
                <span v-for="s in group.items" :key="s" class="sg-tag">{{ s }}</span>
              </div>
            </div>
          </div>
        </section>

        <section class="content-section">
          <div class="section-header">
            <span class="section-eyebrow">Credentials</span>
            <h2 class="section-title">Certs & Education</h2>
          </div>
          <div class="cred-cards">
            <div v-for="(item, i) in credsAndEdu" :key="item.id" class="cred-flip-card" :style="{ '--c': item.color, '--i': i }" @click="item.flipped = !item.flipped" :class="{ flipped: item.flipped }">
              <div class="cred-flip-inner">
                <div class="cred-face cred-front">
                  <div class="cred-face-stripe"></div>
                  <div class="cred-face-body">
                    <div class="cred-face-top">
                      <div class="cred-icon">{{ item.icon }}</div>
                      <div class="cred-badge">{{ item.badge }}</div>
                    </div>
                    <div class="cred-face-name">{{ item.name }}</div>
                    <div class="cred-face-issuer">{{ item.issuer }} · {{ item.date }}</div>
                    <div class="cred-face-hint">tap to learn more →</div>
                  </div>
                </div>
                <div class="cred-face cred-back">
                  <div class="cred-face-stripe"></div>
                  <div class="cred-face-body">
                    <div class="cred-back-name">{{ item.name }}</div>
                    <p class="cred-back-why">{{ item.why }}</p>
                    <div class="cred-back-tags">
                      <span v-for="t in item.tags" :key="t" class="cred-tag">{{ t }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const quickStats = [
  { value: '24+', label: 'Years' },
  { value: '$250M+', label: 'Contracts' },
  { value: '50', label: 'Eng Team' },
  { value: 'TS/SCI', label: 'Clearance' },
]

const experience = [
  {
    id: 'galt', logo: '✈', color: '#00d4ff',
    company: 'GALT Aerospace', title: 'Director of Engineering',
    period: '2019 – 2023',
    tagline: "Built DoD C3 software org from zero to $250M+",
    context: "GALT Aerospace is a non-traditional, veteran-owned defense contractor delivering premier C3 solutions for airborne systems — specializing in open-architecture rapid-prototyping for the warfighter. Jamie joined as the founding engineering leader and built the entire software organization from scratch, scaling to 50 engineers and winning $250M+ in contracts against major industry primes.",
    stats: [
      { value: '$250M+', label: 'Contracts Won' },
      { value: '10→50', label: 'Team Scaled' },
      { value: '$35M+', label: 'SkyTower II Win' },
      { value: 'IATT', label: 'Accreditations' },
    ],
    projects: [
      {
        id: 'finn', name: 'FINN Program', customer: 'Marine Corps Warfighting Lab',
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
        id: 'skytower', name: 'SkyTower II', customer: 'DoD / Marine Corps',
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
        id: 'devsecops-galt', name: 'DevSecOps Org Build', customer: 'Internal / DoD Programs',
        blurb: 'Built the entire software engineering organization and DevSecOps pipeline from zero — scaling to 50 engineers.',
        description: 'When Jamie joined GALT there was no software engineering organization. He built it entirely: hiring engineers, establishing DevSecOps culture and tooling, implementing CI/CD pipelines, automated testing, code review processes, and security compliance automation — all while delivering production software for live DoD programs.',
        tech: ['Jenkins', 'Ansible', 'Docker', 'SonarQube', 'Fortify', 'BitBucket', 'JIRA', 'Selenium', 'PyTest', 'Bash'],
        outcome: 'Org scaled from 10 to 50 engineers; enabled $250M+ in contract wins',
        bullets: [
          'Hired and developed engineering team from 10 to 50 professionals',
          'Established full DevSecOps culture, tooling, and processes from zero',
          'Implemented Jenkins CI/CD with automated builds, tests, and deployments',
          'Integrated SonarQube static analysis and Fortify vulnerability management',
          'Created automated DISA STIG compliance pipeline supporting multiple IATT accreditations',
          'Mentored engineers on best practices, code review, and security-first development',
        ]
      }
    ]
  },
  {
    id: 'ng-bacn', logo: '🛩', color: '#ff6b35',
    company: 'Northrop Grumman', title: 'Software Engineer / Team Leader',
    period: '2009 – 2018',
    tagline: "BACN — the battlefield's high-altitude digital backbone",
    context: "Northrop Grumman's BACN (Battlefield Airborne Communications Node) is a high-altitude airborne gateway flying on the E-11A that translates voice, imagery, and tactical data across disparate military systems — bridging Link 16, EPLRS, CDL, VOIP and more. With 200,000+ combat flight hours, a $3.6B IDIQ contract, and 98%+ mission availability, BACN is one of the most proven C2 programs in the DoD. Jamie was a core developer and team leader for 9 years across 3 major baselines.",
    stats: [
      { value: '200K+', label: 'Combat Flight Hrs' },
      { value: '$3.6B', label: 'IDIQ Contract' },
      { value: '3', label: 'Major Baselines' },
      { value: '98%+', label: 'Mission Availability' },
    ],
    projects: [
      {
        id: 'bacn-bib', name: 'BACN Information Broker', customer: 'US Air Force / Joint DoD',
        blurb: 'Full-stack web-based situational awareness & mission planning app with 3D geospatial visualization — globally forward-deployed.',
        description: 'The BACN Information Broker (BIB) was the primary situational awareness and mission planning application for BACN — a real-time 3D geospatial view of the battlespace fusing data from Link 16, EPLRS, SADL and other tactical data links. Jamie led development across 3 major baselines working the full stack from Python/Java backend through React/Redux/CesiumJS 3D frontend.',
        tech: ['React', 'Redux', 'Backbone', 'CesiumJS', 'Python', 'Java', 'ElasticSearch', 'Node.js', 'Jenkins', 'RedHat Linux', 'PyTest', 'Selenium', 'Fortify'],
        outcome: '3 major baselines delivered ahead of schedule; globally forward-deployed',
        bullets: [
          'Led full-stack BIB development across 3 major baselines over 9 years',
          'Built 3D geospatial visualization in CesiumJS fusing multi-source tactical data links',
          'Implemented ElasticSearch backend for high-performance real-time data queries',
          'Oversaw 3 cyber security upgrade cycles with Fortify and automated STIG compliance',
          'Supported forward-deployed field installations globally (trips 1–5.5 months)',
          'Delivered all baselines ahead of schedule through disciplined scope management',
        ]
      },
      {
        id: 'rf-links', name: 'RF / Tactical Data Link Integration', customer: 'US Air Force / DoD Joint',
        blurb: 'Hands-on coding and field integration for Link 16, CDL, Inmarsat, SADL, EPLRS, and VOIP across ground and airborne platforms.',
        description: "A core part of BACN's mission is translating between incompatible tactical data links — making Link 16, CDL, EPLRS, SADL, VOIP, and Inmarsat all interoperate seamlessly. Jamie was hands-on at the code level debugging these integrations and personally supporting their deployment in forward-deployed operational environments worldwide.",
        tech: ['C', 'C++', 'Java', 'Python', 'Link16', 'CDL', 'VOIP', 'SADL', 'EPLRS', 'Inmarsat'],
        outcome: 'Operational multi-domain data link integration across forward-deployed theaters',
        bullets: [
          'Developed and debugged RF/tactical data link integrations for BACN gateway',
          'Worked across full suite: Link 16, CDL, Inmarsat, SADL, EPLRS, and VOIP',
          'Supported field deployments and upgrades at ground and airborne operational locations',
          'Provided on-site integration support with trips ranging from 1 to 5.5 months',
          'Administered Windows and RedHat Linux servers in operational environments',
        ]
      }
    ]
  },
  {
    id: 'ng-jem', logo: '☢', color: '#a8ff3e',
    company: 'Northrop Grumman', title: 'Software Engineer — JEM/GCCS',
    period: '2005 – 2008',
    tagline: 'CBRN modeling & simulation integrated into global command systems',
    context: 'The Joint Effects Model (JEM) was a DoD web application for modeling and simulating Chemical, Biological, Radiological, and Nuclear events — integrated into GCCS-J and GCCS-M. Jamie led a ~20-person developer team on this high-complexity, multi-platform program across Windows and Solaris.',
    stats: [
      { value: '~20', label: 'Developers Led' },
      { value: '2', label: 'GCCS Integrations' },
      { value: 'CBRN', label: 'Domain' },
      { value: 'Win+Sol', label: 'Platforms' },
    ],
    projects: [
      {
        id: 'jem', name: 'Joint Effects Model (JEM)', customer: 'DoD Joint Command',
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
        id: 'gccs', name: 'GCCS-J / GCCS-M Integration', customer: 'DoD Joint Command / US Navy',
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
    id: 'predicate', logo: '📡', color: '#bf5fff',
    company: 'Predicate Logic Inc.', title: 'Software Engineer',
    period: '1999 – 2005',
    tagline: 'Submarine comms integration & advanced metrics platform',
    context: 'Predicate Logic was a San Diego defense software company focused on submarine communications systems and advanced data metrics platforms. Jamie spent 6 years gaining deep expertise in low-level C systems programming on HPUX Unix, Berkeley sockets IPC, and building data-driven reporting tools across DoD and commercial customers.',
    stats: [
      { value: 'US Navy', label: 'Primary Customer' },
      { value: 'HPUX', label: 'Platform' },
      { value: 'C/C++', label: 'Core Stack' },
      { value: '.NET', label: 'Web Migration' },
    ],
    projects: [
      {
        id: 'slvr', name: 'SLVR Submarine Integration', customer: 'US Navy',
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
        id: 'tychometrics', name: 'TychoMetrics Platform', customer: 'DoD Contractors / Commercial',
        blurb: 'Automated data collection and advanced metrics platform. Led full redesign from Windows desktop to web-based ASP.NET application.',
        description: 'TychoMetrics was an automated data collection and reporting platform applying advanced metrics across disparate data sources. Jamie built the original Windows desktop version in Visual C++/MFC, then led its full redesign as a web-based .NET application — significantly expanding reach and maintainability.',
        tech: ['Visual C++', 'MFC', 'Versant OODB', 'C#', 'ASP.NET', 'COM', 'IIS', 'ADO.NET', 'Perl', 'SQL Server', 'Oracle'],
        outcome: 'Scalable web-based metrics platform serving multiple DoD and commercial customers',
        bullets: [
          'Built original TychoMetrics as Windows desktop app using Visual C++/MFC and Versant OODB',
          'Led full redesign to web-based ASP.NET application with C#, COM, and IIS',
          'Implemented OLE automation to integrate Excel as a reporting output via COM and C++',
          'Developed custom metrics solutions against SQL Server, Oracle, Access, and XML sources',
          'Created Perl and UNIX shell scripts for monthly data extraction and transformation',
        ]
      }
    ]
  }
]

const skillGroups = [
  { title: 'Languages', items: ['Python', 'Java', 'JavaScript', 'Vue3', 'React', 'Redux', 'C', 'C++', 'C#', 'Fortran', 'Bash'] },
  { title: 'DevSecOps', items: ['Jenkins CI/CD', 'Docker', 'Ansible', 'SonarQube', 'Fortify', 'DISA STIGs', 'Selenium', 'PyTest', 'Git/BitBucket'] },
  { title: 'Systems & Comms', items: ['Link16', 'CDL', 'EPLRS', 'VOIP', 'GCCS-J', 'GCCS-M', 'BACN', 'Microservices', 'Pub/Sub', 'SNMP'] },
  { title: 'Platforms & Tools', items: ['RedHat Linux', 'NGINX', 'Apache', 'Node.js', 'ElasticSearch', 'Redis', 'AWS', 'JIRA', 'Webpack'] },
]

const credsAndEdu = ref([
  {
    id: 'devops-pro', icon: '⚙', badge: 'AWS PRO', color: '#ff9500',
    name: 'AWS DevOps Engineer – Professional',
    issuer: 'Amazon Web Services', date: 'Apr 2026',
    why: 'Widely regarded as the hardest AWS certification (rated 8.5/10 difficulty), the DevOps Engineer Pro validates mastery of CI/CD pipelines, infrastructure as code, monitoring, and automated security at scale. Unlike associate-level exams that test recall, this exam presents multi-paragraph real-world scenarios requiring architectural judgment. Earning this while actively building DoD-grade DevSecOps systems demonstrates the rarest combination: hands-on depth plus formal AWS validation.',
    tags: ['Hardest AWS Cert', 'CI/CD Mastery', 'IaC', 'Security Automation', '$300 Exam'],
    flipped: false
  },
  {
    id: 'cloudops', icon: '☁', badge: 'AWS ASSOC', color: '#00d4ff',
    name: 'AWS CloudOps Engineer',
    issuer: 'Amazon Web Services', date: 'Feb 2026',
    why: 'The SysOps Administrator Associate is the operations backbone of the AWS certification path — covering monitoring, high availability, networking, cost optimization, and incident response across live AWS environments. It is typically a prerequisite before tackling the DevOps Pro. Passing both in rapid succession (Feb → Apr 2026) demonstrates accelerated, systematic cloud mastery rather than credential collection.',
    tags: ['Operations Focus', 'High Availability', 'AWS Monitoring', 'Cost Optimization'],
    flipped: false
  },
  {
    id: 'ccp', icon: '🌐', badge: 'AWS FOUND', color: '#4eff9a',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services', date: 'Feb 2026',
    why: 'The Cloud Practitioner is the structured entry point into the AWS certification path — covering core services, pricing models, security fundamentals, and cloud architecture concepts. For a 24-year DoD software veteran pivoting to cloud-native development, earning this alongside Security+ and CloudOps in a single month signals a deliberate, disciplined upskilling sprint — not a casual checkbox.',
    tags: ['AWS Foundation', 'Cloud Economics', 'Core Services', 'Architecture Basics'],
    flipped: false
  },
  {
    id: 'secplus', icon: '🔒', badge: 'DoD 8570', color: '#ff6b35',
    name: 'CompTIA Security+',
    issuer: 'CompTIA', date: 'Feb 2026',
    why: 'Security+ is mandated by DoD Directive 8570/8140 as the baseline cybersecurity credential for IAT Level II roles — covering anyone with privileged access to DoD systems, including all defense contractors. For a TS/SCI-cleared engineer shipping code into DISA STIG-compliant DoD environments, this is the formal seal on what Jamie has been practicing operationally for over a decade. This is not just a cert — it is the DoD required proof of cybersecurity competency.',
    tags: ['DoD 8570/8140 Required', 'IAT Level II', 'STIG Compliance', 'Vendor-Neutral'],
    flipped: false
  },
  {
    id: 'mas', icon: '🎓', badge: 'GRADUATE', color: '#bf5fff',
    name: 'M.A.S. — Architecture-Based Enterprise Systems Engineering',
    issuer: 'UC San Diego', date: '2014',
    why: 'UCSD Master of Advanced Study in Enterprise Systems Engineering is a practitioner-focused graduate degree designed for engineers leading complex system-of-systems programs — exactly the scale Jamie operates at. The architecture-based framework provides rigorous tools for designing systems where technical, organizational, and mission requirements must all align. For a Director of Engineering winning $250M+ DoD contracts, this degree is the formal articulation of how to think at the enterprise level.',
    tags: ['Systems Architecture', 'Enterprise Engineering', 'DoD Scale', 'UCSD'],
    flipped: false
  },
  {
    id: 'ba', icon: '🧠', badge: 'UNDERGRAD', color: '#a8ff3e',
    name: 'B.A. — Cognitive Science & Music',
    issuer: 'UC San Diego', date: '1999',
    why: 'UCSD Cognitive Science program is ranked #7 nationally and is the most attended program of its kind in the country. The degree uniquely fuses computer science, neuroscience, psychology, and linguistics — training graduates to understand how humans process information, make decisions, and interact with complex systems. Paired with Music (a discipline built on pattern recognition, structure, and performance under pressure), this background directly informs Jamie ability to build intuitive software systems and lead high-performing engineering teams.',
    tags: ['#7 Nationally Ranked', 'HCI Foundation', 'Systems Thinking', 'Pattern Recognition'],
    flipped: false
  },
])

const activeCompany = ref(null)
const activeProject = ref(null)

function openCompany(job) { activeCompany.value = job; activeProject.value = null }
function closeCompany() { activeCompany.value = null; activeProject.value = null }
function openProject(p) { activeProject.value = p }
function closeProject() { activeProject.value = null }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

:root {
  --bg: #04080d; --bg2: #070e17; --surface: #0a1520; --surf2: #0f1e2e;
  --border: #162840; --text: #ddeeff; --dim: #557799; --muted: #2a4a66;
  --accent: #00c8f0;
  --mono: 'DM Mono', monospace;
  --display: 'Bebas Neue', sans-serif;
  --body: 'DM Sans', sans-serif;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html, body, #app { height: 100%; overflow: hidden; }
body { background: var(--bg); color: var(--text); font-family: var(--body); font-weight: 300; }

.page { display: flex; height: 100vh; overflow: hidden; }

.panel-left { width: 290px; flex-shrink: 0; background: var(--bg2); border-right: 1px solid var(--border); overflow-y: auto; }
.panel-left::-webkit-scrollbar { width: 3px; }
.panel-left::-webkit-scrollbar-thumb { background: var(--border); }
.left-inner { padding: 2rem 1.5rem; display: flex; flex-direction: column; gap: 1.4rem; min-height: 100%; }

.clearance-badge { font-family: var(--mono); font-size: 0.57rem; letter-spacing: 0.2em; color: #4eff9a; border: 1px solid #4eff9a; display: inline-block; padding: 3px 8px; border-radius: 2px; animation: blink 2.5s infinite; width: fit-content; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.5} }

.name { font-family: var(--display); font-size: 4.2rem; line-height: 0.92; color: var(--text); }
.title-line { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); }
.summary { font-size: 0.79rem; color: var(--dim); line-height: 1.7; }

.quick-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border: 1px solid var(--border); }
.qs { background: var(--surface); padding: 0.75rem; text-align: center; }
.qs-val { font-family: var(--display); font-size: 1.5rem; color: var(--accent); line-height: 1; }
.qs-label { font-family: var(--mono); font-size: 0.51rem; color: var(--dim); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 2px; }

.contact-block { margin-top: auto; display: flex; flex-direction: column; gap: 0.4rem; }
.contact-item { font-family: var(--mono); font-size: 0.61rem; color: var(--dim); text-decoration: none; }
a.contact-item:hover { color: var(--accent); }
a.contact-item.linkedin { color: #0a9af7; }
a.contact-item.linkedin:hover { color: var(--accent); }

.panel-right { flex: 1; overflow-y: auto; padding: 2rem 2rem 2rem 2.5rem; display: flex; flex-direction: column; gap: 2.5rem; }
.panel-right::-webkit-scrollbar { width: 3px; }
.panel-right::-webkit-scrollbar-thumb { background: var(--border); }

.content-section { display: flex; flex-direction: column; gap: 0.9rem; }
.section-header { display: flex; align-items: baseline; gap: 1rem; }
.section-eyebrow { font-family: var(--mono); font-size: 0.58rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
.section-title { font-family: var(--display); font-size: 2.6rem; line-height: 1; color: var(--text); }

.company-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 1px; background: var(--border); border: 1px solid var(--border); }
.company-card { background: var(--bg2); cursor: pointer; position: relative; overflow: hidden; transition: background 0.2s; animation: fadeUp 0.4s ease both; animation-delay: calc(var(--i, 0) * 0.07s); }
@keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
.company-card:hover { background: var(--surface); }
.company-card:hover .cc-cta { opacity: 1; }
.company-card:hover .cc-stripe { transform: scaleY(1); }
.cc-stripe { position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: var(--c); transform: scaleY(0.25); transform-origin: bottom; transition: transform 0.25s ease; }
.cc-body { padding: 1.3rem 1.3rem 1.3rem 1.7rem; }
.cc-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.7rem; }
.cc-logo { font-size: 1.3rem; }
.cc-period { font-family: var(--mono); font-size: 0.55rem; color: var(--muted); }
.cc-company { font-family: var(--display); font-size: 1.45rem; color: var(--text); line-height: 1; margin-bottom: 0.15rem; }
.cc-role { font-family: var(--mono); font-size: 0.59rem; color: var(--c); margin-bottom: 0.55rem; }
.cc-tagline { font-size: 0.75rem; color: var(--dim); line-height: 1.5; margin-bottom: 0.9rem; }
.cc-footer { display: flex; justify-content: space-between; }
.cc-proj-count { font-family: var(--mono); font-size: 0.57rem; color: var(--muted); }
.cc-cta { font-family: var(--mono); font-size: 0.61rem; color: var(--c); opacity: 0; transition: opacity 0.2s; }

.skills-layout { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 0.9rem; }
.skill-group { background: var(--surface); border: 1px solid var(--border); padding: 1rem; }
.sg-title { font-family: var(--mono); font-size: 0.57rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.7rem; padding-bottom: 0.4rem; border-bottom: 1px solid var(--border); }
.sg-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; }
.sg-tag { font-family: var(--mono); font-size: 0.59rem; padding: 2px 7px; background: var(--bg); border: 1px solid var(--border); color: var(--dim); border-radius: 2px; }

.cred-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 1px; background: var(--border); border: 1px solid var(--border); }
.cred-flip-card { height: 190px; cursor: pointer; perspective: 1000px; animation: fadeUp 0.4s ease both; animation-delay: calc(var(--i, 0) * 0.06s); }
.cred-flip-inner { position: relative; width: 100%; height: 100%; transition: transform 0.5s cubic-bezier(0.4,0,0.2,1); transform-style: preserve-3d; }
.cred-flip-card.flipped .cred-flip-inner { transform: rotateY(180deg); }
.cred-face { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; display: flex; }
.cred-back { transform: rotateY(180deg); }
.cred-face-stripe { width: 3px; background: var(--c); flex-shrink: 0; transition: none; }
.cred-face-body { flex: 1; padding: 1.2rem 1.2rem 1.2rem 1.4rem; display: flex; flex-direction: column; gap: 0.5rem; background: var(--bg2); }
.cred-flip-card:hover .cred-face-body { background: var(--surface); }
.cred-face-top { display: flex; justify-content: space-between; align-items: flex-start; }
.cred-icon { font-size: 1.4rem; }
.cred-badge { font-family: var(--mono); font-size: 0.52rem; letter-spacing: 0.12em; color: var(--c); border: 1px solid var(--c); padding: 2px 6px; }
.cred-face-name { font-family: var(--display); font-size: 1.1rem; color: var(--text); line-height: 1.15; }
.cred-face-issuer { font-family: var(--mono); font-size: 0.57rem; color: var(--dim); margin-top: auto; }
.cred-face-hint { font-family: var(--mono); font-size: 0.54rem; color: var(--c); opacity: 0.6; }
.cred-back-name { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.08em; color: var(--c); margin-bottom: 0.2rem; text-transform: uppercase; }
.cred-back-why { font-size: 0.71rem; color: var(--dim); line-height: 1.6; flex: 1; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; }
.cred-back-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; margin-top: auto; }
.cred-tag { font-family: var(--mono); font-size: 0.53rem; padding: 1px 6px; background: var(--bg); border: 1px solid var(--border); color: var(--dim); border-radius: 2px; }

.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.78); backdrop-filter: blur(8px); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 1.5rem; }
.modal { background: var(--bg2); border: 1px solid var(--border); border-top: 3px solid var(--c, var(--accent)); width: 100%; max-width: 880px; max-height: 88vh; overflow-y: auto; position: relative; padding: 2rem; }
.modal::-webkit-scrollbar { width: 3px; }
.modal::-webkit-scrollbar-thumb { background: var(--border); }

.modal-close { position: absolute; top: 1rem; right: 1rem; background: none; border: 1px solid var(--border); color: var(--dim); cursor: pointer; width: 28px; height: 28px; font-size: 0.7rem; transition: all 0.15s; display: flex; align-items: center; justify-content: center; }
.modal-close:hover { border-color: var(--c, var(--accent)); color: var(--c, var(--accent)); }

.modal-back { background: none; border: none; font-family: var(--mono); font-size: 0.62rem; color: var(--c, var(--accent)); cursor: pointer; margin-bottom: 1.2rem; display: block; padding: 0; letter-spacing: 0.08em; }
.modal-back:hover { opacity: 0.65; }

.modal-header { display: flex; gap: 1.5rem; margin-bottom: 1.4rem; align-items: flex-start; }
.modal-logo { font-size: 2.2rem; width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; background: var(--surface); border: 2px solid var(--c); flex-shrink: 0; }
.modal-period { font-family: var(--mono); font-size: 0.57rem; color: var(--muted); margin-bottom: 0.2rem; }
.modal-company-name { font-family: var(--display); font-size: 2.8rem; line-height: 1; color: var(--text); margin-bottom: 0.15rem; }
.modal-role { font-family: var(--mono); font-size: 0.65rem; color: var(--c); margin-bottom: 0.55rem; }
.modal-context { font-size: 0.79rem; color: var(--dim); line-height: 1.7; }

.modal-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); margin-bottom: 1.4rem; }
.modal-stat { background: var(--surface); padding: 0.75rem; text-align: center; }
.modal-stat-val { font-family: var(--display); font-size: 1.5rem; color: var(--c); line-height: 1; }
.modal-stat-label { font-family: var(--mono); font-size: 0.51rem; color: var(--dim); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 2px; }

.modal-section-label { font-family: var(--mono); font-size: 0.57rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--c); margin-bottom: 0.7rem; }

.project-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px,1fr)); gap: 1px; background: var(--border); border: 1px solid var(--border); }
.project-card { background: var(--bg); padding: 1.2rem; cursor: pointer; display: flex; flex-direction: column; gap: 0.65rem; border-left: 2px solid transparent; transition: all 0.15s; }
.project-card:hover { background: var(--surface); border-left-color: var(--c); }

.pc-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; }
.pc-name { font-family: var(--display); font-size: 1.15rem; color: var(--text); line-height: 1.1; }
.pc-customer { font-family: var(--mono); font-size: 0.51rem; color: var(--c); border: 1px solid var(--c); padding: 2px 5px; white-space: nowrap; flex-shrink: 0; }
.pc-desc { font-size: 0.74rem; color: var(--dim); line-height: 1.6; }
.pc-tech { display: flex; flex-wrap: wrap; gap: 0.3rem; }
.tech-pill { font-family: var(--mono); font-size: 0.55rem; padding: 1px 5px; background: var(--surface); border: 1px solid var(--border); color: var(--dim); }
.pc-outcome { font-family: var(--mono); font-size: 0.61rem; color: #4eff9a; margin-top: auto; }

.pm-header { margin-bottom: 1.1rem; }
.pm-customer { font-family: var(--mono); font-size: 0.57rem; color: var(--c); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.25rem; }
.pm-name { font-family: var(--display); font-size: 3.2rem; line-height: 0.95; color: var(--text); margin-bottom: 0.7rem; }
.pm-desc { font-size: 0.84rem; color: var(--dim); line-height: 1.75; max-width: 680px; }

.pm-outcome-banner { display: flex; align-items: center; gap: 1rem; background: var(--surface); border: 1px solid var(--border); border-left: 3px solid #4eff9a; padding: 0.8rem 1.1rem; margin-bottom: 1.4rem; }
.pm-outcome-icon { font-family: var(--mono); font-size: 1rem; color: #4eff9a; flex-shrink: 0; }
.pm-outcome-label { font-family: var(--mono); font-size: 0.51rem; letter-spacing: 0.15em; color: #4eff9a; margin-bottom: 0.15rem; }
.pm-outcome-text { font-size: 0.84rem; color: var(--text); font-weight: 500; }

.pm-body { display: grid; grid-template-columns: 1fr 1.5fr; gap: 1.5rem; margin-bottom: 1.4rem; }
.pm-section-label { font-family: var(--mono); font-size: 0.57rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--c); margin-bottom: 0.7rem; }
.pm-tech-grid { display: flex; flex-direction: column; gap: 0.28rem; }
.pm-tech-item { display: flex; align-items: center; gap: 0.5rem; font-family: var(--mono); font-size: 0.67rem; color: var(--dim); }
.pm-tech-dot { width: 5px; height: 5px; background: var(--c); border-radius: 50%; flex-shrink: 0; }
.pm-bullets { display: flex; flex-direction: column; gap: 0.45rem; }
.pm-bullet { display: flex; gap: 0.55rem; font-size: 0.77rem; color: var(--dim); line-height: 1.6; }
.pm-b-arrow { color: var(--c); flex-shrink: 0; font-size: 0.71rem; padding-top: 2px; }

.pm-other { border-top: 1px solid var(--border); padding-top: 1rem; }
.pm-other-list { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.55rem; }
.pm-other-btn { font-family: var(--mono); font-size: 0.62rem; background: none; border: 1px solid var(--border); color: var(--dim); padding: 5px 11px; cursor: pointer; transition: all 0.15s; }
.pm-other-btn:hover { border-color: var(--c); color: var(--c); }

.modal-enter-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.modal-leave-active { transition: opacity 0.15s ease; }
.modal-enter-from { opacity: 0; transform: translateY(14px); }
.modal-leave-to   { opacity: 0; }

@media (max-width: 768px) {
  html, body, #app { overflow: auto; height: auto; }
  .page { flex-direction: column; height: auto; }
  .panel-left { width: 100%; border-right: none; border-bottom: 1px solid var(--border); }
  .panel-right { padding: 1.5rem; }
  .modal-stats { grid-template-columns: repeat(2,1fr); }
  .pm-body { grid-template-columns: 1fr; }
  .creds-layout { grid-template-columns: 1fr; }
}
</style>
