// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"`;
const _Body = `<path fill="#9b2423" fill-rule="evenodd" d="M5.419 5.423h189.16v189.15H5.419z"/><path fill="#fff" d="M50 50V38h-5C28.237 55.711 30 49 29.065 63.799l-6.388.024C23 39 21 46 44.459 24.865L53 25v-5h16v6c4.563.1 8.964.6 13 2v9c-3.045.877-6.865 1.305-11 2l-.208 10.963C81.425 53.288 88.101 57.82 88 69l-1 111H33V69c1.982-15.259 9.445-18.737 17-19m90.84 35.974C134.16 71.392 135 58.507 125 52.387 147.31 50 147.11 67.12 159.2 87.119c6.161 10.209 9.296 12.113 19.261 19.134-10.883 1.114-23.49 2.754-37.621-20.278zm37.38 62.856c-10.099 8.964-25.395 7.83-35.73.123-9.084-9.2-13.227-19.521-28.507-22.043 24.088-14.798 35.883 7.03 42.401 12.638 8.528 6.854 14.675 6.432 21.836 9.282"/><path fill="#fff" d="M178.54 116.43v22.555c-33.72-6.904-47.46-29.05-47.786-53.98 18.753 20.208 21.384 26.81 47.786 31.426zm-.14 63.86c-28.332.93-42.124-5.754-47.35-30.64 22.613 15.749 29.453 12.343 46.581 10.089.736 6.764.769 13.754.769 20.551m-.88-106.925.757 21.609c-20.65-11.003-28.25-32.075-21.28-51.974 7.01 16.483 7.135 23.157 20.522 30.365z"/><path fill="#9b2423" d="M40 80h40v25H40z" style="color:#000"/>`;
const _DefaultDesc = `Fire extinguisher`;
const _DefaultTitle = 'Fire extinguisher';
const _DefaultWidth = `200`;
const _DefaultHeight = `200`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class F001FireExtinguisher extends HTMLElement {
  static readonly tagName = 'iso-f001-fire-extinguisher';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-f001-fire-extinguisher`;
    const titleId = `iso-title-f001-fire-extinguisher`;
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
