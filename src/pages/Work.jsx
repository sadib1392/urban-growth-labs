import { useState } from 'react';
import { Card, Stat, Badge, Tabs } from '../components/primitives.jsx';
import { CaseCard } from '../components/shared.jsx';
import { allCases, workTabs } from '../data.js';

export default function Work() {
  const [filter, setFilter] = useState('all');
  const featured = allCases[0];
  const filtered = filter === 'all' ? allCases : allCases.filter((c) => c.cat === filter);

  return (
    <>
      <section className="section" style={{ padding: '72px 24px 32px' }}>
        <h1 className="h1" style={{ fontSize: 52, lineHeight: 1.02, letterSpacing: '-0.025em' }}>
          Real results, real businesses.
        </h1>
        <p className="lead" style={{ margin: '18px 0 0', maxWidth: 560 }}>
          Every figure pairs with a delta and a timeframe. Filter by the kind of business you run.
        </p>
      </section>

      {/* featured */}
      <section className="section" style={{ padding: '8px 24px' }}>
        <Card variant="glow" padding="none">
          <div className="featured-grid">
            <div className="featured__media"><Badge variant="signal" size="sm">Featured</Badge></div>
            <div className="featured__body">
              <div className="featured__meta">{featured.tag} · {featured.svc}</div>
              <h2 className="featured__name">{featured.name}</h2>
              <Stat value={featured.result} label="Headline result" caption={featured.metric} size="lg" />
            </div>
          </div>
        </Card>
      </section>

      {/* filters */}
      <section className="section" style={{ padding: '32px 24px 0' }}>
        <Tabs tabs={workTabs} value={filter} onChange={setFilter} />
      </section>

      {/* grid */}
      <section className="section" style={{ padding: '28px 24px 64px' }}>
        <div className="case-grid">
          {filtered.map((c) => <CaseCard key={c.id} c={c} />)}
        </div>
      </section>
    </>
  );
}
