// Discovery — 4 variations on the category-tab strategy
// All include: search bar, category grid, ≥1 carousel, bottom tab bar

const BotNav = ({ active = 0 }) => (
  <TabBar
    active={active}
    items={[
      { label: 'Découvrir' },
      { label: 'Favoris' },
      { label: 'Trips' },
      { label: 'Inbox' },
      { label: 'Profil', round: true },
    ]}
  />
);

const CarouselRow = ({ title, en, items = 4 }) => (
  <div style={{ marginTop: 18 }}>
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '0 14px 8px' }}>
      <div>
        <div className="wf-h" style={{ fontSize: 16 }}>{title}</div>
        {en && <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)' }}>{en}</div>}
      </div>
      <span className="wf-mono" style={{ fontSize: 10 }}>Voir + →</span>
    </div>
    <div style={{ display: 'flex', gap: 10, overflow: 'hidden', padding: '0 14px 4px' }}>
      {Array.from({ length: items }).map((_, i) => (
        <ListingCard
          key={i}
          w={138}
          title={['Studio Bonapriso', 'Villa Bastos', 'SUV Toyota', 'Coiffeur · Akwa'][i % 4]}
          sub={['2 voy · 23-28 mai', '4 voy · 18-22 juin', '5 places · 1 jour', '60 min · sur place'][i % 4]}
          price={['25 000 F', '85 000 F', '40 000 F', '12 000 F'][i % 4]}
          badge={i === 0 ? 'Superhost' : i === 2 ? 'Rare find' : null}
        />
      ))}
    </div>
  </div>
);

// ── Variant A: Classic horizontal pill tabs ────────────────────
const DiscoveryA = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div style={{ padding: '14px 14px 0' }}>
      <div className="wf-h" style={{ fontSize: 22, marginBottom: 10 }}>Découvrir</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <SearchBar style={{ flex: 1, minWidth: 0 }} />
        <NotifBell count={3} />
      </div>
    </div>
    <div style={{ display: 'flex', gap: 6, padding: '14px 14px 6px', overflow: 'hidden' }}>
      <Tab active>🏠 Logements</Tab>
      <Tab>🚗 Auto</Tab>
      <Tab>✦ Services</Tab>
    </div>
    <div style={{ padding: '8px 14px 0' }}>
      <Bilingual fr="Catégories" en="Categories" style={{ marginBottom: 6 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <CatTile label="Chambre" count="42" />
        <CatTile label="Appartement" count="118" accent />
        <CatTile label="Villa" count="27" />
        <CatTile label="Studio" count="63" />
      </div>
    </div>
    <CarouselRow title="Populaires" en="Popular this week" />
    <CarouselRow title="Recommandés" en="Recommended for you" />
    <BotNav active={0} />
  </Page>
);

// ── Variant B: Big segmented toggle ────────────────────────────
const DiscoveryB = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div style={{ padding: '14px 14px 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, gap: 10 }}>
        <div className="wf-script" style={{ fontSize: 22, flex: 1 }}>les meubles</div>
        <NotifBell count={3} />
        <Circle size={32}>D</Circle>
      </div>
      <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: 4, gap: 0 }}>
        <div style={{ padding: '10px 0', textAlign: 'center', background: 'var(--wf-ink)', color: 'var(--wf-paper)', borderRadius: 4 }} className="wf-h">
          🏠<br/><span style={{ fontSize: 11 }}>Logements</span>
        </div>
        <div style={{ padding: '10px 0', textAlign: 'center' }} className="wf-h">
          🚗<br/><span style={{ fontSize: 11 }}>Auto</span>
        </div>
        <div style={{ padding: '10px 0', textAlign: 'center' }} className="wf-h">
          ✦<br/><span style={{ fontSize: 11 }}>Services</span>
        </div>
      </Box>
      <div style={{ marginTop: 12 }}>
        <SearchBar ph="Douala, Yaoundé… · 2 voyageurs" />
      </div>
    </div>
    <div style={{ padding: '4px 14px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <CatTile label="Chambre" count="42" />
        <CatTile label="Appartement" count="118" />
        <CatTile label="Villa" count="27" accent />
        <CatTile label="Studio" count="63" />
      </div>
    </div>
    <CarouselRow title="Nouveautés" en="New on les meubles" />
    <BotNav active={0} />
  </Page>
);

// ── Variant C: Universe selector home → drilldown ──────────────
const DiscoveryC = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div style={{ padding: '18px 14px 6px' }}>
      <div className="wf-h" style={{ fontSize: 22 }}>Bonjour Dani 👋</div>
      <Bilingual fr="Que cherchez-vous aujourd'hui ?" en="What are you looking for today ?" />
    </div>
    <div style={{ padding: '6px 14px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { fr: 'Trouver un logement', en: 'Find a place to stay', cnt: '250 ann.', accent: true },
        { fr: 'Louer un véhicule', en: 'Rent a vehicle', cnt: '78 ann.' },
        { fr: 'Réserver un service', en: 'Book a service', cnt: '142 ann.' },
      ].map((u, i) => (
        <Box key={i} accent={u.accent} style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, border: '1.5px solid currentColor', borderRadius: 8, opacity: 0.6 }} />
          <div style={{ flex: 1 }}>
            <div className="wf-h" style={{ fontSize: 15, fontWeight: 600 }}>{u.fr}</div>
            <div className="wf-mono" style={{ fontSize: 10, opacity: 0.75 }}>{u.en}</div>
          </div>
          <div className="wf-mono" style={{ fontSize: 10 }}>{u.cnt} →</div>
        </Box>
      ))}
    </div>
    <div style={{ padding: '18px 14px 0' }}>
      <div className="wf-h" style={{ fontSize: 14 }}>Continuer où vous étiez</div>
    </div>
    <CarouselRow title="Récemment vus" en="Recently viewed" items={3} />
    <BotNav active={0} />
  </Page>
);

