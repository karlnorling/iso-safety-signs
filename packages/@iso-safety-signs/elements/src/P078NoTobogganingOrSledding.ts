// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.106 70.106"`;
const _Body = `<path fill="#fff" d="M112.907 144.061c0-17.425-14.127-31.551-31.552-31.551s-31.552 14.126-31.552 31.551c0 17.426 14.127 31.552 31.552 31.552s31.552-14.126 31.552-31.552" style="display:inline;stroke-width:.264583" transform="translate(-46.302 -109.008)"/><path d="M86.392 120.836a3.58 3.58 0 1 0-.054 7.159 3.58 3.58 0 0 0 .054-7.16m1.061 8.376c-.873.024-1.682.42-2.286 1.038l-.002.002-6.019 6.15-8.607 1.94a1.654 1.654 0 0 0-1.253 1.98 1.655 1.655 0 0 0 1.982 1.254l8.977-2.023c.496-.112.807-.386 1.039-.595l3.403-3.477 1.096 8.077-7.973-.53c-1.201-.08-1.634.54-2.097 1.159l-6.309 9.076a1.987 1.987 0 0 0 .498 2.772c.906.63 2.142.408 2.772-.498l5.886-8.468 10.015.666c2.56.09 4.064-1.929 3.829-3.664l-1.636-12.055a3.23 3.23 0 0 0-3.315-2.803zm7.985 7.61c-.55.078-.933.59-.854 1.14l1.02 7.044-28.444 13.7a1.007 1.007 0 0 0 .873 1.813l28.406-13.682-.126.051c.538-.174 1.05-.54 1.24-1.057.191-.517.074-.878.062-.985l-.002-.019-1.034-7.154c-.08-.55-.59-.931-1.14-.851m10.212 7.792-39.233 18.839q1.516 1.081 3.188 1.93l35.563-17.076a25 25 0 0 0 .482-3.693" style="fill:#000;fill-opacity:1;stroke-width:1;stroke-linecap:round;stroke-opacity:.476828" transform="translate(-46.302 -109.008)"/><path d="M81.355 109.008c-19.318 0-35.053 15.736-35.053 35.053 0 19.318 15.735 35.054 35.053 35.054s35.053-15.736 35.053-35.054c0-19.317-15.735-35.053-35.053-35.053m0 6.984c15.543 0 28.069 12.526 28.069 28.07a27.97 27.97 0 0 1-6.285 17.73l-39.514-39.515a27.97 27.97 0 0 1 17.73-6.285m-21.701 10.234 39.537 39.536a27.98 27.98 0 0 1-17.836 6.369c-15.544 0-28.069-12.526-28.069-28.07a27.98 27.98 0 0 1 6.368-17.835" style="color:#000;fill:#b71f2e;fill-opacity:1;stroke-width:.264583;stroke-linecap:round;-inkscape-stroke:none" transform="translate(-46.302 -109.008)"/>`;
const _DefaultDesc = `No tobogganing or sledding`;
const _DefaultTitle = 'No tobogganing or sledding';
const _DefaultWidth = `264.967`;
const _DefaultHeight = `264.969`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P078NoTobogganingOrSledding extends HTMLElement {
  static readonly tagName = 'iso-p078-no-tobogganing-or-sledding';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p078-no-tobogganing-or-sledding`;
    const titleId = `iso-title-p078-no-tobogganing-or-sledding`;
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
