import { useRef, useState, useCallback } from 'react'
import './ImageCompare.css'

export default function ImageCompare({ before, after }) {
  const ref = useRef(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const move = useCallback((clientX) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const p = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, p)))
  }, [])

  const onDown = (e) => {
    dragging.current = true
    e.stopPropagation()
    move(e.touches ? e.touches[0].clientX : e.clientX)
  }
  const onMove = (e) => {
    if (!dragging.current) return
    move(e.touches ? e.touches[0].clientX : e.clientX)
  }
  const stop = () => { dragging.current = false }

  return (
    <div
      ref={ref}
      className="cmp"
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={stop}
      onMouseLeave={stop}
      onTouchStart={onDown}
      onTouchMove={onMove}
      onTouchEnd={stop}
    >
      <img className="cmp-img" src={after} alt="Edited" draggable="false" />
      <img
        className="cmp-img cmp-before"
        src={before}
        alt="Original"
        draggable="false"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span className="cmp-label">before</span>
      <span className="cmp-label right">after</span>
      <div className="cmp-handle" style={{ left: `${pos}%` }}>
        <span className="cmp-grip">‹ ›</span>
      </div>
    </div>
  )
}
