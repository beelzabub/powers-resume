export const profile = {
  name: 'Jamie Powers',
  location: 'Vista, CA 92084',
  phone: '442-404-7185',
  email: 'jgpowers52@hotmail.com',
  clearance: 'Active DoD Top Secret/SCI Clearance',
  summary: `Results-driven Software Engineering Leader with 24+ years of hands-on experience in software development, systems engineering, and leadership within DoD environments. Expertise in delivering scalable, secure solutions for DoD customers (Navy, Air Force, Marine Corps) using Agile/Scrum methodologies. Proven track record in architecting software systems, implementing DevSecOps practices, and contributing code in high-stakes projects.`,
  tagline: '24+ Years Engineering Excellence in Defense & Aerospace'
}

export const skills = {
  languages: ['Python', 'Java', 'JavaScript', 'Vue3', 'React', 'Redux', 'C', 'C++', 'C#', 'Fortran', 'Bash', 'JSP', 'JSON', 'XML'],
  tools: ['Jenkins', 'Git/BitBucket', 'Ansible', 'Docker', 'SonarQube', 'Selenium', 'PyTest', 'Redis', 'ElasticSearch', 'Node.js', 'Webpack', 'Fortify', 'Apache HTTP', 'NGINX', 'JIRA'],
  devsecops: ['CI/CD Pipelines', 'Automated Testing', 'Static Code Analysis', 'Vulnerability Management', 'DISA STIG Compliance', 'Pub/Sub Architectures', 'Microservices Design'],
  systems: ['RF Communications', 'Link16', 'CDL', 'Inmarsat', 'SADL', 'EPLRS', 'VOIP', 'CBRN Modeling/Simulation', 'GCCS-J/GCCS-M Integration'],
  methodologies: ['Agile/Scrum', 'Technical Architecture', 'Code Review', 'DevSecOps', 'Cross-Functional Leadership']
}

