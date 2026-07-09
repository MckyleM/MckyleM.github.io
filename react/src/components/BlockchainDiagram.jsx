// Inline SVG diagram for the Smallpenny card: three chained blocks,
// each hash feeding the next block's prev field.
export default function BlockchainDiagram() {
  const blocks = [
    { x: 10, n: '#01', prev: '0000…', hash: 'a3f9…' },
    { x: 210, n: '#02', prev: 'a3f9…', hash: '7c2e…' },
    { x: 410, n: '#03', prev: '7c2e…', hash: 'f04b…' },
  ]
  return (
    <svg
      className="blockchain-diagram"
      viewBox="0 0 560 170"
      role="img"
      aria-label="Three chained blocks, each block's hash becoming the next block's previous-hash"
    >
      {blocks.map((b, i) => (
        <g key={b.n} transform={`translate(${b.x}, 20)`}>
          <rect className="bc-block" x="0" y="0" width="140" height="130" rx="10" />
          <text className="bc-num" x="14" y="26">block {b.n}</text>
          <line className="bc-line" x1="0" y1="38" x2="140" y2="38" />
          <text className="bc-field" x="14" y="60">prev: <tspan className="bc-val">{b.prev}</tspan></text>
          <text className="bc-field" x="14" y="84">data: <tspan className="bc-val">tx[…]</tspan></text>
          <text className="bc-field" x="14" y="108">nonce ⛏</text>
          <text className="bc-hash" x="14" y="126">{b.hash}</text>
          {i < blocks.length - 1 && (
            <g>
              <line className="bc-arrow" x1="140" y1="65" x2="200" y2="65" />
              <polygon className="bc-arrowhead" points="200,65 191,60 191,70" />
            </g>
          )}
        </g>
      ))}
    </svg>
  )
}
