import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { attachScramble } from '../effects/scramble.js';
import LogoAnimation from './LogoAnimation.jsx';

const links = [
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const navRef = useRef(null);

  // text-scramble decode on hover for each nav link
  useEffect(() => {
    if (!navRef.current) return undefined;
    const links = navRef.current.querySelectorAll('.nav-link');
    const cleanups = Array.from(links).map((el) => attachScramble(el));
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" to="/" aria-label="Urban Growth Labs home" onClick={close}>
          <LogoAnimation tile size={32} className="brand__mark" ariaLabel="" />
          <span className="brand__word">URBAN GROWTH <span className="accent">LABS</span></span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>

        <nav ref={navRef} className={`site-nav${open ? ' is-open' : ''}`} id="primary-nav" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              onClick={close}
            >
              {l.label}
            </NavLink>
          ))}
          <Link className="btn btn--signal btn--sm" to="/contact" onClick={close}>Book a consult</Link>
        </nav>
      </div>
    </header>
  );
}
