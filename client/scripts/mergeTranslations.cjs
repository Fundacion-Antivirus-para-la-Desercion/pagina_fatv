const fs = require('fs');
const path = require('path');

function deepMerge(src, generated) {
  // merge two objects recursively; prefer non-empty values from src, then generated
  if (Array.isArray(src) || Array.isArray(generated)) {
    // if both arrays, prefer src when items have string values; otherwise keep generated
    if (Array.isArray(src)) return src;
    return generated;
  }
  const out = {};
  const keys = new Set([...(src ? Object.keys(src) : []), ...(generated ? Object.keys(generated) : [])]);
  keys.forEach(k => {
    const s = src && Object.prototype.hasOwnProperty.call(src, k) ? src[k] : undefined;
    const g = generated && Object.prototype.hasOwnProperty.call(generated, k) ? generated[k] : undefined;
    if (s === undefined) {
      out[k] = g;
    } else if (g === undefined) {
      out[k] = s;
    } else if (typeof s === 'object' && s !== null && typeof g === 'object' && g !== null) {
      out[k] = deepMerge(s, g);
    } else if (s === '' || s === null) {
      out[k] = g; // prefer non-empty generated value when src is empty
    } else {
      out[k] = s; // prefer src value when present
    }
  });
  return out;
}

function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const srcLocalesDir = path.join(projectRoot, 'src', 'locales');
  const publicLocalesDir = path.join(projectRoot, 'public', 'locales');

  if (!fs.existsSync(publicLocalesDir)) fs.mkdirSync(publicLocalesDir, { recursive: true });

  const srcFiles = fs.existsSync(srcLocalesDir) ? fs.readdirSync(srcLocalesDir).filter(f => f.endsWith('.json')) : [];
  const publicLangs = fs.existsSync(publicLocalesDir) ? fs.readdirSync(publicLocalesDir).filter(f => fs.statSync(path.join(publicLocalesDir, f)).isDirectory()) : [];

  // Determine languages to merge: union of srcFiles langs and public dirs
  const langs = new Set();
  srcFiles.forEach(f => langs.add(path.basename(f, '.json')));
  publicLangs.forEach(d => langs.add(d));

  langs.forEach(lang => {
    const srcPath = path.join(srcLocalesDir, `${lang}.json`);
    const genPath = path.join(publicLocalesDir, lang, 'translation.json');
    const outDir = path.join(publicLocalesDir, lang);
    const outPath = genPath;

    let srcJson = null;
    let genJson = null;

    if (fs.existsSync(srcPath)) {
      try { srcJson = JSON.parse(fs.readFileSync(srcPath, 'utf8')); } catch (e) { console.error('Error parsing', srcPath, e.message); }
    }
    if (fs.existsSync(genPath)) {
      try { genJson = JSON.parse(fs.readFileSync(genPath, 'utf8')); } catch (e) { console.error('Error parsing', genPath, e.message); }
    }

    const merged = deepMerge(srcJson || {}, genJson || {});
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outPath, JSON.stringify(merged, null, 2), 'utf8');
    console.log('Merged translations written to', outPath);
  });
}

if (require.main === module) main();