export const experience = [
  {
    id: 'galt',
    title: 'Director of Engineering',
    company: 'GALT Aerospace',
    location: 'San Diego, CA',
    period: '02/2019 – 11/2023',
    logo: '✈',
    color: '#00d4ff',
    tagline: 'Built a DoD software org from zero to $250M+',
    highlights: [
      '$250M+ contracts secured through disciplined software dev',
      'Scaled engineering team from 10 → 50 engineers',
      '$35M+ SkyTower II contract win',
      'Successful FINN program flight tests',
      'Led DevSecOps implementation from ground up'
    ],
    projects: [
      {
        id: 'finn',
        name: 'FINN Program',
        description: 'Airborne communications system status/control software for the FINN flight test program. Led end-to-end development using microservices/pub-sub architecture with automated DISA STIG compliance.',
        tech: ['Python', 'Vue3', 'Redis', 'Ansible', 'Docker', 'Linux', 'Jenkins'],
        outcome: 'Successful flight tests; secured IATT accreditations',
        customer: 'Marine Corps Warfighting Lab'
      },
      {
        id: 'skytower',
        name: 'SkyTower II',
        description: 'Architected and delivered scalable, secure airborne communications software that competed against and beat major industry players, resulting in a landmark contract win.',
        tech: ['Python', 'JavaScript', 'Docker', 'Ansible', 'Jenkins', 'SonarQube'],
        outcome: '$35M+ contract win against major industry competitors',
        customer: 'DoD / Marine Corps'
      },
      {
        id: 'devsecops-galt',
        name: 'DevSecOps Pipeline Build-Out',
        description: 'Built the entire DevSecOps organization from scratch: CI/CD pipelines, automated builds, deployments, testing, static code analysis, and STIG compliance automation.',
        tech: ['Jenkins', 'Ansible', 'Docker', 'SonarQube', 'PyTest', 'Selenium', 'BitBucket'],
        outcome: 'Enabled rapid, secure delivery at DoD scale',
        customer: 'Internal / DoD'
      }
    ],
    bullets: [
      'Architected and developed software for status/control of airborne communications systems using Python, Redis, Ansible, Vue3/JavaScript, Docker, and Linux in a microservices/pub-sub architecture.',
      'Led DevSecOps implementation from ground up including Jenkins CI/CD pipelines, automated builds/deployments/testing, static code analysis (SonarQube), and automation scripting.',
      'Achieved numerous IATT accreditations through automated DISA STIG compliance and rigorous security practices.',
      'Scaled software engineering team from 10 to 50, hiring developers and fostering a culture of continuous improvement.',
      'Partnered with DoD stakeholders (Marine Corps Warfighting Lab) to align technical roadmaps with program goals, securing $250M+ in contracts.'
    ]
  },
  {
    id: 'ng-bacn',
    title: 'Software Engineer / Software Team Leader',
    company: 'Northrop Grumman',
    location: 'San Diego, CA',
    period: '01/2009 – 12/2018',
    logo: '🛩',
    color: '#ff6b35',
    tagline: 'Battlefield Airspace Awareness & Tactical Data Links',
    highlights: [
      'Led BACN Information Broker (BIB) development',
      '3 major baseline deliveries + cyber upgrades',
      'Tactical data link integration (Link16, CDL, VOIP)',
      'Forward-deployed field support (1–5.5 month trips)',
      'Full-stack web-based situational awareness platform'
    ],
    projects: [
      {
        id: 'bacn-bib',
        name: 'BACN Information Broker (BIB)',
        description: 'Web-based situational awareness and mission planning application for the Battlefield Airborne Communications Node. Full-stack development with 3D geospatial visualization.',
        tech: ['React', 'Redux', 'Backbone', 'CesiumJS', 'Python', 'Java', 'ElasticSearch', 'Node.js', 'Jenkins', 'RedHat Linux'],
        outcome: '3 major baselines delivered ahead of schedule; forward-deployed globally',
        customer: 'US Air Force / Joint DoD'
      },
      {
        id: 'rf-tactical',
        name: 'RF/Tactical Data Link Integration',
        description: 'Hands-on coding, debugging, and troubleshooting for RF and tactical data link systems including Link16, CDL, Inmarsat, SADL, EPLRS, and VOIP across ground and airborne platforms.',
        tech: ['C', 'C++', 'Java', 'Python', 'Link16', 'CDL', 'VOIP', 'SADL', 'EPLRS'],
        outcome: 'Operational integration across multiple forward-deployed environments',
        customer: 'US Air Force / DoD Joint'
      },
      {
        id: 'cyber-vuln',
        name: 'Cyber Security & Vulnerability Management',
        description: 'Oversaw three major cyber security upgrades including vulnerability management implementation (Fortify), STIG compliance, and automated testing frameworks.',
        tech: ['Fortify', 'Selenium', 'PyTest', 'Jenkins', 'SonarQube'],
        outcome: 'Delivered all cyber upgrades ahead of schedule',
        customer: 'US Air Force'
      }
    ],
    bullets: [
      'Led development of Battlefield Airborne Communications Node (BACN) Information Broker (BIB), a web-based situational awareness/mission planning application.',
      'Utilized JavaScript (React, Redux, Backbone, Cesium), Python, Java, RedHat Linux, Apache HTTP, Git, JIRA, Jenkins, ElasticSearch, Node.js.',
      'Oversaw three major baselines and cyber security upgrades, implementing vulnerability management (Fortify), STIGs, and automated testing.',
      'Provided hands-on coding and troubleshooting for RF/tactical data links (Link16, CDL, Inmarsat, SADL, EPLRS, VOIP).',
      'Supported field deployments and installations across ground/airborne systems in operational environments.'
    ]
  },
  {
    id: 'ng-jem',
    title: 'Software Engineer',
    company: 'Northrop Grumman',
    location: 'San Diego, CA',
    period: '01/2005 – 12/2008',
    logo: '☢',
    color: '#a8ff3e',
    tagline: 'CBRN Modeling & Simulation / GCCS Integration',
    highlights: [
      'Team lead for ~20 developers on JEM',
      'Ported JEM into GCCS-J and GCCS-M',
      'Built automated test framework for JEM',
      'Cross-platform: Windows and Solaris',
      'Regular travel to DC for integration support'
    ],
    projects: [
      {
        id: 'jem',
        name: 'Joint Effects Model (JEM)',
        description: 'Web-based software application for modeling and simulation of Chemical, Biological, Radiological, and Nuclear (CBRN) events. Led team of ~20 developers across full stack.',
        tech: ['Fortran', 'C', 'C++', 'Java', 'JSP', 'JavaScript', 'Windows', 'Solaris'],
        outcome: 'Successfully integrated into GCCS-J and GCCS-M',
        customer: 'DoD Joint Command'
      },
      {
        id: 'gccs-integration',
        name: 'GCCS-J / GCCS-M Integration',
        description: 'Ported JEM from Windows and integrated it into the Global Command and Control System Joint and Maritime. Administered all computer systems including Windows Domain Controllers and SUN Solaris servers.',
        tech: ['Java', 'C++', 'Windows Server', 'SUN Solaris', 'GCCS-J', 'GCCS-M'],
        outcome: 'Operational CBRN capability integrated into global command systems',
        customer: 'DoD Joint Command / Navy'
      },
      {
        id: 'jem-test-framework',
        name: 'JEM Automated Test Framework',
        description: 'Designed and led development of an automated test framework for JEM, establishing repeatable quality gates and reducing manual testing burden across the team.',
        tech: ['Java', 'C++', 'Shell Scripting'],
        outcome: 'Automated QA for 20-person development team',
        customer: 'Internal / DoD'
      }
    ],
    bullets: [
      'Team leader (~20 developers) on multiple efforts for the Joint Effects Model (JEM).',
      'JEM was a web-based application for modeling and simulation of CBRN events.',
      'Ported JEM from Windows and integrated it into GCCS-J and GCCS-M.',
      'Responsible for scheduling, peer reviews, technical documentation, and managing a team of 4-6 people.',
      'Led development of an automated test framework for JEM.'
    ]
  },
  {
    id: 'predicate',
    title: 'Software Engineer',
    company: 'Predicate Logic Inc.',
    location: 'San Diego, CA',
    period: '04/1999 – 04/2005',
    logo: '📡',
    color: '#bf5fff',
    tagline: 'Submarine Systems & Advanced Metrics Platform',
    highlights: [
      'SLVR submarine receiver IRM integration',
      'TychoMetrics automated data collection platform',
      'Led redesign from desktop to web-based .NET app',
      'Multi-source data extraction and reporting',
      'Berkeley sockets & SNMP inter-process comms'
    ],
    projects: [
      {
        id: 'slvr',
        name: 'SLVR Submarine Receiver Integration',
        description: 'Full lifecycle support for integration of the SLVR (Submarine Low Frequency/Very Low Frequency VME Bus Receiver) into the Integrated Resource Manager (IRM). GUI design using Neuron Data, inter-process comms via Berkeley sockets and SNMP.',
        tech: ['C', 'HPUX Unix', 'Berkeley Sockets', 'SNMP', 'Neuron Data'],
        outcome: 'Operational submarine communications integration',
        customer: 'US Navy'
      },
      {
        id: 'tychometrics',
        name: 'TychoMetrics Platform',
        description: 'Automated data collection and reporting tool applying advanced metrics to disparate data sources. Led full redesign from Windows desktop (Visual C++/MFC) to web-based .NET application.',
        tech: ['Visual C++', 'MFC', 'Versant OODB', 'C#', 'ASP.NET', 'COM', 'IIS', 'ADO.NET', 'Perl'],
        outcome: 'Scalable web-based metrics platform serving multiple DoD customers',
        customer: 'DoD Contractors / Internal'
      }
    ],
    bullets: [
      'Full lifecycle support for SLVR submarine receiver integration into the Integrated Resource Manager.',
      'Developed TychoMetrics: automated data collection and reporting tool across disparate data sources.',
      'Led redesign of TychoMetrics from Windows desktop to web-based .NET application.',
      'Utilized OLE automation to integrate Microsoft Excel as a reporting option using COM and C++.',
      'Developed custom metrics solutions for customers using XML, CSV/TSV, SQL Server, Oracle, and IBM/Rational tools.'
    ]
  }
]

