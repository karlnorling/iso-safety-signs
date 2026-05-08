// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"`;
const _Body = `<g style="stroke:none;fill-rule:nonzero"><path d="M0 0h200v200H0z" style="fill:#fff"/><path d="M5 5h190v190H5z" style="fill:#237f52"/><path d="M75 25h50v150H75z" style="fill:#fff"/><path d="M25 75h150v50H25z" style="fill:#fff"/></g>`;
const _DefaultDesc = `First aid`;
const _DefaultTitle = 'First aid';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class E003FirstAid extends HTMLElement {
  static readonly tagName = 'iso-e003-first-aid';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-e003-first-aid`;
    const titleId = `iso-title-e003-first-aid`;
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
