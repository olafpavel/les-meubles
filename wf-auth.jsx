// Splash + Login wireframes — 3 variations each

// ── SPLASH ────────────────────────────────────────────────
const SplashA = () => (
  <Page style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, minHeight: 680 }}>
    <div style={{ width: 120, height: 120, border: '2px solid var(--wf-ink)', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, background: 'var(--wf-paper-shade)' }}>
      <span className="wf-script" style={{ fontSize: 38, lineHeight: 1 }}>lm</span>
    </div>
    <div className="wf-script" style={{ fontSize: 32, lineHeight: 1 }}>les meubles</div>
    <Bilingual fr="logement · auto · service" en="home · car · service" style={{ marginTop: 6 }} />
    <div style={{ marginTop: 'auto', paddingTop: 60 }}>
      <div style={{ width: 60, height: 3, background: 'var(--wf-ink-faint)', borderRadius: 2 }} />
    </div>
  </Page>
);

const SplashB = () => (
  <Page style={{ display: 'flex', flexDirection: 'column', minHeight: 680, padding: 0 }}>
    <div style={{ flex: 1, background: 'var(--wf-accent)', display: 'flex', alignItems: 'flex-end', padding: 24, color: '#fff' }}>
      <div>
        <div className="wf-script" style={{ fontSize: 44, color: '#fff', lineHeight: 1 }}>les<br/>meubles</div>
        <div className="wf-mono" style={{ fontSize: 11, color: '#fff', opacity: 0.85, marginTop: 12 }}>Cameroun · CMR</div>
      </div>
    </div>
    <div style={{ padding: 20, background: 'var(--wf-paper)' }}>
      <Bilingual fr="Louez. Conduisez. Bénéficiez." en="Rent. Drive. Book." />
      <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
        <Btn block solid>Commencer · Get started</Btn>
      </div>
    </div>
  </Page>
);

const SplashC = () => (
  <Page style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 20, minHeight: 680 }}>
    <div style={{ textAlign: 'right' }}>
      <span className="wf-mono" style={{ fontSize: 10 }}>FR · EN</span>
    </div>
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'inline-block', padding: 14, border: '2px solid var(--wf-ink)', borderRadius: '50%', marginBottom: 16 }}>
        <div style={{ width: 70, height: 70, background: 'var(--wf-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'var(--wf-font-script)', fontSize: 30 }}>lm</div>
      </div>
      <div className="wf-h" style={{ fontSize: 26, marginBottom: 4 }}>les meubles</div>
      <Bilingual fr="trouvez · louez · partez" en="find · book · go" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Btn block solid>Continuer · Continue</Btn>
      <div style={{ textAlign: 'center' }} className="wf-mono">
        <span style={{ fontSize: 10, color: 'var(--wf-ink-soft)' }}>v0.1 · CMR</span>
      </div>
    </div>
  </Page>
);

// ── LOGIN ────────────────────────────────────────────────
const LoginA = () => (
  <Page>
    <div style={{ padding: 18 }}>
      <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
        <Back />
        <span className="wf-mono" style={{ fontSize: 10 }}>FR · EN</span>
      </div>
      <div className="wf-h" style={{ fontSize: 24, marginBottom: 4 }}>Connexion</div>
      <Bilingual fr="ou créez votre compte" en="or create your account" style={{ marginBottom: 18 }} />

      <div style={{ marginBottom: 14 }}>
        <div className="wf-mono" style={{ fontSize: 10, marginBottom: 4 }}>EMAIL / TÉL.</div>
        <Box style={{ padding: '10px 12px' }}>
          <span className="wf-h" style={{ fontSize: 13, color: 'var(--wf-ink-soft)' }}>+237 6—— —— ——</span>
        </Box>
      </div>

      <Btn block solid style={{ marginBottom: 12 }}>Continuer · Continue</Btn>

      <div style={{ textAlign: 'center' }}>
        <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-faint)' }}>Mot de passe oublié ? · Forgot password ?</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '20px 0 14px' }}>
        <div style={{ flex: 1, borderTop: '1px dashed var(--wf-ink-faint)' }} />
        <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-faint)' }}>OU · OR</span>
        <div style={{ flex: 1, borderTop: '1px dashed var(--wf-ink-faint)' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Btn block><span style={{ marginRight: 6 }}>G</span> Continuer avec Google</Btn>
        <Btn block><span style={{ marginRight: 6 }}>f</span> Continuer avec Facebook</Btn>
        <Btn block><span style={{ marginRight: 6 }}></span> Continuer avec Apple</Btn>
      </div>

      <div className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-faint)', marginTop: 20, textAlign: 'center', lineHeight: 1.4 }}>
        En continuant vous acceptez les CGU<br/>By continuing you accept the ToS
      </div>
    </div>
  </Page>
);

