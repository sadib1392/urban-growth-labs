import { useState, useEffect } from 'react';
import { Button, Card, Stat, FeatureCard } from '../components/primitives.jsx';
import LogoAnimation from '../components/LogoAnimation.jsx';
import { serviceIcons, methodIcons } from '../components/icons.jsx';
import { Sparks } from '../components/shared.jsx';
import { CaseCard } from '../components/shared.jsx';
import Marquee from '../components/Marquee.jsx';
import { toolLogos } from '../components/toolLogos.jsx';
import { services, methodSteps, allCases, serviceFeatures } from '../data.js';

// Saturated card hues, cycled with no adjacent repeat (signal-yellow reserved
// for one moment per view, so it's kept out of this rotation).
const SERVICE_HUES = ['violet', 'blue', 'mint'];

// Hero script phrase that cycles continuously (vanish → replace).
const CYCLE = ['real growth.', 'real sales.', 'real strategy.', 'real appointments.'];

function CyclingAccent() {
  const reduce = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    if (reduce) return undefined; // respect reduced-motion: hold on the first phrase
    let swap;
    const tick = setInterval(() => {
      setShown(false); // fade/slide out
      swap = setTimeout(() => {
        setI((p) => (p + 1) % CYCLE.length);
        setShown(true); // fade/slide the next one in
      }, 380);
    }, 2600);
    return () => { clearInterval(tick); clearTimeout(swap); };
  }, [reduce]);

  return (
    <span className={`accent cycle-word${shown ? ' is-in' : ' is-out'}`}>{CYCLE[i]}</span>
  );
}

// decorative glowing-point positions (from the brand board's node motif)
const HERO_SPARKS = [
  { top: '15%', left: '7%' }, { top: '26%', left: '90%', delay: '1.1s' },
  { top: '62%', left: '5%', delay: '.6s', sm: true }, { top: '74%', left: '93%', delay: '1.7s' },
  { top: '44%', left: '83%', delay: '.9s', sm: true }, { top: '52%', left: '11%', delay: '1.4s', sm: true },
];
const CTA_SPARKS = [
  { top: '24%', left: '12%', delay: '.3s' }, { top: '30%', left: '86%', delay: '1.2s', sm: true },
  { top: '70%', left: '9%', delay: '.8s', sm: true }, { top: '64%', left: '90%', delay: '1.6s' },
];

