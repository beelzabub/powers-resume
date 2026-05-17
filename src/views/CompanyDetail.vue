<template>
  <main v-if="job" class="company-page" :style="{ '--job-color': job.color }">
    <!-- Header -->
    <section class="company-hero">
      <div class="hero-bg"></div>
      <div class="container">
        <router-link to="/" class="back-link">← Back to Portfolio</router-link>
        <div class="company-meta">
          <div class="company-logo">{{ job.logo }}</div>
          <div>
            <div class="company-period">{{ job.period }}</div>
            <h1 class="company-name">{{ job.company }}</h1>
            <div class="company-title">{{ job.title }}</div>
            <div class="company-location">{{ job.location }}</div>
          </div>
        </div>
        <p class="company-tagline">{{ job.tagline }}</p>
      </div>
    </section>

    <!-- Highlights Bar -->
    <section class="highlights-bar">
      <div class="container">
        <div class="highlights-grid">
          <div v-for="h in job.highlights" :key="h" class="highlight-item">
            <span class="highlight-bullet">▸</span> {{ h }}
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="projects-section">
      <div class="container">
        <div class="section-label">Key Deliverables</div>
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          <div
            v-for="project in job.projects"
            :key="project.id"
            class="project-card"
            @click="$router.push(`/company/${job.id}/project/${project.id}`)"
          >
            <div class="proj-header">
              <h3 class="proj-name">{{ project.name }}</h3>
              <span class="proj-customer">{{ project.customer }}</span>
            </div>
            <p class="proj-desc">{{ project.description }}</p>
            <div class="proj-tech">
              <span v-for="t in project.tech" :key="t" class="tag">{{ t }}</span>
            </div>
            <div class="proj-outcome">
              <span class="outcome-label">Outcome:</span> {{ project.outcome }}
            </div>
            <button class="proj-cta">View Project Details →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Full Role Description -->
    <section class="role-section">
      <div class="container">
        <div class="section-label">Role Details</div>
        <h2 class="section-title">Responsibilities</h2>
        <div class="bullets-list">
          <div v-for="(b, i) in job.bullets" :key="i" class="bullet-item">
            <span class="bullet-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <p>{{ b }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="container nav-footer">
      <router-link to="/" class="btn">← All Experience</router-link>
    </div>
  </main>
  <div v-else class="not-found">
    <div class="container">
      <p>Company not found.</p>
      <router-link to="/">← Back</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { experience } from '../data/resume.js'

const route = useRoute()
const job = computed(() => experience.find(e => e.id === route.params.id))
</script>

<style scoped>
.company-page { padding-top: 56px; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }

.company-hero {
  position: relative;
  padding: 5rem 0 3rem;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(var(--job-color-rgb, 0,212,255), 0.05) 0%, transparent 60%);
  border-bottom: 1px solid rgba(255,255,255,0.03);
}
.back-link {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--text-dim);
  letter-spacing: 0.1em;
  display: inline-block;
  margin-bottom: 2.5rem;
  transition: color 0.2s;
}
.back-link:hover { color: var(--job-color); }
.company-meta {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.company-logo {
  font-size: 2.5rem;
  width: 70px; height: 70px;
  display: flex; align-items: center; justify-content: center;
  background: var(--surface);
  border: 2px solid var(--job-color);
  border-radius: 6px;
  flex-shrink: 0;
}
.company-period {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  margin-bottom: 0.3rem;
}
.company-name {
  font-family: var(--display);
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--text);
  line-height: 1;
  margin-bottom: 0.3rem;
}
.company-title {
  font-family: var(--display);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--job-color);
  margin-bottom: 0.2rem;
}
.company-location {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--text-dim);
}
.company-tagline {
  font-family: var(--display);
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--text-dim);
  font-style: italic;
  position: relative; z-index: 1;
}

/* HIGHLIGHTS */
.highlights-bar {
  background: var(--surface);
  padding: 2rem 0;
  border-bottom: 1px solid var(--border);
}
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.8rem;
}
.highlight-item {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--text-dim);
  padding: 0.5rem 0;
}
.highlight-bullet { color: var(--job-color); margin-right: 0.4rem; }

/* PROJECTS */
.projects-section { padding: 5rem 0; }
.section-title {
  font-family: var(--display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: 2.5rem;
  line-height: 1;
}
.section-label {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--job-color);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}
.project-card {
  background: var(--bg2);
  padding: 2rem;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-left: 3px solid var(--job-color);
}
.project-card:hover { background: var(--surface); }
.proj-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; }
.proj-name {
  font-family: var(--display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
}
.proj-customer {
  font-family: var(--mono);
  font-size: 0.6rem;
  color: var(--job-color);
  letter-spacing: 0.08em;
  white-space: nowrap;
  background: rgba(0,0,0,0.3);
  padding: 2px 8px;
  border: 1px solid var(--job-color);
  border-radius: 2px;
  flex-shrink: 0;
}
.proj-desc { font-size: 0.88rem; color: var(--text-dim); line-height: 1.7; }
.proj-tech { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.proj-outcome {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--text-dim);
  padding: 0.6rem 0.8rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-left: 2px solid var(--accent3);
}
.outcome-label { color: var(--accent3); margin-right: 0.4rem; }
.proj-cta {
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  background: none; border: none;
  color: var(--job-color);
  cursor: pointer; padding: 0;
  margin-top: auto;
  transition: opacity 0.2s;
}
.proj-cta:hover { opacity: 0.6; }

/* BULLETS */
.role-section {
  padding: 5rem 0;
  background: var(--bg2);
  border-top: 1px solid var(--border);
}
.bullets-list { display: flex; flex-direction: column; gap: 0; }
.bullet-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.2rem 0;
  border-bottom: 1px solid var(--border);
  align-items: flex-start;
}
.bullet-num {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--job-color);
  flex-shrink: 0;
  padding-top: 3px;
}
.bullet-item p { font-size: 0.92rem; color: var(--text-dim); line-height: 1.7; }

.nav-footer { padding: 3rem 2rem; }
.btn {
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  padding: 10px 24px;
  border: 1px solid var(--job-color);
  background: transparent;
  color: var(--job-color);
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
  display: inline-block;
}
.btn:hover { background: var(--job-color); color: var(--bg); }
.not-found { padding: 8rem 2rem; text-align: center; }
</style>
