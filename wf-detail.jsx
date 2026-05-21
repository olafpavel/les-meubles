// Detail pages — three variations by listing type (Logement / Auto / Service)
// All share the same template; type-specific blocks vary.

const DetailHeader = ({ title, type, capacity, badge }) => (
  <>
    <Img h={180} label="photo principale · main photo" />
    <div style={{ position: 'absolute', top: 12, left: 12, right: 12, display: 'flex', justifyContent: 'space-between' }}>
      <Circle size={32} style={{ background: 'rgba(255,255,255,0.9)' }}><Back /></Circle>
      <div style={{ display: 'flex', gap: 6 }}>
        <Circle size={32} style={{ background: 'rgba(255,255,255,0.9)' }}>↗</Circle>
        <Circle size={32} style={{ background: 'rgba(255,255,255,0.9)' }}>♡</Circle>
      </div>
    </div>
    <div style={{ position: 'absolute', bottom: 8, right: 12 }}>
      <Chip ink>1 / 12</Chip>
    </div>
    <div style={{ padding: '12px 14px 0' }}>
      {badge && <div style={{ marginBottom: 6 }}><Chip accent>{badge}</Chip></div>}
      <div className="wf-h" style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.15 }}>{title}</div>
      <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)', marginTop: 4 }}>{type} · {capacity}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
        <Stars sm filled={5} />
        <span className="wf-mono" style={{ fontSize: 10 }}>4.92 · 78 avis →</span>
      </div>
    </div>
  </>
);

const HostBlock = () => (
  <div style={{ padding: '14px', borderTop: '1.5px dashed var(--wf-ink-faint)', borderBottom: '1.5px dashed var(--wf-ink-faint)', marginTop: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
    <Circle size={42}>D</Circle>
    <div style={{ flex: 1 }}>
      <div className="wf-h" style={{ fontSize: 14 }}>Hébergé par Daniel</div>
      <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Superhost · 3 ans · Rare find ✦</div>
    </div>
    <Btn sm>Contact</Btn>
  </div>
);

const ReserveBar = ({ price, unit = '/ nuit', cta = 'Réserver' }) => (
  <div className="wf-bottombar" style={{ position: 'absolute' }}>
    <div style={{ flex: 1 }}>
      <div className="wf-h" style={{ fontSize: 16, fontWeight: 600 }}>{price}</div>
      <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>{unit} · 23-28 mai</div>
    </div>
    <Btn accent style={{ padding: '12px 22px', fontSize: 15 }}>{cta} →</Btn>
  </div>
);

// ── Variant A: Logement ───────────────────────────────────────
const DetailLogement = () => (
  <Page style={{ paddingBottom: 70, position: 'relative' }}>
    <div style={{ position: 'relative' }}>
      <DetailHeader
        title="Studio cosy · Bonapriso, Douala"
        type="Studio entier"
        capacity="2 voy. · 1 ch. · 1 lit · 1 sdb"
        badge="Rare find ✦"
      />
    </div>
    <HostBlock />
    <div style={{ padding: 14 }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Description</div>
      <Scribble w={80} />
      <Scribble w={80} />
      <Scribble w={60} />
    </div>
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 8 }}>Équipements · Amenities</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, fontSize: 12 }} className="wf-h">
        <div>○ Wi-Fi</div>
        <div>○ Climatisation</div>
        <div>○ Cuisine équipée</div>
        <div>○ Eau chaude</div>
        <div>○ Parking gratuit</div>
        <div>○ TV · Canal+</div>
      </div>
      <div className="wf-mono" style={{ fontSize: 10, marginTop: 8, color: 'var(--wf-ink-soft)' }}>+ 12 autres équipements →</div>
    </div>
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Localisation · Where</div>
      <div className="wf-map" style={{ height: 120, position: 'relative' }}>
        <div className="wf-map__pin" style={{ left: '50%', top: '40%' }} />
      </div>
      <div className="wf-mono" style={{ fontSize: 10, marginTop: 6, color: 'var(--wf-ink-soft)' }}>Bonapriso · Douala, CMR</div>
    </div>
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Disponibilités · Calendar</div>
      <Box style={{ padding: 10, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>[ mini calendrier · 2 mois ]</span>
      </Box>
    </div>
    <div style={{ padding: '0 14px 80px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Politique · House rules</div>
      <Scribble w={60} soft /><Scribble w={40} soft />
      <div style={{ marginTop: 10 }}>
        <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-faint)' }}>⚐ Signaler cette annonce</span>
      </div>
    </div>
    <ReserveBar price="125 000 F" unit="total · 5 nuits" />
  </Page>
);

// ── Variant B: Automobile ─────────────────────────────────────
const DetailAuto = () => (
  <Page style={{ paddingBottom: 70, position: 'relative' }}>
    <div style={{ position: 'relative' }}>
      <DetailHeader
        title="Toyota RAV4 · 2022"
        type="SUV · Automatique"
        capacity="5 places · 4 portes"
        badge="Top rated"
      />
    </div>
    <HostBlock />
    {/* Spec tiles - auto specific */}
    <div style={{ padding: 14 }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 8 }}>Caractéristiques · Specs</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
        {[
          { v: '2022', l: 'Année' },
          { v: '34k', l: 'km' },
          { v: 'Diesel', l: 'Carb.' },
          { v: 'A/T', l: 'Boîte' },
        ].map((s, i) => (
          <Box key={i} shade style={{ padding: '8px 4px', textAlign: 'center' }}>
            <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>{s.v}</div>
            <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>{s.l}</div>
          </Box>
        ))}
      </div>
    </div>
    {/* Photos intérieur/extérieur */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 8 }}>Photos</div>
      <div style={{ display: 'flex', gap: 6, overflow: 'hidden' }}>
        <Img w={90} h={70} label="ext." />
        <Img w={90} h={70} label="int." />
        <Img w={90} h={70} label="moteur" />
        <Img w={90} h={70} label="..." />
      </div>
    </div>
    {/* Conditions */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 8 }}>Conditions · Terms</div>
      <Box shade style={{ padding: 10 }}>
        <div className="wf-h" style={{ fontSize: 12 }}>○ Dépôt de garantie · 100 000 F</div>
        <div className="wf-h" style={{ fontSize: 12 }}>○ Assurance incluse · TR + RC</div>
        <div className="wf-h" style={{ fontSize: 12 }}>○ Kilométrage · 200 km/jour</div>
        <div className="wf-h" style={{ fontSize: 12 }}>○ Conducteur · ≥ 25 ans, permis 2 ans</div>
      </Box>
    </div>
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Point de retrait</div>
      <div className="wf-map" style={{ height: 100, position: 'relative' }}>
        <div className="wf-map__pin" style={{ left: '45%', top: '45%' }} />
      </div>
    </div>
    <div style={{ padding: '0 14px 80px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Avis · Reviews (78)</div>
      <Box style={{ padding: 10 }}>
        <Stars sm /> <span className="wf-mono" style={{ fontSize: 10 }}>« Voiture impeccable, hôte ponctuel »</span>
        <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)', marginTop: 4 }}>Aïssatou · mai 2026</div>
      </Box>
    </div>
    <ReserveBar price="40 000 F" unit="/ jour · 1-3 juin" />
  </Page>
);

