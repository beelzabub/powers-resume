import { ref, computed, onMounted, onUnmounted } from 'vue'
import { skillGroups, experience } from '../data/resume.js'

const allSkills   = skillGroups.flatMap(g => g.items)

// Flat list of all projects with their parent company attached
const allProjects = experience.flatMap(company =>
  company.projects.map(p => ({ ...p, _company: company }))
)

export function useModals() {
  const activeCompanyIdx = ref(0)
  const activeCompany    = ref(null)
  const activeProject    = ref(null)
  const companyDirection = ref('next')
  const projectDirection = ref('next')

  const activeSkill    = ref(null)
  const activeSkillIdx = ref(0)

  const carOpen      = ref(false)
  const carIdx       = ref(0)
  const carDirection = ref('next')

  // ── Company navigation ───────────────────────
  function openCompany(job) {
    activeCompanyIdx.value = experience.findIndex(e => e.id === job.id)
    activeCompany.value    = job
    activeProject.value    = null
  }
  function closeCompany() { activeCompany.value = null; activeProject.value = null }

  function companyPrev() {
    if (!activeCompany.value) return
    companyDirection.value = 'prev'
    const idx = (activeCompanyIdx.value - 1 + experience.length) % experience.length
    activeCompanyIdx.value = idx
    activeCompany.value    = experience[idx]
    activeProject.value    = null
  }
  function companyNext() {
    if (!activeCompany.value) return
    companyDirection.value = 'next'
    const idx = (activeCompanyIdx.value + 1) % experience.length
    activeCompanyIdx.value = idx
    activeCompany.value    = experience[idx]
    activeProject.value    = null
  }

  // ── Project navigation ───────────────────────
  const activeProjectGlobalIdx = computed(() => {
    if (!activeProject.value) return -1
    return allProjects.findIndex(p => p.id === activeProject.value.id && p._company.id === activeCompany.value?.id)
  })

  function openProject(p) { activeProject.value = p }
  function closeProject()  { activeProject.value = null }

  function projectPrev() {
    if (!activeProject.value) return
    projectDirection.value = 'prev'
    const idx     = (activeProjectGlobalIdx.value - 1 + allProjects.length) % allProjects.length
    const entry   = allProjects[idx]
    activeCompany.value = entry._company
    activeCompanyIdx.value = experience.findIndex(e => e.id === entry._company.id)
    activeProject.value = entry
  }
  function projectNext() {
    if (!activeProject.value) return
    projectDirection.value = 'next'
    const idx     = (activeProjectGlobalIdx.value + 1) % allProjects.length
    const entry   = allProjects[idx]
    activeCompany.value = entry._company
    activeCompanyIdx.value = experience.findIndex(e => e.id === entry._company.id)
    activeProject.value = entry
  }

  // ── Skills ───────────────────────────────────
  function openSkill(s) {
    activeSkill.value    = s
    activeSkillIdx.value = allSkills.findIndex(sk => sk.name === s.name)
  }
  function skillPrev() {
    const idx = (activeSkillIdx.value - 1 + allSkills.length) % allSkills.length
    activeSkillIdx.value = idx
    activeSkill.value    = allSkills[idx]
  }
  function skillNext() {
    const idx = (activeSkillIdx.value + 1) % allSkills.length
    activeSkillIdx.value = idx
    activeSkill.value    = allSkills[idx]
  }

  // ── Credential Carousel ──────────────────────
  function openCarousel(i) { carIdx.value = i; carOpen.value = true }
  function carPrev(len)    { carDirection.value = 'prev'; carIdx.value = (carIdx.value - 1 + len) % len }
  function carNext(len)    { carDirection.value = 'next'; carIdx.value = (carIdx.value + 1) % len }
  function jumpTo(i)       { carDirection.value = i > carIdx.value ? 'next' : 'prev'; carIdx.value = i }

  // ── Keyboard ─────────────────────────────────
  function handleKey(e) {
    if (e.key === 'Escape') {
      if (activeProject.value) { activeProject.value = null; return }
      if (activeSkill.value)   { activeSkill.value = null;   return }
      if (carOpen.value)       { carOpen.value = false;      return }
      if (activeCompany.value) { activeCompany.value = null; return }
    }
    if (activeProject.value) {
      if (e.key === 'ArrowLeft')  { projectPrev(); return }
      if (e.key === 'ArrowRight') { projectNext(); return }
    } else if (activeCompany.value) {
      if (e.key === 'ArrowLeft')  { companyPrev(); return }
      if (e.key === 'ArrowRight') { companyNext(); return }
    }
    if (activeSkill.value) {
      if (e.key === 'ArrowLeft')  { skillPrev(); return }
      if (e.key === 'ArrowRight') { skillNext(); return }
    }
  }

  onMounted(()   => window.addEventListener('keydown', handleKey))
  onUnmounted(() => window.removeEventListener('keydown', handleKey))

  return {
    activeCompany, activeCompanyIdx, companyDirection,
    activeProject, activeProjectGlobalIdx, projectDirection,
    activeSkill, activeSkillIdx,
    carOpen, carIdx, carDirection, allSkills,
    allProjects, experience,
    openCompany, closeCompany, companyPrev, companyNext,
    openProject, closeProject, projectPrev, projectNext,
    openSkill, skillPrev, skillNext,
    openCarousel, carPrev, carNext, jumpTo,
  }
}
