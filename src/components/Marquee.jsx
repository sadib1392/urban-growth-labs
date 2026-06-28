/* Infinite marquee band — iper / kudos-style. Scrolls continuously, pauses on
   hover. Two identical sets make the -50% translate loop seamless.

   Modes:
   - <Marquee items={[...]} />  capability/tools rail (◆-separated, uppercase)
   - <Marquee empty />          empty placeholder band
   - <Marquee />                brand tagline (Data · Strategy · Growth · Execution) */

const WORDS = ['Data', 'Strategy', 'Growth', 'Execution'];

function TaglineGroup({ ariaHidden }) {
  return (
    <span className="marquee__item" aria-hidden={ariaHidden || undefined}>
      {WORDS.map((w, i) => (
        <span key={i}>
          {w}
          <span className="marquee__dot"> · </span>
        </span>
      ))}
      <span className="accent">UGL</span>
      <span className="marquee__dot"> · </span>
    </span>
  );
}

function RailSet({ items, ariaHidden }) {
  return (
    <div className="marquee__set" aria-hidden={ariaHidden || undefined}>
      {items.map((it, i) => (
        <span className="marquee__cell" key={i}>
          <span className="marquee__skill">{it}</span>
          <span className="marquee__diamond">◆</span>
        </span>
      ))}
    </div>
  );
}

function LogoSet({ logos, ariaHidden }) {
  return (
    <div className="marquee__set" aria-hidden={ariaHidden || undefined}>
      {logos.map((l, i) => (
        <span className="marquee__cell" key={i}>
          <span className="marquee__logo" title={l.name} aria-label={l.name}>{l.node}</span>
          <span className="marquee__diamond">◆</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee({ items, logos, empty = false }) {
  // brand-logo rail (hero tools strip)
  if (logos && logos.length) {
    return (
      <div className="marquee marquee--rail marquee--logos" aria-label={`Tools: ${logos.map((l) => l.name).join(', ')}`}>
        <div className="marquee__track">
          <LogoSet logos={logos} />
          <LogoSet logos={logos} ariaHidden />
        </div>
      </div>
    );
  }

  // capability / tools rail (text)
  if (items && items.length) {
    return (
      <div className="marquee marquee--rail" aria-label={items.join(', ')}>
        <div className="marquee__track">
          <RailSet items={items} />
          <RailSet items={items} ariaHidden />
        </div>
      </div>
    );
  }

  // empty placeholder band
  if (empty) {
    return (
      <div className="marquee marquee--empty" aria-hidden="true">
        <div className="marquee__track" />
      </div>
    );
  }

  // brand tagline
  return (
    <div className="marquee" aria-label="Data. Strategy. Growth. Execution.">
      <div className="marquee__track">
        {/* repeated so the -50% translate loops seamlessly */}
        <TaglineGroup />
        <TaglineGroup ariaHidden />
        <TaglineGroup ariaHidden />
        <TaglineGroup ariaHidden />
      </div>
    </div>
  );
}
