<template>
  <main class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-grid-bg"></div>
      <div class="hero-inner">
        <div class="hero-meta">
          <span class="section-label">Software Engineering Leader</span>
          <span class="hero-clearance">{{ profile.clearance }}</span>
        </div>
        <h1 class="hero-name">{{ profile.name }}</h1>
        <p class="hero-tagline">{{ profile.tagline }}</p>
        <p class="hero-summary">{{ profile.summary }}</p>
        <div class="hero-contact">
          <span>{{ profile.location }}</span>
          <span class="sep">|</span>
          <a :href="`tel:${profile.phone}`">{{ profile.phone }}</a>
          <span class="sep">|</span>
          <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        </div>
      </div>
    </section>

    <!-- ACCOMPLISHMENTS -->
    <section class="accomplishments">
      <div class="container">
        <div class="acc-grid">
          <div v-for="a in accomplishments" :key="a.label" class="acc-card">
            <div class="acc-icon">{{ a.icon }}</div>
            <div class="acc-value">{{ a.value }}</div>
            <div class="acc-label">{{ a.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="experience">
      <div class="container">
        <div class="section-label">Career Timeline</div>
        <h2 class="section-title">Experience</h2>
        <div class="exp-list">
          <div
            v-for="job in experience"
            :key="job.id"
            class="exp-card"
            :style="{ '--job-color': job.color }"
            @click="$router.push(`/company/${job.id}`)"
          >
            <div class="exp-card-left">
              <div class="exp-logo">{{ job.logo }}</div>
              <div class="exp-timeline-line"></div>
            </div>
            <div class="exp-card-body">
              <div class="exp-period">{{ job.period }}</div>
              <h3 class="exp-title">{{ job.title }}</h3>
              <div class="exp-company">{{ job.company }} · {{ job.location }}</div>
              <p class="exp-tagline">{{ job.tagline }}</p>
              <div class="exp-highlights">
                <span v-for="h in job.highlights.slice(0,3)" :key="h" class="exp-highlight">
                  ▸ {{ h }}
                </span>
              </div>
              <div class="exp-projects-preview">
                <span class="section-label" style="font-size:0.6rem">Projects</span>
                <div class="exp-proj-tags">
                  <span v-for="p in job.projects" :key="p.id" class="tag">{{ p.name }}</span>
                </div>
              </div>
              <button class="exp-cta">View Details →</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="skills">
      <div class="container">
        <div class="section-label">Technical Expertise</div>
        <h2 class="section-title">Core Skills</h2>
        <div class="skills-grid">
          <div class="skill-group">
            <div class="skill-group-title">Languages</div>
            <div class="skill-tags">
              <span v-for="s in skills.languages" :key="s" class="skill-tag">{{ s }}</span>
            </div>
          </div>
          <div class="skill-group">
            <div class="skill-group-title">Tools & Technologies</div>
            <div class="skill-tags">
              <span v-for="s in skills.tools" :key="s" class="skill-tag">{{ s }}</span>
            </div>
          </div>
          <div class="skill-group">
            <div class="skill-group-title">DevSecOps & Automation</div>
            <div class="skill-tags">
              <span v-for="s in skills.devsecops" :key="s" class="skill-tag accent">{{ s }}</span>
            </div>
          </div>
          <div class="skill-group">
            <div class="skill-group-title">Systems & Integration</div>
            <div class="skill-tags">
              <span v-for="s in skills.systems" :key="s" class="skill-tag">{{ s }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CERTIFICATIONS -->
    <section id="certifications" class="certs">
      <div class="container">
        <div class="section-label">Credentials</div>
        <h2 class="section-title">Certifications & Education</h2>
        <div class="creds-grid">
          <div class="certs-col">
            <div class="cred-subtitle">Certifications</div>
            <div class="cert-list">
              <div v-for="c in certifications" :key="c.name" class="cert-card">
                <div class="cert-name">{{ c.name }}</div>
                <div class="cert-meta">{{ c.issuer }} · {{ c.date }}</div>
              </div>
            </div>
          </div>
          <div class="edu-col">
            <div class="cred-subtitle">Education</div>
            <div class="edu-list">
              <div v-for="e in education" :key="e.degree" class="edu-card">
                <div class="edu-degree">{{ e.degree }}</div>
                <div class="edu-field">{{ e.field }}</div>
                <div class="edu-school">{{ e.school }} · {{ e.year }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <span class="footer-name">Jamie Powers</span>
        <span class="footer-sep">|</span>
        <span class="footer-tag">DoD Software Engineering Leader</span>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { profile, skills, experience, accomplishments, education, certifications } from '../data/resume.js'
</script>

<style scoped>
.home { padding-top: 56px; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }

/* HERO */
.hero {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}
.hero-grid-bg {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
}
.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  position: relative;
  z-index: 1;
}
.hero-meta {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
}
.hero-clearance {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--accent3);
  letter-spacing: 0.15em;
  padding: 3px 10px;
  border: 1px solid var(--accent3);
  border-radius: 2px;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
.hero-name {
  font-family: var(--display);
  font-size: clamp(4rem, 10vw, 9rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--text);
  margin-bottom: 1.5rem;
}
.hero-tagline {
  font-family: var(--display);
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 300;
  color: var(--accent);
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
}
.hero-summary {
  max-width: 700px;
  font-size: 1rem;
  color: var(--text-dim);
  line-height: 1.8;
  margin-bottom: 2rem;
}
.hero-contact {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--text-dim);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}
.sep { color: var(--border); }

/* ACCOMPLISHMENTS */
.accomplishments {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 3rem 0;
}
.acc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}
.acc-card {
  background: var(--surface);
  padding: 2rem 1.5rem;
  text-align: center;
  transition: background 0.2s;
}
.acc-card:hover { background: var(--surface2); }
.acc-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
.acc-value {
  font-family: var(--display);
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.4rem;
}
.acc-label {
  font-family: var(--mono);
  font-size: 0.62rem;
  color: var(--text-dim);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* EXPERIENCE */
.experience { padding: 6rem 0; }
.section-title {
  font-family: var(--display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: 3rem;
  line-height: 1;
}
.exp-list { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); }
.exp-card {
  display: flex;
  background: var(--bg2);
  cursor: pointer;
  transition: background 0.2s;
  border-left: 3px solid var(--job-color, var(--accent));
}
.exp-card:hover { background: var(--surface); }
.exp-card-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  flex-shrink: 0;
}
.exp-logo {
  font-size: 1.8rem;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  margin-bottom: 1rem;
}
.exp-timeline-line { flex: 1; width: 1px; background: var(--border); }
.exp-card-body { padding: 2rem 2rem 2rem 0; flex: 1; }
.exp-period {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  margin-bottom: 0.3rem;
}
.exp-title {
  font-family: var(--display);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.1;
  margin-bottom: 0.2rem;
}
.exp-company {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--job-color, var(--accent));
  margin-bottom: 0.6rem;
}
.exp-tagline {
  font-size: 0.9rem;
  color: var(--text-dim);
  margin-bottom: 1rem;
  font-style: italic;
}
.exp-highlights { margin-bottom: 1rem; }
.exp-highlight {
  display: block;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--text-dim);
  margin-bottom: 0.3rem;
}
.exp-projects-preview { margin-bottom: 1rem; }
.exp-proj-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.4rem; }
.exp-cta {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  background: none;
  border: none;
  color: var(--job-color, var(--accent));
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s;
}
.exp-cta:hover { opacity: 0.7; }

