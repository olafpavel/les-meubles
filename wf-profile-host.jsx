// Profile + Host mode (Today / Calendar / Listings) + Hamburger drawer

// ── Profile (locataire mode) ───────────────────────────────
const ProfileGuest = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div style={{ padding: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
      <div className="wf-h" style={{ fontSize: 22, flex: 1 }}>Profil</div>
      <NotifBell count={3} />
    </div>
    <div style={{ padding: '0 14px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
      <Circle size={64} ink>D</Circle>
      <div style={{ flex: 1 }}>
        <div className="wf-h" style={{ fontSize: 16, fontWeight: 600 }}>Dani Mbede</div>
        <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Guest · Locataire</div>
        <Btn sm style={{ marginTop: 6 }}>Voir profil public</Btn>
      </div>
    </div>

    {/* Host switch CTA */}
    <div style={{ padding: '0 14px 14px' }}>
      <Box accent style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 40, height: 40, border: '1.5px solid #fff', borderRadius: 8 }} />
        <div style={{ flex: 1 }}>
          <div className="wf-h" style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>Devenez hôte · Become a host</div>
          <div className="wf-mono" style={{ fontSize: 10, color: '#fff', opacity: 0.85 }}>Louez vos biens, vos services</div>
        </div>
        <span style={{ fontSize: 18, color: '#fff' }}>→</span>
      </Box>
    </div>

    {/* Menu sections */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)', marginBottom: 6 }}>VOTRE COMPTE</div>
      {[
        'Past trips · Voyages passés',
        'Connections · Personnes liées',
        'Méthodes de paiement',
        'Adresses · Cameroun',
        'Account settings',
      ].map((l, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px dashed var(--wf-ink-faint)' }}>
          <span className="wf-h" style={{ fontSize: 13 }}>{l}</span>
          <span style={{ fontSize: 14, color: 'var(--wf-ink-soft)' }}>›</span>
        </div>
      ))}
    </div>
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)', marginBottom: 6 }}>AIDE</div>
      {['Get help · Aide', 'Légal · Legal', 'Signaler un problème', 'Se déconnecter'].map((l, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px dashed var(--wf-ink-faint)' }}>
          <span className="wf-h" style={{ fontSize: 13, color: l.includes('décon') ? 'var(--wf-accent)' : 'var(--wf-ink)' }}>{l}</span>
          <span style={{ fontSize: 14, color: 'var(--wf-ink-soft)' }}>›</span>
        </div>
      ))}
    </div>
    <TabBar
      active={4}
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

// ── Host: Today ────────────────────────────────────────────
const HostToday = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div className="wf-pagehead">
      <Burger />
      <div style={{ flex: 1 }}>
        <div className="wf-h" style={{ fontSize: 20, lineHeight: 1.1 }}>Aujourd'hui</div>
        <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Daniel · Hôte · 3 annonces</div>
      </div>
      <NotifBell count={5} />
      <Circle size={32}>D</Circle>
    </div>

    {/* Hero stat */}
    <div style={{ padding: '0 14px 14px' }}>
      <Box style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
        <div>
          <div className="wf-script" style={{ fontSize: 36, lineHeight: 1, color: 'var(--wf-accent)' }}>2</div>
        </div>
        <div style={{ flex: 1 }}>
          <div className="wf-h" style={{ fontSize: 14, fontWeight: 600 }}>Check-ins aujourd'hui</div>
          <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>1 logement · 1 service</div>
        </div>
      </Box>
    </div>

    {/* Check-in cards */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 8 }}>Arrivées · Check-ins</div>
      {[
        { who: 'Aïssatou N.', listing: 'Studio Bonapriso', when: 'arrive 19h', code: '#LM-238041' },
        { who: 'Marc B.', listing: 'Service coiffure', when: '14h-15h', code: '#LM-238062' },
      ].map((c, i) => (
        <Box key={i} style={{ padding: 10, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Circle size={36}>{c.who[0]}</Circle>
          <div style={{ flex: 1 }}>
            <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>{c.who}</div>
            <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>{c.listing} · {c.when}</div>
            <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)' }}>{c.code}</div>
          </div>
          <Btn sm>Contact</Btn>
        </Box>
      ))}
    </div>

    {/* Stats grid */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 8 }}>Statistiques · Stats (7j)</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[
          { v: '385 k F', l: 'Revenus' },
          { v: '12', l: 'Réservations' },
          { v: '4.9', l: 'Note moyenne' },
          { v: '82 %', l: 'Taux occup.' },
        ].map((s, i) => (
          <Box key={i} shade style={{ padding: 10 }}>
            <div className="wf-h" style={{ fontSize: 18, fontWeight: 600 }}>{s.v}</div>
            <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>{s.l}</div>
          </Box>
        ))}
      </div>
    </div>

    <TabBar
      active={0}
      items={[
        { label: 'Today' },
        { label: 'Calendar' },
        { label: 'Listings' },
        { label: 'Messages' },
      ]}
    />
    {/* Floating + */}
    <div style={{ position: 'absolute', bottom: 78, right: 16 }}>
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--wf-accent)', border: '2px solid var(--wf-ink)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--wf-font-hand)', fontSize: 28, lineHeight: 1, boxShadow: '0 2px 6px rgba(0,0,0,0.18)' }}>+</div>
    </div>
  </Page>
);

