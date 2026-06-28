/* Real brand logos for the hero tools marquee.
   - Most marks come from simple-icons (CC0): official path + brand hex.
   - Adobe / Canva were removed from simple-icons for trademark reasons, so they
     are hand-authored here as recognizable app tiles.
   Near-black brand colors (Squarespace, Notion) are lightened so they read on
   the night background. */
import {
  siGoogleanalytics, siGoogleads, siHubspot, siFigma, siSketch, siWebflow,
  siWordpress, siSquarespace, siHtml5, siCss, siJavascript, siGoogletagmanager,
  siMailchimp, siHootsuite, siNotion, siAsana,
} from 'simple-icons';

const SIZE = 26;

// lighten near-black brand colors so they don't vanish on the dark band
function onDark(hex) {
  const n = parseInt(hex, 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return lum < 42 ? 'E9E1FB' : hex;
}

function Si({ icon }) {
  return (
    <svg viewBox="0 0 24 24" width={SIZE} height={SIZE} role="img" aria-label={icon.title}>
      <path d={icon.path} fill={`#${onDark(icon.hex)}`} />
    </svg>
  );
}

// Adobe app tile: dark rounded square + two-letter monogram in the app's accent
function Adobe({ mono, fg, bg }) {
  return (
    <svg viewBox="0 0 24 24" width={SIZE} height={SIZE} role="img" aria-label={`Adobe ${mono}`}>
      <rect x="1.5" y="1.5" width="21" height="21" rx="4.6" fill={bg} stroke={fg} strokeOpacity="0.45" />
      <text x="12" y="16.3" textAnchor="middle" fontFamily="Poppins, system-ui, sans-serif"
        fontWeight="700" fontSize="9.5" fill={fg}>{mono}</text>
    </svg>
  );
}

function Canva() {
  return (
    <svg viewBox="0 0 24 24" width={SIZE} height={SIZE} role="img" aria-label="Canva">
      <defs>
        <linearGradient id="ugl-canva-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00C4CC" />
          <stop offset="1" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11.2" fill="url(#ugl-canva-grad)" />
      <text x="12" y="16.6" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700" fontStyle="italic" fontSize="13" fill="#fff">C</text>
    </svg>
  );
}

export const toolLogos = [
  { name: 'Google Analytics', node: <Si icon={siGoogleanalytics} /> },
  { name: 'Figma', node: <Si icon={siFigma} /> },
  { name: 'WordPress', node: <Si icon={siWordpress} /> },
  { name: 'Photoshop', node: <Adobe mono="Ps" fg="#31A8FF" bg="#001E36" /> },
  { name: 'HubSpot', node: <Si icon={siHubspot} /> },
  { name: 'JavaScript', node: <Si icon={siJavascript} /> },
  { name: 'Webflow', node: <Si icon={siWebflow} /> },
  { name: 'Illustrator', node: <Adobe mono="Ai" fg="#FF9A00" bg="#330000" /> },
  { name: 'Google Ads', node: <Si icon={siGoogleads} /> },
  { name: 'Notion', node: <Si icon={siNotion} /> },
  { name: 'HTML5', node: <Si icon={siHtml5} /> },
  { name: 'InDesign', node: <Adobe mono="Id" fg="#FF3366" bg="#49021F" /> },
  { name: 'Mailchimp', node: <Si icon={siMailchimp} /> },
  { name: 'Sketch', node: <Si icon={siSketch} /> },
  { name: 'CSS', node: <Si icon={siCss} /> },
  { name: 'After Effects', node: <Adobe mono="Ae" fg="#9999FF" bg="#00005B" /> },
  { name: 'Squarespace', node: <Si icon={siSquarespace} /> },
  { name: 'Canva', node: <Canva /> },
  { name: 'Asana', node: <Si icon={siAsana} /> },
  { name: 'Premiere Pro', node: <Adobe mono="Pr" fg="#EA77FF" bg="#2A0634" /> },
  { name: 'Google Tag Manager', node: <Si icon={siGoogletagmanager} /> },
  { name: 'Hootsuite', node: <Si icon={siHootsuite} /> },
];
