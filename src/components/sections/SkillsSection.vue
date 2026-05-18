<template>
  <section class="content-section">
    <div class="section-header">
      <span class="section-eyebrow">Expertise</span>
      <h2 class="section-title">Skills</h2>
    </div>
    <div class="skills-layout">
      <div v-for="group in skillGroups" :key="group.title" class="skill-group">
        <div class="sg-title">{{ group.title }}</div>
        <div class="sg-tags">
          <button
            v-for="s in group.items"
            :key="s.name"
            class="sg-tag"
            @click="$emit('open-skill', s)"
          >{{ s.name }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skillGroups } from '../../data/resume.js'
defineEmits(['open-skill'])
</script>

<style scoped>
.content-section { display: flex; flex-direction: column; gap: 0.9rem; }
.section-header  { display: flex; align-items: baseline; gap: 1rem; }
.section-eyebrow { font-family: var(--mono); font-size: 0.58rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
.section-title   { font-family: var(--display); font-size: 2.6rem; line-height: 1; color: var(--text); }

.skills-layout { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 0.9rem; }
.skill-group   { background: var(--surface); border: 1px solid var(--border); padding: 1rem; }
.sg-title      { font-family: var(--mono); font-size: 0.57rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.7rem; padding-bottom: 0.4rem; border-bottom: 1px solid var(--border); }
.sg-tags       { display: flex; flex-wrap: wrap; gap: 0.3rem; }
.sg-tag        { font-family: var(--mono); font-size: 0.59rem; padding: 3px 8px; background: var(--bg); border: 1px solid var(--border); color: var(--dim); border-radius: 2px; cursor: pointer; transition: all 0.15s; }
.sg-tag:hover  { border-color: var(--accent); color: var(--accent); background: rgba(0,200,240,0.06); }
</style>
