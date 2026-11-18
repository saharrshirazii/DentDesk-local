// Simple flat illustrations drawn in SVG, so the page needs no image files.

type ArtName =
  | 'ledger'
  | 'sync'
  | 'report'
  | 'coins'
  | 'chart'
  | 'invoice'
  | 'megaphone'

const brand = 'var(--color-brand)'
const mint = 'var(--color-mint)'
const sun = 'var(--color-sun)'
const sunSoft = 'var(--color-sun-soft)'
const ink = 'var(--color-ink)'

export function Art({ name, className }: { name: ArtName; className?: string }) {
  return (
    <svg
      viewBox="0 0 240 180"
      className={className}
      role="img"
      aria-hidden="true"
      fill="none"
    >
      {name === 'ledger' && (
        <g>
          <rect x="20" y="20" width="200" height="140" rx="18" fill={mint} />
          <rect x="44" y="40" width="152" height="100" rx="12" fill="#fff" />
          <rect x="60" y="58" width="60" height="8" rx="4" fill={ink} opacity=".8" />
          <rect x="60" y="78" width="110" height="6" rx="3" fill={ink} opacity=".15" />
          <rect x="60" y="92" width="96" height="6" rx="3" fill={ink} opacity=".15" />
          <rect x="60" y="106" width="104" height="6" rx="3" fill={ink} opacity=".15" />
          <circle cx="176" cy="116" r="22" fill={sun} />
          <path d="M166 116l7 7 13-14" stroke={ink} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}
      {name === 'sync' && (
        <g>
          <rect x="20" y="20" width="200" height="140" rx="18" fill={sunSoft} />
          <rect x="36" y="56" width="68" height="68" rx="14" fill="#fff" />
          <rect x="136" y="56" width="68" height="68" rx="14" fill={brand} />
          <rect x="48" y="72" width="44" height="6" rx="3" fill={ink} opacity=".25" />
          <rect x="48" y="86" width="32" height="6" rx="3" fill={ink} opacity=".25" />
          <rect x="48" y="100" width="40" height="6" rx="3" fill={ink} opacity=".25" />
          <rect x="148" y="72" width="44" height="6" rx="3" fill="#fff" opacity=".8" />
          <rect x="148" y="86" width="32" height="6" rx="3" fill="#fff" opacity=".8" />
          <rect x="148" y="100" width="40" height="6" rx="3" fill="#fff" opacity=".8" />
          <path d="M110 84h20m0 0l-7-7m7 7l-7 7" stroke={ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M130 100h-20m0 0l7-7m-7 7l7 7" stroke={ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity=".4" />
        </g>
      )}
      {name === 'report' && (
        <g>
          <rect x="20" y="20" width="200" height="140" rx="18" fill={mint} />
          <rect x="44" y="40" width="152" height="100" rx="12" fill="#fff" />
          <rect x="62" y="96" width="20" height="30" rx="4" fill={brand} opacity=".35" />
          <rect x="94" y="78" width="20" height="48" rx="4" fill={brand} opacity=".6" />
          <rect x="126" y="62" width="20" height="64" rx="4" fill={brand} />
          <rect x="158" y="84" width="20" height="42" rx="4" fill={sun} />
          <rect x="62" y="52" width="48" height="6" rx="3" fill={ink} opacity=".6" />
        </g>
      )}
      {name === 'coins' && (
        <g>
          <rect x="20" y="20" width="200" height="140" rx="18" fill={sunSoft} />
          <ellipse cx="120" cy="118" rx="52" ry="16" fill={sun} />
          <rect x="68" y="92" width="104" height="26" fill={sun} />
          <ellipse cx="120" cy="92" rx="52" ry="16" fill="#fbdc7f" />
          <ellipse cx="120" cy="66" rx="52" ry="16" fill={sun} />
          <rect x="68" y="66" width="104" height="26" fill={sun} />
          <ellipse cx="120" cy="66" rx="52" ry="16" fill="#fbdc7f" />
          <text x="120" y="72" textAnchor="middle" fontSize="18" fontWeight="700" fill={ink}>kr</text>
        </g>
      )}
      {name === 'chart' && (
        <g>
          <rect x="20" y="20" width="200" height="140" rx="18" fill={mint} />
          <path d="M44 124l36-30 30 18 44-48 26 14" stroke={brand} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="80" cy="94" r="7" fill="#fff" stroke={brand} strokeWidth="4" />
          <circle cx="110" cy="112" r="7" fill="#fff" stroke={brand} strokeWidth="4" />
          <circle cx="154" cy="64" r="7" fill="#fff" stroke={brand} strokeWidth="4" />
          <circle cx="180" cy="78" r="7" fill={sun} stroke={brand} strokeWidth="4" />
        </g>
      )}
      {name === 'invoice' && (
        <g>
          <rect x="20" y="20" width="200" height="140" rx="18" fill={sunSoft} />
          <path d="M80 36h60l24 24v84a6 6 0 01-6 6H80a6 6 0 01-6-6V42a6 6 0 016-6z" fill="#fff" />
          <path d="M140 36v18a6 6 0 006 6h18" fill={sun} />
          <rect x="88" y="78" width="60" height="6" rx="3" fill={ink} opacity=".2" />
          <rect x="88" y="92" width="48" height="6" rx="3" fill={ink} opacity=".2" />
          <rect x="88" y="112" width="30" height="10" rx="5" fill={brand} />
        </g>
      )}
      {name === 'megaphone' && (
        <g>
          <rect x="20" y="20" width="200" height="140" rx="18" fill={mint} />
          <path d="M70 84l72-32v76L70 96z" fill={brand} />
          <rect x="52" y="82" width="26" height="16" rx="6" fill={sun} />
          <path d="M84 100l8 26h14l-6-24" fill={sun} />
          <path d="M160 74c10 6 10 26 0 32" stroke={ink} strokeWidth="5" strokeLinecap="round" />
          <path d="M174 62c18 14 18 42 0 56" stroke={ink} strokeWidth="5" strokeLinecap="round" opacity=".4" />
        </g>
      )}
    </svg>
  )
}
