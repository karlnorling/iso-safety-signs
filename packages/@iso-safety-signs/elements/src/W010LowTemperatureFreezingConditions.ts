// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 525"`;
const _Body = `<path d="M597.6 499.6 313.8 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.2 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16"/><path fill="#f6bd16" d="M43.875 491.5 299.88 48.2l256 443.3z" style="fill:#f9a800;fill-opacity:1" transform="matrix(1 0 0 .99591 .125 2.033)"/><path d="M290.17 225v39.562l-21.156-21.125-14.156 14.125 35.312 35.312v27.5c-2.484.967-4.807 2.262-6.875 3.875l-24.812-14.344-12.938-48.219-19.312 5.188 7.719 28.875-34.25-19.781-10 17.344 34.25 19.78-28.844 7.72 5.156 19.311 48.188-12.906 24.688 14.25a27.5 27.5 0 0 0-.344 4.282c0 1.293.107 2.566.281 3.812l-24.625 14.188-48.188-12.906-5.156 19.312 28.844 7.75-34.25 19.781 10 17.312 34.25-19.781-7.719 28.875 19.312 5.219 12.939-48.25 24.438-14.125a27.2 27.2 0 0 0 7.25 4.187v26l-35.313 35.312 14.156 14.125 21.156-21.125v39.562h20v-39.562l21.125 21.125 14.156-14.125-35.28-35.28v-26.126a27.3 27.3 0 0 0 6.968-4.062l24.375 14.094 12.938 48.25 19.312-5.219-7.719-28.875 34.25 19.781 10-17.312-34.25-19.781 28.844-7.75-5.156-19.312-48.188 12.906-24.53-14.156a27.5 27.5 0 0 0 .28-3.844c0-1.465-.12-2.91-.343-4.312l24.594-14.22 48.188 12.907 5.156-19.312-28.844-7.72 34.25-19.78-10-17.344-34.25 19.78 7.719-28.874-19.312-5.188-12.938 48.22-24.781 14.311a27.2 27.2 0 0 0-6.563-3.75v-27.625l35.281-35.28-14.156-14.126-21.125 21.125V225h-20z" style="color:#000"/>`;
const _DefaultDesc = `Low temperature/freezing conditions`;
const _DefaultTitle = 'Low temperature/freezing conditions';
const _DefaultWidth = `600`;
const _DefaultHeight = `525`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class W010LowTemperatureFreezingConditions extends HTMLElement {
  static readonly tagName = 'iso-w010-low-temperature-freezing-conditions';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-w010-low-temperature-freezing-conditions`;
    const titleId = `iso-title-w010-low-temperature-freezing-conditions`;
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
