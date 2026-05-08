// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.106 70.106"`;
const _Body = `<path fill="#fff" d="M120.58 130.568c0-17.426-14.127-31.552-31.552-31.552-17.426 0-31.552 14.126-31.552 31.552 0 17.425 14.126 31.551 31.552 31.551 17.425 0 31.551-14.126 31.551-31.551" style="display:inline;stroke-width:.264583" transform="translate(-53.975 -95.515)"/><path d="M81.24 106.827a3.33 3.33 0 1 0 0 6.66 3.33 3.33 0 0 0 0-6.66m4.774 6.175c-1.478.015-3.937 1.827-3.257 3.989l-.201 6.166-7.158.683a1.55 1.55 0 0 0-1.4 1.695 1.55 1.55 0 0 0 1.695 1.399l8.346-.797a1.57 1.57 0 0 0 1.619-1.522l.028-.86 2.138-.143 2.344 2.94-6.164 4.563c-.684.506-1.061 1.587-.448 2.509l5.994 9.007a1.833 1.833 0 0 0 2.547.512 1.83 1.83 0 0 0 .512-2.547l-5.028-7.557s5.2-3.696 7.69-5.68c1.165-.928 1.394-2.564.514-3.668l-.462-.58 10.217-.683.054.803a.46.46 0 0 0 .485.427.46.46 0 0 0 .428-.488l-.054-.803 2.156-.144a.46.46 0 0 0 .427-.488.46.46 0 0 0-.489-.428l-2.156.143-.053-.801a.46.46 0 0 0-.489-.428.46.46 0 0 0-.423.488l.053.803-10.853.725-6.622-8.306a2.49 2.49 0 0 0-1.99-.93m-.238 8.04 1.35 1.696-1.41.094zm25.28 17.385a1 1 0 0 0-.513.023l-32.634 10.28h-.006c-1.167.312-1.821.402-2.324.293-.504-.11-1.055-.445-1.994-1.324a.99.99 0 0 0-1.403.048.99.99 0 0 0 .047 1.4c1.036.97 1.903 1.593 2.93 1.815 1.026.223 2.017.017 3.262-.316l.022-.006 32.695-10.298a.99.99 0 0 0 .65-1.244.99.99 0 0 0-.732-.671" style="fill:#000;fill-opacity:1;stroke-width:1.70001" transform="translate(-53.975 -95.515)"/><path d="M89.028 95.515c-19.318 0-35.053 15.735-35.053 35.053S69.71 165.62 89.028 165.62s35.053-15.735 35.053-35.053-15.736-35.053-35.053-35.053m0 6.984c15.543 0 28.069 12.525 28.069 28.069a27.97 27.97 0 0 1-6.285 17.73l-39.514-39.514a27.97 27.97 0 0 1 17.73-6.285m-21.701 10.233 39.537 39.537a27.98 27.98 0 0 1-17.836 6.368c-15.544 0-28.069-12.526-28.069-28.07a27.98 27.98 0 0 1 6.368-17.835" style="color:#000;fill:#b71f2e;fill-opacity:1;stroke-width:.264583;stroke-linecap:round;-inkscape-stroke:none" transform="translate(-53.975 -95.515)"/>`;
const _DefaultDesc = `No skiing`;
const _DefaultTitle = 'No skiing';
const _DefaultWidth = `264.967`;
const _DefaultHeight = `264.969`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P076NoSkiing extends HTMLElement {
  static readonly tagName = 'iso-p076-no-skiing';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p076-no-skiing`;
    const titleId = `iso-title-p076-no-skiing`;
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
