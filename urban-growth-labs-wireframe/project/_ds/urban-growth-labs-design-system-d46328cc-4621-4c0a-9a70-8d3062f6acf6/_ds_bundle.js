/* @ds-bundle: {"format":3,"namespace":"UrbanGrowthLabsDesignSystem_d46328","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Meter","sourcePath":"components/data/Meter.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"2b8bd0b3fd2f","components/core/Badge.jsx":"87a1b006fb80","components/core/Button.jsx":"91ac9f317189","components/core/Card.jsx":"35888c7a5d57","components/core/Input.jsx":"a42776b5f67d","components/core/Logo.jsx":"13a5e7d7bb56","components/core/Stat.jsx":"ab67d13d95f6","components/data/Meter.jsx":"a95e707c7286","components/forms/Select.jsx":"a4056b65e079","components/forms/Switch.jsx":"e6af282f682f","components/navigation/Tabs.jsx":"8a494271c37d","ui_kits/dashboard/dashboard-app.jsx":"358739e3ad73","ui_kits/dashboard/dashboard-panels.jsx":"75da4c9ee512","ui_kits/marketing-site/site-app.jsx":"9db57a4796ab","ui_kits/marketing-site/site-hero.jsx":"3647dbaa5455","ui_kits/marketing-site/site-sections.jsx":"cb8687bd7a9c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UrbanGrowthLabsDesignSystem_d46328 = window.UrbanGrowthLabsDesignSystem_d46328 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Urban Growth Labs — Avatar
 * Initials or image avatar with a violet-tinted ring. Used in dashboard
 * headers, testimonials, and team rosters.
 */
function Avatar({
  name = '',
  src,
  size = 'md',
  // xs | sm | md | lg
  ring = true,
  style,
  ...rest
}) {
  const sizes = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 56
  };
  const d = sizes[size] || 40;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name || undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: '50%',
      flexShrink: 0,
      overflow: 'hidden',
      background: src ? 'transparent' : 'var(--grad-brand)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: d * 0.4,
      letterSpacing: '0.02em',
      border: ring ? '2px solid var(--border-strong)' : 'none',
      boxShadow: ring ? 'var(--glow-purple-sm)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Urban Growth Labs — Badge / status pill
 * Compact label for status, deltas, and categories. Solid signal/brand fills
 * or soft tinted variants. Use the `up`/`down` deltas for KPI movement.
 */
function Badge({
  children,
  variant = 'soft',
  // soft | brand | signal | success | danger | outline
  size = 'md',
  // sm | md
  dot = false,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '2px 8px',
      fontSize: 11,
      height: 20
    },
    md: {
      padding: '3px 11px',
      fontSize: 12,
      height: 24
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    soft: {
      background: 'var(--fill-violet-soft)',
      color: 'var(--ugl-soft-lilac)',
      border: '1px solid var(--border-default)'
    },
    brand: {
      background: 'var(--brand)',
      color: '#fff',
      border: '1px solid transparent'
    },
    signal: {
      background: 'var(--signal)',
      color: 'var(--text-on-signal)',
      border: '1px solid transparent'
    },
    success: {
      background: 'rgba(52,224,161,0.16)',
      color: 'var(--ugl-success)',
      border: '1px solid rgba(52,224,161,0.35)'
    },
    danger: {
      background: 'rgba(255,77,109,0.16)',
      color: 'var(--ugl-danger)',
      border: '1px solid rgba(255,77,109,0.35)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid var(--border-strong)'
    }
  };
  const v = variants[variant] || variants.soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: s.fontSize,
      letterSpacing: '0.02em',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Urban Growth Labs — Button
 * The brand's primary action. Electric-purple gradient by default; the
 * "signal" (yellow) variant is reserved for the single highest-intent moment
 * in a view. Squared-but-soft radius, confident hover lift + glow.
 */
function Button({
  children,
  variant = 'primary',
  // primary | signal | secondary | ghost | danger
  size = 'md',
  // sm | md | lg
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 36,
      fontSize: 13,
      gap: 7,
      radius: 'var(--radius-sm)'
    },
    md: {
      padding: '0 20px',
      height: 44,
      fontSize: 14,
      gap: 8,
      radius: 'var(--radius-md)'
    },
    lg: {
      padding: '0 28px',
      height: 54,
      fontSize: 16,
      gap: 10,
      radius: 'var(--radius-lg)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--grad-brand)',
      color: 'var(--text-on-brand)',
      border: '1px solid transparent',
      boxShadow: 'var(--glow-purple-sm)'
    },
    signal: {
      background: 'var(--grad-signal)',
      color: 'var(--text-on-signal)',
      border: '1px solid transparent',
      boxShadow: 'var(--glow-signal)'
    },
    secondary: {
      background: 'var(--fill-violet-soft)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    danger: {
      background: 'var(--ugl-danger)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: '0.01em',
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      whiteSpace: 'nowrap',
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), filter var(--dur-base) var(--ease-out)',
      transform: !disabled && active ? 'translateY(0) scale(0.98)' : !disabled && hover ? 'translateY(-1px)' : 'none',
      filter: !disabled && hover ? 'brightness(1.08)' : 'none',
      ...v,
      boxShadow: !disabled && hover && (variant === 'primary' || variant === 'signal') ? variant === 'signal' ? 'var(--glow-signal)' : 'var(--glow-purple-md)' : v.boxShadow,
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.1em'
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.1em'
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Urban Growth Labs — Card
 * Dark Midnight-Plum surface, hairline violet border, ambient depth + a faint
 * top inner light. Optional neon glow on hover for interactive cards. The
 * default container for content blocks, dashboard panels, and pricing tiers.
 */
function Card({
  children,
  as: Tag = 'div',
  variant = 'default',
  // default | raised | outline | glow
  padding = 'md',
  // none | sm | md | lg
  interactive = false,
  glowOnHover = false,
  style,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 16,
    md: 24,
    lg: 32
  };
  const p = pads[padding] ?? 24;
  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: 'var(--card-border)'
    },
    raised: {
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-strong)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)'
    },
    glow: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-strong)'
    }
  };
  const v = variants[variant] || variants.default;
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  const baseShadow = variant === 'glow' ? 'var(--shadow-md), var(--glow-purple-sm)' : 'var(--shadow-md), var(--inner-top-light)';
  const hoverShadow = glowOnHover || variant === 'glow' ? 'var(--shadow-lg), var(--glow-purple-md)' : 'var(--shadow-lg), var(--inner-top-light)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      padding: p,
      boxShadow: lift ? hoverShadow : baseShadow,
      transform: lift ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      color: 'var(--text-body)',
      ...v,
      borderColor: lift ? 'var(--border-strong)' : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Urban Growth Labs — Input
 * Dark field on the night ground, hairline violet border, violet focus glow.
 * Supports leading/trailing adornments, label, hint, and error state.
 */
