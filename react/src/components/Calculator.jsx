import { useState } from 'react'
import './Calculator.css'

export default function Calculator() {
  const [display, setDisplay] = useState('')
  const [stored, setStored] = useState(null)
  const [op, setOp] = useState(null)

  const press = (val) => setDisplay((d) => d + val)
  const clear = () => { setDisplay(''); setStored(null); setOp(null) }
  const back = () => setDisplay((d) => d.slice(0, -1))

  const chooseOp = (next) => {
    if (display === '') return
    setStored(display)
    setOp(next)
    setDisplay('')
  }

  const equals = () => {
    if (stored === null || op === null || display === '') return
    const a = Number(stored)
    const b = Number(display)
    let r = 0
    switch (op) {
      case '+': r = a + b; break
      case '−': r = a - b; break
      case '×': r = a * b; break
      case '÷': r = b === 0 ? NaN : a / b; break
      default: return
    }
    setDisplay(Number.isNaN(r) ? 'Error' : String(+r.toFixed(8)))
    setStored(null)
    setOp(null)
  }

  const keys = [
    { t: 'C', f: clear, c: 'fn' },
    { t: '←', f: back, c: 'fn' },
    { t: '÷', f: () => chooseOp('÷'), c: 'op' },
    { t: '×', f: () => chooseOp('×'), c: 'op' },
    { t: '7', f: () => press('7') }, { t: '8', f: () => press('8') }, { t: '9', f: () => press('9') },
    { t: '−', f: () => chooseOp('−'), c: 'op' },
    { t: '4', f: () => press('4') }, { t: '5', f: () => press('5') }, { t: '6', f: () => press('6') },
    { t: '+', f: () => chooseOp('+'), c: 'op' },
    { t: '1', f: () => press('1') }, { t: '2', f: () => press('2') }, { t: '3', f: () => press('3') },
    { t: '=', f: equals, c: 'eq', span: true },
    { t: '0', f: () => press('0'), span2: true }, { t: '.', f: () => press('.') },
  ]

  return (
    <div className="calc" onMouseDown={(e) => e.stopPropagation()}>
      <div className="calc-display">
        <span className="calc-op">{stored !== null ? `${stored} ${op}` : ''}</span>
        <span className="calc-num">{display || '0'}</span>
      </div>
      <div className="calc-keys">
        {keys.map((k, i) => (
          <button
            key={i}
            className={`calc-key ${k.c || 'num'} ${k.span ? 'span-row' : ''} ${k.span2 ? 'span-2' : ''}`}
            onClick={k.f}
          >
            {k.t}
          </button>
        ))}
      </div>
    </div>
  )
}
