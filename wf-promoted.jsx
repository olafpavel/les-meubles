// Variants for displaying promoted/sponsored listings
// Side-by-side comparison + in-context phone screens

// ─────────────────────────────────────────────────────────────
// Card-level comparison (no phone frame, just cards side-by-side)
// ─────────────────────────────────────────────────────────────
const PromotedCardCompare = () => (
  <div style={{
    width: '100%', height: '100%',
    padding: 24, boxSizing: 'border-box',
    background: 'var(--wf-paper)',
    fontFamily: 'var(--wf-font-hand)',
    color: 'var(--wf-ink)',
    overflow: 'auto',
  }}>
    <div className="wf-script" style={{ fontSize: 28, marginBottom: 4 }}>5 traitements de "promu"</div>
    <div className="wf-mono" style={{ fontSize: 11, color: 'var(--wf-ink-soft)', marginBottom: 20 }}>
      Du plus discret (A) au plus marqué (E) — à mixer selon le contexte
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
      {/* A — chip discret */}
      <div>
        <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)', marginBottom: 6 }}>A · chip discret</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ position: 'relative' }}>
            <Img h={110} label="photo" />
            <span style={{ position: 'absolute', top: 6, left: 6 }}>
              <Chip ink>Sponsorisé</Chip>
            </span>
            <span style={{ position: 'absolute', top: 6, right: 6, fontSize: 14 }}>♡</span>
          </div>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>Studio Bonapriso</div>
          <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>Douala · 2 voy.</div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="wf-h" style={{ fontSize: 12, fontWeight: 600 }}>25 k F /nuit</span>
            <span className="wf-mono" style={{ fontSize: 9 }}>★ 4.9</span>
          </div>
        </div>
        <Note style={{ marginTop: 10, fontSize: 12 }}>
          Honnête, conforme aux pubs. Faible saillance.
        </Note>
      </div>

      {/* B — bordure accent */}
      <div>
        <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)', marginBottom: 6 }}>B · bordure accent</div>
        <div style={{ border: '2px solid var(--wf-accent)', borderRadius: 8, padding: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ position: 'relative' }}>
            <Img h={100} label="photo" />
            <span style={{ position: 'absolute', top: 6, right: 6, fontSize: 14 }}>♡</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--wf-accent)' }} />
            <span className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-accent)', fontWeight: 600 }}>À LA UNE</span>
          </div>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>Toyota RAV4</div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="wf-h" style={{ fontSize: 12, fontWeight: 600 }}>40 k F /jour</span>
            <span className="wf-mono" style={{ fontSize: 9 }}>★ 4.8</span>
          </div>
        </div>
        <Note style={{ marginTop: 10, fontSize: 12 }}>
          Plus visible mais ça reste une carte standard.
        </Note>
      </div>

      {/* C — ruban diagonal */}
      <div>
        <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)', marginBottom: 6 }}>C · ruban ✨</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 6 }}>
            <Img h={110} label="photo" />
            {/* corner ribbon */}
            <div style={{
              position: 'absolute', top: 10, left: -28, width: 110,
              background: 'var(--wf-accent)', color: '#fff',
              transform: 'rotate(-45deg)',
              textAlign: 'center',
              fontFamily: 'var(--wf-font-mono)', fontSize: 9, fontWeight: 600,
              padding: '2px 0', border: '1px solid var(--wf-ink)',
              letterSpacing: '0.04em',
            }}>★ PROMU</div>
            <span style={{ position: 'absolute', top: 6, right: 6, fontSize: 14 }}>♡</span>
          </div>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>Salon Élégance</div>
          <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>Bonanjo · Coiffure</div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="wf-h" style={{ fontSize: 12, fontWeight: 600 }}>8 k F</span>
            <span className="wf-mono" style={{ fontSize: 9 }}>★ 4.92</span>
          </div>
        </div>
        <Note style={{ marginTop: 10, fontSize: 12 }}>
          Très voyant, type "marketplace". À utiliser avec parcimonie.
        </Note>
      </div>

      {/* D — fond teinté */}
      <div>
        <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)', marginBottom: 6 }}>D · fond teinté</div>
        <div style={{ background: 'var(--wf-accent-soft)', border: '1.5px solid var(--wf-accent)', borderRadius: 8, padding: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-accent)', fontWeight: 600, letterSpacing: '0.05em' }}>★ ANNONCE PROMUE</div>
          <div style={{ position: 'relative' }}>
            <Img h={92} label="photo" />
            <span style={{ position: 'absolute', top: 6, right: 6, fontSize: 14 }}>♡</span>
          </div>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>Villa Bonapriso</div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="wf-h" style={{ fontSize: 12, fontWeight: 600 }}>85 k F /nuit</span>
            <span className="wf-mono" style={{ fontSize: 9 }}>★ 4.95</span>
          </div>
        </div>
        <Note style={{ marginTop: 10, fontSize: 12 }}>
          Clair, mais le fond peut casser le rythme d'une liste.
        </Note>
      </div>

      {/* E — full-width hero */}
      <div>
        <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)', marginBottom: 6 }}>E · hero pleine largeur</div>
        <div style={{ border: '2px solid var(--wf-ink)', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ position: 'relative' }}>
            <Img h={120} label="photo grand format" />
            <div style={{ position: 'absolute', top: 6, left: 6 }}>
              <Chip accent>★ À la une cette semaine</Chip>
            </div>
            <span style={{ position: 'absolute', top: 6, right: 6, fontSize: 14, color: '#fff' }}>♡</span>
          </div>
          <div style={{ padding: 8 }}>
            <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>Studio cosy Bonapriso</div>
            <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>★ 4.92 · 78 avis</div>
            <div className="wf-h" style={{ fontSize: 12, fontWeight: 600, marginTop: 2 }}>25 k F /nuit</div>
          </div>
        </div>
        <Note style={{ marginTop: 10, fontSize: 12 }}>
          Format premium pour mise en avant éditoriale. Max 1 par page.
        </Note>
      </div>
    </div>

    {/* Recommendation */}
    <div style={{ marginTop: 22, padding: 16, background: 'var(--wf-paper-shade)', borderRadius: 8, border: '1.5px dashed var(--wf-ink)' }}>
      <div className="wf-h" style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>
        Recommandation
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.4, color: 'var(--wf-ink)' }}>
        Mixer <strong>A</strong> (chip discret) sur les résultats classiques pour la transparence, et <strong>E</strong> (hero) en tête de liste max 1×.
        Réserver <strong>C</strong> (ruban) aux campagnes "Top 7 jours". <strong>B</strong> et <strong>D</strong> en option pour A/B test.
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// In-context: Discovery list with promoted cards mixed in
// ─────────────────────────────────────────────────────────────
const DiscoveryWithPromoted = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div style={{ padding: '14px 14px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <div className="wf-h" style={{ fontSize: 22, flex: 1 }}>Logements</div>
        <NotifBell count={3} />
      </div>
      <SearchBar />
    </div>

    <div style={{ display: 'flex', gap: 6, padding: '12px 14px 8px' }}>
      <Tab active>Tous</Tab>
      <Tab>Villa</Tab>
      <Tab>Studio</Tab>
      <Tab>Chambre</Tab>
    </div>

    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)', marginBottom: 8 }}>
        128 résultats · trier ▾
      </div>

      {/* HERO promoted (style E) */}
      <div style={{ border: '2px solid var(--wf-ink)', borderRadius: 8, overflow: 'hidden', marginBottom: 14 }}>
        <div style={{ position: 'relative' }}>
          <Img h={150} label="photo grand format" />
          <div style={{ position: 'absolute', top: 8, left: 8 }}>
            <Chip accent>★ À la une</Chip>
          </div>
          <span style={{ position: 'absolute', top: 8, right: 8, fontSize: 16, color: '#fff' }}>♡</span>
        </div>
        <div style={{ padding: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="wf-h" style={{ fontSize: 14, fontWeight: 600 }}>Studio cosy Bonapriso</div>
            <span className="wf-mono" style={{ fontSize: 10 }}>★ 4.92</span>
          </div>
          <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>2 voy. · Douala</div>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginTop: 4 }}>25 000 F /nuit</div>
        </div>
      </div>

      {/* Regular results — one with style A chip */}
      {[
        { t: 'Villa familiale', sub: 'Bonanjo · 6 voy.', price: '85 k F', promo: false },
        { t: 'Appart vue mer', sub: 'Akwa · 4 voy.', price: '45 k F', promo: true },
        { t: 'Chambre cosy', sub: 'Bali · 2 voy.', price: '15 k F', promo: false },
        { t: 'Studio moderne', sub: 'Makepe · 2 voy.', price: '22 k F', promo: false },
      ].map((r, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12, paddingBottom: 12, borderBottom: '1px dashed var(--wf-ink-faint)' }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <Img w={90} h={90} label="" />
            {r.promo && (
              <span style={{ position: 'absolute', top: 4, left: 4 }}>
                <Chip ink>Sponsorisé</Chip>
              </span>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>{r.t}</span>
              <span style={{ fontSize: 14 }}>♡</span>
            </div>
            <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>{r.sub}</div>
            <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>★ 4.8 · 24 avis</div>
            <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginTop: 2 }}>{r.price} /nuit</div>
          </div>
        </div>
      ))}
    </div>

    <TabBar
      active={0}
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

