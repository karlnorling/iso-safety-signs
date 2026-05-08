// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 200 200"`;
const _Body = `<path d="M0 0h200v200H0z" style="fill:#fff;fill-rule:nonzero;stroke:none"/><path d="M5 5h190v190H5z" style="fill:#237f52;fill-opacity:1;fill-rule:nonzero;stroke:none"/><path d="M21.383 23.6v10.7h6.313v-5.964h144.251V34.3h6.314V23.6H72.899Zm0 154.271v-10.7h6.313v5.965h144.251v-5.965h6.314v10.7H72.899Z" style="color:#000;fill:#fff;fill-opacity:1;stroke-width:1.57836" transform="matrix(-1 0 0 1 200 0)"/><path d="M33.931 34.886h65.472v131.9H33.931zm120.788 45.435v11.435h-41.697v18.16h41.697v11.435l11.41-10.257 11.41-10.258-11.41-10.257z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:3.25" transform="matrix(-1 0 0 1 199.913 -.1)"/>`;
const _DefaultDesc = `Door slides left to open`;
const _DefaultTitle = 'Door slides left to open';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class E034DoorSlidesLeftToOpen extends HTMLElement {
  static readonly tagName = 'iso-e034-door-slides-left-to-open';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-e034-door-slides-left-to-open`;
    const titleId = `iso-title-e034-door-slides-left-to-open`;
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
