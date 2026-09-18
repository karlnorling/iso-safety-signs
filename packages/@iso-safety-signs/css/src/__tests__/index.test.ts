import fs from 'fs';
import path from 'path';
import { signCssClasses, getCssClassName } from '../index';

describe('@iso-safety-signs/css', () => {
  it('exports signCssClasses as an object', () => {
    expect(typeof signCssClasses).toBe('object');
  });

  it('returns undefined for unknown id', () => {
    expect(getCssClassName('not-a-real-sign')).toBeUndefined();
  });
});

describe('sprite.css', () => {
  const pkgDir = path.join(__dirname, '..', '..');
  const css = fs.readFileSync(path.join(pkgDir, 'sprite.css'), 'utf-8');

  it('only references files in @iso-safety-signs/assets that exist', () => {
    const urls = [...css.matchAll(/url\('([^']+)'\)/g)].map((m) => m[1]);
    expect(urls.length).toBeGreaterThan(0);
    for (const url of urls) {
      expect(url.startsWith('../assets/assets/')).toBe(true);
      expect(fs.existsSync(path.join(pkgDir, url))).toBe(true);
    }
  });

  it('declares @iso-safety-signs/assets as a dependency', () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8'));
    expect(pkg.dependencies).toHaveProperty('@iso-safety-signs/assets');
  });
});
