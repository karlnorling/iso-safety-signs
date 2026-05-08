// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"`;
const _Body = `<path d="M59.573 281.86h282.08V-.203H59.573Zm0 0" style="fill:#237f52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.4118" transform="translate(-50.613 9.18)"/><path d="M241.405 45.708H159.82v30.02h81.584zm0 40.05H159.82v30.022h81.584zm0 70.072H159.82v-30.038h81.584zM159.82 195.9h81.584v-30.056H159.82zm81.584 9.995H159.82v30.021h81.584zm10.013 50.546V25.217h-10.013v10.46H159.82v-10.46h-9.995V256.44h9.995v-10.495h81.584v10.495zm0 0" style="fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.4118" transform="translate(-50.613 9.18)"/>`;
const _DefaultDesc = `Escape ladder`;
const _DefaultTitle = 'Escape ladder';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class E059EscapeLadder extends HTMLElement {
  static readonly tagName = 'iso-e059-escape-ladder';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-e059-escape-ladder`;
    const titleId = `iso-title-e059-escape-ladder`;
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