// ── Variant D: Tabs + sub-tabs (categories inline scroll) ──────
const DiscoveryD = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div style={{ padding: '14px 14px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <SearchBar style={{ flex: 1, minWidth: 0 }} />
        <NotifBell count={3} />
      </div>
    </div>
    {/* primary tabs - underline style */}
    <div style={{ display: 'flex', gap: 18, padding: '14px 14px 0', borderBottom: '1.5px solid var(--wf-ink-faint)' }}>
      {['Logements', 'Auto', 'Services'].map((t, i) => (
        <div key={i} style={{ padding: '6px 0', position: 'relative' }}>
          <span className="wf-h" style={{ fontSize: 14, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? 'var(--wf-ink)' : 'var(--wf-ink-soft)' }}>{t}</span>
          {i === 0 && <div style={{ position: 'absolute', bottom: -1.5, left: 0, right: 0, height: 2.5, background: 'var(--wf-accent)' }} />}
        </div>
      ))}
    </div>
    {/* sub-tabs (chips) */}
    <div style={{ display: 'flex', gap: 6, padding: '12px 14px 8px', overflow: 'hidden' }}>
      <Tab active>Tous</Tab>
      <Tab>Chambre</Tab>
      <Tab>Appart.</Tab>
      <Tab>Villa</Tab>
      <Tab>Studio</Tab>
    </div>
    {/* large hero card */}
    <div style={{ padding: '0 14px' }}>
      <Box style={{ padding: 0, overflow: 'hidden' }}>
        <Img h={130} label="hero · Villa Bastos" />
        <div style={{ padding: 10 }}>
          <div className="wf-h" style={{ fontSize: 14, fontWeight: 600 }}>Villa Bastos, Yaoundé</div>
          <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Superhost · 4.92 (78) · 85 000 F / nuit</div>
        </div>
      </Box>
    </div>
    <CarouselRow title="Recommandés" en="Recommended" />
    <CarouselRow title="Nouveautés" en="New" items={3} />
    <BotNav active={0} />
  </Page>
);

Object.assign(window, { DiscoveryA, DiscoveryB, DiscoveryC, DiscoveryD, CarouselRow, BotNav });
