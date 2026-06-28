import { Link } from 'react-router-dom';
import LogoAnimation from './LogoAnimation.jsx';

const explore = [
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brandcol">
          <div className="brand">
            <LogoAnimation tile size={30} className="brand__mark brand__mark--sm" ariaLabel="" />
            <span className="brand__word brand__word--sm">URBAN GROWTH <span className="accent">LABS</span></span>
          </div>
          <p className="site-footer__blurb">
            We turn data into real growth. Research-led marketing systems built for New York City's local businesses.
          </p>
        </div>
        <div className="site-footer__cols">
          <div>
            <div className="site-footer__heading">Explore</div>
            <div className="site-footer__links">
              {explore.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
            </div>
          </div>
          <div>
            <div className="site-footer__heading">Get in touch</div>
            <div className="site-footer__contact">
              <span>hello@uglabs.com</span>
              <span>New York, NY</span>
              <span>Mon–Fri · 9–6 ET</span>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bar">
        <div className="site-footer__barinner">
          <span>© {new Date().getFullYear()} Urban Growth Labs</span>
          <span className="tagline-stamp">Data. Strategy. Growth. Execution.</span>
        </div>
      </div>
    </footer>
  );
}
