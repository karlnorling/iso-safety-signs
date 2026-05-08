import { signCssClasses, getCssClassName } from '../index';

describe('@iso-safety-signs/css', () => {
  it('exports signCssClasses as an object', () => {
    expect(typeof signCssClasses).toBe('object');
  });

  it('returns undefined for unknown id', () => {
    expect(getCssClassName('not-a-real-sign')).toBeUndefined();
  });
});
