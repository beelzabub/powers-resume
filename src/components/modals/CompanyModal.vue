<template>
  <Transition name="modal">
    <div v-if="company && !project" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal" :style="{ '--c': company.color }">
        <button class="modal-close" @click="$emit('close')">✕</button>

        <div class="modal-header">
          <div class="modal-logo">{{ company.logo }}</div>
          <div>
            <div class="modal-period">{{ company.period }}</div>
            <h2 class="modal-company-name">{{ company.company }}</h2>
            <div class="modal-role">{{ company.title }}</div>
            <p class="modal-context">{{ company.context }}</p>
          </div>
        </div>

        <div class="modal-stats">
          <div v-for="s in company.stats" :key="s.label" class="modal-stat">
            <div class="modal-stat-val">{{ s.value }}</div>
            <div class="modal-stat-label">{{ s.label }}</div>
          </div>
        </div>

        <div class="modal-section-label">Projects — click to drill down</div>
        <div class="project-cards">
          <div
            v-for="p in company.projects"
            :key="p.id"
            class="project-card"
            @click="$emit('open-project', p)"
          >
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
</template>

<script setup>
defineProps({ company: Object, project: Object })
defineEmits(['close', 'open-project'])
</script>

<style scoped>
.modal-header      { display: flex; gap: 1.5rem; margin-bottom: 1.4rem; align-items: flex-start; }
.modal-logo        { font-size: 2.2rem; width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; background: var(--surface); border: 2px solid var(--c); flex-shrink: 0; }
.modal-period      { font-family: var(--mono); font-size: 0.57rem; color: var(--muted); margin-bottom: 0.2rem; }
.modal-company-name { font-family: var(--display); font-size: 2.8rem; line-height: 1; color: var(--text); margin-bottom: 0.15rem; }
.modal-role        { font-family: var(--mono); font-size: 0.65rem; color: var(--c); margin-bottom: 0.55rem; }
.modal-context     { font-size: 0.79rem; color: var(--dim); line-height: 1.7; }

.modal-stats       { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); margin-bottom: 1.4rem; }
.modal-stat        { background: var(--surface); padding: 0.75rem; text-align: center; }
.modal-stat-val    { font-family: var(--display); font-size: 1.5rem; color: var(--c); line-height: 1; }
.modal-stat-label  { font-family: var(--mono); font-size: 0.51rem; color: var(--dim); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 2px; }

.modal-section-label { font-family: var(--mono); font-size: 0.57rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--c); margin-bottom: 0.7rem; }

.project-cards     { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px,1fr)); gap: 1px; background: var(--border); border: 1px solid var(--border); }
.project-card      { background: var(--bg); padding: 1.2rem; cursor: pointer; display: flex; flex-direction: column; gap: 0.65rem; border-left: 2px solid transparent; transition: all 0.15s; }
.project-card:hover { background: var(--surface); border-left-color: var(--c); }

.pc-top      { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; }
.pc-name     { font-family: var(--display); font-size: 1.15rem; color: var(--text); line-height: 1.1; }
.pc-customer { font-family: var(--mono); font-size: 0.51rem; color: var(--c); border: 1px solid var(--c); padding: 2px 5px; white-space: nowrap; flex-shrink: 0; }
.pc-desc     { font-size: 0.74rem; color: var(--dim); line-height: 1.6; }
.pc-tech     { display: flex; flex-wrap: wrap; gap: 0.3rem; }
.pc-outcome  { font-family: var(--mono); font-size: 0.61rem; color: #4eff9a; margin-top: auto; }

@media (max-width: 768px) { .modal-stats { grid-template-columns: repeat(2,1fr); } }
</style>
