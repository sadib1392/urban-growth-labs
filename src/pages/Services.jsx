import { Button, Badge, FeatureCard } from '../components/primitives.jsx';
import { serviceIcons } from '../components/icons.jsx';
import { services, support, serviceFeatures } from '../data.js';

// Different rotation than Home (still no adjacent repeat) so the saturated grid
// reads fresh across pages.
const SERVICE_HUES = ['brand', 'coral', 'blue'];

export default function Services() {
  return (
    <>
      <section className="section" style={{ padding: '72px 24px 40px' }}>
        <h1 className="h1" style={{ fontSize: 52, lineHeight: 1.02, letterSpacing: '-0.025em', maxWidth: 760 }}>
          A few services, <span className="headline-accent">done exceptionally.</span>
        </h1>
        <p className="lead" style={{ margin: '20px 0 0', maxWidth: 560 }}>
          Three core lines, assembled into one end-to-end pipeline around your highest-converting channels, supported by data, automation, and research.
        </p>
      </section>

      <section className="section" style={{ padding: '0 24px 24px' }}>
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

      <section className="section" style={{ padding: '24px 24px 48px' }}>
        <div className="tagline-caps" style={{ letterSpacing: '0.16em', marginBottom: 16 }}>Supported by</div>
        <div className="chip-row">
          {support.map((cap) => <Badge key={cap} variant="outline" size="md">{cap}</Badge>)}
        </div>
      </section>

      <section className="section--band">
        <div className="section" style={{ padding: '64px 24px', textAlign: 'center' }}>
          <h2 className="h2" style={{ fontSize: 34, margin: '0 0 22px' }}>Not sure where to start?</h2>
          <Button variant="signal" size="lg" to="/contact">Book a free consult</Button>
        </div>
      </section>
    </>
  );
}
