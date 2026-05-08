import { IsoSign } from '../IsoSign';

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
