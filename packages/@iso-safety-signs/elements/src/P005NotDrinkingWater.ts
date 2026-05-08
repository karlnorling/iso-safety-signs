// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 265"`;
const _Body = `<g fill-rule="evenodd"><path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M67.797 138.515c18.047-8.597 22.866 12.798 39.18 1.819 19.257-12.962 24.711 2.041 36.04 1.994l4.827-16.769 11.917 3.43-22.576 78.436h-62.46L52.149 128.99l11.92-3.43zm3.556 12.343-1.565-5.432c5.16-2.882 8.801-2.668 15.24 1.318 8.905 5.514 17.753 4.949 25.91-.534 14.52-9.775 18.72 2.084 30.024 3.233l-1.439 5.02c-1.823-.125-3.609-.892-6.338-2.671-9.736-6.345-17.377-3.667-26.139 2.227-15.501 10.431-20.983-8.966-35.693-3.162m12.708 44.172-10.749-37.354c3.151-1.622 5.514-.859 10.477 2.213 8.941 5.539 18.713 5.987 27.332.186 14.556-9.793 16.264-.415 26.447 1.178l-9.718 33.777z"/></g><path d="M180.029 93.888c-2.797 4.272-11.333 7.383-21.431 7.383s-18.63-3.112-21.427-7.383h-12.862c-7.767 0-14.065 6.302-14.065 14.065v13.22H88.717v-13.22c0-19.655 15.938-35.589 35.592-35.589h26.304v-7.269h-7.294a7.293 7.293 0 0 1 0-14.584h30.558c4.028 0 7.294 3.266 7.294 7.29s-3.266 7.294-7.294 7.294h-7.29v7.269h39.599v21.524z"/><path fill="#b71f2e" fill-rule="evenodd" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `Not drinking water`;
const _DefaultTitle = 'Not drinking water';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P005NotDrinkingWater extends HTMLElement {
  static readonly tagName = 'iso-p005-not-drinking-water';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p005-not-drinking-water`;
    const titleId = `iso-title-p005-not-drinking-water`;
    const _w = this.hasAttribute('width') ? _h(this.getAttribute('width')!) : _DefaultWidth;
    const _ht = this.hasAttribute('height') ? _h(this.getAttribute('height')!) : _DefaultHeight;
    const resolvedTitle = this.getAttribute('title') ?? _DefaultTitle;
    const resolvedDesc = this.getAttribute('description') ?? _DefaultDesc;
    this.style.display = 'contents';
    this.innerHTML = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
  }
}
