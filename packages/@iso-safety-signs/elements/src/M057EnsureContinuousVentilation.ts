// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:10" viewBox="0 0 265 265"`;
const _Body = `<path d="M0 132.5C0 59.325 59.319 0 132.496 0 205.681 0 265 59.324 265 132.5c0 73.183-59.319 132.5-132.504 132.5C59.319 265.001 0 205.683 0 132.5" style="fill:#005387;fill-rule:nonzero"/><path d="M62.823 108.669V61.214h145.902v19.384" style="fill:none;stroke:#fff;stroke-width:17px"/><path d="M62.823 205.137h145.902v-50.068" style="fill:none;stroke:#fff;stroke-width:17px;stroke-linecap:square"/><path d="M62.823 108.669v96.468" style="fill:none;stroke:#fff;stroke-width:6px;stroke-linecap:square"/><path d="m125.32 117.191-17.519-24.353 28.284-10z" style="fill:#fff"/><path d="M214.544 98.316c-38.633-14.778-29.918 16.038-88.422.263" style="fill:none;stroke:#fff;stroke-width:8px;stroke-linecap:square"/><path d="m230.592 103.372 15.244 25.838-29.073 7.4z" style="fill:#fff"/><path d="M140.091 122.925c35.953 11.999 32.878-21.064 88.018-1.09" style="fill:none;stroke:#fff;stroke-width:8px;stroke-linecap:square"/>`;
const _DefaultDesc = `Ensure continuous ventilation`;
const _DefaultTitle = 'Ensure continuous ventilation';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class M057EnsureContinuousVentilation extends HTMLElement {
  static readonly tagName = 'iso-m057-ensure-continuous-ventilation';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-m057-ensure-continuous-ventilation`;
    const titleId = `iso-title-m057-ensure-continuous-ventilation`;
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
