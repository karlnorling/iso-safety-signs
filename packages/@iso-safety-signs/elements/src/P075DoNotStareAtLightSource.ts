// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.106 70.106"`;
const _Body = `<path fill="#fff" d="M110.68 142.29c0-17.425-14.126-31.551-31.551-31.551s-31.552 14.126-31.552 31.551c0 17.426 14.127 31.552 31.552 31.552s31.552-14.126 31.552-31.552" style="display:inline;stroke-width:.264583" transform="translate(-44.076 -107.237)"/><path d="M84.239 130.398v6.141c-3.114 1.468-5.275 4.637-5.275 8.3 0 5.056 4.115 9.172 9.17 9.172 5.056 0 9.172-4.116 9.172-9.172 0-3.663-2.162-6.832-5.275-8.3v-6.14zm1.648 1.649h4.495v3.9a9.15 9.15 0 0 0-4.495 0zm-8.078 1.126-1.085 1.085 3.612 3.612 1.085-1.085zm20.652 0-3.613 3.612 1.086 1.085 3.612-3.612zm-10.326 4.131a7.523 7.523 0 0 1 7.535 7.535 7.523 7.523 0 0 1-7.535 7.535 7.52 7.52 0 0 1-7.535-7.535 7.523 7.523 0 0 1 7.535-7.535m-18.36.11-15.022 7.305 14.923 7.41.6-1.21-2.297-1.14c2.991-3.207 2.98-6.897-.048-9.968l2.435-1.184zm-3.139 3.026c-1.952 2.753-2.105 5.275-.108 8.619l-8.715-4.328zm6.13 3.376v1.535h5.107v-1.535zm25.63 0v1.535h5.109v-1.535zm-18.06 7.48-3.612 3.613 1.085 1.085 3.612-3.612zm15.598 0-1.086 1.086 3.613 3.612 1.085-1.085zm-8.566 3.55v5.107h1.535v-5.108z" style="color:#000;fill:#000;fill-opacity:1;stroke-width:.264583;-inkscape-stroke:none" transform="translate(-44.076 -107.237)"/><path d="M79.129 107.237c-19.318 0-35.053 15.736-35.053 35.053 0 19.318 15.735 35.053 35.053 35.053s35.053-15.735 35.053-35.053-15.735-35.053-35.053-35.053m0 6.984c15.543 0 28.069 12.526 28.069 28.07a27.97 27.97 0 0 1-6.285 17.729l-39.514-39.514a27.97 27.97 0 0 1 17.73-6.285m-21.701 10.234 39.537 39.536a27.98 27.98 0 0 1-17.836 6.368c-15.544 0-28.069-12.525-28.069-28.069a27.98 27.98 0 0 1 6.368-17.835" style="color:#000;fill:#b71f2e;fill-opacity:1;stroke-width:.264583;stroke-linecap:round;-inkscape-stroke:none" transform="translate(-44.076 -107.237)"/>`;
const _DefaultDesc = `Do not stare at light source`;
const _DefaultTitle = 'Do not stare at light source';
const _DefaultWidth = `264.967`;
const _DefaultHeight = `264.969`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P075DoNotStareAtLightSource extends HTMLElement {
  static readonly tagName = 'iso-p075-do-not-stare-at-light-source';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p075-do-not-stare-at-light-source`;
    const titleId = `iso-title-p075-do-not-stare-at-light-source`;
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
