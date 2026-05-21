<template>
  <div id="app">
    <CompanyModal
      :company="activeCompany"
      :project="activeProject"
      :idx="activeCompanyIdx"
      :total="experience.length"
      :direction="companyDirection"
      @close="closeCompany"
      @open-project="openProject"
      @prev="companyPrev"
      @next="companyNext"
    />
    <ProjectModal
      :project="activeProject"
      :company="activeCompany"
      :direction="projectDirection"
      :global-idx="activeProjectGlobalIdx"
      :total-projects="allProjects.length"
      @close="closeProject"
      @prev="projectPrev"
      @next="projectNext"
    />
    <SkillModal
      :skill="activeSkill"
      :idx="activeSkillIdx"
      :total="allSkills.length"
      @close="activeSkill = null"
      @prev="skillPrev"
      @next="skillNext"
    />
    <CredCarousel
      :open="carOpen"
      :items="credsAndEdu"
      :idx="carIdx"
      :direction="carDirection"
      @close="carOpen = false"
      @prev="carPrev(credsAndEdu.length)"
      @next="carNext(credsAndEdu.length)"
      @jump="jumpTo"
    />

    <div class="page">
      <LeftPanel />
      <main class="panel-right">
        <ExperienceSection  @open-company="openCompany" />
        <SkillsSection      @open-skill="openSkill" />
        <CredentialsSection @open-carousel="openCarousel" />
      </main>
    </div>
  </div>
</template>

<script setup>
import LeftPanel          from './components/layout/LeftPanel.vue'
import ExperienceSection  from './components/sections/ExperienceSection.vue'
import SkillsSection      from './components/sections/SkillsSection.vue'
import CredentialsSection from './components/sections/CredentialsSection.vue'
import CompanyModal       from './components/modals/CompanyModal.vue'
import ProjectModal       from './components/modals/ProjectModal.vue'
import SkillModal         from './components/modals/SkillModal.vue'
import CredCarousel       from './components/modals/CredCarousel.vue'

import { credsAndEdu } from './data/resume.js'
import { useModals }   from './composables/useModals.js'

const {
  activeCompany, activeCompanyIdx, companyDirection,
  activeProject, activeProjectGlobalIdx, projectDirection,
  activeSkill, activeSkillIdx,
  carOpen, carIdx, carDirection,
  allSkills, allProjects, experience,
  openCompany, closeCompany, companyPrev, companyNext,
  openProject, closeProject, projectPrev, projectNext,
  openSkill, skillPrev, skillNext,
  openCarousel, carPrev, carNext, jumpTo,
} = useModals()
</script>

<style>
@import './assets/main.css';

.page        { display: flex; height: 100vh; overflow: hidden; }
.panel-right { flex: 1; overflow-y: auto; padding: 2rem 2rem 2rem 2.5rem; display: flex; flex-direction: column; gap: 2.5rem; }
.panel-right::-webkit-scrollbar       { width: 3px; }
.panel-right::-webkit-scrollbar-thumb { background: var(--border); }


@media (max-width: 768px) {
  .page        { flex-direction: column; height: auto; }
  .panel-right { padding: 1.5rem; }
}
</style>
