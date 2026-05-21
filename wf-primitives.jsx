// wireframe primitives — small reusable lo-fi pieces
// All components are presentational. Bilingual labels passed as { fr, en }.

const Bilingual = ({ fr, en, style }) => (
  <div className="wf-bilingual" style={style}>
    {fr}{en ? <span className="wf-faint"> · {en}</span> : null}
  </div>
);

const Scribble = ({ w = 80, soft = false, style }) => (
  <span
    className={"wf-scribble " + (soft ? "wf-scribble--soft " : "") + "wf-scribble--" + w}
    style={style}
  />
);

const Img = ({ label, h = 120, w, radius, style, children }) => (
  <div
    className="wf-img"
    style={{ width: w || '100%', height: h, borderRadius: radius, ...style }}
  >
    {children || (label ? <span className="wf-img__label">{label}</span> : null)}
  </div>
);

const Box = ({ children, dashed, soft, faint, ink, accent, shade, style, className = '' }) => {
  const cls = ['wf-box',
    dashed && 'wf-box--dashed',
    soft && 'wf-box--soft',
    faint && 'wf-box--faint',
    ink && 'wf-box--ink',
    accent && 'wf-box--accent',
    shade && 'wf-box--shade',
    className,
  ].filter(Boolean).join(' ');
  return <div className={cls} style={style}>{children}</div>;
};

const Btn = ({ children, solid, accent, block, ghost, style, sm }) => {
  const cls = ['wf-btn',
    solid && 'wf-btn--solid',
    accent && 'wf-btn--accent',
    block && 'wf-btn--block',
    ghost && 'wf-btn--ghost',
  ].filter(Boolean).join(' ');
  return (
    <button className={cls} style={{ fontSize: sm ? 12 : undefined, padding: sm ? '5px 10px' : undefined, ...style }} type="button">
      {children}
    </button>
  );
};

const Tab = ({ children, active, style, onClick }) => (
  <button
    type="button"
    className={"wf-tab " + (active ? "wf-tab--active" : "")}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);

const Chip = ({ children, accent, ink, style }) => (
  <span
    className={"wf-chip " + (accent ? "wf-chip--accent " : "") + (ink ? "wf-chip--ink" : "")}
    style={style}
  >
    {children}
  </span>
);

const Circle = ({ size = 36, children, style, ink }) => (
  <span
    className="wf-circle"
    style={{
      width: size, height: size, fontSize: size * 0.35,
      background: ink ? 'var(--wf-ink)' : undefined,
      color: ink ? 'var(--wf-paper)' : undefined,
      ...style,
    }}
  >
    {children}
  </span>
);

const Note = ({ children, style }) => (
  <div className="wf-note" style={style}>{children}</div>
);

// Lo-fi listing card (square photo + title + meta + price)
const ListingCard = ({ title, sub, price, badge, w = 130, photoH = 95, accent }) => (
  <div style={{ width: w, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
    <div style={{ position: 'relative' }}>
      <Img h={photoH} label="photo" />
      {badge && (
        <span style={{ position: 'absolute', top: 6, left: 6 }}>
          <Chip accent={accent} ink={!accent}>{badge}</Chip>
        </span>
      )}
      <span style={{ position: 'absolute', top: 6, right: 6, fontSize: 14 }}>♡</span>
    </div>
    <div className="wf-h" style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.1 }}>{title}</div>
    {sub && <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>{sub}</div>}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 2 }}>
      <span className="wf-h" style={{ fontSize: 12 }}>{price}</span>
      <span className="wf-mono" style={{ fontSize: 9 }}>★ 4.8</span>
    </div>
  </div>
);

// Category tile (icon-ish + label + count)
const CatTile = ({ label, count, accent }) => (
  <div style={{
    border: '1.5px solid var(--wf-ink)',
    borderRadius: 8,
    padding: '10px 8px',
    display: 'flex', flexDirection: 'column', gap: 4,
    background: accent ? 'var(--wf-accent-soft)' : 'var(--wf-paper)',
    minHeight: 70,
  }}>
    <div style={{
      width: 28, height: 28, border: '1.5px solid var(--wf-ink)',
      borderRadius: 6, marginBottom: 2,
      background: 'var(--wf-paper-shade)',
    }} />
    <div className="wf-h" style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.05 }}>{label}</div>
    <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>{count} ann.</div>
  </div>
);

