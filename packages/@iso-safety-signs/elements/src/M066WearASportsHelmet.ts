// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.115 70.115"`;
const _Body = `<path fill="#005387" d="M126.4 108.662c0 19.36-15.698 35.056-35.057 35.056s-35.058-15.696-35.058-35.056S71.98 73.604 91.343 73.604c19.361 0 35.056 15.698 35.056 35.058" style="display:inline;stroke-width:.264583" transform="translate(-56.285 -73.604)"/><path d="M90.25 80.138a38 38 0 0 0-4.197.273C70.59 82.27 67.33 96.455 67.413 96.745s.394.243.94.345c.547.103 7.53 1.363 10.146 3.29 2.616 1.926.465 5.918 4.931 6.96 4.467 1.04 4.291-3.823 9.77-2.6 5.477 1.225 4.483 7.316 7.564 9.145 3.08 1.83 9.426 1.924 10.924.976 1.11-.704.012-2.01 1.428-5.033s3.44-7.45 1.06-14.693c-2.591-7.882-10.884-15.096-23.925-14.997M70.995 99.553l-3.48 14.231-.005.03c-.229 1.34-.056 2.538.473 3.458.528.92 1.48 1.547 2.536 1.547h1.41c-.08 2.643.106 5.121 1.152 7.073 1.055 1.967 3.15 3.138 5.972 3.402l.128 3.88c.002 1.221.519 2.285 1.324 2.976.808.692 1.868 1.035 2.963 1.035h15.97c1.023 0 1.962-.49 2.75-1.166.788-.677 1.462-1.6 1.462-2.743v-.006c-.075-8.421.897-10.973 2.994-16.355h-2.008c-1.932 5.008-2.932 8.153-2.86 16.361 0 .315-.294.879-.809 1.32-.515.443-1.21.712-1.528.712h-15.97c-.704 0-1.325-.221-1.742-.58-.418-.358-.672-.831-.672-1.559v-.015l-.102-3.135 5.647-6.358 13.654-8.173-1.933-1.94-11.336 6.786-1.25-11.283H83.06l1.439 12.972-4.955 5.59c-2.626-.095-3.966-1.037-4.81-2.609-.888-1.658-1.123-4.179-.954-7.067l.058-.992h-3.32c-.364 0-.651-.157-.91-.607-.257-.447-.417-1.204-.25-2.197l3.458-14.143zm13.148 4.314a.968.968 0 1 1-.001 1.936.968.968 0 0 1 0-1.936m-6.092.855a2.362 2.362 0 1 0 0 4.725 2.362 2.362 0 0 0 0-4.725m25.455 5.517a.968.968 0 1 1 0 1.935.968.968 0 0 1 0-1.935" style="fill:#fff;fill-opacity:1;stroke-width:1" transform="translate(-56.285 -73.604)"/>`;
const _DefaultDesc = `Wear a sports helmet`;
const _DefaultTitle = 'Wear a sports helmet';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class M066WearASportsHelmet extends HTMLElement {
  static readonly tagName = 'iso-m066-wear-a-sports-helmet';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-m066-wear-a-sports-helmet`;
    const titleId = `iso-title-m066-wear-a-sports-helmet`;
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
