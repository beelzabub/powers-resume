<template>
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
        <a class="contact-item link-linkedin"  href="https://www.linkedin.com/in/jamie-powers-94348a7/" target="_blank" rel="noopener">💼 LinkedIn Profile</a>
        <a class="contact-item link-clearance" href="https://www.clearancejobs.com/profile" target="_blank" rel="noopener">🔐 ClearanceJobs Profile</a>
        <a class="contact-item link-resume"    href="https://jamiepowers.org/" target="_blank" rel="noopener">📄 Resume</a>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { quickStats } from '../../data/resume.js'
</script>

<style scoped>
.panel-left {
  width: 290px; flex-shrink: 0;
  background: var(--bg2);
  border-right: 1px solid var(--border);
  overflow-y: auto;
}
.left-inner {
  padding: 2rem 1.5rem;
  display: flex; flex-direction: column; gap: 1.4rem;
  min-height: 100%;
}

.clearance-badge {
  font-family: var(--mono); font-size: 0.57rem; letter-spacing: 0.2em;
  color: #4eff9a; border: 1px solid #4eff9a;
  display: inline-block; padding: 3px 8px; border-radius: 2px;
  animation: blink 2.5s infinite; width: fit-content;
}

.name      { font-family: var(--display); font-size: 4.2rem; line-height: 0.92; color: var(--text); }
.title-line { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); }
.summary   { font-size: 0.79rem; color: var(--dim); line-height: 1.7; }

.quick-stats {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 1px; background: var(--border); border: 1px solid var(--border);
}
.qs      { background: var(--surface); padding: 0.75rem; text-align: center; }
.qs-val  { font-family: var(--display); font-size: 1.5rem; color: var(--accent); line-height: 1; }
.qs-label { font-family: var(--mono); font-size: 0.51rem; color: var(--dim); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 2px; }

.contact-block { margin-top: auto; display: flex; flex-direction: column; gap: 0.4rem; }
.contact-item  { font-family: var(--mono); font-size: 0.61rem; color: var(--dim); text-decoration: none; }
a.contact-item:hover { color: var(--accent); }
.link-linkedin  { color: #0a9af7; }
.link-clearance { color: #4eff9a; }
.link-resume    { color: var(--dim); }

@media (max-width: 768px) {
  .panel-left { width: 100%; border-right: none; border-bottom: 1px solid var(--border); }
}
</style>
