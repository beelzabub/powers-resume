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

    <!-- SKILL MODAL -->
    <Transition name="modal">
      <div v-if="activeSkill" class="modal-overlay" @click.self="activeSkill = null">
        <div class="skill-modal" :style="{ '--c': '#00c8f0' }">
          <button class="modal-close" @click="activeSkill = null">✕</button>
          <button class="skill-nav-arrow skill-nav-prev" @click="skillPrev">‹</button>
          <button class="skill-nav-arrow skill-nav-next" @click="skillNext">›</button>
          <Transition :name="'slide-left'" mode="out-in">
            <div :key="activeSkill.name" class="skill-modal-inner">
              <div class="skill-modal-counter">{{ activeSkillIdx + 1 }} / {{ allSkills.length }}</div>
              <div class="skill-modal-name">{{ activeSkill.name }}</div>
              <p class="skill-modal-desc">{{ activeSkill.desc }}</p>
              <div class="skill-modal-section">
                <div class="skill-modal-label">Companies</div>
                <div class="skill-modal-chips">
                  <span v-for="c in activeSkill.companies" :key="c" class="skill-chip company">{{ c }}</span>
                </div>
              </div>
              <div class="skill-modal-section">
                <div class="skill-modal-label">Projects</div>
                <div class="skill-modal-chips">
                  <span v-for="p in activeSkill.projects" :key="p" class="skill-chip project">{{ p }}</span>
                </div>
              </div>
              <a v-if="activeSkill.link" :href="activeSkill.link" target="_blank" rel="noopener" class="skill-modal-link">Learn more →</a>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>

    <!-- CREDENTIAL CAROUSEL MODAL -->
    <Transition name="modal">
      <div v-if="carOpen" class="modal-overlay" @click.self="carOpen = false">
        <div class="car-modal" :style="{ '--c': credsAndEdu[carIdx].color }">
          <button class="modal-close" @click="carOpen = false">✕</button>
          <button class="car-modal-arrow car-modal-prev" @click="carPrev">‹</button>
          <button class="car-modal-arrow car-modal-next" @click="carNext">›</button>
          <div class="car-modal-track">
            <Transition :name="carDirection === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
              <div :key="carIdx" class="car-modal-slide">
                <div class="car-modal-header">
                  <div class="car-modal-icon">{{ credsAndEdu[carIdx].icon }}</div>
                  <div>
                    <div class="car-modal-badge">{{ credsAndEdu[carIdx].badge }}</div>
                    <div class="car-modal-name">{{ credsAndEdu[carIdx].name }}</div>
                    <div class="car-modal-issuer">{{ credsAndEdu[carIdx].issuer }} · {{ credsAndEdu[carIdx].date }}</div>
                  </div>
                </div>
                <p class="car-modal-why">{{ credsAndEdu[carIdx].why }}</p>
                <div class="car-modal-tags">
                  <span v-for="t in credsAndEdu[carIdx].tags" :key="t" class="cred-tag">{{ t }}</span>
                </div>
                <a v-if="credsAndEdu[carIdx].verify" :href="credsAndEdu[carIdx].verify" target="_blank" rel="noopener" class="car-verify-link">✓ Verify Credential →</a>
              </div>
            </Transition>
          </div>
          <div class="car-dots">
            <button v-for="(item, i) in credsAndEdu" :key="i" class="car-dot" :class="{ active: i === carIdx }" :style="{ '--c': item.color }" @click="jumpTo(i)"></button>
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
            <a class="contact-item linkedin" href="https://www.linkedin.com/in/jamie-powers-94348a7/" target="_blank" rel="noopener">💼 LinkedIn Profile</a>
            <a class="contact-item clearance" href="https://www.clearancejobs.com/profile" target="_blank" rel="noopener">🔐 ClearanceJobs Profile</a>
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
                <button v-for="s in group.items" :key="s.name" class="sg-tag" @click="openSkill(s)">{{ s.name }}</button>
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
            <div
              v-for="(item, i) in credsAndEdu"
              :key="item.id"
              class="cred-grid-card"
              :style="{ '--c': item.color, '--i': i }"
              @click="openCarousel(i)"
            >
              <div class="cred-face-stripe"></div>
              <div class="cred-face-body">
                <div class="cred-face-top">
                  <div class="cred-icon">{{ item.icon }}</div>
                  <div class="cred-badge">{{ item.badge }}</div>
                </div>
                <div class="cred-face-name">{{ item.name }}</div>
                <div class="cred-face-issuer">{{ item.issuer }} · {{ item.date }}</div>
                <a v-if="item.verify" :href="item.verify" target="_blank" rel="noopener" class="cred-verify-badge" @click.stop>✓ Verify</a>
                <div class="cred-face-hint">click to explore →</div>
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
        id: 'rf-links', name: 'BACN', customer: 'US Air Force / DoD Joint',
        blurb: 'Hands-on coding and field integration for Link 16, CDL, Inmarsat, SADL, EPLRS, and VOIP across ground and airborne platforms.',
        description: "A core part of BACN mission is translating between incompatible tactical data links — making Link 16, CDL, EPLRS, SADL, VOIP, and Inmarsat all interoperate seamlessly. Jamie was hands-on at the code level debugging these integrations and personally supporting their deployment in forward-deployed operational environments worldwide.",
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
  {
    title: 'Languages',
    items: [
      { name: 'Python', desc: "Primary scripting and backend language for DoD systems. Used for automation, microservices, data processing, and CI/CD scripting across GALT and BACN programs.", companies: ['GALT Aerospace', 'Northrop Grumman'], projects: ['FINN Program', 'SkyTower II', 'BIB', 'DevSecOps Org Build'], link: 'https://www.python.org' },
      { name: 'Java', desc: "Enterprise backend language used for web services, data processing, and cross-platform DoD applications including BACN and the Joint Effects Model.", companies: ['Northrop Grumman'], projects: ['BIB', 'Joint Effects Model'], link: 'https://dev.java' },
      { name: 'JavaScript', desc: "Full-stack web language used across all DoD web UIs — spanning Backbone, React/Redux, and Vue3. Present on every program from JEM through GALT.", companies: ['GALT Aerospace', 'Northrop Grumman', 'Northrop Grumman'], projects: ['FINN Program', 'BIB', 'Joint Effects Model'], link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'Vue3', desc: "Modern progressive JavaScript framework used for reactive DoD web interfaces at GALT. Composition API with TypeScript-friendly architecture and pub/sub integration.", companies: ['GALT Aerospace'], projects: ['FINN Program', 'SkyTower II'], link: 'https://vuejs.org' },
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
      { name: 'Jenkins CI/CD', desc: "Automated build, test, and deployment pipelines. Built GALT entire Jenkins infrastructure from scratch including STIG-compliant deployment gates and approval workflows.", companies: ['GALT Aerospace', 'Northrop Grumman'], projects: ['DevSecOps Org Build', 'FINN Program', 'BIB'], link: 'https://www.jenkins.io' },
      { name: 'Docker', desc: "Container platform for packaging and deploying microservices in GALT pub/sub architecture, ensuring consistent environments from development through production deployment.", companies: ['GALT Aerospace'], projects: ['FINN Program', 'SkyTower II', 'DevSecOps Org Build'], link: 'https://www.docker.com' },
      { name: 'Ansible', desc: "Infrastructure-as-code and configuration management tool used for automated provisioning, STIG remediation, and deployment orchestration across DoD environments.", companies: ['GALT Aerospace'], projects: ['FINN Program', 'DevSecOps Org Build'], link: 'https://www.ansible.com' },
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
      { name: 'AWS', desc: "Amazon Web Services cloud platform. Jamie holds AWS DevOps Engineer Pro, CloudOps Engineer, and Cloud Practitioner certifications — all earned in early 2026.", companies: ['Certification / Current Focus'], projects: ['Post-GALT professional development'], link: 'https://aws.amazon.com' },
      { name: 'JIRA', desc: "Agile project management and issue tracking used to manage sprints, backlogs, and program-level tracking across all programs from Northrop Grumman forward.", companies: ['Northrop Grumman', 'GALT Aerospace'], projects: ['BIB', 'Joint Effects Model', 'GCCS-J / GCCS-M Integration', 'FINN Program', 'SkyTower II', 'DevSecOps Org Build'], link: 'https://www.atlassian.com/software/jira' },
      { name: 'Webpack', desc: "JavaScript module bundler used to build and optimize the BACN Information Broker frontend application for production deployment on RedHat Linux.", companies: ['Northrop Grumman'], projects: ['BIB'], link: 'https://webpack.js.org' },
    ]
  },
]

