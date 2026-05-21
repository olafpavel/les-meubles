// Missing screens — host back-office, reviews, reports, etc.
// Same lo-fi vocabulary as the rest of the wireframes.

// ─────────────────────────────────────────────────────────────
// HOST BACK-OFFICE · Forfait recap
// ─────────────────────────────────────────────────────────────
const HostPackageRecap = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div className="wf-pagehead">
      <Back />
      <h2 className="wf-pagehead__title">Mon forfait</h2>
      <NotifBell count={5} />
      <span className="wf-mono" style={{ fontSize: 10 }}>Aide ?</span>
    </div>

    {/* Active plan card */}
    <div style={{ padding: '0 14px 12px' }}>
      <Box accent style={{ padding: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="wf-mono" style={{ fontSize: 10, opacity: 0.85 }}>Plan actuel · Current</div>
            <div className="wf-h" style={{ fontSize: 22, fontWeight: 600, color: '#fff' }}>Standard</div>
            <div className="wf-mono" style={{ fontSize: 10, opacity: 0.85 }}>5 annonces · 5 000 F /mois</div>
          </div>
          <Chip ink>Actif ✓</Chip>
        </div>
        <hr style={{ border: 0, borderTop: '1px dashed rgba(255,255,255,0.4)', margin: '10px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div className="wf-mono" style={{ fontSize: 9, opacity: 0.8 }}>Prochaine échéance</div>
            <div className="wf-h" style={{ fontSize: 13, color: '#fff' }}>05 juin 2026</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="wf-mono" style={{ fontSize: 9, opacity: 0.8 }}>Payé par</div>
            <div className="wf-h" style={{ fontSize: 13, color: '#fff' }}>MTN MoMo · 6 78</div>
          </div>
        </div>
      </Box>
    </div>

    {/* Usage */}
    <div style={{ padding: '0 14px 12px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Utilisation</div>
      <Box style={{ padding: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span className="wf-h" style={{ fontSize: 13 }}>Annonces publiées</span>
          <span className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>3 / 5</span>
        </div>
        <div style={{ height: 8, background: 'var(--wf-paper-shade)', borderRadius: 4, overflow: 'hidden', border: '1px solid var(--wf-ink-faint)' }}>
          <div style={{ width: '60%', height: '100%', background: 'var(--wf-accent)' }} />
        </div>
        <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)', marginTop: 4 }}>
          2 slots libres · upgrade pour +5
        </div>
      </Box>
    </div>

    {/* Actions */}
    <div style={{ padding: '0 14px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Btn block accent>↑ Passer à Pro · 12 000 F /mois</Btn>
      <Btn block>Changer de forfait</Btn>
    </div>

    {/* Billing history */}
    <div style={{ padding: '0 14px 14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
        <span className="wf-h" style={{ fontSize: 14 }}>Historique · History</span>
        <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Tout voir →</span>
      </div>
      {[
        { d: '05 mai 2026', a: '5 000 F', s: 'MTN MoMo', ok: true },
        { d: '05 avr. 2026', a: '5 000 F', s: 'MTN MoMo', ok: true },
        { d: '05 mars 2026', a: '5 000 F', s: 'Orange Money', ok: true },
        { d: '05 fév. 2026', a: '5 000 F', s: 'Échec → relance', ok: false },
      ].map((r, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '10px 0', borderBottom: '1px dashed var(--wf-ink-faint)' }}>
          <div style={{ flex: 1 }}>
            <div className="wf-h" style={{ fontSize: 13 }}>{r.d}</div>
            <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>{r.s}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>{r.a}</div>
            <div className="wf-mono" style={{ fontSize: 9, color: r.ok ? 'var(--wf-ink-soft)' : 'var(--wf-accent)' }}>
              {r.ok ? '✓ Payé' : '⚠ Échec'}
            </div>
          </div>
          <span style={{ marginLeft: 10, fontSize: 14, color: 'var(--wf-ink-soft)' }}>↓</span>
        </div>
      ))}
    </div>

    {/* Cancel link */}
    <div style={{ padding: '0 14px 20px', textAlign: 'center' }}>
      <span className="wf-h" style={{ fontSize: 12, color: 'var(--wf-accent)', textDecoration: 'underline' }}>
        Résilier le forfait
      </span>
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

// ─────────────────────────────────────────────────────────────
// HOST · Statistiques détaillées
// ─────────────────────────────────────────────────────────────
const HostStatsDetail = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div className="wf-pagehead">
      <Back />
      <h2 className="wf-pagehead__title">Statistiques</h2>
      <NotifBell count={5} />
      <span className="wf-mono" style={{ fontSize: 10 }}>⇣ CSV</span>
    </div>

    {/* Period tabs */}
    <div style={{ display: 'flex', gap: 6, padding: '0 14px 10px', overflow: 'hidden' }}>
      <Tab>7 j</Tab>
      <Tab active>30 j</Tab>
      <Tab>90 j</Tab>
      <Tab>Année</Tab>
      <Tab>↧</Tab>
    </div>

    {/* Listing filter */}
    <div style={{ padding: '0 14px 10px' }}>
      <Box style={{ padding: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Annonce :</span>
        <span className="wf-h" style={{ fontSize: 12, fontWeight: 600, flex: 1 }}>Toutes (3) ▾</span>
        <span style={{ fontSize: 12 }}>⌕</span>
      </Box>
    </div>

    {/* Big number + sparkline */}
    <div style={{ padding: '0 14px 12px' }}>
      <Box style={{ padding: 12 }}>
        <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Revenus · 30 derniers jours</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span className="wf-h" style={{ fontSize: 30, fontWeight: 600 }}>1 240 000 F</span>
          <span className="wf-mono" style={{ fontSize: 11, color: 'var(--wf-accent)' }}>↑ 18 %</span>
        </div>
        {/* Lo-fi sparkline */}
        <svg viewBox="0 0 280 70" style={{ width: '100%', height: 70, marginTop: 6 }}>
          <polyline
            fill="none"
            stroke="var(--wf-ink)"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            points="0,52 20,48 40,55 60,42 80,46 100,38 120,40 140,30 160,34 180,22 200,28 220,18 240,24 260,12 280,16"
          />
          {/* baseline ticks */}
          <line x1="0" y1="68" x2="280" y2="68" stroke="var(--wf-ink-faint)" strokeWidth="1" strokeDasharray="2 3" />
        </svg>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)' }}>20 avr.</span>
          <span className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)' }}>19 mai</span>
        </div>
      </Box>
    </div>

    {/* KPI grid */}
    <div style={{ padding: '0 14px 12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
      {[
        { v: '34', l: 'Réservations', d: '↑ 12 %' },
        { v: '78 %', l: 'Taux occup.', d: '↑ 4 pts' },
        { v: '4.92', l: 'Note moy.', d: '— stable' },
        { v: '2 145', l: 'Vues annonce', d: '↑ 22 %' },
        { v: '14 %', l: 'Vue → résa', d: '↓ 1 pt' },
        { v: '12 min', l: 'Temps répo.', d: '↓ 3 min' },
      ].map((k, i) => (
        <Box key={i} shade style={{ padding: 10 }}>
          <div className="wf-h" style={{ fontSize: 18, fontWeight: 600 }}>{k.v}</div>
          <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>{k.l}</div>
          <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)', marginTop: 2 }}>{k.d}</div>
        </Box>
      ))}
    </div>

    {/* Breakdown by listing */}
    <div style={{ padding: '0 14px 12px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Répartition par annonce</div>
      {[
        { n: 'Studio Bonapriso', v: '720 k F', pct: 58 },
        { n: 'Toyota RAV4 2022', v: '320 k F', pct: 26 },
        { n: 'Salon Élégance', v: '200 k F', pct: 16 },
      ].map((r, i) => (
        <div key={i} style={{ marginBottom: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="wf-h" style={{ fontSize: 12 }}>{r.n}</span>
            <span className="wf-h" style={{ fontSize: 12, fontWeight: 600 }}>{r.v}</span>
          </div>
          <div style={{ height: 6, background: 'var(--wf-paper-shade)', borderRadius: 3, marginTop: 2, border: '1px solid var(--wf-ink-faint)' }}>
            <div style={{ width: r.pct + '%', height: '100%', background: i === 0 ? 'var(--wf-accent)' : 'var(--wf-ink)' }} />
          </div>
        </div>
      ))}
    </div>

    {/* Vues / sources mini-bar */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Sources de trafic</div>
      <Box style={{ padding: 10 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 80 }}>
          {[
            { h: 70, l: 'Recherche' },
            { h: 48, l: 'Wishlist' },
            { h: 38, l: 'Carte' },
            { h: 24, l: 'Lien direct' },
            { h: 14, l: 'Sponsor.' },
          ].map((b, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ width: '100%', height: b.h, background: i === 0 ? 'var(--wf-accent)' : 'var(--wf-ink)', border: '1px solid var(--wf-ink)', borderRadius: 2 }} />
              <span className="wf-mono" style={{ fontSize: 8, color: 'var(--wf-ink-soft)', textAlign: 'center' }}>{b.l}</span>
            </div>
          ))}
        </div>
      </Box>
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
  </Page>
);

// ─────────────────────────────────────────────────────────────
// HOST · Payouts (revenus à verser)
// ─────────────────────────────────────────────────────────────
const HostPayouts = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div className="wf-pagehead">
      <Back />
      <h2 className="wf-pagehead__title">Versements</h2>
      <NotifBell count={5} />
    </div>

    {/* Available balance */}
    <div style={{ padding: '0 14px 12px' }}>
      <Box style={{ padding: 14, textAlign: 'center' }}>
        <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Disponible · Available</div>
        <div className="wf-h" style={{ fontSize: 32, fontWeight: 600, lineHeight: 1.1 }}>248 500 F</div>
        <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)', marginBottom: 8 }}>
          + 85 000 F en attente (résa à venir)
        </div>
        <Btn block accent>Retirer vers MoMo</Btn>
      </Box>
    </div>

    {/* Payout method */}
    <div style={{ padding: '0 14px 12px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Méthode de versement</div>
      <Box style={{ padding: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, border: '1.5px solid var(--wf-ink)', borderRadius: 6, background: 'var(--wf-paper-shade)' }} />
        <div style={{ flex: 1 }}>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>MTN MoMo · 6 78 ** ** 42</div>
          <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>Daniel Eboa · vérifié</div>
        </div>
        <Btn sm>Modifier</Btn>
      </Box>
    </div>

    {/* History */}
    <div style={{ padding: '0 14px 14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
        <span className="wf-h" style={{ fontSize: 14 }}>Historique versements</span>
        <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Filtrer ▾</span>
      </div>
      {[
        { d: '12 mai 2026', a: '180 000 F', s: 'Versé', ok: true },
        { d: '28 avr. 2026', a: '210 000 F', s: 'Versé', ok: true },
        { d: '14 avr. 2026', a: '95 000 F', s: 'Versé', ok: true },
        { d: '31 mars 2026', a: '320 000 F', s: 'Versé', ok: true },
      ].map((r, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '10px 0', borderBottom: '1px dashed var(--wf-ink-faint)' }}>
          <div style={{ flex: 1 }}>
            <div className="wf-h" style={{ fontSize: 13 }}>{r.d}</div>
            <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>{r.s} · MoMo 6 78</div>
          </div>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>{r.a}</div>
          <span style={{ marginLeft: 10, fontSize: 14, color: 'var(--wf-ink-soft)' }}>›</span>
        </div>
      ))}
    </div>

    <div style={{ padding: '0 14px 14px' }}>
      <Note>
        Frais plateforme : 6 % par résa. Versement sous 24h vers MoMo / Orange.
      </Note>
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

// ─────────────────────────────────────────────────────────────
// REVIEW · Dépôt d'avis (guest → host)
// ─────────────────────────────────────────────────────────────
const ReviewLeaveGuest = () => (
  <Page style={{ paddingBottom: 80, position: 'relative' }}>
    <div className="wf-pagehead">
      <span style={{ fontSize: 16 }}>✕</span>
      <h2 className="wf-pagehead__title">Laisser un avis</h2>
    </div>

    {/* Listing recap */}
    <div style={{ padding: '0 14px 12px' }}>
      <Box shade style={{ padding: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
        <Img w={50} h={50} label="" />
        <div style={{ flex: 1 }}>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>Studio cosy · Bonapriso</div>
          <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>Séjour du 12 → 15 mai · Daniel</div>
        </div>
      </Box>
    </div>

    {/* Global star rating */}
    <div style={{ padding: '0 14px 12px', textAlign: 'center' }}>
      <div className="wf-h" style={{ fontSize: 16, marginBottom: 6 }}>Note globale</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
        {[1,2,3,4,5].map(i => (
          <span key={i} style={{ fontSize: 30, color: i <= 4 ? 'var(--wf-accent)' : 'var(--wf-ink-faint)' }}>★</span>
        ))}
      </div>
      <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)', marginTop: 4 }}>
        4 / 5 · Très bien · Very good
      </div>
    </div>

    {/* Sub-categories */}
    <div style={{ padding: '0 14px 12px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Détails</div>
      {[
        { l: 'Propreté · Cleanliness', n: 5 },
        { l: 'Communication', n: 5 },
        { l: 'Précision annonce · Accuracy', n: 4 },
        { l: 'Emplacement · Location', n: 4 },
        { l: 'Rapport qualité-prix', n: 3 },
      ].map((c, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '6px 0', borderBottom: '1px dashed var(--wf-ink-faint)' }}>
          <span className="wf-h" style={{ fontSize: 12, flex: 1 }}>{c.l}</span>
          <Stars filled={c.n} sm />
        </div>
      ))}
    </div>

    {/* Comment box */}
    <div style={{ padding: '0 14px 12px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Commentaire public</div>
      <Box style={{ padding: 10, minHeight: 90 }}>
        <Scribble w={80} /><Scribble w={80} /><Scribble w={60} /><Scribble w={40} soft />
      </Box>
      <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)', marginTop: 4 }}>
        Visible par tous · 0 / 500
      </div>
    </div>

    {/* Private feedback */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Message privé à l'hôte</div>
      <Box dashed style={{ padding: 10, minHeight: 50 }}>
        <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-faint)' }}>
          Optionnel · seulement vu par Daniel
        </span>
      </Box>
    </div>

    {/* Photos */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Photos (optionnel)</div>
      <div style={{ display: 'flex', gap: 6 }}>
        <Img w={56} h={56} label="" />
        <div style={{ width: 56, height: 56, border: '2px dashed var(--wf-ink)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="wf-script" style={{ fontSize: 22 }}>+</span>
        </div>
      </div>
    </div>

    <div className="wf-bottombar">
      <Btn ghost>Plus tard</Btn>
      <div style={{ flex: 1 }} />
      <Btn accent>Publier l'avis</Btn>
    </div>
  </Page>
);

// ─────────────────────────────────────────────────────────────
// REVIEW · Dépôt d'avis (host → guest)
// ─────────────────────────────────────────────────────────────
const ReviewLeaveHost = () => (
  <Page style={{ paddingBottom: 80, position: 'relative' }}>
    <div className="wf-pagehead">
      <span style={{ fontSize: 16 }}>✕</span>
      <h2 className="wf-pagehead__title">Noter votre locataire</h2>
    </div>

    {/* Guest recap */}
    <div style={{ padding: '0 14px 12px' }}>
      <Box shade style={{ padding: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
        <Circle size={44}>A</Circle>
        <div style={{ flex: 1 }}>
          <div className="wf-h" style={{ fontSize: 14, fontWeight: 600 }}>Aïssatou N.</div>
          <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>Studio Bonapriso · 12 → 15 mai</div>
        </div>
      </Box>
    </div>

    {/* Thumb up/down */}
    <div style={{ padding: '0 14px 12px', textAlign: 'center' }}>
      <div className="wf-h" style={{ fontSize: 15, marginBottom: 8 }}>Le recommanderiez-vous ?</div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <div style={{ flex: 1, padding: 12, border: '3px solid var(--wf-ink)', borderRadius: 8, background: 'var(--wf-accent-soft)' }}>
          <div style={{ fontSize: 28 }}>👍</div>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>Oui</div>
        </div>
        <div style={{ flex: 1, padding: 12, border: '2px solid var(--wf-ink)', borderRadius: 8 }}>
          <div style={{ fontSize: 28 }}>👎</div>
          <div className="wf-h" style={{ fontSize: 13 }}>Non</div>
        </div>
      </div>
    </div>

    {/* Categories */}
    <div style={{ padding: '0 14px 12px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Sur les points suivants</div>
      {[
        { l: 'Propreté laissée', n: 5 },
        { l: 'Communication', n: 5 },
        { l: 'Respect du règlement', n: 4 },
      ].map((c, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '6px 0', borderBottom: '1px dashed var(--wf-ink-faint)' }}>
          <span className="wf-h" style={{ fontSize: 12, flex: 1 }}>{c.l}</span>
          <Stars filled={c.n} sm />
        </div>
      ))}
    </div>

    {/* Tags */}
    <div style={{ padding: '0 14px 12px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Points forts (tag, optionnel)</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {['Ponctuel ✓', 'Discret ✓', 'Soigneux', 'Sympa ✓', 'Communicatif'].map((t, i) => (
          <Chip key={i} accent={t.includes('✓')} ink={!t.includes('✓')}>{t}</Chip>
        ))}
      </div>
    </div>

    {/* Public comment */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Commentaire public</div>
      <Box style={{ padding: 10, minHeight: 70 }}>
        <Scribble w={80} /><Scribble w={60} />
      </Box>
    </div>

    <div className="wf-bottombar">
      <Btn ghost>Plus tard</Btn>
      <div style={{ flex: 1 }} />
      <Btn accent>Envoyer</Btn>
    </div>
  </Page>
);

// ─────────────────────────────────────────────────────────────
// SIGNALEMENT · Report a listing/user
// ─────────────────────────────────────────────────────────────
const ReportFlow = () => (
  <Page style={{ paddingBottom: 80, position: 'relative' }}>
    <div className="wf-pagehead">
      <span style={{ fontSize: 16 }}>✕</span>
      <h2 className="wf-pagehead__title">Signaler</h2>
    </div>

    <div style={{ padding: '0 14px 12px' }}>
      <div className="wf-h" style={{ fontSize: 18, marginBottom: 4 }}>Quel est le problème ?</div>
      <Bilingual fr="Votre signalement est confidentiel" en="Your report is confidential" />
    </div>

    {/* What is being reported */}
    <div style={{ padding: '0 14px 12px' }}>
      <Box shade style={{ padding: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
        <Img w={44} h={44} label="" />
        <div style={{ flex: 1 }}>
          <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>Annonce signalée</div>
          <div className="wf-h" style={{ fontSize: 12, fontWeight: 600 }}>Toyota RAV4 2022 · Bonanjo</div>
        </div>
      </Box>
    </div>

    {/* Reason list */}
    <div style={{ padding: '0 14px 14px' }}>
      {[
        { t: 'Annonce frauduleuse · Fake listing', sel: true },
        { t: 'Photos trompeuses', sel: false },
        { t: 'Prix abusif / discrimination' },
        { t: 'Contenu inapproprié · Inappropriate' },
        { t: 'Comportement de l\'hôte' },
        { t: 'Sécurité / danger' },
        { t: 'Autre · Other' },
      ].map((r, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', padding: '12px 12px',
          marginBottom: 6,
          border: r.sel ? '3px solid var(--wf-ink)' : '1.5px solid var(--wf-ink-faint)',
          borderRadius: 6,
          background: r.sel ? 'var(--wf-accent-soft)' : 'var(--wf-paper)',
        }}>
          <span className="wf-h" style={{ fontSize: 13, flex: 1 }}>{r.t}</span>
          <div style={{ width: 18, height: 18, borderRadius: '50%', border: '2px solid var(--wf-ink)', padding: 3, boxSizing: 'border-box' }}>
            {r.sel && <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--wf-ink)' }} />}
          </div>
        </div>
      ))}
    </div>

    {/* Detail */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Décrivez (optionnel)</div>
      <Box dashed style={{ padding: 10, minHeight: 70 }}>
        <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-faint)' }}>
          Ce que vous avez observé, dates, captures…
        </span>
      </Box>
    </div>

    {/* Evidence */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Preuves (max 3)</div>
      <div style={{ display: 'flex', gap: 6 }}>
        <Img w={56} h={56} label="img" />
        <div style={{ width: 56, height: 56, border: '2px dashed var(--wf-ink)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="wf-script" style={{ fontSize: 22 }}>+</span>
        </div>
      </div>
    </div>

    <div className="wf-bottombar">
      <Btn>Annuler</Btn>
      <div style={{ flex: 1 }} />
      <Btn accent>Envoyer le signalement</Btn>
    </div>
  </Page>
);

// ─────────────────────────────────────────────────────────────
// PROMOTE · Sponsoriser une annonce
// ─────────────────────────────────────────────────────────────
const PromoteListing = () => (
  <Page style={{ paddingBottom: 80, position: 'relative' }}>
    <div className="wf-pagehead">
      <Back />
      <h2 className="wf-pagehead__title">Promouvoir</h2>
    </div>

    {/* Listing */}
    <div style={{ padding: '0 14px 12px' }}>
      <Box shade style={{ padding: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
        <Img w={56} h={56} label="" />
        <div style={{ flex: 1 }}>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>Studio Bonapriso</div>
          <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>Logement · 25 000 F /nuit</div>
        </div>
      </Box>
    </div>

    {/* Forecast */}
    <div style={{ padding: '0 14px 12px' }}>
      <Box accent style={{ padding: 12 }}>
        <div className="wf-mono" style={{ fontSize: 10, opacity: 0.85 }}>Estimation · 7 jours</div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
          <div>
            <div className="wf-h" style={{ fontSize: 22, fontWeight: 600, color: '#fff' }}>+ 3,2×</div>
            <div className="wf-mono" style={{ fontSize: 9, opacity: 0.85 }}>vues</div>
          </div>
          <div>
            <div className="wf-h" style={{ fontSize: 22, fontWeight: 600, color: '#fff' }}>+ 4-7</div>
            <div className="wf-mono" style={{ fontSize: 9, opacity: 0.85 }}>résa</div>
          </div>
        </div>
      </Box>
    </div>

    {/* Boost options */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Choisissez votre boost</div>
      {[
        { d: '3 jours', p: '2 000 F', s: 'En haut des résultats', sel: false },
        { d: '7 jours', p: '4 500 F', s: 'Haut résultats + badge ✨', sel: true },
        { d: '30 jours', p: '15 000 F', s: 'Haut + badge + push', sel: false },
      ].map((b, i) => (
        <Box key={i} style={{ padding: 12, marginBottom: 6, borderWidth: b.sel ? 3 : 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 18, height: 18, borderRadius: '50%', border: '2px solid var(--wf-ink)', padding: 3, boxSizing: 'border-box' }}>
              {b.sel && <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--wf-ink)' }} />}
            </div>
            <div style={{ flex: 1 }}>
              <div className="wf-h" style={{ fontSize: 14, fontWeight: 600 }}>{b.d}</div>
              <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>{b.s}</div>
            </div>
            <div className="wf-h" style={{ fontSize: 14, fontWeight: 600 }}>{b.p}</div>
          </div>
        </Box>
      ))}
    </div>

    {/* Audience */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Audience cible</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {['Douala', 'Yaoundé', 'Diaspora', 'Tous Cameroun ✓'].map((t, i) => (
          <Chip key={i} accent={t.includes('✓')} ink={!t.includes('✓')}>{t}</Chip>
        ))}
      </div>
    </div>

    <div className="wf-bottombar">
      <div>
        <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>Total</div>
        <div className="wf-h" style={{ fontSize: 16, fontWeight: 600 }}>4 500 F</div>
      </div>
      <div style={{ flex: 1 }} />
      <Btn accent>Lancer la campagne</Btn>
    </div>
  </Page>
);

// ─────────────────────────────────────────────────────────────
// NOTIFICATIONS
// ─────────────────────────────────────────────────────────────
const NotificationsInbox = () => (
  <Page style={{ paddingBottom: 70 }}>
    <div className="wf-pagehead">
      <Back />
      <h2 className="wf-pagehead__title">Notifications</h2>
      <span className="wf-mono" style={{ fontSize: 10 }}>Tout lu</span>
    </div>

    {/* Filter tabs */}
    <div style={{ display: 'flex', gap: 6, padding: '0 14px 10px' }}>
      <Tab active>Toutes · 12</Tab>
      <Tab>Résa</Tab>
      <Tab>Messages</Tab>
      <Tab>Système</Tab>
    </div>

    {/* Items */}
    <div style={{ padding: '0 14px 14px' }}>
      {[
        { i: '✓', t: 'Nouvelle réservation', d: 'Aïssatou — Studio Bonapriso · 12-15 mai', when: 'il y a 2 min', unread: true, accent: true },
        { i: '★', t: 'Avis 5 étoiles reçu', d: 'Marc B. — Salon Élégance', when: '1 h', unread: true },
        { i: '$', t: 'Versement effectué', d: '180 000 F vers MoMo 6 78', when: '3 h' },
        { i: '◐', t: 'Forfait Standard renouvelé', d: '5 000 F · MTN MoMo', when: 'hier' },
        { i: '!', t: 'Annonce nécessite vérification', d: 'Toyota RAV4 — assurance manquante', when: 'hier', accent: true },
        { i: '✉', t: 'Nouveau message', d: 'Daniel : "Je confirme l\'horaire..."', when: '2 j' },
        { i: '◇', t: 'Promo terminée', d: 'Studio Bonapriso · +84 vues', when: '3 j' },
      ].map((n, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '12px 0', borderBottom: '1px dashed var(--wf-ink-faint)', alignItems: 'flex-start' }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            border: '1.5px solid var(--wf-ink)',
            background: n.accent ? 'var(--wf-accent)' : 'var(--wf-paper)',
            color: n.accent ? '#fff' : 'var(--wf-ink)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, flexShrink: 0,
          }}>{n.i}</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span className="wf-h" style={{ fontSize: 13, fontWeight: n.unread ? 600 : 400, flex: 1 }}>{n.t}</span>
              <span className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)' }}>{n.when}</span>
            </div>
            <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>{n.d}</div>
          </div>
          {n.unread && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--wf-accent)', flexShrink: 0, marginTop: 6 }} />}
        </div>
      ))}
    </div>
  </Page>
);

// ─────────────────────────────────────────────────────────────
// VÉRIFICATION ID · KYC
// ─────────────────────────────────────────────────────────────
const VerifyID = () => (
  <Page style={{ paddingBottom: 80, position: 'relative' }}>
    <div className="wf-pagehead">
      <Back />
      <h2 className="wf-pagehead__title">Vérification</h2>
      <Chip accent>Étape 2/3</Chip>
    </div>

    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 20, marginBottom: 4 }}>Confirmez votre identité</div>
      <Bilingual fr="Requis pour héberger ou louer" en="Required to host or rent" />
    </div>

    {/* Progress checklist */}
    <div style={{ padding: '0 14px 14px' }}>
      {[
        { l: 'Téléphone vérifié', s: '6 78 *** *** 42', done: true },
        { l: 'Pièce d\'identité', s: 'CNI / Passeport — en cours', current: true },
        { l: 'Selfie de contrôle', s: 'Étape suivante' },
      ].map((s, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: '1px dashed var(--wf-ink-faint)' }}>
          <div style={{
            width: 26, height: 26, borderRadius: '50%',
            border: '1.5px solid var(--wf-ink)',
            background: s.done ? 'var(--wf-ink)' : s.current ? 'var(--wf-accent)' : 'var(--wf-paper)',
            color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12,
          }}>{s.done ? '✓' : s.current ? '2' : (i+1)}</div>
          <div style={{ flex: 1 }}>
            <div className="wf-h" style={{ fontSize: 13, fontWeight: s.current ? 600 : 400 }}>{s.l}</div>
            <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>{s.s}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Doc type */}
    <div style={{ padding: '0 14px 12px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Type de document</div>
      <div style={{ display: 'flex', gap: 6 }}>
        <Tab active>CNI</Tab>
        <Tab>Passeport</Tab>
        <Tab>Permis</Tab>
      </div>
    </div>

    {/* Doc upload — recto/verso */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Carte nationale d'identité</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <div style={{ aspectRatio: '1.55', border: '2px dashed var(--wf-ink)', borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--wf-paper-shade)' }}>
          <span className="wf-script" style={{ fontSize: 24 }}>📷</span>
          <span className="wf-h" style={{ fontSize: 11 }}>Recto</span>
        </div>
        <div style={{ aspectRatio: '1.55', border: '2px solid var(--wf-ink)', borderRadius: 6, background: 'var(--wf-paper-shade)', position: 'relative', overflow: 'hidden' }}>
          <Img h="100%" label="verso ✓" style={{ border: 'none', borderRadius: 0 }} />
        </div>
      </div>
      <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)', marginTop: 6 }}>
        Photo nette, 4 coins visibles, sans reflet
      </div>
    </div>

    {/* Privacy note */}
    <div style={{ padding: '0 14px 14px' }}>
      <Note>
        Vos documents sont chiffrés et supprimés après vérification (max 30 j).
      </Note>
    </div>

    <div className="wf-bottombar">
      <Btn ghost>Plus tard</Btn>
      <div style={{ flex: 1 }} />
      <Btn solid>Continuer →</Btn>
    </div>
  </Page>
);

Object.assign(window, {
  HostPackageRecap, HostStatsDetail, HostPayouts,
  ReviewLeaveGuest, ReviewLeaveHost,
  ReportFlow, PromoteListing,
  NotificationsInbox, VerifyID,
});
