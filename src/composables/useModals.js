import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
import { skillGroups } from '../data/resume.js'

const allSkills = skillGroups.flatMap(g => g.items)

export function useModals() {
  const activeCompany  = ref(null)
  const activeProject  = ref(null)
  const activeSkill    = ref(null)
  const activeSkillIdx = ref(0)
  const carOpen        = ref(false)
  const carIdx         = ref(0)
  const carDirection   = ref('next')

  // ── Company / Project ────────────────────────
  function openCompany(job) { activeCompany.value = job; activeProject.value = null }
  function closeCompany()   { activeCompany.value = null; activeProject.value = null }
  function openProject(p)   { activeProject.value = p }
  function closeProject()   { activeProject.value = null }

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
  function openCarousel(i)  { carIdx.value = i; carOpen.value = true }
  function carPrev(len)     { carDirection.value = 'prev'; carIdx.value = (carIdx.value - 1 + len) % len }
  function carNext(len)     { carDirection.value = 'next'; carIdx.value = (carIdx.value + 1) % len }
  function jumpTo(i)        { carDirection.value = i > carIdx.value ? 'next' : 'prev'; carIdx.value = i }

  // ── Keyboard ─────────────────────────────────
  function handleKey(e) {
    if (e.key === 'Escape') {
      if (activeProject.value)  { activeProject.value = null;  return }
      if (activeSkill.value)    { activeSkill.value = null;    return }
      if (carOpen.value)        { carOpen.value = false;       return }
      if (activeCompany.value)  { activeCompany.value = null;  return }
    }
    if (activeSkill.value) {
      if (e.key === 'ArrowLeft')  { skillPrev(); return }
      if (e.key === 'ArrowRight') { skillNext(); return }
    }
  }

  onMounted(()   => window.addEventListener('keydown', handleKey))
  onUnmounted(() => window.removeEventListener('keydown', handleKey))

  return {
    activeCompany, activeProject, activeSkill, activeSkillIdx,
    carOpen, carIdx, carDirection, allSkills,
    openCompany, closeCompany, openProject, closeProject,
    openSkill, skillPrev, skillNext,
    openCarousel, carPrev, carNext, jumpTo,
  }
}