function Input({
  label,
  hint,
  error,
  iconLeft,
  iconRight,
  size = 'md',
  // sm | md | lg
  fullWidth = true,
  style,
  inputStyle,
  id,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 38,
      fontSize: 13,
      padding: 12
    },
    md: {
      height: 46,
      fontSize: 14,
      padding: 14
    },
    lg: {
      height: 54,
      fontSize: 16,
      padding: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const inputId = id || reactId;
  const borderColor = error ? 'var(--ugl-danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      width: fullWidth ? '100%' : 'auto',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: s.height,
      padding: `0 ${s.padding}px`,
      background: 'var(--surface-panel)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-subtle)'
    }
  }, iconLeft) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-body)',
      fontSize: s.fontSize,
      ...inputStyle
    }
  })), iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-subtle)'
    }
  }, iconRight) : null), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ugl-danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-subtle)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Urban Growth Labs — Logo wordmark (type-based, asset-free)
 * Renders "URBAN GROWTH" (off-white) + "LABS" (vivid violet) in Montserrat
 * ExtraBold, optionally with the letter-spaced signal-yellow tagline. For the
 * flask icon mark, use the PNG/SVG asset directly (assets/logo/) alongside this.
 */
function Logo({
  variant = 'horizontal',
  // horizontal | stacked
  size = 'md',
  // sm | md | lg
  tagline = false,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      word: 20,
      tag: 8,
      gap: 4
    },
    md: {
      word: 30,
      tag: 10,
      gap: 6
    },
    lg: {
      word: 46,
      tag: 13,
      gap: 9
    }
  };
  const s = sizes[size] || sizes.md;
  const stacked = variant === 'stacked';
  const wordStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: s.word,
    lineHeight: stacked ? 0.98 : 1,
    letterSpacing: '-0.01em',
    color: 'var(--ugl-off-white)',
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: stacked ? 'center' : 'flex-start',
      gap: s.gap,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: wordStyle
  }, stacked ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "URBAN GROWTH"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--ugl-vivid-violet)',
      letterSpacing: '0.04em'
    }
  }, "LABS")) : /*#__PURE__*/React.createElement(React.Fragment, null, "URBAN GROWTH\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ugl-vivid-violet)'
    }
  }, "LABS"))), tagline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: s.tag,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ugl-signal-yellow)'
    }
  }, "Data. Strategy. Growth. Execution.") : null);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Urban Growth Labs — Stat / KPI
 * The brand is data-first; this is the canonical metric block. Big tabular
 * figure, label eyebrow, and a colored delta (▲/▼) showing movement. Used all
 * over dashboards and report covers ("34.2K total conversions  +28.6%").
 */
function Stat({
  value,
  label,
  delta,
  // e.g. "+28.6%" or "-12.4%"
  deltaDirection,
  // 'up' | 'down' — inferred from delta sign if omitted
  caption,
  // e.g. "vs last 30 days"
  size = 'md',
  // sm | md | lg
  accent = 'violet',
  // violet | signal — color of the figure
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      value: 28,
      label: 11,
      delta: 12
    },
    md: {
      value: 40,
      label: 12,
      delta: 13
    },
    lg: {
      value: 56,
      label: 13,
      delta: 14
    }
  };
  const s = sizes[size] || sizes.md;
  const dir = deltaDirection || (delta && String(delta).trim().startsWith('-') ? 'down' : 'up');
  const deltaColor = dir === 'down' ? 'var(--ugl-danger)' : 'var(--ugl-success)';
  const valueColor = accent === 'signal' ? 'var(--ugl-signal-yellow)' : 'var(--text-strong)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: s.label,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: s.value,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: valueColor,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), delta ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: s.delta,
      color: deltaColor,
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.85em'
    }
  }, dir === 'down' ? '▼' : '▲'), delta) : null), caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-subtle)'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data/Meter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Urban Growth Labs — Meter
 * Horizontal progress / share bar with the brand gradient fill. Used for
 * channel mix, goal pacing, and budget utilization. Optional label + value.
 */
