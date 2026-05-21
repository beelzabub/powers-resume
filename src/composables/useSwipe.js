export function useSwipe({ onLeft, onRight, threshold = 50 }) {
  let startX = 0
  let startY = 0

  function touchStart(e) {
    startX = e.touches[0].clientX
    startY = e.touches[0].clientY
  }

  function touchEnd(e) {
    const dx = e.changedTouches[0].clientX - startX
    const dy = e.changedTouches[0].clientY - startY
    // Don't fire if swipe is too short or more vertical than horizontal
    if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy)) return
    if (dx < 0) onLeft?.()
    else onRight?.()
  }

  return { touchStart, touchEnd }
}
