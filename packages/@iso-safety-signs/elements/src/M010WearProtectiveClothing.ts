// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 265"`;
const _Body = `<path fill="#005387" d="M132.499 0C59.528 0 0 59.511 0 132.468S59.532 265 132.5 265 265 205.422 265 132.468 205.471 0 132.499 0"/><path fill="#fff" fill-rule="evenodd" d="M119.193 34.807a8.354 8.354 0 0 1 8.356-8.356h2.443v86.175h5.013V26.451h2.443a8.36 8.36 0 0 1 8.356 8.356h12.836c5.334 0 9.891 3.339 11.696 8.035a11 11 0 0 1 .336.993l23.813 70.603-16.33 4.53-19.051-54.722-3.923 45.952 19.646 120.93-22.978 3.927-19.325-98.857-19.376 98.857-22.974-3.927 19.65-120.93-3.927-45.952-19.059 54.722-16.322-4.53 23.813-70.615a11 11 0 0 1 .332-.982 12.53 12.53 0 0 1 11.7-8.035zm21.76 23.217h12.531v5.013h-12.531z"/>`;
const _DefaultDesc = `Wear protective clothing`;
const _DefaultTitle = 'Wear protective clothing';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class M010WearProtectiveClothing extends HTMLElement {
  static readonly tagName = 'iso-m010-wear-protective-clothing';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-m010-wear-protective-clothing`;
    const titleId = `iso-title-m010-wear-protective-clothing`;
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