// star row
const Stars = ({ n = 5, filled = 5, sm }) => (
  <span style={{ display: 'inline-flex', gap: 2, fontSize: sm ? 11 : 13, color: 'var(--wf-accent)' }}>
    {Array.from({ length: n }).map((_, i) => (
      <span key={i} style={{ color: i < filled ? 'var(--wf-accent)' : 'var(--wf-ink-faint)' }}>★</span>
    ))}
  </span>
);

// hamburger icon glyph
const Burger = ({ size = 18 }) => (
  <div style={{ width: size, height: size, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '3px 0' }}>
    {[0,1,2].map(i => <span key={i} style={{ height: 1.8, background: 'var(--wf-ink)', borderRadius: 1 }} />)}
  </div>
);

// back chevron
const Back = () => (
  <span style={{ display: 'inline-block', width: 8, height: 8, borderLeft: '2px solid var(--wf-ink)', borderBottom: '2px solid var(--wf-ink)', transform: 'rotate(45deg)' }} />
);

// notification bell with optional unread badge
const NotifBell = ({ count = 0, size = 20 }) => (
  <span style={{ position: 'relative', display: 'inline-flex', color: 'var(--wf-ink)' }}>
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 8a5.5 5.5 0 0 1 11 0c0 4 2 5 2 5h-15s2-1 2-5z" />
      <path d="M8.5 16a2 2 0 0 0 3 0" />
    </svg>
    {count > 0 && (
      <span className="wf-mono" style={{
        position: 'absolute', top: -3, right: -5,
        background: 'var(--wf-accent)', color: '#fff',
        fontSize: 8, minWidth: 13, height: 13, borderRadius: 7,
        border: '1.5px solid var(--wf-paper)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '0 3px', lineHeight: 1, boxSizing: 'border-box',
      }}>{count > 9 ? '9+' : count}</span>
    )}
  </span>
);

// Page wrapper — gives padding & sets up sketch background, scroll
const Page = ({ children, style, padded = true }) => (
  <div style={{
    minHeight: '100%',
    background: 'var(--wf-paper)',
    padding: padded ? '0' : 0,
    position: 'relative',
    fontFamily: 'var(--wf-font-hand)',
    color: 'var(--wf-ink)',
    ...style,
  }}>{children}</div>
);

// Phone screen — Android frame wrapper that strips chrome to wireframe colors
const Phone = ({ children, label, fr, en, height = 760, width = 340 }) => {
  // Override the Android frame's mint surface by wrapping in a paper-bg layer.
  return (
    <div className="wf-frame" style={{ position: 'relative' }}>
      <AndroidDevice width={width} height={height}>
        <div style={{ background: 'var(--wf-paper)', minHeight: '100%' }}>
          {children}
        </div>
      </AndroidDevice>
      {(fr || en || label) && (
        <div style={{ position: 'absolute', left: 8, right: 8, top: -28, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, pointerEvents: 'none' }}>
          {label && <span className="wf-script" style={{ fontSize: 18, color: 'var(--wf-ink)' }}>{label}</span>}
          {(fr || en) && <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-faint)' }}>{fr}{en ? ' · ' + en : ''}</span>}
        </div>
      )}
    </div>
  );
};

// Tab bar (4 + menu)
const TabBar = ({ items, active, accent = true }) => (
  <div className="wf-tabbar" style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
    {items.map((it, i) => (
      <div key={i} className={"wf-tabbar__item " + (i === active && accent ? "wf-tabbar__item--active" : "")}>
        <span className="wf-tabbar__icon" style={{ borderRadius: it.round ? '50%' : 4 }} />
        <span>{it.label}</span>
      </div>
    ))}
  </div>
);

// Search bar component
const SearchBar = ({ ph = 'Où allez-vous ? · Where to ?', style }) => (
  <div className="wf-searchbar" style={style}>
    <span style={{ fontSize: 14 }}>○</span>
    <span style={{ flex: 1, color: 'var(--wf-ink-soft)' }}>{ph}</span>
    <span style={{ fontSize: 14 }}>⌕</span>
  </div>
);

Object.assign(window, {
  Bilingual, Scribble, Img, Box, Btn, Tab, Chip, Circle, Note,
  ListingCard, CatTile, Stars, Burger, Back, NotifBell,
  Page, Phone, TabBar, SearchBar,
});