function Meter({
  value = 0,
  // 0–100
  label,
  valueLabel,
  // overrides the % readout, e.g. "45%"
  accent = 'brand',
  // brand | violet | signal | success
  size = 'md',
  // sm | md
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const h = size === 'sm' ? 6 : 10;
  const fills = {
    brand: 'var(--grad-brand)',
    violet: 'var(--grad-violet)',
    signal: 'var(--grad-signal)',
    success: 'linear-gradient(90deg,#34E0A1,#1FB67E)'
  };
  const fill = fills[accent] || fills.brand;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, rest), label || valueLabel !== undefined ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, label) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--text-body)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, valueLabel !== undefined ? valueLabel : `${Math.round(pct)}%`)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-raised)',
      overflow: 'hidden',
      boxShadow: 'inset 0 0 0 1px var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: fill,
      boxShadow: accent === 'signal' ? 'var(--glow-signal)' : 'var(--glow-purple-sm)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Meter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Meter.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Urban Growth Labs — Select
 * Native select styled as a dark field with violet focus + a chevron. Matches
 * Input metrics so they line up in forms.
 */
function Select({
  label,
  hint,
  error,
  size = 'md',
  // sm | md | lg
  fullWidth = true,
  children,
  id,
  style,
  selectStyle,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 38,
      fontSize: 13,
      padding: 12
    },
    md: {
      height: 46,
      fontSize: 14,
      padding: 14
    },
    lg: {
      height: 54,
      fontSize: 16,
      padding: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const sid = id || reactId;
  const borderColor = error ? 'var(--ugl-danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      width: fullWidth ? '100%' : 'auto',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: sid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: s.height,
      padding: `0 ${s.padding + 24}px 0 ${s.padding}px`,
      background: 'var(--surface-panel)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-body)',
      fontSize: s.fontSize,
      outline: 'none',
      cursor: 'pointer',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...selectStyle
    }
  }), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: s.padding,
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 11
    }
  }, "\u25BC")), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ugl-danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-subtle)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Urban Growth Labs — Switch / toggle
 * Track fills with the brand gradient when on; signal-yellow optional for
 * "live"/active toggles. Smooth, no bounce.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  // sm | md
  accent = 'brand',
  // brand | signal
  label,
  id,
  style,
  ...rest
}) {
  const dims = {
    sm: {
      w: 36,
      h: 20,
      k: 14
    },
    md: {
      w: 46,
      h: 26,
      k: 20
    }
  };
  const d = dims[size] || dims.md;
  const reactId = React.useId();
  const sid = id || reactId;
  const onBg = accent === 'signal' ? 'var(--grad-signal)' : 'var(--grad-brand)';
  const onGlow = accent === 'signal' ? 'var(--glow-signal)' : 'var(--glow-purple-sm)';
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    id: sid,
    role: "switch",
    "aria-checked": checked,
    type: "button",
    onClick: toggle,
    disabled: disabled
  }, rest, {
    style: {
      position: 'relative',
      width: d.w,
      height: d.h,
      flexShrink: 0,
      border: 'none',
      padding: 0,
      cursor: 'inherit',
      borderRadius: 'var(--radius-pill)',
      background: checked ? onBg : 'var(--surface-raised)',
      boxShadow: checked ? onGlow : 'inset 0 0 0 1px var(--border-default)',
      transition: 'background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: (d.h - d.k) / 2,
      left: checked ? d.w - d.k - (d.h - d.k) / 2 : (d.h - d.k) / 2,
      width: d.k,
      height: d.k,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Urban Growth Labs — Tabs
 * Underline tabs with a signal/violet active indicator. Controlled or
 * uncontrolled. Used for dashboard sections and report views.
 */
function Tabs({
  tabs = [],
  // [{ id, label, badge? }]
  value,
  defaultValue,
  onChange,
  accent = 'violet',
  // violet | signal
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : internal;
  const indicator = accent === 'signal' ? 'var(--ugl-signal-yellow)' : 'var(--ugl-vivid-violet)';
  const select = id => {
    if (value === undefined) setInternal(id);
    if (onChange) onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => select(t.id),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '12px 16px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: '0.01em',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        transition: 'color var(--dur-base) var(--ease-out)'
      }
    }, t.label, t.badge != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        padding: '1px 7px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--fill-violet-soft)',
        color: 'var(--ugl-soft-lilac)'
      }
    }, t.badge) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: -1,
        height: 3,
        borderRadius: '3px 3px 0 0',
        background: on ? indicator : 'transparent',
        boxShadow: on && accent === 'signal' ? 'var(--glow-signal)' : 'none',
        transition: 'background var(--dur-base) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/dashboard-app.jsx