// ── Host: Calendar ─────────────────────────────────────────
const HostCalendar = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div className="wf-pagehead">
      <Burger />
      <div style={{ flex: 1 }}>
        <div className="wf-h" style={{ fontSize: 18 }}>Calendrier</div>
      </div>
      <NotifBell count={5} />
      <span className="wf-mono" style={{ fontSize: 10 }}>Export</span>
    </div>

    {/* Listing selector */}
    <div style={{ padding: '0 14px 10px' }}>
      <Box style={{ padding: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
        <Img w={36} h={36} label="" />
        <div style={{ flex: 1 }}>
          <div className="wf-h" style={{ fontSize: 12, fontWeight: 600 }}>Studio cosy · Bonapriso ▾</div>
          <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>3 annonces · changer</div>
        </div>
      </Box>
    </div>

    {/* Month nav */}
    <div style={{ display: 'flex', alignItems: 'center', padding: '0 14px 6px', gap: 14 }}>
      <span style={{ fontSize: 16 }}>←</span>
      <div className="wf-h" style={{ fontSize: 16, flex: 1, textAlign: 'center', fontWeight: 600 }}>Mai 2026</div>
      <span style={{ fontSize: 16 }}>→</span>
    </div>

    {/* Day-of-week header */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', padding: '0 14px', textAlign: 'center' }}>
      {['L','M','M','J','V','S','D'].map((d, i) => (
        <div key={i} className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)', padding: '4px 0' }}>{d}</div>
      ))}
    </div>

    {/* Mini month grid */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', padding: '0 14px', gap: 2 }}>
      {Array.from({ length: 35 }).map((_, i) => {
        const day = i - 3;
        const inMonth = day >= 1 && day <= 31;
        const booked = [23, 24, 25, 26, 27, 28].includes(day);
        const blocked = [15, 16, 17].includes(day);
        const today = day === 19;
        return (
          <div key={i} style={{
            height: 38,
            border: today ? '2px solid var(--wf-ink)' : '1px solid var(--wf-ink-faint)',
            borderRadius: 4,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: booked ? 'rgba(214,69,69,0.85)' : blocked ? 'rgba(230,160,60,0.7)' : 'var(--wf-paper)',
            color: booked || blocked ? '#fff' : (inMonth ? 'var(--wf-ink)' : 'var(--wf-ink-faint)'),
            fontFamily: 'var(--wf-font-hand)',
            fontSize: 12,
          }}>{inMonth ? day : ''}</div>
        );
      })}
    </div>

    {/* Legend */}
    <div style={{ padding: 14, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <span className="wf-mono" style={{ fontSize: 10, display: 'flex', alignItems: 'center', gap: 4 }}>
        <span style={{ width: 12, height: 12, background: 'rgba(214,69,69,0.85)', borderRadius: 2 }} /> Réservé
      </span>
      <span className="wf-mono" style={{ fontSize: 10, display: 'flex', alignItems: 'center', gap: 4 }}>
        <span style={{ width: 12, height: 12, background: 'rgba(230,160,60,0.7)', borderRadius: 2 }} /> Bloqué
      </span>
      <span className="wf-mono" style={{ fontSize: 10, display: 'flex', alignItems: 'center', gap: 4 }}>
        <span style={{ width: 12, height: 12, border: '1px solid var(--wf-ink-faint)', borderRadius: 2 }} /> Libre
      </span>
    </div>

    <div style={{ padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <Btn>+ Bloquer une période</Btn>
      <Btn>$ Modifier prix par période</Btn>
    </div>

    <TabBar
      active={1}
      items={[
        { label: 'Today' },
        { label: 'Calendar' },
        { label: 'Listings' },
        { label: 'Messages' },
      ]}
    />
  </Page>
);

// ── Host: Listings ─────────────────────────────────────────
const HostListings = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div className="wf-pagehead">
      <Burger />
      <h2 className="wf-pagehead__title">Mes annonces</h2>
      <NotifBell count={5} />
      <span style={{ fontSize: 16 }}>+</span>
    </div>

    <div style={{ display: 'flex', gap: 6, padding: '0 14px 10px', overflow: 'hidden' }}>
      <Tab active>Toutes · 3</Tab>
      <Tab>Publiées</Tab>
      <Tab>Brouillons</Tab>
    </div>

    <div style={{ padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { t: 'Studio Bonapriso', s: 'Logement · Publié', ext: 'Sponsorisé', accent: true },
        { t: 'Toyota RAV4 2022', s: 'Auto · Publié', ext: '' },
        { t: 'Salon Élégance', s: 'Service · Brouillon', ext: 'À finaliser', faint: true },
      ].map((l, i) => (
        <Box key={i} style={{ padding: 10 }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Img w={68} h={68} label="" />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, flex: 1 }}>{l.t}</div>
                {l.ext && <Chip accent={l.accent} ink={!l.accent && !l.faint}>{l.ext}</Chip>}
              </div>
              <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>{l.s}</div>
              <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)', marginTop: 2 }}>★ 4.92 · 78 avis · 23 résa</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
            <Btn sm>Modifier</Btn>
            <Btn sm>Dépublier</Btn>
            <Btn sm accent>Promouvoir</Btn>
            <Btn sm ghost>⋮</Btn>
          </div>
        </Box>
      ))}
    </div>

    <TabBar
      active={2}
      items={[
        { label: 'Today' },
        { label: 'Calendar' },
        { label: 'Listings' },
        { label: 'Messages' },
      ]}
    />
  </Page>
);

// ── Hamburger drawer (slide-in) ────────────────────────────
const HostDrawer = () => (
  <Page>
    <div style={{ padding: '14px 14px 18px', borderBottom: '1.5px solid var(--wf-ink-faint)' }}>
      <Circle size={48} ink style={{ marginBottom: 8 }}>D</Circle>
      <div className="wf-h" style={{ fontSize: 16, fontWeight: 600 }}>Daniel Eboa</div>
      <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Host · depuis 2023 · Superhost ✦</div>
    </div>
    <div style={{ padding: '8px 0' }}>
      {[
        '👤 Account settings',
        '📘 Hosting resources',
        '? Get help',
        '👥 Find a co-host',
        '+ Create a new listing',
        '↗ Refer a host',
        '§ Legal',
      ].map((l, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '12px 18px', borderBottom: '1px dashed var(--wf-ink-faint)' }}>
          <span className="wf-h" style={{ fontSize: 14 }}>{l}</span>
        </div>
      ))}
    </div>
    <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Btn block>← Switch to travelling</Btn>
      <Btn block ghost style={{ color: 'var(--wf-accent)' }}>Log out</Btn>
    </div>
  </Page>
);

Object.assign(window, { ProfileGuest, HostToday, HostCalendar, HostListings, HostDrawer });
