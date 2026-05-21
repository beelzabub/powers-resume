<template>
  <Transition name="modal">
    <div v-if="project" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-shell">
        <button class="nav-arrow nav-prev" @click="$emit('prev')">‹</button>
        <button class="nav-arrow nav-next" @click="$emit('next')">›</button>

        <div class="modal" :style="{ '--c': company?.color }"
             @touchstart.passive="touchStart" @touchend.passive="touchEnd">
          <button class="modal-close" @click="$emit('close')">✕</button>

          <Transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
            <div :key="project.id" class="modal-inner">

              <div class="pm-topbar">
                <div class="pm-topbar-left">
                  <span class="modal-eyebrow">Project</span>
                  <button class="modal-back" @click="$emit('close')">← {{ company?.company }}</button>
                </div>
                <div class="pm-counter">{{ globalIdx + 1 }} / {{ totalProjects }}</div>
              </div>

              <div class="pm-header">
                <div class="pm-customer">{{ project.customer }}</div>
                <h2 class="pm-name"><span v-if="project.icon" class="pm-icon">{{ project.icon }}</span>{{ project.name }}</h2>
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

            </div>
          </Transition>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useSwipe } from '../../composables/useSwipe.js'

defineProps({
  project: Object,
  company: Object,
  direction: String,
  globalIdx: Number,
  totalProjects: Number,
})
const emit = defineEmits(['close', 'prev', 'next'])

const { touchStart, touchEnd } = useSwipe({
  onLeft:  () => emit('next'),
  onRight: () => emit('prev'),
})
</script>

<style scoped>
.modal-shell {
  position: relative;
  width: 100%;
  max-width: 880px;
}

.modal-inner  { display: flex; flex-direction: column; }

.pm-topbar      { display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.6rem; border-bottom: 1px solid var(--border); margin-bottom: 1.2rem; }
.pm-topbar-left { display: flex; flex-direction: column; gap: 0.3rem; }
.modal-eyebrow  { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
.modal-back   { background: none; border: none; font-family: var(--mono); font-size: 0.62rem; color: var(--c, var(--accent)); cursor: pointer; padding: 0; letter-spacing: 0.08em; transition: opacity 0.15s; }
.modal-back:hover { opacity: 0.65; }
.pm-counter   { font-family: var(--mono); font-size: 0.55rem; letter-spacing: 0.15em; color: var(--muted); }

.pm-header    { margin-bottom: 1.1rem; }
.pm-customer  { font-family: var(--mono); font-size: 0.57rem; color: var(--dim); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.25rem; }
.pm-name      { font-family: var(--display); font-size: 3.2rem; line-height: 0.95; color: var(--text); margin-bottom: 0.7rem; display: flex; align-items: center; gap: 0.5rem; }
.pm-icon      { font-size: 2rem; line-height: 1; }
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

.nav-arrow {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 34px; height: 34px; border-radius: 50%;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  color: var(--dim); font-size: 1.4rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s; z-index: 10; line-height: 1;
  backdrop-filter: blur(4px);
}
.nav-arrow:hover  { background: var(--c); border-color: var(--c); color: var(--bg); box-shadow: 0 0 14px color-mix(in srgb, var(--c) 40%, transparent); transform: translateY(-50%) scale(1.08); }
.nav-arrow:active { background: var(--c); border-color: var(--c); color: var(--bg); }
.nav-prev { left: -48px; }
.nav-next { right: -48px; }

@media (max-width: 980px) {
  .nav-prev { left: 0.4rem; }
  .nav-next { right: 0.4rem; }
}

@media (max-width: 768px) {
  .pm-body { grid-template-columns: 1fr; }
  .pm-name { font-size: 2.2rem; }
  .nav-arrow { width: 40px; height: 40px; font-size: 1.6rem; }
}
</style>