try { (() => {
/* Urban Growth Labs — Client Dashboard: shell + app */
const DH = window.UrbanGrowthLabsDesignSystem_d46328;
const {
  Card: HC,
  Stat: HS,
  Badge: HB,
  Meter: HM,
  Tabs: HT,
  Avatar: HA,
  Button: HBtn,
  Select: HSel
} = DH;
const {
  LineChart,
  ChannelMix,
  CampaignTable
} = window.UGLDash_Panels;
const DASSET = '../../assets';

/* ---- Sidebar ---- */
function Sidebar({
  active,
  setActive
}) {
  const nav = [['overview', 'Overview', '▣'], ['campaigns', 'Campaigns', '◈'], ['channels', 'Channels', '◇'], ['creative', 'Creative', '✦'], ['reports', 'Reports', '▤'], ['settings', 'Settings', '⚙']];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      flexShrink: 0,
      background: 'var(--surface-sunken)',
      borderRight: '1px solid var(--border-default)',
      display: 'flex',
      flexDirection: 'column',
      padding: '22px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 8px 22px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${DASSET}/logo/ugl-icon-mark-1024.png`,
    alt: "UGL",
    style: {
      width: 32,
      height: 32
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16,
      color: 'var(--text-strong)',
      letterSpacing: '-0.01em'
    }
  }, "UG", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ugl-vivid-violet)'
    }
  }, "Labs"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, nav.map(([id, label, icon]) => {
    const on = id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => setActive(id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14,
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        background: on ? 'var(--fill-violet-soft)' : 'transparent',
        boxShadow: on ? 'inset 0 0 0 1px var(--border-strong)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        textAlign: 'center',
        color: on ? 'var(--ugl-vivid-violet)' : 'var(--text-subtle)'
      }
    }, icon), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(HC, {
    padding: "md",
    variant: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      marginBottom: 4
    }
  }, "Growth plan"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      margin: '0 0 12px',
      lineHeight: 1.4
    }
  }, "You're on track for +28% this quarter."), /*#__PURE__*/React.createElement(HBtn, {
    variant: "signal",
    size: "sm",
    fullWidth: true
  }, "View report"))));
}

/* ---- Topbar ---- */
function Topbar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 28px',
      borderBottom: '1px solid var(--border-default)',
      background: 'rgba(10,7,20,0.6)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-subtle)',
      letterSpacing: '0.04em'
    }
  }, "Client \xB7 Fade Theory Barbershop"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22,
      margin: '2px 0 0'
    }
  }, "Campaign performance")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 168
    }
  }, /*#__PURE__*/React.createElement(HSel, {
    defaultValue: "30",
    size: "sm",
    fullWidth: true
  }, /*#__PURE__*/React.createElement("option", {
    value: "7"
  }, "Last 7 days"), /*#__PURE__*/React.createElement("option", {
    value: "30"
  }, "Last 30 days"), /*#__PURE__*/React.createElement("option", {
    value: "90"
  }, "Last quarter"))), /*#__PURE__*/React.createElement(HBtn, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement("span", null, "+")
  }, "New campaign"), /*#__PURE__*/React.createElement(HA, {
    name: "Marcus Reyes",
    size: "md"
  })));
}

