import { createApp, h } from 'vue';
import { SignById } from '../SignById';
import { E001EmergencyExitLeftHand } from '../E001EmergencyExitLeftHand';

describe('SignById', () => {
  it('is a Vue component object', () => {
    expect(SignById).toHaveProperty('name', 'SignById');
    expect(SignById).toHaveProperty('setup');
  });

  it('renders null for unknown id', () => {
    // setup() returns a render function; call it with unknown id
    const props = { id: 'not-a-real-sign' };
    const vnode = (SignById.setup as Function)(props, { attrs: {} })();
    expect(vnode).toBeNull();
  });
});

describe('rendered signs', () => {
  const mount = (render: () => ReturnType<typeof h>[]): HTMLElement => {
    const el = document.createElement('div');
    createApp({ render }).mount(el);
    return el;
  };

  it('gives every instance of the same sign distinct ids', () => {
    const el = mount(() => [
      h(E001EmergencyExitLeftHand, { title: 'First' }),
      h(E001EmergencyExitLeftHand, { title: 'Second' }),
      h(SignById, { id: 'e001-emergency-exit-left-hand' }),
    ]);
    const all = Array.from(el.querySelectorAll('[id]')).map((n) => n.id);
    expect(new Set(all).size).toBe(all.length);

    const [, second] = Array.from(el.querySelectorAll('svg'));
    const [titleId] = second.getAttribute('aria-labelledby')!.split(' ');
    expect(el.querySelector(`[id="${titleId}"]`)!.textContent).toBe('Second');
  });

  it('puts aria-label on the svg and keeps other attrs on the wrapper', () => {
    const el = mount(() => [
      h(E001EmergencyExitLeftHand, { 'aria-label': 'Exit', class: 'sign', style: { color: 'red' } }),
    ]);
    const span = el.querySelector('span')!;
    const svg = el.querySelector('svg')!;
    expect(svg.getAttribute('aria-label')).toBe('Exit');
    expect(svg.hasAttribute('aria-labelledby')).toBe(false);
    expect(span.hasAttribute('aria-label')).toBe(false);
    expect(span.className).toBe('sign');
    expect(span.style.display).toBe('contents');
    expect(span.style.color).toBe('red');
  });
});