const credsAndEdu = ref([
  {
    id: 'devops-pro', icon: '⚙', badge: 'AWS PRO', color: '#ff9500', verify: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/7a92ec1f57bc4c2586e0176a0e3526d1',
    name: 'AWS DevOps Engineer – Professional',
    issuer: 'Amazon Web Services', date: 'Apr 2026',
    why: 'Widely regarded as the hardest AWS certification (rated 8.5/10 difficulty), the DevOps Engineer Pro validates mastery of CI/CD pipelines, infrastructure as code, monitoring, and automated security at scale. Unlike associate-level exams that test recall, this exam presents multi-paragraph real-world scenarios requiring architectural judgment. Earning this while actively building DoD-grade DevSecOps systems demonstrates the rarest combination: hands-on depth plus formal AWS validation.',
    tags: ['Hardest AWS Cert', 'CI/CD Mastery', 'IaC', 'Security Automation', '$300 Exam'],
    flipped: false
  },
  {
    id: 'cloudops', icon: '☁', badge: 'AWS ASSOC', color: '#00d4ff', verify: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/8539182aa69f49c9853626b5d922d256',
    name: 'AWS CloudOps Engineer',
    issuer: 'Amazon Web Services', date: 'Feb 2026',
    why: 'The SysOps Administrator Associate is the operations backbone of the AWS certification path — covering monitoring, high availability, networking, cost optimization, and incident response across live AWS environments. It is typically a prerequisite before tackling the DevOps Pro. Passing both in rapid succession (Feb → Apr 2026) demonstrates accelerated, systematic cloud mastery rather than credential collection.',
    tags: ['Operations Focus', 'High Availability', 'AWS Monitoring', 'Cost Optimization'],
    flipped: false
  },
  {
    id: 'ccp', icon: '🌐', badge: 'AWS FOUND', color: '#4eff9a', verify: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/c264415e14d04d7f81861cd6f9c950f2',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services', date: 'Feb 2026',
    why: 'The Cloud Practitioner is the structured entry point into the AWS certification path — covering core services, pricing models, security fundamentals, and cloud architecture concepts. For a 24-year DoD software veteran pivoting to cloud-native development, earning this alongside Security+ and CloudOps in a single month signals a deliberate, disciplined upskilling sprint — not a casual checkbox.',
    tags: ['AWS Foundation', 'Cloud Economics', 'Core Services', 'Architecture Basics'],
    flipped: false
  },
  {
    id: 'secplus', icon: '🔒', badge: 'DoD 8570', color: '#ff6b35', verify: 'https://cp.certmetrics.com/CompTIA/en/public/verify/credential/71e3f9eb23c8468bb9918b23a0b1a915',
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
const activeSkill = ref(null)
const activeSkillIdx = ref(0)
const carOpen = ref(false)

// Flat ordered list of all skills across all groups
const allSkills = skillGroups.flatMap(g => g.items)
const carIdx = ref(0)
const carDirection = ref('next')

function openSkill(s) {
  activeSkill.value = s
  activeSkillIdx.value = allSkills.findIndex(sk => sk.name === s.name)
}
function skillPrev() {
  const idx = (activeSkillIdx.value - 1 + allSkills.length) % allSkills.length
  activeSkillIdx.value = idx
  activeSkill.value = allSkills[idx]
}
function skillNext() {
  const idx = (activeSkillIdx.value + 1) % allSkills.length
  activeSkillIdx.value = idx
  activeSkill.value = allSkills[idx]
}
function openCompany(job) { activeCompany.value = job; activeProject.value = null }
function closeCompany() { activeCompany.value = null; activeProject.value = null }
function openProject(p) { activeProject.value = p }
function closeProject() { activeProject.value = null }

// ESC key dismisses any open modal
function handleEsc(e) {
  if (e.key === 'Escape') {
    if (activeProject.value) { activeProject.value = null; return }
    if (activeSkill.value) { activeSkill.value = null; return }
    if (carOpen.value) { carOpen.value = false; return }
    if (activeCompany.value) { activeCompany.value = null; return }
  }
  if (activeSkill.value) {
    if (e.key === 'ArrowLeft') { skillPrev(); return }
    if (e.key === 'ArrowRight') { skillNext(); return }
  }
  if (carOpen.value) {
    if (e.key === 'ArrowLeft') { carPrev(); return }
    if (e.key === 'ArrowRight') { carNext(); return }
  }
}

import { onMounted, onUnmounted } from 'vue'
onMounted(() => window.addEventListener('keydown', handleEsc))
onUnmounted(() => window.removeEventListener('keydown', handleEsc))

function openCarousel(i) { carIdx.value = i; carOpen.value = true }
function carPrev() { carDirection.value = 'prev'; carIdx.value = (carIdx.value - 1 + credsAndEdu.value.length) % credsAndEdu.value.length }
function carNext() { carDirection.value = 'next'; carIdx.value = (carIdx.value + 1) % credsAndEdu.value.length }
function jumpTo(i) { carDirection.value = i > carIdx.value ? 'next' : 'prev'; carIdx.value = i }
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
a.contact-item.clearance { color: #4eff9a; }
a.contact-item.clearance:hover { color: var(--accent); }

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
.sg-tag { font-family: var(--mono); font-size: 0.59rem; padding: 3px 8px; background: var(--bg); border: 1px solid var(--border); color: var(--dim); border-radius: 2px; cursor: pointer; transition: all 0.15s; }
.sg-tag:hover { border-color: var(--accent); color: var(--accent); background: rgba(0,200,240,0.06); }

/* ── SKILL MODAL ─────────────────────────── */
.skill-modal {
  background: linear-gradient(160deg, var(--surf2) 0%, var(--bg2) 60%);
  border: 1px solid var(--border);
  border-top: 3px solid var(--accent);
  border-radius: 12px;
  width: 100%; max-width: 520px;
  padding: 2rem 3.5rem 1.8rem;
  position: relative;
  display: flex; flex-direction: column; gap: 1.2rem;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.04) inset,
    0 2px 0 rgba(255,255,255,0.06) inset,
    0 40px 80px rgba(0,0,0,0.6),
    0 0 80px rgba(0,200,240,0.08);
  overflow: hidden;
}
.skill-modal-inner { display: flex; flex-direction: column; gap: 1.2rem; }
.skill-modal-counter { font-family: var(--mono); font-size: 0.55rem; letter-spacing: 0.15em; color: var(--muted); }
.skill-nav-arrow {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 34px; height: 34px; border-radius: 50%;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  color: var(--dim); font-size: 1.4rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s; z-index: 2; line-height: 1;
  backdrop-filter: blur(4px);
}
.skill-nav-arrow:hover { background: var(--accent); border-color: var(--accent); color: var(--bg); box-shadow: 0 0 14px rgba(0,200,240,0.4); transform: translateY(-50%) scale(1.08); }
.skill-nav-prev { left: 0.6rem; }
.skill-nav-next { right: 0.6rem; }
.skill-modal-name { font-family: var(--display); font-size: 2.4rem; line-height: 1; color: var(--text); padding-right: 2rem; }
.skill-modal-desc { font-size: 0.84rem; color: var(--dim); line-height: 1.75; }
.skill-modal-section { display: flex; flex-direction: column; gap: 0.5rem; }
.skill-modal-label { font-family: var(--mono); font-size: 0.57rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); }
.skill-modal-chips { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.skill-chip { font-family: var(--mono); font-size: 0.6rem; padding: 3px 9px; border-radius: 2px; }
.skill-chip.company { background: rgba(0,200,240,0.08); border: 1px solid rgba(0,200,240,0.25); color: var(--accent); }
.skill-chip.project { background: rgba(168,255,62,0.06); border: 1px solid rgba(168,255,62,0.2); color: #a8ff3e; }
.skill-modal-link { font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.08em; color: var(--accent); align-self: flex-start; padding: 5px 0; border-bottom: 1px solid transparent; transition: border-color 0.15s; }
.skill-modal-link:hover { border-bottom-color: var(--accent); }
.car-verify-link { font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.08em; color: #4eff9a; align-self: flex-start; padding: 5px 10px; border: 1px solid rgba(78,255,154,0.3); border-radius: 3px; transition: all 0.15s; margin-top: 0.2rem; }
.car-verify-link:hover { background: rgba(78,255,154,0.1); border-color: #4eff9a; }

/* ── CRED GRID CARDS ──────────────────────── */
.cred-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 1px; background: var(--border); border: 1px solid var(--border); }
.cred-grid-card { display: flex; cursor: pointer; background: var(--bg2); transition: background 0.2s; animation: fadeUp 0.4s ease both; animation-delay: calc(var(--i, 0) * 0.06s); }
.cred-grid-card:hover { background: var(--surface); }
.cred-grid-card:hover .cred-face-hint { opacity: 1; }
.cred-face-stripe { width: 3px; background: var(--c); flex-shrink: 0; }
.cred-face-body { flex: 1; padding: 1.2rem 1.2rem 1.2rem 1.4rem; display: flex; flex-direction: column; gap: 0.5rem; }
.cred-face-top { display: flex; justify-content: space-between; align-items: flex-start; }
.cred-icon { font-size: 1.4rem; }
.cred-badge { font-family: var(--mono); font-size: 0.52rem; letter-spacing: 0.12em; color: var(--c); border: 1px solid var(--c); padding: 2px 6px; }
.cred-face-name { font-family: var(--display); font-size: 1.1rem; color: var(--text); line-height: 1.15; }
.cred-face-issuer { font-family: var(--mono); font-size: 0.57rem; color: var(--dim); margin-top: auto; }
.cred-face-hint { font-family: var(--mono); font-size: 0.54rem; color: var(--c); opacity: 0; transition: opacity 0.2s; }
.cred-verify-badge { font-family: var(--mono); font-size: 0.52rem; letter-spacing: 0.08em; color: #4eff9a; border: 1px solid rgba(78,255,154,0.35); padding: 2px 7px; border-radius: 2px; align-self: flex-start; transition: all 0.15s; text-decoration: none; margin-top: auto; }
.cred-verify-badge:hover { background: rgba(78,255,154,0.1); border-color: #4eff9a; }

/* ── CAROUSEL MODAL ───────────────────────── */
.car-modal {
  background: linear-gradient(160deg, var(--surf2) 0%, var(--bg2) 60%);
  border: 1px solid var(--border);
  border-top: 3px solid var(--c, var(--accent));
  border-radius: 12px;
  width: 100%; max-width: 680px;
  padding: 2.5rem 4rem;
  position: relative;
  min-height: 320px;
  display: flex; flex-direction: column; gap: 1.5rem;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.04) inset,
    0 2px 0 rgba(255,255,255,0.06) inset,
    0 40px 80px rgba(0,0,0,0.6),
    0 0 60px rgba(0,0,0,0.4),
    0 0 120px color-mix(in srgb, var(--c, #00c8f0) 12%, transparent);
}
.car-modal-arrow {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 38px; height: 38px; border-radius: 50%;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--dim); font-size: 1.5rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s; z-index: 2; line-height: 1;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.car-modal-arrow:hover { background: var(--c); border-color: var(--c); color: var(--bg); box-shadow: 0 0 16px color-mix(in srgb, var(--c) 40%, transparent); transform: translateY(-50%) scale(1.08); }
.car-modal-prev { left: 0.75rem; }
.car-modal-next { right: 0.75rem; }
.car-modal-track { flex: 1; overflow: hidden; }
.car-modal-slide { display: flex; flex-direction: column; gap: 1.2rem; }
.car-modal-header { display: flex; align-items: flex-start; gap: 1.2rem; }
.car-modal-icon { font-size: 2.5rem; flex-shrink: 0; }
.car-modal-badge { font-family: var(--mono); font-size: 0.58rem; letter-spacing: 0.15em; color: var(--c); border: 1px solid var(--c); padding: 2px 8px; display: inline-block; margin-bottom: 0.35rem; }
.car-modal-name { font-family: var(--display); font-size: 2.2rem; line-height: 1; color: var(--text); margin-bottom: 0.2rem; }
.car-modal-issuer { font-family: var(--mono); font-size: 0.62rem; color: var(--dim); }
.car-modal-why { font-size: 0.85rem; color: var(--dim); line-height: 1.75; }
.car-modal-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
/* dots */
.car-dots { display: flex; justify-content: center; gap: 0.55rem; }
.car-dot { width: 7px; height: 7px; border-radius: 50%; border: 1px solid var(--dim); background: transparent; cursor: pointer; padding: 0; transition: all 0.2s; }
.car-dot.active { background: var(--c); border-color: var(--c); transform: scale(1.35); }
/* slide transitions */
.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active { transition: all 0.28s ease; }
.slide-left-enter-from  { opacity: 0; transform: translateX(40px); }
.slide-left-leave-to    { opacity: 0; transform: translateX(-40px); }
.slide-right-enter-from { opacity: 0; transform: translateX(-40px); }
.slide-right-leave-to   { opacity: 0; transform: translateX(40px); }
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
