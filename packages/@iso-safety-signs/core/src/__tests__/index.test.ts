import { getAllSigns, getSign, getSignsByCategory, signs } from '../index';

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