// ─────────────────────────────────────────────────────────────
// In-context: Dedicated "À la une" carousel on home
// ─────────────────────────────────────────────────────────────
const HomeFeaturedCarousel = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div style={{ padding: '14px 14px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10, gap: 8 }}>
        <div className="wf-script" style={{ fontSize: 22, flex: 1 }}>les meubles</div>
        <NotifBell count={3} />
        <Circle size={32}>D</Circle>
      </div>
      <SearchBar ph="Où allez-vous ?" />
    </div>

    {/* Featured row */}
    <div style={{ padding: '14px 0 6px' }}>
      <div style={{ padding: '0 14px 6px', display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span className="wf-h" style={{ fontSize: 16, fontWeight: 600 }}>★ À la une</span>
        <span className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)', flex: 1 }}>
          Annonces promues · sponsored
        </span>
        <span className="wf-mono" style={{ fontSize: 10 }}>→</span>
      </div>
      <div style={{ display: 'flex', gap: 10, padding: '4px 14px 4px', overflow: 'hidden' }}>
        {[
          { t: 'Studio Bonapriso', p: '25 k F' },
          { t: 'Toyota RAV4', p: '40 k F' },
          { t: 'Villa Akwa', p: '85 k F' },
        ].map((c, i) => (
          <div key={i} style={{ width: 140, flexShrink: 0, border: '2px solid var(--wf-accent)', borderRadius: 8, padding: 4, background: 'var(--wf-paper)' }}>
            <div style={{ position: 'relative' }}>
              <Img h={100} label="" />
              <span style={{ position: 'absolute', top: 4, left: 4 }}>
                <Chip accent>★</Chip>
              </span>
            </div>
            <div className="wf-h" style={{ fontSize: 12, fontWeight: 600, marginTop: 4 }}>{c.t}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="wf-h" style={{ fontSize: 11, fontWeight: 600 }}>{c.p}</span>
              <span className="wf-mono" style={{ fontSize: 9 }}>★ 4.9</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '0 14px', display: 'flex', gap: 4, justifyContent: 'center', marginTop: 6 }}>
        {[0,1,2].map(i => (
          <span key={i} style={{ width: i === 0 ? 14 : 5, height: 5, borderRadius: 3, background: i === 0 ? 'var(--wf-accent)' : 'var(--wf-ink-faint)' }} />
        ))}
      </div>
    </div>

    {/* Regular row */}
    <div style={{ padding: '14px 0 0' }}>
      <div style={{ padding: '0 14px 6px' }}>
        <span className="wf-h" style={{ fontSize: 16, fontWeight: 600 }}>Près de vous · Douala</span>
      </div>
      <div style={{ display: 'flex', gap: 10, padding: '4px 14px', overflow: 'hidden' }}>
        {[1,2,3].map(i => (
          <ListingCard key={i} title={`Annonce ${i}`} sub="2 voy." price="22 k F" w={140} photoH={100} />
        ))}
      </div>
    </div>

    <div style={{ padding: '14px 0 0' }}>
      <div style={{ padding: '0 14px 6px' }}>
        <span className="wf-h" style={{ fontSize: 16, fontWeight: 600 }}>Nouveautés</span>
      </div>
      <div style={{ display: 'flex', gap: 10, padding: '4px 14px', overflow: 'hidden' }}>
        {[1,2,3].map(i => (
          <ListingCard key={i} title={`Nouveau ${i}`} sub="Yaoundé" price="18 k F" w={140} photoH={100} />
        ))}
      </div>
    </div>

    <TabBar
      active={0}
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

// ─────────────────────────────────────────────────────────────
// In-context: Map view with promoted pins distinguished
// ─────────────────────────────────────────────────────────────
const MapWithPromoted = () => (
  <Page style={{ paddingBottom: 70, position: 'relative' }}>
    <div style={{ padding: '14px 14px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Back />
        <SearchBar ph="Douala · 12-15 mai" style={{ flex: 1 }} />
      </div>
      <div style={{ display: 'flex', gap: 6, padding: '10px 0 8px', overflow: 'hidden' }}>
        <Tab active>Carte</Tab>
        <Tab>Liste</Tab>
        <Tab>Filtres</Tab>
      </div>
    </div>

    {/* Map area */}
    <div style={{ padding: '0 14px 8px', position: 'relative' }}>
      <div className="wf-map" style={{ height: 360, position: 'relative' }}>
        {/* Promoted pin — star, larger, accent */}
        <div style={{ position: 'absolute', left: '40%', top: '30%' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 16,
            background: 'var(--wf-accent)',
            border: '2.5px solid var(--wf-ink)',
            color: '#fff', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 600,
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            position: 'relative',
          }}>
            ★
            <div style={{
              position: 'absolute', bottom: -6, left: '50%',
              transform: 'translateX(-50%) rotate(45deg)',
              width: 8, height: 8, background: 'var(--wf-accent)',
              borderRight: '2.5px solid var(--wf-ink)',
              borderBottom: '2.5px solid var(--wf-ink)',
            }} />
          </div>
          <div className="wf-mono" style={{ position: 'absolute', top: 36, left: -10, fontSize: 9, background: 'var(--wf-paper)', padding: '1px 4px', borderRadius: 3, whiteSpace: 'nowrap', border: '1px solid var(--wf-ink-faint)' }}>
            25 k F ★
          </div>
        </div>

        {/* Standard pins — price labels */}
        {[
          { l: '15%', t: '60%', p: '18 k' },
          { l: '70%', t: '45%', p: '32 k' },
          { l: '55%', t: '70%', p: '22 k' },
          { l: '20%', t: '20%', p: '40 k' },
          { l: '78%', t: '78%', p: '15 k' },
        ].map((pin, i) => (
          <div key={i} className="wf-mono" style={{
            position: 'absolute', left: pin.l, top: pin.t,
            background: 'var(--wf-paper)',
            border: '1.5px solid var(--wf-ink)',
            borderRadius: 999,
            padding: '3px 8px',
            fontSize: 10,
            fontWeight: 600,
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}>{pin.p} F</div>
        ))}

        {/* Map controls */}
        <div style={{ position: 'absolute', top: 10, right: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Circle size={28} style={{ background: 'var(--wf-paper)' }}>+</Circle>
          <Circle size={28} style={{ background: 'var(--wf-paper)' }}>−</Circle>
        </div>

        {/* Legend chip */}
        <div style={{ position: 'absolute', bottom: 8, left: 8, display: 'flex', gap: 6 }}>
          <Chip accent>★ Promu</Chip>
          <Chip ink>Standard</Chip>
        </div>
      </div>
    </div>

    {/* Snapped card at bottom (selected pin = the promoted one) */}
    <div style={{ position: 'absolute', left: 14, right: 14, bottom: 78 }}>
      <Box style={{ padding: 8, display: 'flex', gap: 10, border: '2px solid var(--wf-accent)' }}>
        <Img w={70} h={70} label="" />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Chip accent>★ Promu</Chip>
            <span className="wf-mono" style={{ fontSize: 9 }}>★ 4.92</span>
          </div>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginTop: 2 }}>Studio cosy Bonapriso</div>
          <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>2 voy. · Douala</div>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>25 k F /nuit</div>
        </div>
      </Box>
    </div>

    <TabBar
      active={0}
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

Object.assign(window, {
  PromotedCardCompare,
  DiscoveryWithPromoted,
  HomeFeaturedCarousel,
  MapWithPromoted,
});
