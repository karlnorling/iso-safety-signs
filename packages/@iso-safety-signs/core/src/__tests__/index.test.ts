import fs from 'fs';
import path from 'path';
import {
  getAllSigns,
  getSign,
  getSignsByCategory,
  parseSvg,
  renderSvg,
  signs,
  toInstanceId,
} from '../index';

describe('@iso-safety-signs/core', () => {
  it('exports a signs array', () => {
    expect(Array.isArray(signs)).toBe(true);
  });

  it('getAllSigns returns the same array', () => {
    expect(getAllSigns()).toBe(signs);
  });

  it('getSign returns undefined for unknown id', () => {
    expect(getSign('not-a-real-sign')).toBeUndefined();
  });

  it('getSignsByCategory returns empty array for unknown category', () => {
    // @ts-expect-error testing invalid input
    expect(getSignsByCategory('unknown')).toEqual([]);
  });

  it('getSignsByCategory filters correctly when signs exist', () => {
    const all = getAllSigns();
    if (all.length === 0) return; // pipeline hasn't run yet — skip
    const emergency = getSignsByCategory('emergency');
    expect(emergency.every((s) => s.category === 'emergency')).toBe(true);
  });

  it('each sign has the required fields', () => {
    for (const sign of signs) {
      expect(sign).toHaveProperty('id');
      expect(sign).toHaveProperty('code');
      expect(sign).toHaveProperty('name');
      expect(sign).toHaveProperty('category');
      expect(sign).toHaveProperty('svg');
      expect(sign).toHaveProperty('assets');
    }
  });
});

describe('sign data', () => {
  const assetsRoot = path.join(__dirname, '..', '..', '..', 'assets', 'assets');

  it('every asset path points at a file that exists', () => {
    const missing: string[] = [];
    for (const { assets } of signs) {
      const paths = [
        assets.svg,
        ...Object.values(assets.jpg),
        ...Object.values(assets.png),
        ...Object.values(assets.webp),
      ];
      for (const p of paths) if (!fs.existsSync(path.join(assetsRoot, p))) missing.push(p);
    }
    expect(missing).toEqual([]);
  });

  it('asset svg paths are source files, not sized copies', () => {
    for (const { assets } of signs) expect(assets.svg).not.toMatch(/_\d+x\d+\.svg$/);
  });

  it('inline svgs contain no scripts or event handlers', () => {
    for (const { svg } of signs) {
      expect(svg).not.toMatch(/<script/i);
      expect(svg).not.toMatch(/\son[a-z]+=/i);
    }
  });
});

describe('renderSvg', () => {
  const svg = parseSvg(
    '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><defs><linearGradient id="g"/></defs><path fill="url(#g)"/><use href="#g"/></svg>',
  );
  const base = { description: 'Desc', instanceId: 'iso-1', title: 'Title' };

  it('synthesises a viewBox from width/height', () => {
    expect(svg.attrs).toContain('viewBox="0 0 10 10"');
  });

  it('labels the svg via its title and description by default', () => {
    const html = renderSvg(svg, base);
    expect(html).toContain('aria-labelledby="iso-1-title iso-1-desc"');
    expect(html).toContain('<title id="iso-1-title">Title</title>');
  });

  it('uses aria-label instead of aria-labelledby when given', () => {
    const html = renderSvg(svg, { ...base, ariaLabel: 'Exit "here"' });
    expect(html).toContain('aria-label="Exit &quot;here&quot;"');
    expect(html).not.toContain('aria-labelledby');
  });

  it('scopes internal ids and references to the instance', () => {
    const a = renderSvg(svg, base);
    const b = renderSvg(svg, { ...base, instanceId: 'iso-2' });
    expect(a).toContain('id="iso-1-g"');
    expect(a).toContain('url(#iso-1-g)');
    expect(a).toContain('href="#iso-1-g"');
    expect(b).toContain('id="iso-2-g"');
    expect(b).not.toContain('iso-1');
  });

  it('escapes width, height, title and description', () => {
    const html = renderSvg(svg, { ...base, title: '<b>', width: '1" onload="x' });
    expect(html).toContain('&lt;b&gt;');
    expect(html).not.toContain('" onload="');
  });

  it('toInstanceId strips characters unsafe in url(#…) references', () => {
    expect(toInstanceId(':r0:')).toBe('iso-r0');
    expect(toInstanceId('«r1»')).toBe('iso-r1');
  });
});