/* ---- Main ---- */
function Main() {
  const [tab, setTab] = React.useState('overview');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Topbar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(HT, {
    value: tab,
    onChange: setTab,
    tabs: [{
      id: 'overview',
      label: 'Overview'
    }, {
      id: 'channels',
      label: 'Channels',
      badge: 5
    }, {
      id: 'creative',
      label: 'Creative'
    }, {
      id: 'reports',
      label: 'Reports'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(HC, {
    variant: "glow",
    padding: "md"
  }, /*#__PURE__*/React.createElement(HS, {
    label: "Total conversions",
    value: "34.2K",
    delta: "+28.6%",
    caption: "vs last 30 days"
  })), /*#__PURE__*/React.createElement(HC, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(HS, {
    label: "Cost per lead",
    value: "$23.41",
    delta: "-12.4%",
    caption: "lower is better"
  })), /*#__PURE__*/React.createElement(HC, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(HS, {
    label: "Reach",
    value: "412K",
    delta: "+8.1%"
  })), /*#__PURE__*/React.createElement(HC, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(HS, {
    label: "CTR lift",
    value: "+18.7%",
    accent: "signal",
    caption: "A/B variant B"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.7fr 1fr',
      gap: 18,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(HC, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Conversions over time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      color: 'var(--text-strong)'
    }
  }, "34,210"), /*#__PURE__*/React.createElement(HB, {
    variant: "success",
    size: "sm",
    dot: true
  }, "+28.6%")))), /*#__PURE__*/React.createElement(LineChart, {
    height: 200
  })), /*#__PURE__*/React.createElement(HC, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      display: 'block',
      marginBottom: 18
    }
  }, "Channel mix"), /*#__PURE__*/React.createElement(ChannelMix, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(HC, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      display: 'block',
      marginBottom: 18
    }
  }, "Quarter pacing"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(HM, {
    label: "Conversions goal",
    value: 82,
    accent: "brand"
  }), /*#__PURE__*/React.createElement(HM, {
    label: "Budget used",
    value: 64,
    accent: "violet"
  }), /*#__PURE__*/React.createElement(HM, {
    label: "Content shipped",
    value: 91,
    accent: "success"
  }), /*#__PURE__*/React.createElement(HM, {
    label: "A/B tests run",
    value: 48,
    accent: "signal"
  }))), /*#__PURE__*/React.createElement(HC, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Active campaigns"), /*#__PURE__*/React.createElement(HBtn, {
    variant: "ghost",
    size: "sm"
  }, "View all \u2192")), /*#__PURE__*/React.createElement(CampaignTable, null)))));
}
function DashApp() {
  const [active, setActive] = React.useState('overview');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    setActive: setActive
  }), /*#__PURE__*/React.createElement(Main, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(DashApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/dashboard-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/dashboard-panels.jsx
try { (() => {
/* Urban Growth Labs — Client Dashboard: data panels */
const D = window.UrbanGrowthLabsDesignSystem_d46328;
const {
  Card: DC,
  Stat: DS,
  Badge: DB,
  Meter: DM,
  Tabs: DT,
  Avatar: DA,
  Button: DBtn,
  Select: DSel
} = D;

/* ---- Line chart (campaign performance) ---- */
function LineChart({
  height = 200
}) {
  const pts = [22, 30, 26, 38, 34, 48, 44, 60, 54, 70, 66, 84];
  const w = 720,
    h = height,
    pad = 8;
  const max = 92;
  const stepX = (w - pad * 2) / (pts.length - 1);
  const coords = pts.map((p, i) => [pad + i * stepX, h - pad - p / max * (h - pad * 2)]);
  const line = coords.map(c => c.join(',')).join(' ');
  const area = `${pad},${h - pad} ` + line + ` ${w - pad},${h - pad}`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none",
    style: {
      width: '100%',
      height
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "dashArea",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#A259FF",
    stopOpacity: "0.34"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#A259FF",
    stopOpacity: "0"
  }))), [0.25, 0.5, 0.75].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: pad,
    x2: w - pad,
    y1: h * g,
    y2: h * g,
    stroke: "rgba(162,89,255,0.10)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("polygon", {
    points: area,
    fill: "url(#dashArea)"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: line,
    fill: "none",
    stroke: "#A259FF",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      filter: 'drop-shadow(0 0 6px rgba(162,89,255,0.5))'
    }
  }), coords.filter((_, i) => i === coords.length - 1).map((c, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: c[0],
    cy: c[1],
    r: "5",
    fill: "#FFE600",
    style: {
      filter: 'drop-shadow(0 0 6px rgba(255,230,0,0.7))'
    }
  })));
}

