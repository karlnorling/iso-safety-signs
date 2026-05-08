// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#005387" d="M265 132.503C265 205.674 205.674 265 132.503 265S0 205.674 0 132.503 59.326 0 132.503 0 265 59.331 265 132.503"/><g fill="#fff"><path d="M143.643 175.932c4.704-1.344 32.605-10.046 42.018-11.488l-6.627-34.463c-1.825-12.959-4.13-26.017-5.087-39.069-.863-11.615-.863-23.231-.863-35.327V45.314c0-3.267-2.403-6.048-5.567-6.048-3.267 0-6.146 2.781-6.146 6.048v16.319c0 1.344-1.442 3.262-3.262 3.262-1.344 0-3.267-1.918-3.267-3.262l.481-27.071c0-3.267-2.781-6.048-6.048-6.048-3.645 0-6.048 2.781-6.048 6.048v28.896a3.265 3.265 0 1 1-6.529 0V39.266c0-3.36-2.781-5.665-5.567-5.665-3.262 0-5.661 2.305-5.661 5.665l-.387 35.42a3.237 3.237 0 0 1-3.262 3.267c-1.923 0-3.262-1.442-3.262-3.267V46.658c0-2.305-1.829-4.13-4.611-4.13-2.305 0-4.704 1.825-4.704 4.13l-.383 45.019c-2.497-2.301-5.185-2.781-6.146-2.781l.481-42.238c0-5.474 5.185-10.752 10.752-10.752 1.825 0 3.169.574 4.611 1.055.957-5.665 6.524-10.271 12.572-10.271 2.786 0 5.091.961 7.009 2.305 2.305-4.13 5.95-6.529 11.135-6.529 7.009 0 12.096 5.185 12.096 12.096 2.305-.961 3.841-1.344 6.146-1.344 6.911 0 11.998 5.185 11.998 12.096v6.529c0 32.541.481 34.459.957 38.589 1.344 21.504 6.146 51.744 13.057 79.198-9.693 1.437-40.478 10.414-47.1 12.817z"/><path fill-rule="nonzero" d="M87.355 233.776Q71.17 182.553 48.787 124.954a7.52 7.52 0 0 1 4.49-9.635 7.52 7.52 0 0 1 9.639 4.494l5.433 14.741 4.167 11.61c.311.867 1.269 1.313 2.137.997s1.317-1.273.997-2.141l-4.218-11.587-9.363-25.716c-1.159-3.182.378-6.659 3.422-7.77l.469-.166c3.051-1.112 6.458.568 7.621 3.745l9.418 25.697 1.928 5.476a1.677 1.677 0 0 0 2.145 1.001 1.67 1.67 0 0 0 .997-2.145l-1.987-5.456-10.223-28.074c-1.313-3.611.544-7.605 4.159-8.918s7.609.548 8.922 4.159l10.278 28.05 1.932 5.48a1.674 1.674 0 0 0 2.141 1.001 1.67 1.67 0 0 0 .997-2.145l-1.987-5.456-7.329-20.134a6.68 6.68 0 0 1 3.994-8.563 6.68 6.68 0 0 1 8.563 3.998q19.904 53.452 46.118 112.149c-22.649 6.095-44.75 14.141-66.291 24.127m30.953-118.862.781-3.099.02-.087c1.447-6.418 5.854-7.826 9.19-7.073 4.199.942 7.932 5.472 6.205 13.183l-5.437 24.238 4.423 10.814 7.534-33.589c2.61-11.65-3.686-19.468-11.259-21.167-5.488-1.234-11.784.895-15.218 6.954l3.761 9.824"/></g>`;
const _DefaultDesc = `Wear protective gloves`;
const _DefaultTitle = 'Wear protective gloves';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class M009WearProtectiveGloves extends HTMLElement {
  static readonly tagName = 'iso-m009-wear-protective-gloves';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-m009-wear-protective-gloves`;
    const titleId = `iso-title-m009-wear-protective-gloves`;
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
