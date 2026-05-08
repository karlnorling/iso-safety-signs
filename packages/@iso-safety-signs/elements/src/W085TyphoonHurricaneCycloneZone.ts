// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.286 61.383"`;
const _Body = `<path fill="#f9a800" stroke="#000" stroke-linejoin="round" stroke-width="3.749" d="M35.143 1.874 68.412 59.51H1.874Z"/><path fill="#f68c1f" d="M103.05 137.724c0-6.95-5.286-12.56-12.39-12.56-8.505 0-13.538 6.608-13.538 12.462 0 3.976 2.192 7.44 5.436 9.255-6.106-.307-10.24-4.659-10-9.415-.35 6.942 4.646 12.81 11.741 13.166 8.495.427 13.853-5.92 14.148-11.767.219-4.34-2.208-8.201-5.868-10.023 6.113 0 10.47 4.12 10.47 8.882m-15.315 3.531a3.63 3.63 0 0 1-3.634-3.63 3.63 3.63 0 0 1 3.634-3.629 3.63 3.63 0 0 1 3.634 3.63 3.63 3.63 0 0 1-3.634 3.63" style="fill:#000;fill-opacity:1;stroke:none;stroke-width:.264582" transform="translate(-52.652 -96.837)"/>`;
const _DefaultDesc = `Typhoon/hurricane/cyclone zone`;
const _DefaultTitle = 'Typhoon/hurricane/cyclone zone';
const _DefaultWidth = `265.647`;
const _DefaultHeight = `231.998`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class W085TyphoonHurricaneCycloneZone extends HTMLElement {
  static readonly tagName = 'iso-w085-typhoon-hurricane-cyclone-zone';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-w085-typhoon-hurricane-cyclone-zone`;
    const titleId = `iso-title-w085-typhoon-hurricane-cyclone-zone`;
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
