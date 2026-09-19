import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SignById } from '../Sign';
import { E001EmergencyExitLeftHand } from '../E001EmergencyExitLeftHand';

const renderToContainer = (el: React.ReactElement): HTMLElement => {
  const html = renderToStaticMarkup(el);
  const div = document.createElement('div');
  div.innerHTML = html;
  return div;
};

describe('SignById', () => {
  it('renders null for unknown id', () => {
    const html = renderToStaticMarkup(<SignById id="not-a-real-sign" />);
    expect(html).toBe('');
  });

  it('does not inject elements from malicious id props', () => {
    const container = renderToContainer(
      <SignById id={'"><script>alert(1)</script>'} />,
    );
    expect(container.querySelectorAll('script').length).toBe(0);
  });
});

describe('rendered signs', () => {
  const ids = (container: HTMLElement): string[] =>
    Array.from(container.querySelectorAll('[id]')).map((el) => el.id);

  it('gives every instance of the same sign distinct ids', () => {
    const container = renderToContainer(
      <>
        <E001EmergencyExitLeftHand title="First" />
        <E001EmergencyExitLeftHand title="Second" />
        <SignById id="e001-emergency-exit-left-hand" />
      </>,
    );
    const all = ids(container);
    expect(new Set(all).size).toBe(all.length);

    const [, second] = Array.from(container.querySelectorAll('svg'));
    const [titleId] = second.getAttribute('aria-labelledby')!.split(' ');
    expect(container.querySelector(`[id="${titleId}"]`)!.textContent).toBe('Second');
  });

  it('puts aria-label on the svg, not the wrapper', () => {
    const container = renderToContainer(<E001EmergencyExitLeftHand aria-label="Exit" />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('aria-label')).toBe('Exit');
    expect(svg.hasAttribute('aria-labelledby')).toBe(false);
    expect(container.querySelector('span')!.hasAttribute('aria-label')).toBe(false);
  });

  it('renders named and by-id components with the same default size', () => {
    const container = renderToContainer(
      <>
        <E001EmergencyExitLeftHand />
        <SignById id="e001-emergency-exit-left-hand" />
      </>,
    );
    const [named, byId] = Array.from(container.querySelectorAll('svg'));
    expect(byId.getAttribute('width')).toBe(named.getAttribute('width'));
    expect(byId.getAttribute('viewBox')).toBe(named.getAttribute('viewBox'));
  });
});
