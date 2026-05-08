// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `General prohibition sign`;
const _DefaultTitle = 'General prohibition sign';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P001GeneralProhibitionSign extends HTMLElement {
  static readonly tagName = 'iso-p001-general-prohibition-sign';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p001-general-prohibition-sign`;
    const titleId = `iso-title-p001-general-prohibition-sign`;
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