/* SKILLS */
.skills {
  padding: 6rem 0;
  background: var(--bg2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}
.skill-group {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 1.5rem;
}
.skill-group-title {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}
.skill-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.skill-tag {
  font-family: var(--mono);
  font-size: 0.65rem;
  padding: 3px 8px;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text-dim);
  border-radius: 2px;
  transition: all 0.2s;
}
.skill-tag:hover { border-color: var(--accent); color: var(--accent); }
.skill-tag.accent { border-color: var(--accent2); color: var(--accent2); background: rgba(255,107,53,0.05); }

/* CERTS */
.certs { padding: 6rem 0; }
.creds-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}
@media (max-width: 700px) { .creds-grid { grid-template-columns: 1fr; } }
.cred-subtitle {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}
.cert-list, .edu-list { display: flex; flex-direction: column; gap: 1rem; }
.cert-card, .edu-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  padding: 1rem 1.2rem;
  transition: background 0.2s;
}
.cert-card:hover, .edu-card:hover { background: var(--surface2); }
.cert-name, .edu-degree {
  font-family: var(--display);
  font-weight: 600;
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 0.2rem;
}
.cert-meta, .edu-field {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--text-dim);
}
.edu-field { margin-bottom: 0.2rem; color: var(--accent); font-size: 0.75rem; font-family: var(--body); }
.edu-school { font-family: var(--mono); font-size: 0.65rem; color: var(--text-muted); }

/* FOOTER */
.footer {
  padding: 2rem;
  border-top: 1px solid var(--border);
  background: var(--bg);
}
.footer .container {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--text-muted);
}
.footer-sep { color: var(--border); }
</style>
