// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 200 200"`;
const _Body = `<path d="M0 0h200v200H0z" style="fill:#fff;fill-rule:nonzero;stroke:none"/><path d="M5 5h190v190H5z" style="fill:#237f52;fill-opacity:1;fill-rule:nonzero;stroke:none"/><path d="m156.033 22.7-107.765.24v140.262L32.02 174.193h107.765l16.248-10.753zm-79.57 5.496 74.313.478v132.378l-1.91.717-72.402-21.984z" style="fill:#fff;stroke:none;stroke-width:.5px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"/><path d="m81.004 79.45 17.622-13.978v12.963s9.7 7.406 23.111 7.99c14.98.65 22.641-1.353 22.641-1.353v31.68s-7.818 2.177-24.5-1.013c-12.802-2.448-21.458-9.546-21.458-9.546v15.037z" style="fill:#fff;stroke:none;stroke-width:.5px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"/>`;
const _DefaultDesc = `Door opens by pushing on the left-hand side`;
const _DefaultTitle = 'Door opens by pushing on the left-hand side';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class E022DoorOpensByPushingOnTheLeftHandSide extends HTMLElement {
  static readonly tagName = 'iso-e022-door-opens-by-pushing-on-the-left-hand-side';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-e022-door-opens-by-pushing-on-the-left-hand-side`;
    const titleId = `iso-title-e022-door-opens-by-pushing-on-the-left-hand-side`;
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