const LoginB = () => (
  <Page>
    <div style={{ background: 'var(--wf-paper-shade)', padding: '24px 20px 30px', borderBottom: '2px solid var(--wf-ink)' }}>
      <Back />
      <div className="wf-script" style={{ fontSize: 28, marginTop: 14 }}>Bienvenue !</div>
      <Bilingual fr="Connectez-vous pour réserver" en="Sign in to start booking" />
    </div>
    <div style={{ padding: 18 }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
        <Tab active>Téléphone</Tab>
        <Tab>Email</Tab>
      </div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
        <Box style={{ padding: '10px 8px', width: 70 }}>
          <span className="wf-h" style={{ fontSize: 13 }}>🇨🇲 +237</span>
        </Box>
        <Box style={{ padding: '10px 12px', flex: 1 }}>
          <span className="wf-h" style={{ fontSize: 13, color: 'var(--wf-ink-soft)' }}>6—— —— ——</span>
        </Box>
      </div>
      <Btn block accent style={{ marginBottom: 8 }}>Envoyer un code · Send code</Btn>
      <div style={{ textAlign: 'center', margin: '14px 0' }}>
        <span className="wf-mono" style={{ fontSize: 10 }}>— ou via —</span>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <Circle size={42}>G</Circle>
        <Circle size={42}>f</Circle>
        <Circle size={42}></Circle>
      </div>
      <div style={{ marginTop: 24, textAlign: 'center' }}>
        <span className="wf-mono" style={{ fontSize: 10, color: 'var(--wf-ink-faint)' }}>Mot de passe oublié ?</span>
      </div>
    </div>
  </Page>
);

const LoginC = () => (
  <Page style={{ minHeight: 680, display: 'flex', flexDirection: 'column' }}>
    <div style={{ padding: '18px 18px 10px' }}>
      <Back />
    </div>
    <div style={{ padding: '0 18px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div className="wf-h" style={{ fontSize: 22, marginBottom: 4 }}>Entrez votre n° · Enter phone</div>
      <Bilingual fr="On vous enverra un code SMS" en="We'll text you a code" style={{ marginBottom: 18 }} />

      <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
        <Box shade style={{ padding: '14px 10px', minWidth: 78, textAlign: 'center' }}>
          <span className="wf-h" style={{ fontSize: 16 }}>+237</span>
        </Box>
        <Box style={{ padding: '14px 14px', flex: 1 }}>
          <span className="wf-h" style={{ fontSize: 16, letterSpacing: 1 }}>6 __ __ __ __</span>
        </Box>
      </div>

      <div style={{ display: 'flex', gap: 6, marginBottom: 20, flexWrap: 'wrap' }}>
        <Chip>MTN MoMo</Chip>
        <Chip>Orange Money</Chip>
        <Chip>WhatsApp OTP</Chip>
      </div>

      <div style={{ flex: 1 }} />

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <Btn solid block>Continuer →</Btn>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span className="wf-mono" style={{ fontSize: 10 }}>Email à la place</span>
        <span className="wf-mono" style={{ fontSize: 10 }}>Aide ?</span>
      </div>
    </div>
  </Page>
);

Object.assign(window, { SplashA, SplashB, SplashC, LoginA, LoginB, LoginC });
