#!/usr/bin/env node
/**
 * render_report.js
 * Compiles a Handlebars template with JSON analysis data to produce an HTML report.
 * Usage: node render_report.js <_data.js|analysis.json> [output_dir]
 */

const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

// ── Register Helpers ──

Handlebars.registerHelper('money', n => n != null ? '$' + Number(n).toLocaleString('en-US') : '—');
Handlebars.registerHelper('pct', n => n != null ? Number(n).toFixed(1) + '%' : '—');
Handlebars.registerHelper('or', (a, b) => a != null ? a : b);
Handlebars.registerHelper('eq', (a, b) => a === b);
Handlebars.registerHelper('gt', (a, b) => a > b);
Handlebars.registerHelper('nl2p', text => text ? '<p>' + String(text).replace(/\n+/g, '</p><p>') + '</p>' : '');
Handlebars.registerHelper('nl2br', text => text ? String(text).replace(/\n/g, '<br>') : '');

Handlebars.registerHelper('gradeColor', g => ({active:'green',cooling:'amber',sluggish:'red',frozen:'red'})[g]||'blue');
Handlebars.registerHelper('gradeLabel', g => ({active:'🟢 活跃',cooling:'🟡 降温',sluggish:'🔴 低迷',frozen:'⚫ 冻结'})[g]||g||'—');
Handlebars.registerHelper('gradeBadge', g => ({active:'badge-green',cooling:'badge-amber',sluggish:'badge-red',frozen:'badge-red'})[g]||'');
Handlebars.registerHelper('growthLabel', g => ({high_growth:'🚀 高增长',active_densification:'📈 活跃密集化',stable:'⚖️ 成熟稳定',slow:'📩 低增长',transformational:'🏞️ 转型期'})[g]||g||'—');
Handlebars.registerHelper('tierLabel', t => ({A:'✅ A级 Premium',B:'👍 B级 Solid',C:'⚠️ C级 Mixed',D:'🚨 D级 Concerning'})[t]||t||'—');
Handlebars.registerHelper('tierBadge', t => ({A:'badge-green',B:'badge-blue',C:'badge-amber',D:'badge-red'})[t]||'');
Handlebars.registerHelper('strataRatingLabel', r => ({low:'低风险',medium:'中风险',high:'高风险'})[r]||r||'—');
Handlebars.registerHelper('strataRatingBadge', r => ({low:'badge-green',medium:'badge-amber',high:'badge-red'})[r]||'');

// Converts snake_case / camelCase object keys to Title Case for display (e.g. "strata_plan" → "Strata Plan")
Handlebars.registerHelper('humanizeKey', str =>
  String(str).replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, c => c.toUpperCase())
);

// Renders price_history regardless of whether it is a plain string or an array of {date, event, price} objects
Handlebars.registerHelper('renderPriceHistory', ph => {
  if (!ph) return '';
  if (typeof ph === 'string') return ph;
  if (Array.isArray(ph)) {
    return ph.map(e => {
      const price = e.price != null ? ' $' + Number(e.price).toLocaleString('en-US') : '';
      return [e.date, e.event, price].filter(Boolean).join(' ');
    }).join(' · ');
  }
  return String(ph);
});

Handlebars.registerHelper('gdsBadge', ratio => {
  return ratio > 32
    ? '<span class="badge badge-red">⚠️超标</span>'
    : '<span class="badge badge-green">✅合格</span>';
});

Handlebars.registerHelper('cashflowBadge', val => {
  const abs = '$' + Math.abs(val).toLocaleString('en-US');
  return val >= 0
    ? `<span class="badge badge-green">正 ${abs}</span>`
    : `<span class="badge badge-red">负 ${abs}</span>`;
});

Handlebars.registerHelper('rateRows', eco => {
  const ms = eco.mortgage_scenarios;
  const rates = [eco.analysis_rate - 0.5, eco.analysis_rate, eco.analysis_rate + 0.5];
  const keys = ['minus_half', 'current', 'plus_half'];
  const labels = ['（–0.5%）', '（当前中值）', '（+0.5%）'];
  const m = n => '$' + Number(n).toLocaleString('en-US');
  return rates.map((r, i) => {
    const bold = i === 1;
    const w = s => bold ? `<strong>${s}</strong>` : s;
    return {
      label: w(`${r.toFixed(1)}%${labels[i]}`),
      d20: w(m(ms.down_20.payments[keys[i]])),
      d50: w(m(ms.down_50.payments[keys[i]]))
    };
  });
});

// ── Main ──

function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error('Usage: node render_report.js <_data.js|analysis.json> [output_dir]');
    process.exit(1);
  }

  const inputPath = path.resolve(args[0]);
  const outputDir = args[1] ? path.resolve(args[1]) : path.dirname(inputPath);
  const renderDir = __dirname;

  if (!fs.existsSync(inputPath)) { console.error(`File not found: ${inputPath}`); process.exit(1); }
  let data;
  const ext = path.extname(inputPath).toLowerCase();
  if (ext === '.js') {
    data = require(inputPath);
    if (typeof data !== 'object' || data === null || Array.isArray(data)) {
      console.error(`JS file must export a plain object: ${inputPath}`); process.exit(1);
    }
  } else if (ext === '.json') {
    data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
  } else {
    console.error(`Unsupported file type "${ext}". Pass a _data.js or analysis.json file.`); process.exit(1);
  }

  // Validate required keys
  const required = ['property', 'economic', 'demographics', 'policy_zoning', 'land_supply',
    'cma', 'transaction_activity', 'market_positioning', 'resident_profile',
    'hyperlocal_premiums', 'school_catchment', 'holding_costs', 'valuation',
    'tailwinds', 'headwinds', 'overall_assessment', 'key_questions'];
  const missing = required.filter(k => !(k in data));
  if (missing.length > 0) { console.error(`Missing required sections: ${missing.join(', ')}`); process.exit(1); }

  // Read template and CSS
  const templateSrc = fs.readFileSync(path.join(renderDir, 'report.hbs'), 'utf-8');
  const css = fs.readFileSync(path.join(renderDir, 'report.css'), 'utf-8');

  // Compile and render
  const template = Handlebars.compile(templateSrc);
  const html = template({ ...data, css });

  // Write output
  const slug = data.property.address_simplified || 'analysis';
  const outPath = path.join(outputDir, `${slug}_report.html`);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outPath, html, 'utf-8');
  console.log(`Report saved to: ${outPath}`);
}

main();
