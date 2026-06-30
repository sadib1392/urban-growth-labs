import { useState, useRef } from 'react';
import { Button, Card, Field, Select, Textarea } from '../components/primitives.jsx';
import { serviceOptions } from '../data.js';

// Web3Forms access key — safe to expose in client code. Get a free key at
// https://web3forms.com using urban-growth@labs.syedadib.com as the destination
// email, then paste it below (or set VITE_WEB3FORMS_KEY at build time).
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'a53bbd5f-5f67-4a27-aca1-ab0551095fbd';

const empty = { name: '', business: '', email: '', service: '', goal: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const hp = useRef(null); // honeypot — bots fill this; humans never see it

  const set = (key) => (val) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = async () => {
    if (sending) return;
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please add your name';
    if (!form.business.trim()) errs.business = 'Business name required';
    if (!form.email.trim()) errs.email = 'Email required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (Object.keys(errs).length) { setErrors(errs); return; }

    // honeypot caught a bot — pretend success, send nothing
    if (hp.current && hp.current.value) { setSubmitted(true); return; }

    setSubmitError('');
    setSending(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New consult request: ${form.name}, ${form.business}`,
          from_name: 'Urban Growth Labs website',
          replyto: form.email,
          name: form.name,
          business: form.business,
          email: form.email,
          service: form.service || 'Not specified',
          goal: form.goal || '(none provided)',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitted(true);
        try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { /* noop */ }
      } else {
        setSubmitError(data.message || 'Something went wrong sending your request. Please email urban-growth@labs.syedadib.com directly.');
      }
    } catch (e) {
      setSubmitError('Could not reach the server. Please check your connection, or email urban-growth@labs.syedadib.com directly.');
    } finally {
      setSending(false);
    }
  };

  const reset = () => { setSubmitted(false); setForm(empty); setErrors({}); setSubmitError(''); };

  if (submitted) {
    return (
      <section style={{ maxWidth: 680, margin: '0 auto', padding: '96px 24px', textAlign: 'center' }}>
        <div className="success-check">✓</div>
        <h1 className="h1" style={{ fontSize: 40, letterSpacing: '-0.02em', margin: '0 0 14px' }}>Request received.</h1>
        <p className="muted" style={{ fontSize: 16, lineHeight: 1.6, margin: '0 0 30px' }}>
          Thanks. We'll be in touch within one business day to schedule your free 30-minute consultation. Insights today. Growth tomorrow.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="secondary" size="md" to="/">Back to home</Button>
          <Button variant="ghost" size="md" onClick={reset}>Submit another</Button>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-grid section" style={{ padding: '72px 24px 80px' }}>
      <div>
        <h1 className="h1" style={{ fontSize: 48, lineHeight: 1.02, letterSpacing: '-0.025em' }}>
          Book a free consult.
        </h1>
        <p className="muted" style={{ fontSize: 16, margin: '16px 0 32px', maxWidth: 440 }}>
          A free 30-minute call. Tell us about your business, and we'll bring a plan. No pressure.
        </p>

        <form className="contact-form" noValidate onSubmit={(e) => { e.preventDefault(); submit(); }}>
          {/* honeypot: hidden from people, catches bots */}
          <input
            ref={hp}
            type="text"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
          />
          <div className="contact-form__names">
            <Field id="f-name" label="Your name" placeholder="Jordan Rivera"
              value={form.name} onChange={set('name')} error={errors.name} />
            <Field id="f-business" label="Business name" placeholder="Rivera's Barbershop"
              value={form.business} onChange={set('business')} error={errors.business} />
          </div>
          <Field id="f-email" label="Email" type="email" placeholder="you@business.com"
            value={form.email} onChange={set('email')} error={errors.email} />
          <Select id="f-service" label="Service interested in" value={form.service} onChange={set('service')}>
            <option value="">Choose one…</option>
            {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </Select>
          <Textarea id="f-goal" label="Your goals" placeholder="What does growth look like for you?"
            value={form.goal} onChange={set('goal')} />
          <div>
            <Button variant="signal" size="lg" type="submit" disabled={sending}>
              {sending ? 'Sending…' : 'Request my consult'}
            </Button>
            {submitError && (
              <p role="alert" style={{ color: 'var(--ugl-danger)', fontSize: 14, lineHeight: 1.5, margin: '14px 0 0' }}>
                {submitError}
              </p>
            )}
          </div>
        </form>
      </div>

      <Card variant="glow" padding="lg">
        <div className="expect-head">What to expect</div>
        <div className="expect-list">
          <div className="expect-item">
            <span className="expect-item__num expect-item__num--1">1</span>
            <div>
              <div className="expect-item__t">We review your channels</div>
              <div className="expect-item__d">A quick audit of your market and current presence.</div>
            </div>
          </div>
          <div className="expect-item">
            <span className="expect-item__num expect-item__num--2">2</span>
            <div>
              <div className="expect-item__t">A 30-minute call</div>
              <div className="expect-item__d">We map the highest-converting opportunities.</div>
            </div>
          </div>
          <div className="expect-item">
            <span className="expect-item__num expect-item__num--3">3</span>
            <div>
              <div className="expect-item__t">A clear, no-obligation plan</div>
              <div className="expect-item__d">You leave with a concrete next step.</div>
            </div>
          </div>
        </div>
        <div className="expect-foot">urban-growth@labs.syedadib.com<br />New York, NY · Mon–Fri 9–6 ET</div>
      </Card>
    </section>
  );
}
