import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SignById } from '../Sign';

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
