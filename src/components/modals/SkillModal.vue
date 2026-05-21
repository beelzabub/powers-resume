<template>
  <Transition name="modal">
    <div v-if="skill" class="modal-overlay" @click.self="$emit('close')">
      <div class="skill-modal" @touchstart.passive="touchStart" @touchend.passive="touchEnd">
        <button class="modal-close" @click="$emit('close')">✕</button>
        <button class="skill-nav-arrow skill-nav-prev" @click="$emit('prev')">‹</button>
        <button class="skill-nav-arrow skill-nav-next" @click="$emit('next')">›</button>

        <Transition name="slide-left" mode="out-in">
          <div :key="skill.name" class="skill-modal-inner">
            <div class="skill-modal-topbar">
              <span class="skill-modal-eyebrow">Technical Skill</span>
              <span class="skill-modal-counter">{{ idx + 1 }} / {{ total }}</span>
            </div>
            <div class="skill-modal-name">{{ skill.name }}</div>
            <p class="skill-modal-desc">{{ skill.desc }}</p>
            <div class="skill-modal-section">
              <div class="skill-modal-label">Companies</div>
              <div class="skill-modal-chips">
                <span v-for="c in skill.companies" :key="c" class="skill-chip company">{{ c }}</span>
              </div>
            </div>
            <div class="skill-modal-section">
              <div class="skill-modal-label">Projects</div>
              <div class="skill-modal-chips">
                <span v-for="p in skill.projects" :key="p" class="skill-chip project">{{ p }}</span>
              </div>
            </div>
            <a v-if="skill.link" :href="skill.link" target="_blank" rel="noopener" class="skill-modal-link">Learn more →</a>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useSwipe } from '../../composables/useSwipe.js'

defineProps({ skill: Object, idx: Number, total: Number })
const emit = defineEmits(['close', 'prev', 'next'])

const { touchStart, touchEnd } = useSwipe({
  onLeft:  () => emit('next'),
  onRight: () => emit('prev'),
})
</script>

<style scoped>
.skill-modal {
  background: linear-gradient(160deg, var(--surf2) 0%, var(--bg2) 60%);
  border: 1px solid var(--border);
  border-top: 3px solid var(--accent);
  border-radius: 12px;
  width: 100%; max-width: 520px;
  padding: 2rem 3.5rem 1.8rem;
  position: relative;
  display: flex; flex-direction: column; gap: 1.2rem;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.04) inset,
    0 2px 0 rgba(255,255,255,0.06) inset,
    0 40px 80px rgba(0,0,0,0.6),
    0 0 80px rgba(0,200,240,0.08);
  overflow: hidden;
}
.skill-modal-inner   { display: flex; flex-direction: column; gap: 1.2rem; }
.skill-modal-topbar  { display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.6rem; border-bottom: 1px solid var(--border); margin-bottom: 0.2rem; }
.skill-modal-eyebrow { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
.skill-modal-counter { font-family: var(--mono); font-size: 0.55rem; letter-spacing: 0.15em; color: var(--muted); }
.skill-modal-name    { font-family: var(--display); font-size: 2.4rem; line-height: 1; color: var(--text); padding-right: 2rem; }
.skill-modal-desc    { font-size: 0.84rem; color: var(--dim); line-height: 1.75; }
.skill-modal-section { display: flex; flex-direction: column; gap: 0.5rem; }
.skill-modal-label   { font-family: var(--mono); font-size: 0.57rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); }
.skill-modal-chips   { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.skill-modal-link    { font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.08em; color: var(--accent); align-self: flex-start; padding: 5px 0; border-bottom: 1px solid transparent; transition: border-color 0.15s; }
.skill-modal-link:hover { border-bottom-color: var(--accent); }

.skill-nav-arrow {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 34px; height: 34px; border-radius: 50%;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  color: var(--dim); font-size: 1.4rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s; z-index: 2; line-height: 1;
  backdrop-filter: blur(4px);
}
.skill-nav-arrow:hover  { background: var(--accent); border-color: var(--accent); color: var(--bg); box-shadow: 0 0 14px rgba(0,200,240,0.4); transform: translateY(-50%) scale(1.08); }
.skill-nav-arrow:active { background: var(--accent); border-color: var(--accent); color: var(--bg); }
.skill-nav-prev { left: 0.6rem; }
.skill-nav-next { right: 0.6rem; }

@media (max-width: 768px) {
  .skill-modal { padding: 2rem 3rem 1.8rem; }
  .skill-nav-arrow { width: 40px; height: 40px; font-size: 1.6rem; }
}
</style>