/* ---- Donut (channel mix) via conic-gradient ---- */
function ChannelMix() {
  const mix = [['Paid social', 45, 'var(--ugl-electric-purple)'], ['Organic search', 25, 'var(--ugl-vivid-violet)'], ['Direct', 15, 'var(--ugl-soft-lilac)'], ['Email', 10, 'var(--ugl-signal-yellow)'], ['Other', 5, '#34E0A1']];
  let acc = 0;
  const stops = mix.map(([, v, c]) => {
    const s = `${c} ${acc}% ${acc + v}%`;
    acc += v;
    return s;
  }).join(', ');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 132,
      height: 132,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: `conic-gradient(${stops})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 16,
      borderRadius: '50%',
      background: 'var(--surface-card)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: 'var(--text-strong)'
    }
  }, "5"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--text-subtle)',
      letterSpacing: '0.08em'
    }
  }, "CHANNELS"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      flex: 1
    }
  }, mix.map(([l, v, c]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 3,
      background: c,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      flex: 1
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--text-body)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, v, "%")))));
}

/* ---- Campaigns table ---- */
function CampaignTable() {
  const rows = [['Spring Fade Promo', 'Paid social', 'Live', '12.4K', '+32%', 'up'], ['Smoothie Loyalty', 'Email', 'Live', '8.1K', '+18%', 'up'], ['Weekend Brunch', 'Local SEO', 'Live', '6.7K', '+9%', 'up'], ['Retarget — Cart', 'Paid social', 'Paused', '2.3K', '-4%', 'down'], ['Grand Reopening', 'Creative', 'Draft', '—', '—', null]];
  const statusVariant = {
    Live: 'success',
    Paused: 'soft',
    Draft: 'outline'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1.2fr 0.9fr 0.9fr 0.8fr',
      gap: 12,
      padding: '0 4px 12px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, ['Campaign', 'Channel', 'Status', 'Conversions', 'Δ 30d'].map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, h))), rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1.2fr 0.9fr 0.9fr 0.8fr',
      gap: 12,
      padding: '14px 4px',
      borderBottom: '1px solid var(--border-subtle)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-body)',
      fontSize: 14
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(DB, {
    variant: statusVariant[r[2]],
    size: "sm",
    dot: r[2] !== 'Draft'
  }, r[2])), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-body)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r[3]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      fontVariantNumeric: 'tabular-nums',
      color: r[5] === 'up' ? 'var(--ugl-success)' : r[5] === 'down' ? 'var(--ugl-danger)' : 'var(--text-subtle)'
    }
  }, r[5] === 'up' ? '▲ ' : r[5] === 'down' ? '▼ ' : '', r[4]))));
}
window.UGLDash_Panels = {
  LineChart,
  ChannelMix,
  CampaignTable
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/dashboard-panels.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/site-app.jsx
try { (() => {
/* Urban Growth Labs — Marketing site: pricing, consult, footer, App shell */
const UGL3 = window.UrbanGrowthLabsDesignSystem_d46328;
const {
  Button: B3,
  Card: C3,
  Badge: BD3,
  Logo: LG3,
  Input: IN3,
  Select: SE3,
  Switch: SW3
} = UGL3;
const {
  Eyebrow: EB3
} = window.UGLSite_Shared;
const {
  Nav,
  Hero
} = window.UGLSite_Shared;
const {
  Services,
  Method,
  Work
} = window.UGLSite_Lower;
const ASSET3 = '../../assets';

/* ---------- PRICING ---------- */
function Pricing({
  onConsult
}) {
  const [annual, setAnnual] = React.useState(false);
  const tiers = [{
    name: 'Starter',
    tagline: 'For small local businesses',
    price: 750,
    unit: '/mo',
    featured: false,
    features: ['Social on 2 channels', 'Monthly content calendar', 'Basic graphic design', 'Monthly report']
  }, {
    name: 'Growth',
    tagline: 'Core pipeline: social + web + design',
    price: 1800,
    unit: '/mo',
    featured: true,
    features: ['Everything in Starter', 'Website design & infra', 'Full creative system', 'Data analysis + A/B testing', 'Bi-weekly optimization']
  }, {
    name: 'Scale',
    tagline: 'Full pipeline with automation',
    price: 3500,
    unit: '/mo',
    featured: false,
    features: ['Everything in Growth', 'Marketing automation', 'AI-assisted production', 'Market research', 'Dedicated strategist']
  }];
  const fmt = n => `$${(annual ? Math.round(n * 0.85) : n).toLocaleString()}`;
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    style: {
      padding: '96px 40px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(EB3, null, "Pricing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 42,
      margin: '12px 0 8px'
    }
  }, "Built to stay accessible."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 17,
      maxWidth: 520,
      margin: '0 auto 26px'
    }
  }, "SMB-friendly pricing that reflects the value of an end-to-end pipeline. Community rates available for qualifying neighborhood businesses."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: annual ? 'var(--text-subtle)' : 'var(--text-body)'
    }
  }, "Monthly"), /*#__PURE__*/React.createElement(SW3, {
    checked: annual,
    onChange: setAnnual
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: annual ? 'var(--text-body)' : 'var(--text-subtle)'
    }
  }, "Annual ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ugl-signal-yellow)',
      fontWeight: 700
    }
  }, "\u201315%")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      alignItems: 'start'
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement(C3, {
    key: t.name,
    variant: t.featured ? 'glow' : 'default',
    padding: "lg",
    style: t.featured ? {
      transform: 'scale(1.03)'
    } : null
  }, t.featured ? /*#__PURE__*/React.createElement(BD3, {
    variant: "signal",
    size: "sm",
    style: {
      marginBottom: 14
    }
  }, "Most popular") : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      margin: '0 0 4px'
    }
  }, t.name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 13.5,
      margin: '0 0 18px',
      minHeight: 38
    }
  }, t.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40,
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmt(t.price)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      fontSize: 15
    }
  }, t.unit)), /*#__PURE__*/React.createElement(B3, {
    variant: t.featured ? 'signal' : 'secondary',
    fullWidth: true,
    onClick: onConsult
  }, "Start with ", t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      marginTop: 22
    }
  }, t.features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ugl-vivid-violet)',
      fontWeight: 700
    }
  }, "\u2197"), f)))))));
}

/* ---------- CONSULT MODAL ---------- */
function ConsultModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1100,
      background: 'rgba(6,3,15,0.72)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(C3, {
    variant: "glow",
    padding: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET3}/logo/ugl-icon-mark-1024.png`,
    alt: "",
    style: {
      width: 64,
      height: 64,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      margin: '0 0 8px'
    }
  }, "You're on the board."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: '0 0 22px'
    }
  }, "We'll reach out within one business day to map your growth system."), /*#__PURE__*/React.createElement(B3, {
    variant: "secondary",
    onClick: onClose
  }, "Close")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EB3, null, "Book a consult"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      margin: '10px 0 0'
    }
  }, "Let's map your system.")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-subtle)',
      fontSize: 22,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      margin: '8px 0 20px'
    }
  }, "A free 30-minute strategy call. No menu, no pressure."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(IN3, {
    label: "Business name",
    placeholder: "Joe's Barbershop"
  }), /*#__PURE__*/React.createElement(IN3, {
    label: "Work email",
    placeholder: "you@business.com"
  }), /*#__PURE__*/React.createElement(SE3, {
    label: "What do you need most?",
    defaultValue: "growth"
  }, /*#__PURE__*/React.createElement("option", {
    value: "social"
  }, "Social media"), /*#__PURE__*/React.createElement("option", {
    value: "web"
  }, "Website"), /*#__PURE__*/React.createElement("option", {
    value: "design"
  }, "Graphic design"), /*#__PURE__*/React.createElement("option", {
    value: "growth"
  }, "A complete growth system")), /*#__PURE__*/React.createElement(B3, {
    variant: "signal",
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Request my consult"))))));
}

/* ---------- CTA + FOOTER ---------- */
function Footer({
  onConsult
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '90px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(36px,5vw,56px)',
      margin: '0 0 16px',
      letterSpacing: '-0.02em'
    }
  }, "Built for the city.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ugl-signal-yellow)'
    }
  }, "Engineered for growth.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 18,
      margin: '0 0 28px'
    }
  }, "Let's turn your data into real growth."), /*#__PURE__*/React.createElement(B3, {
    variant: "signal",
    size: "lg",
    onClick: onConsult,
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Book a consult")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-skyline-glow)',
      opacity: 0.6
    }
  })), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-default)',
      padding: '40px',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET3}/logo/ugl-icon-mark-1024.png`,
    alt: "UGL",
    style: {
      width: 30,
      height: 30
    }
  }), /*#__PURE__*/React.createElement(LG3, {
    variant: "horizontal",
    size: "sm"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      color: 'var(--ugl-signal-yellow)'
    }
  }, "DATA. STRATEGY. GROWTH. EXECUTION."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, "\xA9 2026 Urban Growth Labs \xB7 NYC \xB7 uglabs.com"))));
}

/* ---------- APP ---------- */
function App() {
  const [consult, setConsult] = React.useState(false);
  const open = () => setConsult(true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, {
    onConsult: open
  }), /*#__PURE__*/React.createElement(Hero, {
    onConsult: open
  }), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Method, null), /*#__PURE__*/React.createElement(Work, null), /*#__PURE__*/React.createElement(Pricing, {
    onConsult: open
  }), /*#__PURE__*/React.createElement(Footer, {
    onConsult: open
  }), /*#__PURE__*/React.createElement(ConsultModal, {
    open: consult,
    onClose: () => setConsult(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/site-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/site-hero.jsx
try { (() => {
/* Urban Growth Labs — Marketing site UI kit
   Recreates the agency's own marketing website (the "proof of concept").
   Composes the design-system primitives from the bundle namespace. */
const UGL = window.UrbanGrowthLabsDesignSystem_d46328;
const {
  Button,
  Card,
  Badge,
  Stat,
  Logo,
  Meter,
  Input,
  Select,
  Avatar
} = UGL;
const ASSET = '../../assets';

/* ---------- shared bits ---------- */
function Eyebrow({
  children,
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: color || 'var(--ugl-vivid-violet)'
    }
  }, children);
}

/* A "data skyline": bar-chart silhouette = the brand's core motif. */
function DataSkyline({
  height = 220,
  opacity = 1
}) {
  const bars = [38, 64, 50, 88, 72, 110, 96, 134, 120, 158, 142, 176, 150, 196, 168, 210, 184, 150, 120, 96, 72, 54, 42, 30];
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height,
      overflow: 'hidden',
      opacity,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-skyline-glow)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      gap: 6,
      padding: '0 24px'
    }
  }, bars.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 18,
      height: h,
      background: 'linear-gradient(180deg, rgba(162,89,255,0.55), rgba(107,0,255,0.12))',
      borderRadius: '3px 3px 0 0',
      boxShadow: '0 0 12px rgba(107,0,255,0.25)'
    }
  }))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1000 220",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "40,190 200,150 360,160 520,96 680,108 860,40",
    fill: "none",
    stroke: "#FFE600",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      filter: 'drop-shadow(0 0 6px rgba(255,230,0,0.6))'
    }
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "860,40 838,52 854,62",
    fill: "#FFE600",
    style: {
      filter: 'drop-shadow(0 0 6px rgba(255,230,0,0.6))'
    }
  })));
}

/* ---------- NAV ---------- */
function Nav({
  onConsult
}) {
  const links = ['Services', 'Work', 'Pricing', 'About'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px',
      background: 'rgba(10,7,20,0.78)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/ugl-icon-mark-1024.png`,
    alt: "UGL",
    style: {
      width: 34,
      height: 34
    }
  }), /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    size: "sm"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: `#${l.toLowerCase()}`,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    size: "sm",
    onClick: onConsult
  }, "Book a consult")));
}

