const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');

assert(html.includes("const LABELS_SANSAD_DARK"), 'sansad night label map missing');
assert(html.includes("const LABELS_MEADOW_DARK"), 'meadow night label map missing');
assert(html.includes("const LABELS_CLEAR_DARK"), 'clear night label map missing');
assert(html.includes("chip: '#1c1a16dd'"), 'night timer label chip should be slightly more transparent');
assert(html.includes(".seglist .min { color: var(--muted); font-variant-numeric: tabular-nums; font-size: 32px; font-weight: 500; min-width: 6ch; text-align: right; flex-shrink: 0; }"), 'sidebar minute width guard missing');
assert(!html.includes("mkLine('#ffffff', w + 2.5, 0.38)"), 'white halo ticmark fluff should be removed');
assert(html.includes("? createPsychedelicGradient(defs, `psy-grad-${i}-live`, a0, a1, baseColor, nextColor, false)"), 'psychedelic future segments should stay gradient');
assert(!html.includes("? createPsychedelicGradient(defs, `psy-grad-${i}-past`, a0, a1, baseColor, nextColor, true)"), 'psychedelic past segments should not use full gradients');

console.log('THEME_REGRESSION_OK');
