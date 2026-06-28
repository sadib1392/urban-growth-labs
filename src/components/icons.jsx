/* Neon line icons (Lucide — the brand-recommended set: even single-weight
   strokes that match UGL's neon-line illustration language). Rendered in
   currentColor so they pick up the surrounding text color. */
import {
  Lightbulb, Zap, Brain, Move, Target,
  Megaphone, MonitorSmartphone, Palette, FlaskConical,
  Search, Compass, Rocket, TrendingUp,
} from 'lucide-react';

const P = { strokeWidth: 1.75, 'aria-hidden': true };

/* Brand values → icons (About page) */
export const valueIcons = {
  Curious: <Lightbulb size={22} {...P} />,
  Bold: <Zap size={22} {...P} />,
  Intelligent: <Brain size={22} {...P} />,
  Adaptive: <Move size={22} {...P} />,
  Impactful: <Target size={22} {...P} />,
};

/* Services → icons (feature cards) */
export const serviceIcons = {
  social: <Megaphone size={22} {...P} />,
  web: <MonitorSmartphone size={22} {...P} />,
  design: <Palette size={22} {...P} />,
};

/* A-to-Z pipeline steps → icons (Home method section) */
export const methodIcons = {
  Discover: <Search size={20} {...P} />,
  Strategize: <Compass size={20} {...P} />,
  Execute: <Rocket size={20} {...P} />,
  Grow: <TrendingUp size={20} {...P} />,
};

export const FounderIcon = <FlaskConical size={26} {...P} />;
