// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="m155.496 103.204 28.182 27.663 7.595-13.499h18.354c3.484-.024 4.118-.473 5.63-3.201l3.019-5.447c.835-1.508.096-2.259-1.179-3.105l-12.364-8.198-.101-4.873c-.039-1.869-.295-3.456-2.362-4.625l-10.851-5.866V70.347c0-1.061-.814-1.538-1.549-.818zm-73.332 7.188-11.887-20.44c-1.306-2.245-4.733-1.705-4.654 1.123v26.915c.176 1.35 1.959 3.765 2.773 5.018.542.836.887 2.692.881 4.846l-.086 32.862-6.318 17.073v14.108c0 12.145 17.406 12.473 17.406-.384v-11.187l18.043-28.561 50.602 11.259v29.564c0 11.268 15.951 11.381 15.951 0v-30.404l13.215-21.366-31.272-30.47z"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `No dogs`;
const _DefaultTitle = 'No dogs';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P021NoDogs extends HTMLElement {
  static readonly tagName = 'iso-p021-no-dogs';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p021-no-dogs`;
    const titleId = `iso-title-p021-no-dogs`;
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
