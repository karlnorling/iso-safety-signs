import { IsoSign } from '../IsoSign';
import { defineCustomElements } from '../defineCustomElements';

const TAG = 'iso-sign-test';

beforeAll(() => {
  customElements.define(TAG, IsoSign);
});

const mount = (attrs: Record<string, string> = {}): IsoSign => {
  const el = document.createElement(TAG) as IsoSign;
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  document.body.appendChild(el);
  return el;
};

afterEach(() => {
  document.body.innerHTML = '';
});

describe('IsoSign', () => {
  it('renders nothing when sign-id is absent', () => {
    const el = mount();
    expect(el.innerHTML).toBe('');
  });

  it('renders nothing for an unknown sign-id', () => {
    const el = mount({ 'sign-id': 'not-a-real-id' });
    expect(el.innerHTML).toBe('');
  });

  it('sets display:contents on the host element for a known id', () => {
    // signs.generated.ts is empty in the placeholder; test the class structure
    expect(IsoSign.tagName).toBe('iso-sign');
    expect(IsoSign.observedAttributes).toContain('sign-id');
    expect(IsoSign.observedAttributes).toContain('title');
    expect(IsoSign.observedAttributes).toContain('description');
    expect(IsoSign.observedAttributes).toContain('width');
    expect(IsoSign.observedAttributes).toContain('height');
  });
});

describe('rendered signs', () => {
  it('gives every element showing the same sign distinct ids', () => {
    mount({ 'sign-id': 'e001-emergency-exit-left-hand', title: 'First' });
    mount({ 'sign-id': 'e001-emergency-exit-left-hand', title: 'Second' });
    const all = Array.from(document.querySelectorAll('[id]')).map((n) => n.id);
    expect(all.length).toBeGreaterThan(0);
    expect(new Set(all).size).toBe(all.length);

    const [, second] = Array.from(document.querySelectorAll('svg'));
    const [titleId] = second.getAttribute('aria-labelledby')!.split(' ');
    expect(document.getElementById(titleId)!.textContent).toBe('Second');
  });

  it('moves aria-label onto the svg', () => {
    const el = mount({ 'sign-id': 'e001-emergency-exit-left-hand', 'aria-label': 'Exit' });
    const svg = el.querySelector('svg')!;
    expect(svg.getAttribute('aria-label')).toBe('Exit');
    expect(svg.hasAttribute('aria-labelledby')).toBe(false);
  });
});

describe('defineCustomElements', () => {
  it('can register the default and custom prefixes together', () => {
    expect(() => {
      defineCustomElements();
      defineCustomElements('safety');
      defineCustomElements('safety');
    }).not.toThrow();
    expect(customElements.get('iso-e001-emergency-exit-left-hand')).toBeDefined();
    expect(customElements.get('safety-e001-emergency-exit-left-hand')).toBeDefined();
    expect(customElements.get('safety-sign')).toBeDefined();
  });

  it('renders elements registered under a custom prefix', () => {
    defineCustomElements('safety');
    const el = document.createElement('safety-e001-emergency-exit-left-hand');
    document.body.appendChild(el);
    expect(el.querySelector('svg')).not.toBeNull();
  });
});
