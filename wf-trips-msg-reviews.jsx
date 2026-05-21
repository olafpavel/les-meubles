// Trips · Messagerie · Reviews list

// ── Trips ────────────────────────────────────────────────
const TripsA = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div className="wf-pagehead">
      <h2 className="wf-pagehead__title">Mes trips</h2>
      <span className="wf-mono" style={{ fontSize: 10 }}>Filtre</span>
    </div>
    {/* Sub-tabs */}
    <div style={{ display: 'flex', gap: 18, padding: '0 14px 8px', borderBottom: '1.5px solid var(--wf-ink-faint)' }}>
      {['À venir · Upcoming', 'Passés', 'Annulés'].map((t, i) => (
        <div key={i} style={{ padding: '6px 0', position: 'relative' }}>
          <span className="wf-h" style={{ fontSize: 13, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? 'var(--wf-ink)' : 'var(--wf-ink-soft)' }}>{t}</span>
          {i === 0 && <div style={{ position: 'absolute', bottom: -1.5, left: 0, right: 0, height: 2.5, background: 'var(--wf-accent)' }} />}
        </div>
      ))}
    </div>

    {/* Trip cards */}
    <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { title: 'Studio Bonapriso', sub: '23-28 mai · 5 nuits', price: '135 400 F', status: 'Confirmé', accent: true, type: 'Logement' },
        { title: 'Toyota RAV4', sub: '1-3 juin · 3 jours', price: '120 000 F', status: 'En attente paiement', type: 'Auto' },
        { title: 'Salon Élégance', sub: '10 juin · 14h', price: '8 000 F', status: 'Confirmé', type: 'Service' },
      ].map((t, i) => (
        <Box key={i} style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 10, padding: 10 }}>
            <Img w={70} h={70} label="photo" />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>{t.title}</div>
                <Chip>{t.type}</Chip>
              </div>
              <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>{t.sub}</div>
              <div className="wf-mono" style={{ fontSize: 10, color: t.accent ? 'var(--wf-accent)' : 'var(--wf-ink-soft)' }}>● {t.status}</div>
              <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginTop: 4 }}>{t.price}</div>
            </div>
          </div>
          <div style={{ display: 'flex', borderTop: '1.5px dashed var(--wf-ink-faint)' }}>
            {['Contact', 'Agenda', 'Reçu'].map((l, j) => (
              <div key={j} style={{ flex: 1, padding: 8, textAlign: 'center', borderRight: j < 2 ? '1px dashed var(--wf-ink-faint)' : 'none' }} className="wf-h">
                <span style={{ fontSize: 11 }}>{l}</span>
              </div>
            ))}
          </div>
        </Box>
      ))}
    </div>
    <TabBar
      active={2}
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

// ── Messagerie (inbox) ──────────────────────────────────────
const MessagerieA = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div className="wf-pagehead">
      <h2 className="wf-pagehead__title">Inbox · Messages</h2>
      <Burger />
    </div>
    {/* Filter chips */}
    <div style={{ display: 'flex', gap: 6, padding: '4px 14px 8px', overflow: 'hidden' }}>
      <Tab active>Tous · All</Tab>
      <Tab>Logements</Tab>
      <Tab>Services</Tab>
      <Tab>Auto</Tab>
      <Tab>Support</Tab>
    </div>

    {/* Conversations */}
    <div style={{ padding: '0 0 0' }}>
      {[
        { name: 'Daniel (hôte) · Studio', last: 'Bonjour ! La clé sera…', when: '14:32', unread: 2, type: 'Logements' },
        { name: 'Aïssatou (loc.) · RAV4', last: 'Merci pour la voiture', when: 'hier', type: 'Auto' },
        { name: 'Salon Élégance', last: 'Rendez-vous confirmé ✓', when: 'mar.', type: 'Services' },
        { name: 'Support les meubles', last: 'Comment pouvons-nous…', when: 'lun.', type: 'Support', accent: true },
        { name: 'Jean B. (hôte) · Villa', last: 'Tarif négociable jusqu\'à…', when: '12/05', type: 'Logements' },
      ].map((m, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '12px 14px', borderBottom: '1px dashed var(--wf-ink-faint)' }}>
          <Circle size={42}>{m.name[0]}</Circle>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
              <span className="wf-h" style={{ fontSize: 13, fontWeight: m.unread ? 600 : 400 }}>{m.name}</span>
              <span className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)' }}>{m.when}</span>
            </div>
            <div className="wf-mono" style={{ fontSize: 11, color: 'var(--wf-ink-soft)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.last}</div>
            <div style={{ marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
              <Chip>{m.type}</Chip>
              {m.unread && <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--wf-accent)', color: '#fff', fontSize: 10, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--wf-font-hand)' }}>{m.unread}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
    <TabBar
      active={3}
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

// ── Chat thread (alt variation) ─────────────────────────────
const ChatThread = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div className="wf-pagehead" style={{ borderBottom: '1.5px solid var(--wf-ink-faint)' }}>
      <Back />
      <Circle size={36}>D</Circle>
      <div style={{ flex: 1 }}>
        <div className="wf-h" style={{ fontSize: 14 }}>Daniel · Hôte</div>
        <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>Studio Bonapriso · en ligne</div>
      </div>
      <span style={{ fontSize: 16 }}>📞</span>
    </div>
    <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)', textAlign: 'center', margin: '4px 0' }}>— Aujourd'hui 14:30 —</div>
      <div style={{ alignSelf: 'flex-start', maxWidth: '75%' }}>
        <Box style={{ padding: '8px 10px', borderTopLeftRadius: 4 }}>
          <span className="wf-h" style={{ fontSize: 12 }}>Bonjour ! Bienvenue. Votre arrivée prévue à quelle heure ?</span>
        </Box>
        <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)', marginTop: 2 }}>14:31</div>
      </div>
      <div style={{ alignSelf: 'flex-end', maxWidth: '75%' }}>
        <Box accent style={{ padding: '8px 10px', borderTopRightRadius: 4 }}>
          <span className="wf-h" style={{ fontSize: 12 }}>Bonsoir, vers 19h si tout va bien.</span>
        </Box>
        <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)', marginTop: 2, textAlign: 'right' }}>14:32 ✓✓</div>
      </div>
      <div style={{ alignSelf: 'flex-start', maxWidth: '75%' }}>
        <Box style={{ padding: '8px 10px', borderTopLeftRadius: 4 }}>
          <span className="wf-h" style={{ fontSize: 12 }}>Parfait, je vous attendrai 👍</span>
        </Box>
      </div>
      <div style={{ alignSelf: 'flex-start', maxWidth: '75%' }}>
        <Img w={120} h={80} label="photo · clé" />
      </div>
    </div>
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 10, borderTop: '1.5px solid var(--wf-ink-faint)', display: 'flex', gap: 6, alignItems: 'center', background: 'var(--wf-paper)' }}>
      <Circle size={32}>+</Circle>
      <Box style={{ flex: 1, padding: '8px 12px' }}>
        <span className="wf-h" style={{ fontSize: 12, color: 'var(--wf-ink-soft)' }}>Écrire un message…</span>
      </Box>
      <Circle size={32} ink>→</Circle>
    </div>
  </Page>
);

