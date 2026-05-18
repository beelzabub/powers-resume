<template>
  <section class="content-section">
    <div class="section-header">
      <span class="section-eyebrow">Career</span>
      <h2 class="section-title">Experience</h2>
    </div>
    <div class="company-cards">
      <div
        v-for="(job, i) in experience"
        :key="job.id"
        class="company-card"
        :style="{ '--c': job.color, '--i': i }"
        @click="$emit('open-company', job)"
      >
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
</template>

<script setup>
import { experience } from '../../data/resume.js'
defineEmits(['open-company'])
</script>

<style scoped>
.content-section  { display: flex; flex-direction: column; gap: 0.9rem; }
.section-header   { display: flex; align-items: baseline; gap: 1rem; }
.section-eyebrow  { font-family: var(--mono); font-size: 0.58rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
.section-title    { font-family: var(--display); font-size: 2.6rem; line-height: 1; color: var(--text); }

.company-cards {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1px; background: var(--border); border: 1px solid var(--border);
}
.company-card {
  background: var(--bg2); cursor: pointer; position: relative;
  overflow: hidden; transition: background 0.2s;
  animation: fadeUp 0.4s ease both;
  animation-delay: calc(var(--i, 0) * 0.07s);
}
.company-card:hover                { background: var(--surface); }
.company-card:hover .cc-cta       { opacity: 1; }
.company-card:hover .cc-stripe    { transform: scaleY(1); }

.cc-stripe {
  position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  background: var(--c); transform: scaleY(0.25);
  transform-origin: bottom; transition: transform 0.25s ease;
}
.cc-body        { padding: 1.3rem 1.3rem 1.3rem 1.7rem; }
.cc-top         { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.7rem; }
.cc-logo        { font-size: 1.3rem; }
.cc-period      { font-family: var(--mono); font-size: 0.55rem; color: var(--muted); }
.cc-company     { font-family: var(--display); font-size: 1.45rem; color: var(--text); line-height: 1; margin-bottom: 0.15rem; }
.cc-role        { font-family: var(--mono); font-size: 0.59rem; color: var(--c); margin-bottom: 0.55rem; }
.cc-tagline     { font-size: 0.75rem; color: var(--dim); line-height: 1.5; margin-bottom: 0.9rem; }
.cc-footer      { display: flex; justify-content: space-between; }
.cc-proj-count  { font-family: var(--mono); font-size: 0.57rem; color: var(--muted); }
.cc-cta         { font-family: var(--mono); font-size: 0.61rem; color: var(--c); opacity: 0; transition: opacity 0.2s; }
</style>
