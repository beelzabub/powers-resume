<template>
  <main v-if="project && job" class="project-page" :style="{ '--job-color': job.color }">
    <section class="proj-hero">
      <div class="container">
        <div class="breadcrumbs">
          <router-link to="/">Portfolio</router-link>
          <span class="sep">›</span>
          <router-link :to="`/company/${job.id}`">{{ job.company }}</router-link>
          <span class="sep">›</span>
          <span class="current">{{ project.name }}</span>
        </div>

        <div class="proj-header">
          <div class="job-badge">
            <span class="job-logo">{{ job.logo }}</span>
            <div>
              <div class="job-name">{{ job.company }}</div>
              <div class="job-title-sm">{{ job.title }}</div>
            </div>
          </div>
          <div class="proj-customer-badge">{{ project.customer }}</div>
        </div>

        <h1 class="proj-name">{{ project.name }}</h1>
        <p class="proj-description">{{ project.description }}</p>

        <div class="outcome-banner">
          <div class="outcome-icon">✓</div>
          <div>
            <div class="outcome-label">Project Outcome</div>
            <div class="outcome-text">{{ project.outcome }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="tech-section">
      <div class="container">
        <div class="section-label">Technology Stack</div>
        <div class="tech-grid">
          <div v-for="t in project.tech" :key="t" class="tech-card">
            <div class="tech-dot"></div>
            <div class="tech-name">{{ t }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Context from role -->
    <section class="context-section">
      <div class="container">
        <div class="section-label">Role Context at {{ job.company }}</div>
        <h2 class="section-subtitle">{{ job.period }}</h2>
        <p class="context-text">{{ job.tagline }}</p>
        <div class="context-highlights">
          <div v-for="h in job.highlights" :key="h" class="context-highlight">
            <span class="bullet">▸</span> {{ h }}
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <section class="proj-nav">
      <div class="container">
        <router-link :to="`/company/${job.id}`" class="btn">
          ← Back to {{ job.company }}
        </router-link>
        <div class="other-projects">
          <div class="other-label">Other Projects at {{ job.company }}</div>
          <div class="other-list">
            <router-link
              v-for="p in otherProjects"
              :key="p.id"
              :to="`/company/${job.id}/project/${p.id}`"
              class="other-project-link"
            >
              {{ p.name }} →
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
  <div v-else class="not-found">
    <router-link to="/">← Back to Portfolio</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { experience } from '../data/resume.js'

const route = useRoute()
const job = computed(() => experience.find(e => e.id === route.params.companyId))
const project = computed(() => job.value?.projects.find(p => p.id === route.params.projectId))
const otherProjects = computed(() => job.value?.projects.filter(p => p.id !== route.params.projectId) ?? [])
</script>

<style scoped>
.project-page { padding-top: 56px; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }

.proj-hero {
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, var(--bg2) 0%, var(--bg) 100%);
}
.breadcrumbs {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  letter-spacing: 0.08em;
}
.breadcrumbs a { color: var(--text-dim); transition: color 0.2s; }
.breadcrumbs a:hover { color: var(--job-color); }
.breadcrumbs .sep { color: var(--border); }
.breadcrumbs .current { color: var(--job-color); }

.proj-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}
.job-badge {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 0.6rem 1rem;
  border-radius: 4px;
}
.job-logo { font-size: 1.4rem; }
.job-name {
  font-family: var(--display);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
}
.job-title-sm {
  font-family: var(--mono);
  font-size: 0.6rem;
  color: var(--job-color);
}
.proj-customer-badge {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: var(--job-color);
  border: 1px solid var(--job-color);
  padding: 4px 12px;
  border-radius: 2px;
  text-transform: uppercase;
}

.proj-name {
  font-family: var(--display);
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--text);
  line-height: 0.95;
  margin-bottom: 1.5rem;
}
.proj-description {
  max-width: 750px;
  font-size: 1rem;
  color: var(--text-dim);
  line-height: 1.8;
  margin-bottom: 2rem;
}
.outcome-banner {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent3);
  padding: 1.2rem 1.5rem;
  max-width: 700px;
}
.outcome-icon {
  font-size: 1.2rem;
  color: var(--accent3);
  flex-shrink: 0;
  font-family: var(--mono);
}
.outcome-label {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  color: var(--accent3);
  text-transform: uppercase;
  margin-bottom: 0.3rem;
}
.outcome-text {
  font-size: 0.92rem;
  color: var(--text);
  font-weight: 500;
}

/* TECH */
.tech-section {
  padding: 4rem 0;
  background: var(--bg2);
  border-bottom: 1px solid var(--border);
}
.section-label {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--job-color);
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.tech-card {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 0.6rem 1rem;
  transition: all 0.2s;
}
.tech-card:hover { border-color: var(--job-color); }
.tech-dot {
  width: 6px; height: 6px;
  background: var(--job-color);
  border-radius: 50%;
}
.tech-name {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--text-dim);
  letter-spacing: 0.05em;
}

/* CONTEXT */
.context-section {
  padding: 4rem 0;
  border-bottom: 1px solid var(--border);
}
.section-subtitle {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 0.8rem;
}
.context-text {
  font-family: var(--display);
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--text-dim);
  font-style: italic;
  margin-bottom: 1.5rem;
}
.context-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.5rem;
}
.context-highlight {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--text-dim);
  padding: 0.5rem 0.8rem;
  background: var(--surface);
  border: 1px solid var(--border);
}
.bullet { color: var(--job-color); margin-right: 0.4rem; }

/* NAV */
.proj-nav { padding: 3rem 0 5rem; }
.proj-nav .container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
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
  align-self: flex-start;
}
.btn:hover { background: var(--job-color); color: var(--bg); }
.other-label {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 0.8rem;
}
.other-list { display: flex; flex-wrap: wrap; gap: 1rem; }
.other-project-link {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--text-dim);
  padding: 6px 14px;
  border: 1px solid var(--border);
  transition: all 0.2s;
}
.other-project-link:hover { border-color: var(--job-color); color: var(--job-color); }
.not-found { padding: 8rem 2rem; text-align: center; }
</style>
