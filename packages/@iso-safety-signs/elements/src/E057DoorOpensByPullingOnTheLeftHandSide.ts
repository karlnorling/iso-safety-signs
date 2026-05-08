// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.827 105.833"`;
const _Body = `<path d="M38.28 158.659h105.827V52.825H38.28Zm0 0" style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.56158" transform="translate(-38.28 -52.825)"/><path d="M41.275 155.664h99.837V55.82H41.275Zm0 0" style="fill:#237f52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.56158" transform="translate(-38.28 -52.825)"/><path d="M123.002 65.94v63.782l-37.083 15.822v-7.746H59.385l10.878-8.9V65.94Zm-2.139 1.985L87.244 75.37v67.99l33.62-14.712ZM89.561 99.35c5.49 4.167 10.275 6.569 16.832 6.963v-6.656l12.71 13.701-13.266 13.268v-6.428c-6.499-.48-11.494-1.928-16.276-6.386z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:4.96739;stroke-dasharray:none;stroke-opacity:1" transform="translate(-38.28 -52.825)"/>`;
const _DefaultDesc = `Door opens by pulling on the left-hand side`;
const _DefaultTitle = 'Door opens by pulling on the left-hand side';
const _DefaultWidth = `399.977`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class E057DoorOpensByPullingOnTheLeftHandSide extends HTMLElement {
  static readonly tagName = 'iso-e057-door-opens-by-pulling-on-the-left-hand-side';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-e057-door-opens-by-pulling-on-the-left-hand-side`;
    const titleId = `iso-title-e057-door-opens-by-pulling-on-the-left-hand-side`;
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
