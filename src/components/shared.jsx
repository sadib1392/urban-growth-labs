import { Card, Stat, Badge } from './primitives.jsx';

/* Glowing violet "constellation" points — purely decorative (from the brand
   board's node/dot motif). Place inside a position:relative container. */
export function Sparks({ points = [] }) {
  return points.map((p, i) => (
    <i
      key={i}
      className={['spark', p.sm && 'spark--sm'].filter(Boolean).join(' ')}
      style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom, animationDelay: p.delay }}
      aria-hidden="true"
    />
  ));
}

/* Case card — used on Home (links to /work) and Work (static tile). */
export function CaseCard({ c, linkToWork = false }) {
  return (
    <Card
      padding="none"
      interactive
      glowOnHover
      to={linkToWork ? '/work' : undefined}
    >
      <div className={`case-card__media${linkToWork ? '' : ' case-card__media--sm'}`}>
        <Badge variant="soft" size="sm">{c.tag}</Badge>
      </div>
      <div className="case-card__body">
        <h3>{c.name}</h3>
        <p className="case-card__svc">{c.svc}</p>
        <Stat value={c.result} caption={c.metric} size="md" accent="violet" />
      </div>
    </Card>
  );
}
