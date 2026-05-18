<template>
  <Transition name="modal">
    <div v-if="project" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal" :style="{ '--c': company?.color }">
        <button class="modal-close" @click="$emit('close')">✕</button>
        <button class="modal-back" @click="$emit('close')">← {{ company?.company }}</button>

        <div class="pm-header">
          <div class="pm-customer">{{ project.customer }}</div>
          <h2 class="pm-name">{{ project.name }}</h2>
          <p class="pm-desc">{{ project.description }}</p>
        </div>

        <div class="pm-outcome-banner">
          <div class="pm-outcome-icon">✓</div>
          <div>
            <div class="pm-outcome-label">OUTCOME</div>
            <div class="pm-outcome-text">{{ project.outcome }}</div>
          </div>
        </div>

        <div class="pm-body">
          <div class="pm-col">
            <div class="pm-section-label">Tech Stack</div>
            <div class="pm-tech-grid">
              <div v-for="t in project.tech" :key="t" class="pm-tech-item">
                <span class="pm-tech-dot"></span>{{ t }}
              </div>
            </div>
          </div>
          <div class="pm-col">
            <div class="pm-section-label">Key Contributions</div>
            <div class="pm-bullets">
              <div v-for="b in project.bullets" :key="b" class="pm-bullet">
                <span class="pm-b-arrow">▸</span>{{ b }}
              </div>
            </div>
          </div>
        </div>

        <div v-if="otherProjects.length" class="pm-other">
          <div class="pm-section-label">Other projects at {{ company?.company }}</div>
          <div class="pm-other-list">
            <button
              v-for="p in otherProjects"
              :key="p.id"
              class="pm-other-btn"
              @click="$emit('open-project', p)"
            >{{ p.name }} →</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ project: Object, company: Object })
defineEmits(['close', 'open-project'])

const otherProjects = computed(() =>
  props.company?.projects.filter(p => p.id !== props.project?.id) ?? []
)
</script>

<style scoped>
.modal-back        { background: none; border: none; font-family: var(--mono); font-size: 0.62rem; color: var(--c, var(--accent)); cursor: pointer; margin-bottom: 1.2rem; display: block; padding: 0; letter-spacing: 0.08em; }
.modal-back:hover  { opacity: 0.65; }

.pm-header    { margin-bottom: 1.1rem; }
.pm-customer  { font-family: var(--mono); font-size: 0.57rem; color: var(--c); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.25rem; }
.pm-name      { font-family: var(--display); font-size: 3.2rem; line-height: 0.95; color: var(--text); margin-bottom: 0.7rem; }
.pm-desc      { font-size: 0.84rem; color: var(--dim); line-height: 1.75; max-width: 680px; }

.pm-outcome-banner  { display: flex; align-items: center; gap: 1rem; background: var(--surface); border: 1px solid var(--border); border-left: 3px solid #4eff9a; padding: 0.8rem 1.1rem; margin-bottom: 1.4rem; }
.pm-outcome-icon    { font-family: var(--mono); font-size: 1rem; color: #4eff9a; flex-shrink: 0; }
.pm-outcome-label   { font-family: var(--mono); font-size: 0.51rem; letter-spacing: 0.15em; color: #4eff9a; margin-bottom: 0.15rem; }
.pm-outcome-text    { font-size: 0.84rem; color: var(--text); font-weight: 500; }

.pm-body          { display: grid; grid-template-columns: 1fr 1.5fr; gap: 1.5rem; margin-bottom: 1.4rem; }
.pm-section-label { font-family: var(--mono); font-size: 0.57rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--c); margin-bottom: 0.7rem; }
.pm-tech-grid     { display: flex; flex-direction: column; gap: 0.28rem; }
.pm-tech-item     { display: flex; align-items: center; gap: 0.5rem; font-family: var(--mono); font-size: 0.67rem; color: var(--dim); }
.pm-tech-dot      { width: 5px; height: 5px; background: var(--c); border-radius: 50%; flex-shrink: 0; }
.pm-bullets       { display: flex; flex-direction: column; gap: 0.45rem; }
.pm-bullet        { display: flex; gap: 0.55rem; font-size: 0.77rem; color: var(--dim); line-height: 1.6; }
.pm-b-arrow       { color: var(--c); flex-shrink: 0; font-size: 0.71rem; padding-top: 2px; }

.pm-other         { border-top: 1px solid var(--border); padding-top: 1rem; }
.pm-other-list    { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.55rem; }
.pm-other-btn     { font-family: var(--mono); font-size: 0.62rem; background: none; border: 1px solid var(--border); color: var(--dim); padding: 5px 11px; cursor: pointer; transition: all 0.15s; }
.pm-other-btn:hover { border-color: var(--c); color: var(--c); }

@media (max-width: 768px) { .pm-body { grid-template-columns: 1fr; } }
</style>