// ── Reviews list (page Tous les avis) ───────────────────────
const ReviewsAll = () => (
  <Page style={{ paddingBottom: 14 }}>
    <div className="wf-pagehead">
      <Back />
      <h2 className="wf-pagehead__title">Avis · 124</h2>
    </div>

    {/* Overall + breakdown */}
    <div style={{ padding: '0 14px 14px', display: 'flex', gap: 14, alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div className="wf-script" style={{ fontSize: 42, color: 'var(--wf-accent)', lineHeight: 1 }}>4.92</div>
        <Stars sm />
        <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>124 avis</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {[5,4,3,2,1].map(n => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span className="wf-mono" style={{ fontSize: 9, width: 8 }}>{n}</span>
            <div style={{ flex: 1, height: 6, background: 'var(--wf-paper-shade)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: n === 5 ? '90%' : n === 4 ? '50%' : n === 3 ? '20%' : '5%', background: 'var(--wf-ink)' }} />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Sub-scores */}
    <div style={{ padding: '0 14px 14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
      {[['Propreté','4.9'],['Précision','4.8'],['Communication','5.0'],['Localisation','4.7']].map(([k,v],i)=>(
        <Box key={i} shade style={{ padding: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="wf-h" style={{ fontSize: 12 }}>{k}</span>
          <span className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>{v}</span>
        </Box>
      ))}
    </div>

    {/* Keyword cloud */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)', marginBottom: 6 }}>Mots-clés · Keywords</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {['propre (52)','calme (38)','bien situé (31)','hôte sympa (29)','climatisation (18)','accueillant (15)'].map((k,i)=>(
          <Chip key={i}>{k}</Chip>
        ))}
      </div>
    </div>

    {/* Sort */}
    <div style={{ padding: '0 14px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1.5px dashed var(--wf-ink-faint)' }}>
      <span className="wf-h" style={{ fontSize: 13 }}>124 avis</span>
      <Btn sm>Trier : pertinents ↓</Btn>
    </div>

    {/* Reviews list */}
    <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
      {[
        { n: 'Aïssatou', d: 'mai 2026', txt: 'Studio impeccable, vue magnifique sur Bonapriso. Daniel très réactif.' },
        { n: 'Marc B.', d: 'avril 2026', txt: 'Très bien situé, je recommande pour un séjour pro.' },
        { n: 'Estelle', d: 'avril 2026', txt: 'Climatisation au top, eau chaude. Rien à redire.' },
      ].map((r, i) => (
        <div key={i}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <Circle size={32}>{r.n[0]}</Circle>
            <div>
              <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>{r.n}</div>
              <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)' }}>{r.d}</div>
            </div>
            <Stars sm style={{ marginLeft: 'auto' }} />
          </div>
          <div className="wf-h" style={{ fontSize: 12, lineHeight: 1.35 }}>« {r.txt} »</div>
        </div>
      ))}
    </div>

    <div style={{ padding: 14, textAlign: 'center' }}>
      <Btn>Charger plus →</Btn>
    </div>
  </Page>
);

Object.assign(window, { TripsA, MessagerieA, ChatThread, ReviewsAll });