export default function Home() {
  const homeCases = allCases.slice(0, 3);

  return (
    <>
      {/* HERO · centered, full-viewport */}
      <section className="hero panel">
        <span className="watermark" data-scroll aria-hidden="true">GROW</span>
        <Sparks points={HERO_SPARKS} />
        <div className="hero__anim"><LogoAnimation size={136} autoReplay replayInterval={30000} /></div>
        <h1 className="hero__h1">We turn data into<br /><CyclingAccent /></h1>
        <p className="hero__p">
          Research-led marketing systems that move local NYC businesses from discovery to conversion, affordably.
        </p>
        <div className="hero__cta">
          <Button variant="signal" size="lg" to="/contact">Book a free consult</Button>
          <Button variant="secondary" size="lg" to="/work">See our work →</Button>
        </div>
        <div className="tagline-caps" style={{ marginTop: 26 }}>Data. Strategy. Growth. Execution.</div>
      </section>

      {/* Tools & capabilities rail under the hero — real brand logos */}
      <Marquee logos={toolLogos} />

      {/* STAT TRUST BAND */}
      <section className="section" style={{ padding: '56px 24px 64px' }}>
        <div className="trust-band">
          <div className="trust-band__cell"><Stat value="34.2K" label="Conversions driven" delta="+28.6%" size="md" /></div>
          <div className="trust-band__cell"><Stat value="$23.41" label="Avg. cost per lead" delta="-12.4%" size="md" /></div>
          <div className="trust-band__cell"><Stat value="+18.7%" label="Avg. lift in CTR" delta="+18.7%" size="md" /></div>
          <div className="trust-band__cell"><Stat value="5 boroughs" label="Local operators served" size="md" /></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section panel" style={{ padding: '24px 24px 72px' }}>
        <div className="section-head">
          <div>
            <h2 className="h2">A few things, <span className="headline-accent">done exceptionally.</span></h2>
            <p className="muted" style={{ fontSize: 15, margin: '10px 0 0' }}>Not a long menu done averagely.</p>
          </div>
          <Button variant="ghost" size="md" to="/services">All services →</Button>
        </div>
        <div className="svc-grid">
          {services.map((s, i) => {
            const f = serviceFeatures[s.key];
            return (
              <FeatureCard
                key={s.key}
                variant={SERVICE_HUES[i % SERVICE_HUES.length]}
                icon={serviceIcons[s.key]}
                eyebrow={f.eyebrow}
                title={s.name}
                desc={s.desc}
                stat={f.stat}
                statLabel={f.statLabel}
              />
            );
          })}
        </div>
      </section>

      {/* A-TO-Z PIPELINE — the connecting line draws in as the section reveals */}
      <section className="section--band panel">
        <div className="section" style={{ padding: '72px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 className="h2">Every engagement is built as a system.</h2>
            <p className="script-note" style={{ marginTop: 12 }}>Plan. Test. Optimize. Scale.</p>
          </div>
          <div className="method">
            <div className="method__line" />
            {methodSteps.map((m) => (
              <div className="method__step" key={m.n}>
                <div className="method__num" style={{ border: `2px solid ${m.c}`, color: m.c }}>{methodIcons[m.k]}</div>
                <h3>{m.k}</h3>
                <p>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="section panel" style={{ padding: '72px 24px' }}>
        <div className="section-head">
          <div>
            <h2 className="h2">Real results, <span className="headline-accent">real businesses.</span></h2>
          </div>
          <Button variant="ghost" size="md" to="/work">View all work →</Button>
        </div>
        <div className="case-grid">
          {homeCases.map((c) => <CaseCard key={c.id} c={c} linkToWork />)}
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="section--band panel">
        <div className="section" style={{ padding: '72px 24px', textAlign: 'center' }}>
          <h2 className="h2" style={{ margin: '0 0 8px' }}>Built for SMBs. Accessible by design.</h2>
          <p className="muted" style={{ fontSize: 15, margin: '0 0 36px' }}>
            A community rate keeps pro marketing within reach for underserved neighborhoods.
          </p>
          <div className="price-teaser-grid">
            <Card padding="lg">
              <div className="price-teaser__tier">Starter</div>
              <div className="price-teaser__amount">$750</div>
              <div className="price-teaser__desc">Entry package for small local businesses</div>
            </Card>
            <Card variant="glow" padding="lg">
              <div className="price-teaser__tier price-teaser__tier--pop">Growth · popular</div>
              <div className="price-teaser__amount">$1,800<span className="per">/mo</span></div>
              <div className="price-teaser__desc">Core pipeline across social + web + design</div>
            </Card>
            <Card padding="lg">
              <div className="price-teaser__tier">Scale</div>
              <div className="price-teaser__amount">$3,500<span className="per">/mo</span></div>
              <div className="price-teaser__desc">Full pipeline with automation &amp; analytics</div>
            </Card>
          </div>
          <div style={{ marginTop: 32 }}>
            <Button variant="secondary" size="lg" to="/pricing">See full pricing →</Button>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section section--sparks panel" style={{ padding: '96px 24px', textAlign: 'center' }}>
        <Sparks points={CTA_SPARKS} />
        <h2 className="h1" style={{ fontSize: 62, lineHeight: 1.0, letterSpacing: '-0.03em' }}>
          Growth isn't luck.<br />It's <span className="accent">a system.</span>
        </h2>
        <p className="muted" style={{ fontSize: 17, margin: '22px 0 32px' }}>
          Book a free 30-minute consultation. No pressure, just a plan.
        </p>
        <Button variant="signal" size="lg" to="/contact">Book a free consult</Button>
      </section>
    </>
  );
}
