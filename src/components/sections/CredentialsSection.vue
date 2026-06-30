<template>
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
        @click="$emit('open-carousel', i)"
      >
        <div class="cred-face-stripe"></div>
        <div class="cred-face-body">
          <div class="cred-face-top">
            <div class="cred-icon">{{ item.icon }}</div>
            <div class="cred-badge">{{ item.badge }}</div>
          </div>
          <div class="cred-face-name">{{ item.name }}</div>
          <div class="cred-face-issuer">{{ item.issuer }} · {{ item.date }}</div>
          <a
            v-if="item.verify"
            :href="item.verify"
            target="_blank" rel="noopener"
            class="cred-verify-badge"
            @click.stop
          >✓ Verify</a>
          <div class="cred-face-hint">click to explore →</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { credsAndEdu } from '../../data/resume.js'
defineEmits(['open-carousel'])
</script>

<style scoped>
.content-section  { display: flex; flex-direction: column; gap: 0.9rem; }
.section-header   { display: flex; align-items: baseline; gap: 1rem; }
.section-eyebrow  { font-family: var(--mono); font-size: 0.58rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
.section-title    { font-family: var(--display); font-size: 2.6rem; line-height: 1; color: var(--text); }

.cred-cards {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 0.9rem;
}
.cred-grid-card {
  display: flex; cursor: pointer; background: var(--bg2);
  border: 1px solid var(--border);
  transition: background 0.2s;
  animation: fadeUp 0.4s ease both;
  animation-delay: calc(var(--i, 0) * 0.06s);
}
.cred-grid-card:hover                  { background: var(--surface); }
.cred-grid-card:hover .cred-face-hint { opacity: 1; }

.cred-face-stripe  { width: 3px; background: var(--c); flex-shrink: 0; }
.cred-face-body    { flex: 1; padding: 1.2rem 1.2rem 1.2rem 1.4rem; display: flex; flex-direction: column; gap: 0.5rem; }
.cred-face-top     { display: flex; justify-content: space-between; align-items: flex-start; }
.cred-icon         { font-size: 1.4rem; }
.cred-badge        { font-family: var(--mono); font-size: 0.52rem; letter-spacing: 0.12em; color: var(--c); border: 1px solid var(--c); padding: 2px 6px; }
.cred-face-name    { font-family: var(--display); font-size: 1.1rem; color: var(--text); line-height: 1.15; }
.cred-face-issuer  { font-family: var(--mono); font-size: 0.57rem; color: var(--dim); margin-top: auto; }
.cred-face-hint    { font-family: var(--mono); font-size: 0.54rem; color: var(--c); opacity: 0; transition: opacity 0.2s; }
.cred-verify-badge {
  font-family: var(--mono); font-size: 0.52rem; letter-spacing: 0.08em;
  color: #4eff9a; border: 1px solid rgba(78,255,154,0.35);
  padding: 2px 7px; border-radius: 2px; align-self: flex-start;
  transition: all 0.15s; text-decoration: none; margin-top: auto;
}
.cred-verify-badge:hover { background: rgba(78,255,154,0.1); border-color: #4eff9a; }
</style>
