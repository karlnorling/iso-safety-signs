// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.106 70.106"`;
const _Body = `<path fill="#fff" d="M131.427 125.276c0-17.425-14.126-31.551-31.551-31.551-17.426 0-31.552 14.126-31.552 31.551 0 17.426 14.126 31.552 31.552 31.552 17.425 0 31.551-14.126 31.551-31.552" style="display:inline;stroke-width:.264583" transform="translate(-64.823 -90.223)"/><path d="M89.925 106.433a1.524 1.524 0 0 0-1.537 1.168 1.526 1.526 0 0 0 1.125 1.845l14.865 3.6-8.316 6.545c-.873.67-.999 1.6-1.194 2.663l-1.65 8.68-9.605 5.722c-.22.128-.254.323-.132.556l-1.083.636-1.293-2.201-1.736 1.02 4.413 7.51a2.24 2.24 0 0 0 2.868.907l-.877-1.493 1.082-.635.009.016c.124.232.228.207.443.103.662-.368 1.166-1.063.828-1.653-1.003-1.636-.822-2.901.703-3.773l-.002-.003 6.859-4.11c.503-.32.75-.842.834-1.253l1.277-6.717c.672.237.677.397 1.252 1.012l6.073 6.499s-.095 7.163-.089 10.608c-.002.254.15.382.413.394v1.256h-2.553v2.014h8.711c1.166 0 2.12-.88 2.235-2.014h-1.731v-1.254h.018c.263.01.294-.092.314-.33.017-.757-.326-1.543-1.006-1.55-1.919.035-2.908-.77-2.887-2.525h-.018l.11-7.317c.007-.563-.308-.97-.675-1.374l-5.89-6.303 7.525-5.923 3.996 6.624c.376.653 1.234 1.259 2.101.926l7.572-3.403a1.54 1.54 0 0 0 .775-2.042 1.54 1.54 0 0 0-2.041-.776l-6.289 2.826-3.812-6.32c-.192-.455-.496-.843-.805-1.162l-2.688-3.415c-.258-.329-1.25-1.43-2.09-1.643l-16.094-3.898a1.6 1.6 0 0 0-.307-.043zm23.259 1.247a3.3 3.3 0 1 0 0 6.599 3.3 3.3 0 0 0 0-6.599m-29.227 30.343 2.504 4.263-1.082.635-2.504-4.263zm22.438 6.058h4.944v1.254h-4.944z" style="fill:#000;fill-opacity:1;stroke:none;stroke-width:3.09999;stroke-linecap:round;stroke-opacity:.534842" transform="translate(-64.823 -90.223)"/><path d="M99.876 90.223c-19.318 0-35.053 15.735-35.053 35.053s15.735 35.053 35.053 35.053 35.053-15.735 35.053-35.053-15.736-35.053-35.053-35.053m0 6.984c15.543 0 28.069 12.526 28.069 28.07a27.97 27.97 0 0 1-6.285 17.729l-39.514-39.514a27.97 27.97 0 0 1 17.73-6.285M78.175 107.44l39.537 39.537a27.98 27.98 0 0 1-17.836 6.368c-15.544 0-28.069-12.526-28.069-28.069a27.98 27.98 0 0 1 6.368-17.836" style="color:#000;fill:#b71f2e;fill-opacity:1;stroke-width:.264583;stroke-linecap:round;-inkscape-stroke:none" transform="translate(-64.823 -90.223)"/>`;
const _DefaultDesc = `No ice skating`;
const _DefaultTitle = 'No ice skating';
const _DefaultWidth = `264.967`;
const _DefaultHeight = `264.969`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P079NoIceSkating extends HTMLElement {
  static readonly tagName = 'iso-p079-no-ice-skating';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p079-no-ice-skating`;
    const titleId = `iso-title-p079-no-ice-skating`;
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
