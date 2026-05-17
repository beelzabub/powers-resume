<template>
  <nav class="navbar">
    <div class="nav-inner">
      <router-link to="/" class="nav-logo">
        <span class="logo-bracket">[</span>JP<span class="logo-bracket">]</span>
      </router-link>
      <div class="nav-links">
        <a href="#experience" @click.prevent="scrollTo('experience')">Experience</a>
        <a href="#skills" @click.prevent="scrollTo('skills')">Skills</a>
        <a href="#certifications" @click.prevent="scrollTo('certifications')">Certs</a>
        <span class="nav-clearance">TS/SCI ●</span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function scrollTo(id) {
  if (router.currentRoute.value.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
    })
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(5, 10, 15, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  font-family: var(--mono);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.05em;
}
.logo-bracket { color: var(--accent); }
.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.nav-links a { color: var(--text-dim); transition: color 0.2s; cursor: pointer; }
.nav-links a:hover { color: var(--accent); }
.nav-clearance {
  color: var(--accent3);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
}
</style>
