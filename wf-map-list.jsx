// "Voir plus" — Carte + Liste with shrinking map on scroll.
// 3 states: initial (map big) / mid-scroll (map shrunk) / scrolled (list only)

const MapWithPins = ({ h, withCard = false, expanded = true }) => (
  <div className="wf-map" style={{ height: h, position: 'relative' }}>
    {[
      { l: '20%', t: '30%', selected: false },
      { l: '45%', t: '50%', selected: true },
      { l: '70%', t: '25%', selected: false },
      { l: '35%', t: '75%', selected: false },
      { l: '80%', t: '65%', selected: false },
    ].map((p, i) => (
      <div key={i} className="wf-map__pin"
        style={{
          left: p.l, top: p.t,
          background: p.selected ? 'var(--wf-ink)' : 'var(--wf-accent)',
          width: p.selected ? 28 : 22, height: p.selected ? 28 : 22,
        }} />
    ))}
    {/* zoom controls */}
    {expanded && (
      <div style={{ position: 'absolute', right: 8, top: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Circle size={28} style={{ background: '#fff', fontSize: 14 }}>+</Circle>
        <Circle size={28} style={{ background: '#fff', fontSize: 14 }}>−</Circle>
      </div>
    )}
    {/* selected pin's mini card overlay */}
    {withCard && (
      <div style={{ position: 'absolute', left: 12, right: 12, bottom: 12 }}>
        <Box style={{ padding: 8, display: 'flex', gap: 8, alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.18)' }}>
          <Img w={50} h={50} label="" />
          <div style={{ flex: 1 }}>
            <div className="wf-h" style={{ fontSize: 12, fontWeight: 600 }}>Studio Bonapriso</div>
            <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>★ 4.92 · 25 000 F</div>
          </div>
          <span className="wf-mono" style={{ fontSize: 10 }}>→</span>
        </Box>
      </div>
    )}
  </div>
);

const ResultListItem = ({ title, sub, price, badge, selected }) => (
  <div style={{ display: 'flex', gap: 10, padding: 12, borderBottom: '1px dashed var(--wf-ink-faint)', background: selected ? 'var(--wf-accent-soft)' : 'transparent' }}>
    <Img w={90} h={75} label="photo" />
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 6 }}>
        <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>{title}</div>
        <span style={{ fontSize: 14 }}>♡</span>
      </div>
      <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>{sub}</div>
      {badge && <div style={{ marginTop: 2 }}><Chip>{badge}</Chip></div>}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
        <span className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>{price}</span>
        <span className="wf-mono" style={{ fontSize: 10 }}>★ 4.8 (42)</span>
      </div>
    </div>
  </div>
);

const RESULTS = [
  { title: 'Studio cosy · Bonapriso', sub: 'Studio · 2 voy.', price: '25 000 F / nuit', badge: 'Rare find', selected: true },
  { title: 'Appartement Akwa', sub: 'Appart 2 ch · 4 voy.', price: '45 000 F / nuit' },
  { title: 'Villa Bastos', sub: 'Villa · 6 voy.', price: '85 000 F / nuit', badge: 'Superhost' },
  { title: 'Chambre Bonanjo', sub: 'Chambre · 1 voy.', price: '15 000 F / nuit' },
  { title: 'Studio Bonamoussadi', sub: 'Studio · 2 voy.', price: '22 000 F / nuit' },
];

// ── State 1: Map expanded ──────────────────────────────────
const MapListExpanded = () => (
  <Page>
    <div className="wf-pagehead">
      <Back />
      <div style={{ flex: 1 }}>
        <div className="wf-h" style={{ fontSize: 15, fontWeight: 600 }}>Populaires · Douala</div>
        <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>23-28 mai · 2 voy · 18 résultats</div>
      </div>
      <Burger />
    </div>
    {/* Filter pills */}
    <div style={{ display: 'flex', gap: 6, padding: '0 14px 8px', overflow: 'hidden' }}>
      <Tab active>Filtres ⚙</Tab>
      <Tab>Prix</Tab>
      <Tab>Type</Tab>
      <Tab>Note ★</Tab>
    </div>
    {/* Big map */}
    <div style={{ padding: '0 14px' }}>
      <MapWithPins h={360} withCard expanded />
    </div>
    {/* Peek of list at bottom */}
    <div style={{ marginTop: 10 }}>
      <div style={{ textAlign: 'center', marginBottom: 6 }}>
        <span style={{ display: 'inline-block', width: 40, height: 4, background: 'var(--wf-ink-faint)', borderRadius: 2 }} />
      </div>
      <ResultListItem {...RESULTS[0]} />
    </div>
    <Note style={{ position: 'absolute', right: 8, top: '50%', transform: 'rotate(2deg)', fontSize: 11, padding: '6px 8px', maxWidth: 130 }}>
      Scroll ↓ pour réduire la carte
    </Note>
  </Page>
);

// ── State 2: Map shrunk (mid-scroll) ───────────────────────
const MapListShrunk = () => (
  <Page>
    <div className="wf-pagehead">
      <Back />
      <div style={{ flex: 1 }}>
        <div className="wf-h" style={{ fontSize: 15, fontWeight: 600 }}>Populaires · Douala</div>
      </div>
      <span className="wf-mono" style={{ fontSize: 10 }}>18</span>
    </div>
    {/* Sticky filter row */}
    <div style={{ display: 'flex', gap: 6, padding: '0 14px 8px', overflow: 'hidden' }}>
      <Tab active>Filtres</Tab>
      <Tab>Prix ↓</Tab>
      <Tab>Type</Tab>
    </div>
    {/* Shrunk map */}
    <div style={{ padding: '0 14px' }}>
      <MapWithPins h={120} expanded={false} />
    </div>
    <div style={{ padding: '6px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>18 logements · liste</span>
      <Btn sm>Voir la carte ↑</Btn>
    </div>
    {RESULTS.slice(0, 4).map((r, i) => (
      <ResultListItem key={i} {...r} />
    ))}
  </Page>
);

// ── State 3: Fully scrolled, map gone ──────────────────────
const MapListScrolled = () => (
  <Page>
    {/* sticky condensed header at top */}
    <div style={{ position: 'sticky', top: 0, background: 'var(--wf-paper)', zIndex: 2, borderBottom: '1.5px solid var(--wf-ink-faint)' }}>
      <div className="wf-pagehead" style={{ padding: '10px 14px 6px' }}>
        <Back />
        <div style={{ flex: 1 }}>
          <div className="wf-h" style={{ fontSize: 14, fontWeight: 600 }}>Populaires · Douala · 18</div>
        </div>
        <span style={{ fontSize: 14 }}>⌕</span>
      </div>
      <div style={{ display: 'flex', gap: 6, padding: '0 14px 8px', overflow: 'hidden' }}>
        <Tab active>Tous</Tab>
        <Tab>Studio</Tab>
        <Tab>Appart.</Tab>
        <Tab>Villa</Tab>
      </div>
    </div>
    {RESULTS.map((r, i) => (
      <ResultListItem key={i} {...r} />
    ))}
    {/* Floating "Map" button to bring map back */}
    <div style={{ position: 'absolute', left: '50%', bottom: 18, transform: 'translateX(-50%)' }}>
      <div style={{ padding: '10px 16px', background: 'var(--wf-ink)', color: 'var(--wf-paper)', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--wf-font-hand)', fontSize: 13, boxShadow: '0 4px 12px rgba(0,0,0,0.25)' }}>
        Carte · Map <span style={{ width: 12, height: 12, border: '1.5px solid #fff', borderRadius: 2, opacity: 0.8 }} />
      </div>
    </div>
  </Page>
);

// ── Favorites/Wishlists screen ─────────────────────────────
const FavoritesA = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div className="wf-pagehead">
      <h2 className="wf-pagehead__title">Favoris · Wishlists</h2>
      <span className="wf-mono" style={{ fontSize: 10 }}>+ Nouveau</span>
    </div>
    <div style={{ padding: '0 14px 14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
      {[
        { t: 'Mes Douala', n: 7, accent: true },
        { t: 'Vacances Kribi', n: 12 },
        { t: 'À louer plus tard', n: 4 },
        { t: 'Services beauté', n: 3 },
      ].map((w, i) => (
        <div key={i}>
          <div style={{ position: 'relative' }}>
            <Img h={140} label="collage" />
            <span style={{ position: 'absolute', top: 6, right: 6, fontSize: 18, color: 'var(--wf-accent)' }}>♥</span>
          </div>
          <div className="wf-h" style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>{w.t}</div>
          <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>{w.n} annonces</div>
        </div>
      ))}
    </div>
    <TabBar
      active={1}
      items={[
        { label: 'Découvrir' },
        { label: 'Favoris' },
        { label: 'Trips' },
        { label: 'Inbox' },
        { label: 'Profil', round: true },
      ]}
    />
  </Page>
);

Object.assign(window, { MapListExpanded, MapListShrunk, MapListScrolled, FavoritesA });
