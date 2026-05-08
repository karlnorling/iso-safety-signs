// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.827 105.833"`;
const _Body = `<path d="M171.442 357.537h299.983v-300H171.442zm0 0" style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:4.42652" transform="translate(-60.48 -20.298)scale(.35278)"/><path d="M179.932 349.047h283.003V66.027H179.932Zm0 0" style="fill:#237f52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.42652" transform="translate(-60.48 -20.298)scale(.35278)"/><path d="M77.702 115.783v65.8h2.845v-2.986h23.216v2.986h2.85v-65.8h-2.85v2.977H80.547v-2.977zm2.845 5.831h23.216v8.543H80.547Zm0 11.398h23.216v8.543H80.547Zm0 11.392h23.216v8.548H80.547Zm0 11.398h23.216v8.553H80.547Zm0 11.397h23.216v8.543H80.547Zm30.605 18.693c-3.896.022-7.354 1.079-10.58 2.032s-6.222 1.805-9.122 1.822c-2.83.015-5.76-.75-8.914-1.624s-6.524-1.854-10.295-1.909c-4.029-.059-7.709.862-11.172 1.697-3.458.833-6.697 1.579-9.812 1.514v2.919c3.98.065 7.626-.83 11.056-1.657 3.469-.836 6.722-1.6 9.849-1.554 2.846.042 5.798.846 8.967 1.724s6.561 1.832 10.35 1.81c3.897-.023 7.355-1.08 10.581-2.033 3.226-.954 6.224-1.805 9.124-1.821 2.968-.018 6.04.805 9.343 1.731 3.302.927 6.83 1.958 10.777 1.962.623 0 1.283-.032 1.955-.076v-2.944c-.708.06-1.376.1-1.948.1-2.974-.002-6.055-.84-9.362-1.768s-6.845-1.948-10.797-1.926m0 5.937c-3.896.022-7.354 1.08-10.58 2.034s-6.222 1.804-9.122 1.82c-2.83.016-5.76-.75-8.914-1.623-3.154-.874-6.524-1.854-10.295-1.909-4.029-.058-7.709.862-11.172 1.697-3.458.833-6.697 1.58-9.812 1.514v2.919c3.98.065 7.626-.83 11.056-1.657 3.469-.836 6.722-1.6 9.849-1.554 2.846.042 5.798.846 8.967 1.724s6.561 1.832 10.35 1.81c3.897-.022 7.355-1.08 10.581-2.034s6.224-1.803 9.124-1.82c2.968-.017 6.04.805 9.343 1.732s6.83 1.956 10.777 1.96c.623 0 1.283-.03 1.955-.075v-2.944c-.708.06-1.376.1-1.948.1-2.974-.002-6.055-.84-9.362-1.768s-6.845-1.949-10.797-1.926" style="fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.25549" transform="translate(-39.344 -104.277)"/>`;
const _DefaultDesc = `Embarkment ladder`;
const _DefaultTitle = 'Embarkment ladder';
const _DefaultWidth = `399.977`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class E053EmbarkmentLadder extends HTMLElement {
  static readonly tagName = 'iso-e053-embarkment-ladder';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-e053-embarkment-ladder`;
    const titleId = `iso-title-e053-embarkment-ladder`;
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
