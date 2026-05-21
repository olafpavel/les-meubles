// Add-listing multi-step wireframes — 4 steps shown
// Step 0: type picker · Step 1: service category (if service) · Step 2: form · Step 3: package picker

const Stepper = ({ at, total = 6 }) => (
  <div style={{ padding: '0 14px 10px', display: 'flex', gap: 4 }}>
    {Array.from({ length: total }).map((_, i) => (
      <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= at ? 'var(--wf-accent)' : 'var(--wf-paper-darker)' }} />
    ))}
  </div>
);

// ── Step 0: choose type ─────────────────────────────────
const AddStep0 = () => (
  <Page style={{ paddingBottom: 80, position: 'relative' }}>
    <div className="wf-pagehead">
      <span style={{ fontSize: 16 }}>✕</span>
      <h2 className="wf-pagehead__title">Nouvelle annonce</h2>
    </div>
    <Stepper at={0} />
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 20, marginBottom: 4 }}>Que voulez-vous proposer ?</div>
      <Bilingual fr="Vous pourrez en ajouter d'autres plus tard" en="You can add more later" />
    </div>
    <div style={{ padding: '6px 14px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { t: 'Logement · Home', s: 'Chambre, appart, villa, studio…', sel: true },
        { t: 'Automobile · Car', s: 'SUV, berline, utilitaire…' },
        { t: 'Service · Service', s: 'Coiffure, ménage, chef, gardien…' },
      ].map((o, i) => (
        <Box key={i} style={{ padding: 14, borderWidth: o.sel ? 3 : 2, display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 50, height: 50, border: '1.5px solid var(--wf-ink)', borderRadius: 10, background: 'var(--wf-paper-shade)' }} />
          <div style={{ flex: 1 }}>
            <div className="wf-h" style={{ fontSize: 15, fontWeight: 600 }}>{o.t}</div>
            <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>{o.s}</div>
          </div>
          <div style={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid var(--wf-ink)', background: o.sel ? 'var(--wf-ink)' : 'transparent', padding: 3, boxSizing: 'border-box' }}>
            {o.sel && <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--wf-paper)' }} />}
          </div>
        </Box>
      ))}
    </div>
    <div className="wf-bottombar">
      <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>Étape 1/6</span>
      <div style={{ flex: 1 }} />
      <Btn solid>Continuer →</Btn>
    </div>
  </Page>
);

