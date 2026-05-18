<template>
  <Transition name="modal">
    <div v-if="open" class="modal-overlay" @click.self="$emit('close')">
      <div class="car-modal" :style="{ '--c': items[idx].color }">
        <button class="modal-close" @click="$emit('close')">✕</button>
        <button class="car-modal-arrow car-modal-prev" @click="$emit('prev')">‹</button>
        <button class="car-modal-arrow car-modal-next" @click="$emit('next')">›</button>

        <div class="car-modal-track">
          <Transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
            <div :key="idx" class="car-modal-slide">
                <div class="car-modal-topbar">
                  <span class="car-modal-eyebrow">{{ ['GRADUATE','UNDERGRAD'].includes(items[idx].badge) ? 'Education' : 'Certification' }}</span>
                  <span class="car-modal-counter">{{ idx + 1 }} / {{ items.length }}</span>
                </div>
              <div class="car-modal-header">
                <div class="car-modal-icon">{{ items[idx].icon }}</div>
                <div>
                  <div class="car-modal-badge">{{ items[idx].badge }}</div>
                  <div class="car-modal-name">{{ items[idx].name }}</div>
                  <div class="car-modal-issuer">{{ items[idx].issuer }} · {{ items[idx].date }}</div>
                </div>
              </div>
              <p class="car-modal-why">{{ items[idx].why }}</p>
              <div class="car-modal-tags">
                <span v-for="t in items[idx].tags" :key="t" class="cred-tag">{{ t }}</span>
              </div>
              <a
                v-if="items[idx].verify"
                :href="items[idx].verify"
                target="_blank" rel="noopener"
                class="car-verify-link"
              >✓ Verify Credential →</a>
            </div>
          </Transition>
        </div>

        <div class="car-dots">
          <button
            v-for="(item, i) in items"
            :key="i"
            class="car-dot"
            :class="{ active: i === idx }"
            :style="{ '--c': item.color }"
            @click="$emit('jump', i)"
          ></button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({ open: Boolean, items: Array, idx: Number, direction: String })
defineEmits(['close', 'prev', 'next', 'jump'])
</script>

<style scoped>
.car-modal {
  background: linear-gradient(160deg, var(--surf2) 0%, var(--bg2) 60%);
  border: 1px solid var(--border);
  border-top: 3px solid var(--c, var(--accent));
  border-radius: 12px;
  width: 100%; max-width: 680px;
  padding: 2.5rem 4rem;
  position: relative; min-height: 320px;
  display: flex; flex-direction: column; gap: 1.5rem;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.04) inset,
    0 2px 0 rgba(255,255,255,0.06) inset,
    0 40px 80px rgba(0,0,0,0.6),
    0 0 60px rgba(0,0,0,0.4),
    0 0 120px color-mix(in srgb, var(--c, #00c8f0) 12%, transparent);
}
.car-modal-topbar  { display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.6rem; border-bottom: 1px solid var(--border); margin-bottom: 0.2rem; }
.car-modal-eyebrow { font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--c); }
.car-modal-counter { font-family: var(--mono); font-size: 0.55rem; letter-spacing: 0.15em; color: var(--muted); }
.car-modal-arrow {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 38px; height: 38px; border-radius: 50%;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  color: var(--dim); font-size: 1.5rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s; z-index: 2; line-height: 1;
  backdrop-filter: blur(4px); box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.car-modal-arrow:hover { background: var(--c); border-color: var(--c); color: var(--bg); box-shadow: 0 0 16px color-mix(in srgb, var(--c) 40%, transparent); transform: translateY(-50%) scale(1.08); }
.car-modal-prev { left: 0.75rem; }
.car-modal-next { right: 0.75rem; }

.car-modal-track   { flex: 1; overflow: hidden; }
.car-modal-slide   { display: flex; flex-direction: column; gap: 1.2rem; }
.car-modal-header  { display: flex; align-items: flex-start; gap: 1.2rem; }
.car-modal-icon    { font-size: 2.5rem; flex-shrink: 0; }
.car-modal-badge   { font-family: var(--mono); font-size: 0.58rem; letter-spacing: 0.15em; color: var(--c); border: 1px solid var(--c); padding: 2px 8px; display: inline-block; margin-bottom: 0.35rem; }
.car-modal-name    { font-family: var(--display); font-size: 2.2rem; line-height: 1; color: var(--text); margin-bottom: 0.2rem; }
.car-modal-issuer  { font-family: var(--mono); font-size: 0.62rem; color: var(--dim); }
.car-modal-why     { font-size: 0.85rem; color: var(--dim); line-height: 1.75; }
.car-modal-tags    { display: flex; flex-wrap: wrap; gap: 0.4rem; }

.car-dots   { display: flex; justify-content: center; gap: 0.55rem; }
.car-dot    { width: 7px; height: 7px; border-radius: 50%; border: 1px solid var(--dim); background: transparent; cursor: pointer; padding: 0; transition: all 0.2s; }
.car-dot.active { background: var(--c); border-color: var(--c); transform: scale(1.35); }

.car-verify-link { font-family: var(--mono); font-size: 0.65rem; letter-spacing: 0.08em; color: #4eff9a; align-self: flex-start; padding: 5px 10px; border: 1px solid rgba(78,255,154,0.3); border-radius: 3px; transition: all 0.15s; margin-top: 0.2rem; }
.car-verify-link:hover { background: rgba(78,255,154,0.1); border-color: #4eff9a; }
</style>