/* ---------- HERO ---------- */
function Hero({
  onConsult
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '88px 40px 240px',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "soft",
    dot: true,
    style: {
      marginBottom: 22
    }
  }, "NYC \xB7 Data-driven marketing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(48px, 7vw, 84px)',
      lineHeight: 1.0,
      letterSpacing: '-0.03em',
      margin: '0 0 8px',
      maxWidth: 900
    }
  }, "Growth isn't luck.", /*#__PURE__*/React.createElement("br", null), "It's ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ugl-signal-yellow)'
    }
  }, "a system.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: 'var(--text-muted)',
      maxWidth: 560,
      margin: '20px 0 32px',
      lineHeight: 1.5
    }
  }, "We turn data into real growth for New York's local businesses \u2014 research-led marketing systems built for barbershops, restaurants, salons, and the brands that power the block."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    size: "lg",
    onClick: onConsult,
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Explore services"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "View case studies")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 54,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Avg. conversion lift",
    value: "+28.6%",
    accent: "signal"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Local brands grown",
    value: "40+"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Yrs operator experience",
    value: "7"
  }))), /*#__PURE__*/React.createElement(DataSkyline, {
    height: 260
  }));
}
window.UGLSite_Shared = {
  Eyebrow,
  DataSkyline,
  Nav,
  Hero
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/site-hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/site-sections.jsx
try { (() => {
/* Urban Growth Labs — Marketing site: lower sections */
const UGL2 = window.UrbanGrowthLabsDesignSystem_d46328;
const {
  Button: B2,
  Card: C2,
  Badge: BD2,
  Stat: ST2,
  Meter: M2,
  Logo: LG2,
  Avatar: AV2
} = UGL2;
const {
  Eyebrow: EB
} = window.UGLSite_Shared;
const ASSET2 = '../../assets';

/* ---------- SERVICES ---------- */
function Services() {
  const core = [{
    t: 'Social media',
    d: 'Channel strategy, content calendars, creative, and community management — focused on the platforms that actually convert for your business.'
  }, {
    t: 'Website design & infrastructure',
    d: 'Fast, modern, conversion-focused sites with the tracking and integrations needed to measure real results.'
  }, {
    t: 'Graphic design',
    d: 'Brand identity, social creative, menus, and the visual system that ties your whole presence together.'
  }];
  const pipeline = ['Data analysis', 'Marketing automation', 'AI marketing', 'Market research'];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      padding: '96px 40px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(EB, null, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 42,
      margin: '12px 0 6px',
      maxWidth: 640
    }
  }, "A few services, done exceptionally well."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 17,
      maxWidth: 560,
      marginBottom: 40
    }
  }, "Not a long menu done averagely. We lead with three core service lines, then layer pipeline capabilities where they strengthen your highest-converting channels."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, core.map((s, i) => /*#__PURE__*/React.createElement(C2, {
    key: s.t,
    interactive: true,
    glowOnHover: true,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 14,
      color: 'var(--ugl-vivid-violet)',
      marginBottom: 14
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 21,
      margin: '0 0 10px'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14.5,
      margin: 0,
      lineHeight: 1.55
    }
  }, s.d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Pipeline capabilities"), pipeline.map(p => /*#__PURE__*/React.createElement(BD2, {
    key: p,
    variant: "outline"
  }, p))));
}