// ── Step 1: service category (if "Service" was chosen) ─────
const AddStepService = () => (
  <Page style={{ paddingBottom: 80, position: 'relative' }}>
    <div className="wf-pagehead">
      <Back />
      <h2 className="wf-pagehead__title">Quel service ?</h2>
    </div>
    <Stepper at={1} />
    <div style={{ padding: '0 14px 14px' }}>
      <Bilingual fr="Choisissez la catégorie principale" en="Pick the main category" />
    </div>
    <div style={{ padding: '0 14px 14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
      {[
        { t: 'Coiffure', s: 'Hair', sel: true },
        { t: 'Chef · Catering', s: 'Cuisine' },
        { t: 'Maquillage', s: 'Make-up' },
        { t: 'Massage / Spa', s: 'Wellness' },
        { t: 'Coach sportif', s: 'Fitness' },
        { t: 'Photographe', s: 'Photo' },
        { t: 'Ménage', s: 'Cleaning' },
        { t: 'Gardiennage', s: 'Security' },
        { t: 'Menuiserie', s: 'Carpentry' },
        { t: 'Autre…', s: 'Other', dashed: true },
      ].map((c, i) => (
        <div key={i} style={{
          padding: 12, borderRadius: 8,
          border: c.dashed ? '2px dashed var(--wf-ink-faint)' : '2px solid var(--wf-ink)',
          background: c.sel ? 'var(--wf-accent-soft)' : 'var(--wf-paper)',
        }}>
          <div style={{ width: 26, height: 26, border: '1.5px solid var(--wf-ink)', borderRadius: 6, background: 'var(--wf-paper-shade)', marginBottom: 6 }} />
          <div className="wf-h" style={{ fontSize: 12, fontWeight: 600 }}>{c.t}</div>
          <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-soft)' }}>{c.s}</div>
        </div>
      ))}
    </div>
    <div className="wf-bottombar">
      <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>2/6</span>
      <div style={{ flex: 1 }} />
      <Btn solid>Continuer →</Btn>
    </div>
  </Page>
);

// ── Step 2: form (photos, title, description, etc) ─────────
const AddStepForm = () => (
  <Page style={{ paddingBottom: 80, position: 'relative' }}>
    <div className="wf-pagehead">
      <Back />
      <h2 className="wf-pagehead__title">Photos & titre</h2>
    </div>
    <Stepper at={3} />

    {/* Photos */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Photos · au moins 5</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        <Img h={70} label="1 · couv." />
        <Img h={70} label="2" />
        <Img h={70} label="3" />
        <div style={{ border: '2px dashed var(--wf-ink)', borderRadius: 6, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="wf-script" style={{ fontSize: 28 }}>+</span>
        </div>
      </div>
      <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)', marginTop: 4 }}>Glisser-déposer pour réordonner</div>
    </div>

    {/* Title */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Titre</div>
      <Box style={{ padding: '10px 12px' }}>
        <span className="wf-h" style={{ fontSize: 13 }}>Studio cosy avec vue · Bonapriso</span>
      </Box>
      <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)', marginTop: 4 }}>26 / 50 caractères</div>
    </div>

    {/* Description */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Description</div>
      <Box style={{ padding: 10, minHeight: 80 }}>
        <Scribble w={80} /><Scribble w={80} /><Scribble w={60} />
      </Box>
    </div>

    {/* Price */}
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Prix par nuit (FCFA)</div>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <Box style={{ padding: '10px 14px', flex: 1, textAlign: 'center' }}>
          <span className="wf-h" style={{ fontSize: 22, fontWeight: 600 }}>25 000</span>
        </Box>
        <span className="wf-mono" style={{ fontSize: 11 }}>F / nuit</span>
      </div>
      <div className="wf-mono" style={{ fontSize: 9, color: 'var(--wf-ink-faint)', marginTop: 4 }}>Suggestion : 22 000 - 30 000 F (zone Bonapriso)</div>
    </div>

    <div className="wf-bottombar">
      <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>4/6</span>
      <div style={{ flex: 1 }} />
      <Btn solid>Continuer →</Btn>
    </div>
  </Page>
);

// ── Step Service Menu (multi-prestation pricing — service only) ──
const AddStepServiceMenu = () => (
  <Page style={{ paddingBottom: 80, position: 'relative' }}>
    <div className="wf-pagehead">
      <Back />
      <h2 className="wf-pagehead__title">Menu de prix</h2>
    </div>
    <Stepper at={4} />
    <div style={{ padding: '0 14px 14px' }}>
      <Bilingual fr="Ajoutez vos prestations" en="Add your services" />
    </div>
    <div style={{ padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { n: 'Coupe + brushing', d: '45 min', p: '8 000 F', free: true },
        { n: 'Coloration', d: '120 min', p: '25 000 F' },
      ].map((s, i) => (
        <Box key={i} style={{ padding: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>{s.n}</span>
            <span className="wf-h" style={{ fontSize: 13, fontWeight: 600 }}>{s.p}</span>
          </div>
          <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>{s.d} {s.free && '· annulation gratuite ✓'}</div>
          <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
            <Btn sm>Modifier</Btn>
            <Btn sm ghost>Supprimer</Btn>
          </div>
        </Box>
      ))}
      <div style={{ border: '2px dashed var(--wf-ink)', borderRadius: 6, padding: 14, textAlign: 'center' }}>
        <span className="wf-script" style={{ fontSize: 22, display: 'block' }}>+</span>
        <span className="wf-h" style={{ fontSize: 12 }}>Ajouter une prestation</span>
      </div>
    </div>
    <div style={{ padding: '0 14px 14px' }}>
      <div className="wf-h" style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Années d'expérience</div>
      <Box style={{ padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="wf-h" style={{ fontSize: 14, fontWeight: 600 }}>7 ans</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <Circle size={28}>−</Circle>
          <Circle size={28}>+</Circle>
        </div>
      </Box>
    </div>
    <div className="wf-bottombar">
      <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>5/6</span>
      <div style={{ flex: 1 }} />
      <Btn solid>Continuer →</Btn>
    </div>
  </Page>
);

// ── Step Final: forfait picker ─────────────────────────────
const AddStepPackage = () => (
  <Page style={{ paddingBottom: 80, position: 'relative' }}>
    <div className="wf-pagehead">
      <Back />
      <h2 className="wf-pagehead__title">Forfait · Package</h2>
    </div>
    <Stepper at={5} />
    <div style={{ padding: '0 14px 14px' }}>
      <Bilingual fr="Choisissez votre formule pour publier" en="Pick a plan to publish" />
    </div>
    <div style={{ padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { t: 'Découverte', sub: '1 annonce', price: 'Gratuit', accent: false },
        { t: 'Standard', sub: '5 annonces', price: '5 000 F /mois', accent: true, sel: true },
        { t: 'Pro', sub: '10 annonces · badge', price: '12 000 F /mois' },
        { t: 'Illimité', sub: 'Annonces illimitées', price: '85 000 F /an' },
      ].map((p, i) => (
        <Box key={i} accent={p.sel} style={{ padding: 14, borderWidth: p.sel ? 3 : 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="wf-h" style={{ fontSize: 15, fontWeight: 600 }}>{p.t}</div>
              <div className="wf-mono" style={{ fontSize: 10, opacity: 0.8 }}>{p.sub}</div>
            </div>
            <div className="wf-h" style={{ fontSize: 14, fontWeight: 600 }}>{p.price}</div>
          </div>
          {p.sel && (
            <div style={{ marginTop: 8 }}>
              <Chip ink>Sélectionné ✓</Chip>
            </div>
          )}
        </Box>
      ))}
    </div>
    <div style={{ padding: '0 14px 14px' }}>
      <Note>
        Paiement MTN MoMo / Orange / Carte requis avant publication.
      </Note>
    </div>
    <div className="wf-bottombar">
      <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>6/6</span>
      <div style={{ flex: 1 }} />
      <Btn accent>Publier & payer →</Btn>
    </div>
  </Page>
);

Object.assign(window, { AddStep0, AddStepService, AddStepForm, AddStepServiceMenu, AddStepPackage });
