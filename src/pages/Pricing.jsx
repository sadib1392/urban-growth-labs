import { useState } from 'react';
import { Button, Card, Badge, Switch } from '../components/primitives.jsx';
import { tiersRaw, compareRows } from '../data.js';

const Mark = ({ on }) => (
  <span className={on ? 'compare__yes' : 'compare__no'}>{on ? '✓' : '–'}</span>
);

export default function Pricing() {
  const [community, setCommunity] = useState(false);

  return (
    <>
      <section className="section" style={{ padding: '72px 24px 24px', textAlign: 'center' }}>
        <h1 className="h1" style={{ fontSize: 52, lineHeight: 1.02, letterSpacing: '-0.025em' }}>
          Accessible by design.
        </h1>
        <p className="muted" style={{ fontSize: 16, margin: '18px 0 0' }}>
          Sample pricing · project work, monthly retainers, and tiered packages.
        </p>
        <div className="toggle-pill">
          <span className="toggle-pill__std">Standard</span>
          <Switch checked={community} onChange={setCommunity} label="Community rate" />
          <span className="toggle-pill__comm">Community rate</span>
        </div>
      </section>

      <section className="section" style={{ padding: '32px 24px 24px' }}>
        <div className="tier-grid">
          {tiersRaw.map((t) => (
            <Card key={t.key} padding="lg" interactive glowOnHover={!t.featured}
              className={t.featured ? 'tier-card--featured' : undefined}>
              <div className="tier__head">
                <span className="tier__name">{t.name}</span>
                {t.featured && <Badge variant="brand" size="sm">Popular</Badge>}
              </div>
              <div className="tier__price-row">
                <span className="tier__price">{community ? t.comm : t.base}</span>
                <span className="tier__unit">{t.unit}</span>
              </div>
              <p className="tier__tagline">{t.tagline}</p>
              <div className="tier__features">
                {t.features.map((ft) => (
                  <div className="tier__feature" key={ft}><span className="check">✓</span>{ft}</div>
                ))}
              </div>
              <Button variant="secondary" size="md" fullWidth to="/contact">Get started</Button>
            </Card>
          ))}
        </div>

        {community && (
          <div className="community-note">
            <span className="community-note__star">★</span>
            <span>Community rate applied. Sliding-scale pricing for qualifying businesses in underserved neighborhoods.</span>
          </div>
        )}
      </section>

      <section className="section" style={{ padding: '48px 24px 64px' }}>
        <h2 className="h2" style={{ fontSize: 28, margin: '0 0 22px' }}>Compare packages</h2>
        <div className="compare">
          <div className="compare__head">
            <div>Feature</div>
            <div>Starter</div>
            <div className="col-growth">Growth</div>
            <div>Scale</div>
          </div>
          {compareRows.map((r) => (
            <div className="compare__row" key={r.f}>
              <div>{r.f}</div>
              <div><Mark on={r.s} /></div>
              <div className="col-growth"><Mark on={r.g} /></div>
              <div><Mark on={r.x} /></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