export const accomplishments = [
  { icon: '💰', value: '$250M+', label: 'Contracts Secured at GALT Aerospace' },
  { icon: '👥', value: '10 → 50', label: 'Engineers Scaled at GALT' },
  { icon: '✈', value: '2', label: 'Successful DoD Flight Test Programs' },
  { icon: '🔒', value: 'TS/SCI', label: 'Active DoD Clearance' },
  { icon: '📅', value: '24+', label: 'Years Engineering Experience' },
  { icon: '🏆', value: '$35M+', label: 'SkyTower II Contract Win' }
]

export const education = [
  {
    degree: 'Master of Advanced Study',
    field: 'Architecture-Based Enterprise Systems Engineering',
    school: 'University of California, San Diego (UCSD)',
    year: '2014'
  },
  {
    degree: 'Bachelor of Arts',
    field: 'Cognitive Science and Music',
    school: 'University of California, San Diego (UCSD)',
    year: '1999'
  }
]

export const certifications = [
  { name: 'AWS Certified DevOps Engineer – Professional', issuer: 'Amazon Web Services', date: 'April 2026' },
  { name: 'AWS Certified CloudOps Engineer', issuer: 'Amazon Web Services', date: 'February 2026' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'February 2026' },
  { name: 'CompTIA Security+', issuer: 'CompTIA', date: 'February 2026' }
]
