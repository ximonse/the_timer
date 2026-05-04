const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');

assert(html.includes("const LABELS_SANSAD_DARK"), 'sansad night label map missing');
assert(html.includes("const LABELS_SANSAD_DAY"), 'sansad day label map missing');
assert(html.includes("const LABELS_MEADOW_DARK"), 'meadow night label map missing');
assert(html.includes("const LABELS_CLEAR_DARK"), 'clear night label map missing');
assert(html.includes("label = LABELS_SANSAD_DAY[i % LABELS_SANSAD_DAY.length];"), 'sansad day timer labels should use tuned day label colors');
assert(html.includes("chip: '#1c1a16dd'"), 'night timer label chip should be slightly more transparent');
assert(html.includes(".seglist .min { color: var(--muted); font-variant-numeric: tabular-nums; font-size: 32px; font-weight: 500; min-width: 6ch; text-align: right; flex-shrink: 0; }"), 'sidebar minute width guard missing');
assert(!html.includes("mkLine('#ffffff', w + 2.5, 0.38)"), 'white halo ticmark fluff should be removed');
assert(html.includes("? createPsychedelicGradient(defs, `psy-grad-${i}-live`, a0, a1, baseColor, nextColor, true)"), 'psychedelic future segments should use the stronger curved gradient');
assert(html.includes("? createPsychedelicGradient(defs, `psy-grad-${i}-active-live`, splitAngle, a1, baseColor, nextColor, true)"), 'psychedelic active remaining segment should use the stronger curved gradient');
assert(!html.includes("? createPsychedelicGradient(defs, `psy-grad-${i}-past`, a0, a1, baseColor, nextColor, true)"), 'psychedelic past segments should not use full gradients');
assert(html.includes("filter.setAttribute('id', 'psy-edge-soft');"), 'psychedelic soft-edge filter missing');
assert(html.includes("const segFilter = isPsychedelic ? 'url(#psy-edge-soft)' : null;"), 'psychedelic segment filter hook missing');
assert(html.includes("if (segFilter) path.setAttribute('filter', segFilter);"), 'psychedelic future segment should use soft-edge filter');
assert(html.includes("if (segFilter) pastP.setAttribute('filter', segFilter);"), 'psychedelic past-active segment should use soft-edge filter');
assert(html.includes("if (segFilter) liveP.setAttribute('filter', segFilter);"), 'psychedelic live-active segment should use soft-edge filter');
assert(html.includes("const c0 = dimmed ? mixHex(baseColor, '#1a0033', 0.37) : mixHex(baseColor, '#ffffff', 0.26);"), 'psychedelic future gradient should have reduced dark-edge intensity');
assert(html.includes("const c1 = dimmed ? mixHex(baseColor, nextColor, 0.15) : mixHex(baseColor, nextColor, 0.48);"), 'psychedelic future gradient should have reduced color-mix intensity');
assert(html.includes("const c2 = dimmed ? mixHex(nextColor, '#140022', 0.39) : mixHex(nextColor, '#ffffff', 0.18);"), 'psychedelic future gradient should have reduced trailing dark-edge intensity');
assert(html.includes("hit.setAttribute('stroke-width', '32');"), 'between-segment drag area should be widened');
assert(html.includes("shit.setAttribute('stroke-width', '36');"), 'lesson-start drag area should be widened');
assert(html.includes("ehit.setAttribute('stroke-width', '36');"), 'lesson-end drag area should be widened');

console.log('THEME_REGRESSION_OK');