/* ---------- METHOD ---------- */
function Method() {
  const steps = [{
    k: 'Discover',
    d: 'Research the business, audience, and competitors. Audit channels and find the gaps.'
  }, {
    k: 'Strategize',
    d: 'Plan the pipeline around the highest-converting channels and set the metrics that matter.'
  }, {
    k: 'Execute',
    d: 'Build and launch — site, social, and creative — then test and optimize.'
  }, {
    k: 'Grow',
    d: 'Scale what works, report results, and reinvest in the next opportunity.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-panel)',
      borderTop: '1px solid var(--border-default)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '88px 40px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 16,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EB, null, "The UGL method"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 38,
      margin: '12px 0 0'
    }
  }, "Every engagement is a system.")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--ugl-signal-yellow)',
      letterSpacing: '0.14em',
      fontSize: 13
    }
  }, "PLAN. TEST. OPTIMIZE. SCALE.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.k,
    style: {
      position: 'relative',
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: 3,
      width: 40,
      background: 'var(--grad-brand)',
      borderRadius: 3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 13,
      color: 'var(--text-subtle)',
      marginBottom: 8
    }
  }, "STEP ", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      margin: '0 0 8px'
    }
  }, s.k), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      margin: 0,
      lineHeight: 1.5
    }
  }, s.d))))));
}

/* ---------- WORK / proof ---------- */
function Work() {
  const cases = [{
    name: 'Fade Theory Barbershop',
    tag: 'Storefront',
    metric: '+212%',
    label: 'online bookings',
    mix: [['Paid social', 52, 'brand'], ['Local SEO', 33, 'violet'], ['Email', 15, 'signal']]
  }, {
    name: 'Verde Smoothie Bar',
    tag: 'Food & beverage',
    metric: '+34.2K',
    label: 'reach / month',
    mix: [['Organic social', 46, 'violet'], ['Influencer', 30, 'brand'], ['Email', 24, 'signal']]
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      padding: '96px 40px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(EB, null, "Proof, not promises"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 42,
      margin: '12px 0 40px'
    }
  }, "Local brands, measurable growth."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 20
    }
  }, cases.map(c => /*#__PURE__*/React.createElement(C2, {
    key: c.name,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BD2, {
    variant: "soft",
    size: "sm",
    style: {
      marginBottom: 10
    }
  }, c.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      margin: 0
    }
  }, c.name)), /*#__PURE__*/React.createElement(ST2, {
    value: c.metric,
    caption: c.label,
    accent: "signal"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 8
    }
  }, c.mix.map(([l, v, a]) => /*#__PURE__*/React.createElement(M2, {
    key: l,
    label: l,
    value: v,
    accent: a
  })))))));
}
window.UGLSite_Lower = {
  Services,
  Method,
  Work
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/site-sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Meter = __ds_scope.Meter;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
