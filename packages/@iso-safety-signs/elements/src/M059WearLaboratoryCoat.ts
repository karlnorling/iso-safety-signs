// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.115 70.115"`;
const _Body = `<path fill="#005387" d="M97.348 144.887c0 19.36-15.697 35.057-35.056 35.057-19.36 0-35.058-15.697-35.058-35.057S42.93 109.83 62.292 109.83c19.361 0 35.056 15.698 35.056 35.058" style="stroke-width:.264583" transform="translate(-27.234 -109.83)"/><path d="M53.363 118.397q-.275 0-.529.002c-.448.004-.828.014-1.042.035-.996.098-1.926.765-2.597 1.508-.636.705-1.173 2.597-1.173 2.597l-8.795 25.382 5.947 1.843 7.205-20.021-5.697 39.79s5.006 1.026 7.54 1.34c2.333.29 7.036.503 7.036.503l.419-40.293-5.53-12.649s-1.506-.036-2.784-.037m17.856 0c-1.278 0-2.785.038-2.785.038l-5.529 12.648.419 40.293s4.703-.212 7.036-.502c2.533-.315 7.54-1.34 7.54-1.34l-5.697-39.791 7.204 20.02 5.948-1.842-8.796-25.382s-.536-1.892-1.173-2.597c-.67-.743-1.6-1.41-2.596-1.507a14 14 0 0 0-1.043-.036zm-13.226 1.142 4.298 9.83 4.298-9.83c-3.09 1.106-5.116 1.082-8.596 0m7.546 8.365h4.076v2H65.54zm-13.077 25.158h6.534v1.09h-6.534zm13.123 0h6.534v1.09h-6.534z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(-27.234 -109.83)"/>`;
const _DefaultDesc = `Wear laboratory coat`;
const _DefaultTitle = 'Wear laboratory coat';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class M059WearLaboratoryCoat extends HTMLElement {
  static readonly tagName = 'iso-m059-wear-laboratory-coat';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-m059-wear-laboratory-coat`;
    const titleId = `iso-title-m059-wear-laboratory-coat`;
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
