<template>
  <Transition name="modal">
    <div v-if="company && !project" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal" :style="{ '--c': company.color }">
        <button class="modal-close" @click="$emit('close')">✕</button>
        <button class="nav-arrow nav-prev" @click="$emit('prev')">‹</button>
        <button class="nav-arrow nav-next" @click="$emit('next')">›</button>

        <Transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
          <div :key="company.id" class="modal-inner">

            <div class="modal-topbar">
              <span class="modal-eyebrow">Company</span>
              <span class="modal-counter">{{ idx + 1 }} / {{ total }}</span>
            </div>

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
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({ company: Object, project: Object, idx: Number, total: Number, direction: String })
defineEmits(['close', 'open-project', 'prev', 'next'])
</script>

<style scoped>
.modal-inner  { display: flex; flex-direction: column; gap: 0; }
.modal-topbar  { display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.6rem; border-bottom: 1px solid var(--border); margin-bottom: 1rem; }
.modal-eyebrow { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
.modal-counter { font-family: var(--mono); font-size: 0.55rem; letter-spacing: 0.15em; color: var(--muted); }

.nav-arrow {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 34px; height: 34px; border-radius: 50%;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  color: var(--dim); font-size: 1.4rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s; z-index: 10; line-height: 1;
  backdrop-filter: blur(4px);
}
.nav-arrow:hover { background: var(--c); border-color: var(--c); color: var(--bg); box-shadow: 0 0 14px color-mix(in srgb, var(--c) 40%, transparent); transform: translateY(-50%) scale(1.08); }
.nav-prev { left: -48px; }
.nav-next { right: -48px; }

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

@media (max-width: 768px) {
  .modal-stats { grid-template-columns: repeat(2,1fr); }
  .nav-prev { left: 0.4rem; }
  .nav-next { right: 0.4rem; }
}
</style>
