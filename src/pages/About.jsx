import { Button, Card } from '../components/primitives.jsx';
import { valueIcons } from '../components/icons.jsx';
import { values } from '../data.js';

export default function About() {
  return (
    <>
      <section className="section" style={{ padding: '72px 24px 40px' }}>
        <h1 className="h1" style={{ fontSize: 52, lineHeight: 1.06, letterSpacing: '-0.025em', maxWidth: 820 }}>
          Built for the city. <span className="accent accent--signal">Engineered for growth.</span>
        </h1>
        <p className="lead" style={{ margin: '22px 0 0', maxWidth: 620 }}>
          We help New York City's local businesses grow through tailored, data-driven marketing, and make that growth genuinely accessible to underserved communities.
        </p>
      </section>

      <section className="section" style={{ padding: '8px 24px 16px' }}>
        <div className="tagline-caps" style={{ letterSpacing: '0.16em', marginBottom: 18 }}>Our values</div>
        <div className="values-grid">
          {values.map((v) => (
            <Card key={v.k} padding="md" className="value-card">
              <div className="value-card__icon">{valueIcons[v.k]}</div>
              <h3>{v.k}</h3>
              <p>{v.d}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section" style={{ padding: '48px 24px 16px' }}>
        <div className="founder">
          <div className="founder__photo">
            <img
              src={`${import.meta.env.BASE_URL}assets/founder-syed.jpg`}
              alt="Syed, founder of Urban Growth Labs"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <div className="founder__body">
            <div className="tagline-caps" style={{ letterSpacing: '0.16em', marginBottom: 12 }}>The founder</div>
            <h2 className="h2" style={{ fontSize: 32, margin: '0 0 18px' }}>
              Hey there, I'm <span className="accent">Syed</span>.
            </h2>
            <p className="founder__p">
              I'm a marketer with over seven years of experience building companies and growing their digital marketing footprint.
            </p>
            <p className="founder__p">
              I'm a Bengali-born American who grew up in the Bronx, New York City. I've always been into technology, design, and human psychology, which is what led me down the marketing path.
            </p>
            <p className="founder__p">
              My goal with Urban Growth Labs is to create a marketing agency that helps SMBs in New York build and improve their marketing programs by offering tailored marketing services. If you'd like to talk about how I can help, feel free to book a call with me.
            </p>
            <Button variant="secondary" size="md" to="/contact" className="founder__cta">Book a call with me →</Button>
          </div>
        </div>
      </section>

      <section className="section--band" style={{ marginTop: 48 }}>
        <div className="section" style={{ padding: '64px 24px', textAlign: 'center' }}>
          <h2 className="h2" style={{ fontSize: 34, margin: '0 0 22px' }}>Let's build your growth system.</h2>
          <Button variant="signal" size="lg" to="/contact">Book a free consult</Button>
        </div>
      </section>
    </>
  );
}