// ── Variant C: Service ────────────────────────────────────────
const DetailService = () => (
  <Page style={{ paddingBottom: 70, position: 'relative' }}>
    <div style={{ position: 'relative' }}>
      <DetailHeader
        title="Salon Élégance · Akwa"
        type="Coiffure · Beauté"
        capacity="7 ans d'expérience"
        badge="Top pro"
      />
    </div>
    <HostBlock />
    {/* Menu de prix (service-specific) */}
    <div style={{ padding: 14 }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 8 }}>Prestations · Menu</div>
      {[
        { name: 'Coupe + brushing', dur: '45 min', price: '8 000 F', free: true },
        { name: 'Coloration', dur: '120 min', price: '25 000 F' },
        { name: 'Tresses africaines', dur: '180 min', price: '15 000 F', free: true },
        { name: 'Soin du visage', dur: '60 min', price: '12 000 F' },
      ].map((s, i) => (
        <Box key={i} style={{ padding: 10, marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <div style={{ width: 20, height: 20, border: '1.5px solid var(--wf-ink)', borderRadius: 4, flexShrink: 0, background: i === 0 ? 'var(--wf-ink)' : 'transparent' }} />
          <div style={{ flex: 1 }}>
            <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>{s.name}</div>
            <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>⏱ {s.dur} {s.free && <span style={{ color: 'var(--wf-accent)' }}>· annulation gratuite</span>}</div>
            <div style={{ marginTop: 6 }}>
              <Btn sm ghost>Show dates →</Btn>
            </div>
          </div>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>{s.price}</div>
        </Box>
      ))}
    </div>
    {/* Years of experience */}
    <div style={{ padding: '0 14px 14px' }}>
      <Box shade style={{ padding: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
        <div className="wf-script" style={{ fontSize: 28, color: 'var(--wf-accent)' }}>7</div>
        <div>
          <div className="wf-h" style={{ fontSize: 13 }}>années d'expérience</div>
          <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Depuis 2019 · 340+ clients</div>
        </div>
      </Box>
    </div>
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Localisation</div>
      <div className="wf-map" style={{ height: 100, position: 'relative' }}>
        <div className="wf-map__pin" style={{ left: '52%', top: '45%' }} />
      </div>
      <div className="wf-mono" style={{ fontSize: 10, marginTop: 6, color: 'var(--wf-ink-soft)' }}>Akwa · Douala — ou à domicile</div>
    </div>
    <div style={{ padding: '0 14px 80px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Avis · Reviews (124)</div>
      <Scribble w={80} soft /><Scribble w={60} soft />
      <div style={{ marginTop: 10 }}>
        <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-faint)' }}>⚐ Signaler · Report</span>
      </div>
    </div>
    <ReserveBar price="8 000 F" unit="1 presta sélectionnée" cta="Réserver" />
  </Page>
);

Object.assign(window, { DetailLogement, DetailAuto, DetailService });
