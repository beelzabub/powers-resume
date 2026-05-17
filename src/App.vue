<template>
  <div id="app">
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Barlow+Condensed:wght@300;400;600;700;900&family=Barlow:wght@300;400;500&display=swap');

:root {
  --bg: #050a0f;
  --bg2: #080e15;
  --bg3: #0d1a24;
  --surface: #0f1f2d;
  --surface2: #162840;
  --border: #1e3a52;
  --accent: #00d4ff;
  --accent2: #ff6b35;
  --accent3: #a8ff3e;
  --text: #e8f4fd;
  --text-dim: #6a8fa8;
  --text-muted: #3d5a70;
  --mono: 'Space Mono', monospace;
  --display: 'Barlow Condensed', sans-serif;
  --body: 'Barlow', sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--body);
  font-weight: 300;
  line-height: 1.6;
  overflow-x: hidden;
}

a { color: var(--accent); text-decoration: none; }
a:hover { color: var(--text); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }

.tag {
  display: inline-block;
  font-family: var(--mono);
  font-size: 0.65rem;
  padding: 2px 8px;
  border: 1px solid var(--border);
  border-radius: 2px;
  color: var(--text-dim);
  background: var(--surface);
  letter-spacing: 0.05em;
}

.section-label {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.btn {
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  padding: 10px 24px;
  border: 1px solid var(--accent);
  background: transparent;
  color: var(--accent);
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
}
.btn:hover { background: var(--accent); color: var(--bg); }
.btn-solid { background: var(--accent); color: var(--bg); }
.btn-solid:hover { background: transparent; color: var(--accent); }
</style>
