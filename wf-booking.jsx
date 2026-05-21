// Booking / Payment / Confirmation wireframes

// ── Variant A: Single-page summary + payment ─────────────────
const BookingA = () => (
  <Page style={{ paddingBottom: 80, position: 'relative' }}>
    <div className="wf-pagehead">
      <Back />
      <h2 className="wf-pagehead__title">Confirmer · Confirm</h2>
    </div>

    {/* Listing summary */}
    <div style={{ padding: '0 14px 14px' }}>
      <Box style={{ padding: 10, display: 'flex', gap: 10 }}>
        <Img w={70} h={70} label="photo" />
        <div style={{ flex: 1 }}>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.2 }}>Studio cosy · Bonapriso</div>
          <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Studio entier · 2 voy.</div>
          <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>★ 4.92 (78)</div>
        </div>
      </Box>
    </div>

    {/* Trip details */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Votre voyage · Your trip</div>
      {[
        ['Dates', '23-28 mai 2026'],
        ['Voyageurs', '2 adultes'],
        ['Adresse', 'Bonapriso, Douala'],
      ].map(([k, v], i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px dashed var(--wf-ink-faint)' }}>
          <span className="wf-mono" style={{ fontSize: 11, color: 'var(--wf-ink-soft)' }}>{k}</span>
          <span className="wf-h" style={{ fontSize: 13 }}>{v}</span>
        </div>
      ))}
    </div>

    {/* Price breakdown */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Détails du prix · Price details</div>
      {[
        ['25 000 F × 5 nuits', '125 000 F'],
        ['Frais de service', '8 000 F'],
        ['Taxes (TVA)', '2 400 F'],
      ].map(([k, v], i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
          <span className="wf-h" style={{ fontSize: 13 }}>{k}</span>
          <span className="wf-h" style={{ fontSize: 13 }}>{v}</span>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0 0', borderTop: '1.5px solid var(--wf-ink)', marginTop: 6 }}>
        <span className="wf-h" style={{ fontSize: 14, fontWeight: 600 }}>Total (FCFA)</span>
        <span className="wf-h" style={{ fontSize: 14, fontWeight: 600 }}>135 400 F</span>
      </div>
    </div>

    {/* Payment method */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 6 }}>Paiement · Pay with</div>
      {[
        { name: 'MTN Mobile Money', sub: '+237 6•• •• •• 47', selected: true },
        { name: 'Orange Money', sub: 'Ajouter un numéro' },
        { name: 'Carte VISA / Mastercard', sub: 'Ajouter' },
        { name: 'Espèces à la remise des clés', sub: 'Cash on key-handover', accent: true },
      ].map((p, i) => (
        <Box key={i} accent={p.accent && p.selected} style={{ padding: 10, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 18, height: 18, borderRadius: '50%', border: '1.5px solid var(--wf-ink)', background: p.selected ? 'var(--wf-ink)' : 'transparent', flexShrink: 0, padding: 3, boxSizing: 'border-box' }}>
            {p.selected && <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--wf-paper)' }} />}
          </div>
          <div style={{ flex: 1 }}>
            <div className="wf-h" style={{ fontSize: 13 }}>{p.name}</div>
            <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>{p.sub}</div>
          </div>
          {p.accent && <Chip>BADGE</Chip>}
        </Box>
      ))}
    </div>

    {/* Cancellation */}
    <div style={{ padding: '0 14px 80px' }}>
      <Note style={{ marginBottom: 10 }}>
        <strong>Politique d'annulation</strong> · Annulation gratuite jusqu'au 21 mai. Après : 50%.
      </Note>
    </div>

    <ReserveBar price="135 400 F" unit="Total · 5 nuits" cta="Confirmer & payer" />
  </Page>
);

// ── Variant B: Multi-step (stepper at top) ───────────────────
const BookingB = () => (
  <Page style={{ paddingBottom: 80, position: 'relative' }}>
    <div className="wf-pagehead">
      <Back />
      <h2 className="wf-pagehead__title">Réservation · Step 2/3</h2>
    </div>
    {/* Stepper */}
    <div style={{ padding: '0 14px 14px', display: 'flex', gap: 6, alignItems: 'center' }}>
      <div style={{ flex: 1, height: 4, background: 'var(--wf-ink)', borderRadius: 2 }} />
      <div style={{ flex: 1, height: 4, background: 'var(--wf-accent)', borderRadius: 2 }} />
      <div style={{ flex: 1, height: 4, background: 'var(--wf-paper-darker)', borderRadius: 2 }} />
    </div>
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 18 }}>Comment payez-vous ?</div>
      <Bilingual fr="2 modes possibles" en="2 options available" />
    </div>

    {/* Two big cards: online vs cash */}
    <div style={{ padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Box style={{ padding: 14, borderWidth: 3 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <div style={{ width: 36, height: 36, border: '2px solid var(--wf-ink)', borderRadius: 8, background: 'var(--wf-paper-shade)' }} />
          <div className="wf-h" style={{ fontSize: 15, fontWeight: 600 }}>Payer en ligne</div>
          <div style={{ marginLeft: 'auto', width: 20, height: 20, borderRadius: '50%', border: '2px solid var(--wf-ink)', background: 'var(--wf-ink)' }} />
        </div>
        <Bilingual fr="MTN MoMo · Orange Money · Carte" en="Confirmé immédiatement · Instant" />
        <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
          <Chip>MoMo</Chip><Chip>Orange</Chip><Chip>VISA</Chip>
        </div>
      </Box>

      <Box style={{ padding: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <div style={{ width: 36, height: 36, border: '2px solid var(--wf-ink)', borderRadius: 8, background: 'var(--wf-paper-shade)' }} />
          <div className="wf-h" style={{ fontSize: 15, fontWeight: 600 }}>Payer à la remise des clés</div>
          <div style={{ marginLeft: 'auto', width: 20, height: 20, borderRadius: '50%', border: '2px solid var(--wf-ink)' }} />
        </div>
        <Bilingual fr="Espèces ou MoMo sur place" en="Cash or MoMo on key handover" />
        <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)', marginTop: 6 }}>⚐ Statut : en attente de paiement sur place</div>
      </Box>
    </div>

    {/* Mini summary */}
    <div style={{ padding: '0 14px 80px' }}>
      <Box shade style={{ padding: 10 }}>
        <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Récap · Summary</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
          <span className="wf-h" style={{ fontSize: 13 }}>Studio Bonapriso · 5 nuits</span>
          <span className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>135 400 F</span>
        </div>
      </Box>
    </div>

    <div className="wf-bottombar">
      <Btn>← Retour</Btn>
      <div style={{ flex: 1 }} />
      <Btn solid>Continuer →</Btn>
    </div>
  </Page>
);

// ── Variant C: Confirmation screen ───────────────────────────
const ConfirmationC = () => (
  <Page style={{ paddingBottom: 80, position: 'relative', display: 'flex', flexDirection: 'column', minHeight: 680 }}>
    <div style={{ padding: '24px 18px 14px', textAlign: 'center' }}>
      <div style={{ width: 70, height: 70, borderRadius: '50%', border: '2.5px solid var(--wf-accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 38, color: 'var(--wf-accent)' }}>✓</span>
      </div>
      <div className="wf-h" style={{ fontSize: 20 }}>Réservation confirmée !</div>
      <Bilingual fr="Email envoyé · Reçu #LM-238041" en="Email sent · Receipt #LM-238041" style={{ marginTop: 4 }} />
    </div>

    <div style={{ padding: '0 14px 14px' }}>
      <Box style={{ padding: 12, display: 'flex', gap: 10 }}>
        <Img w={60} h={60} label="photo" />
        <div style={{ flex: 1 }}>
          <div className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>Studio Bonapriso, Douala</div>
          <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>23-28 mai · 2 voy. · 135 400 F</div>
          <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Paiement : à la remise des clés</div>
        </div>
      </Box>
    </div>

    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 14, marginBottom: 8 }}>Prochaines étapes · Next steps</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Btn block>📅 Ajouter à Google Agenda</Btn>
        <Btn block>📞 Contacter l'hôte (appel)</Btn>
        <Btn block>✉ Envoyer un message</Btn>
        <Btn block ghost>↗ Partager le reçu</Btn>
      </div>
    </div>

    <div style={{ padding: '0 14px 14px' }}>
      <Note>
        Instructions de remise des clés envoyées par email.
      </Note>
    </div>

    <div style={{ padding: '14px', marginTop: 'auto' }}>
      <Btn block solid>Voir mes Trips →</Btn>
    </div>
  </Page>
);

Object.assign(window, { BookingA, BookingB, ConfirmationC });
