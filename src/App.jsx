import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Marquee from './components/Marquee.jsx';
import LogoAnimation from './components/LogoAnimation.jsx';
import CustomCursor from './effects/CustomCursor.jsx';
import { initLenis, scrollToTop } from './effects/lenis.js';
import useInteractions from './effects/useInteractions.js';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Work from './pages/Work.jsx';
import Pricing from './pages/Pricing.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

// Branded page transition: the animated logo plays on a deep-night cover, then
// fades out. Replaces the old purple wipe. Plays once per navigation.
function RouteTransition({ pathname }) {
  const [phase, setPhase] = useState('in'); // in | out | idle
  useEffect(() => {
    setPhase('in');
    const t1 = setTimeout(() => setPhase('out'), 1000);
    const t2 = setTimeout(() => setPhase('idle'), 1420);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pathname]);

  if (phase === 'idle') return null;
  return (
    <div className={`route-anim route-anim--${phase}`} aria-hidden="true">
      <LogoAnimation key={pathname} size={132} speed={2.6} loop={false} ariaLabel="" />
    </div>
  );
}

export default function App() {
  const { pathname } = useLocation();

  // smooth scroll, once
  useEffect(() => { initLenis(); }, []);

  // scroll to top on route change
  useEffect(() => { scrollToTop(true); }, [pathname]);

  // route-scoped interaction layer (reveal, count-up, magnetic, tilt)
  useInteractions(pathname);

  return (
    <div className="page">
      {/* trionn-style fixed corner crosshairs (pure decoration) */}
      <div className="crosshairs" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
      <CustomCursor />
      {/* animated-logo transition on every route change */}
      <RouteTransition pathname={pathname} />
      <Header />
      <main className="site-main">
        <div className="page-view" key={pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <Marquee />
      <Footer />
    </div>
  );
}
