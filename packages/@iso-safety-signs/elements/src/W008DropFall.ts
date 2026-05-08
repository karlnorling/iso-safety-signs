// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.684 138.536"`;
const _Body = `<path d="m223.725 198.332-75.089-130.07a4.24 4.24 0 0 0-3.677-2.116 4.3 4.3 0 0 0-3.678 2.116l-75.089 130.07a4.18 4.18 0 0 0 0 4.233 4.24 4.24 0 0 0 3.678 2.117h150.177a4.3 4.3 0 0 0 3.678-2.117 4.18 4.18 0 0 0 0-4.233" style="stroke-width:.264583" transform="translate(-65.617 -66.146)"/><path fill="#f6bd16" d="M555.88 491.5H43.875L299.88 48.2z" style="fill:#f9a800;fill-opacity:1" transform="matrix(.26458 0 0 .2635 .026 .538)"/><path d="M139.336 119.71a2.447 2.447 0 0 0-2.107 3.48l5.642 12.151c.287.63.964 1.079 1.552 1.497l7.166 5.267-6.67 15.904-.093-.012-14.391-1.108c-1.047-.13-2.11.187-2.836.464l-13.774 5.912a2.955 2.955 0 0 0-1.553 3.89 2.955 2.955 0 0 0 3.89 1.554l13.773-5.913.022-.01 13.794 1.233c.804.103.837.799.146 1.2l-6.662 3.635c-1.27.627-1.863 1.35-2.672 2.198l-9.893 11.26a2.955 2.955 0 0 0 .27 4.18 2.955 2.955 0 0 0 4.18-.27l9.893-11.26a4.2 4.2 0 0 1 1.346-1.058l12.028-6.323c1.252-.624 2.39-1.188 3.016-2.496l6.965-16.608 6.432 5.3.079.059 3.169 11.908a2.447 2.447 0 0 0 3 1.739 2.447 2.447 0 0 0 1.739-3l-3.38-12.642c-.134-.487-.88-1.442-1.679-2.006l-9.535-7.797c-2.43-1.19-3.743-1.91-6.657-3.455-2.75-1.725-5.335-3.736-8.007-5.58-.328-.227-.511-.377-.681-.743l-5.17-11.135a2.43 2.43 0 0 0-2.342-1.415m22.748 9.167a5.217 5.217 0 1 0 0 10.433 5.217 5.217 0 0 0 0-10.433m-58.366 41.367v2.425h13.456v15.318h2.425v-17.743z" style="display:inline;fill:#000;fill-opacity:1;stroke-width:1.265" transform="translate(-65.617 -66.146)"/>`;
const _DefaultDesc = `Drop (fall)`;
const _DefaultTitle = 'Drop (fall)';
const _DefaultWidth = `599.75`;
const _DefaultHeight = `523.6`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class W008DropFall extends HTMLElement {
  static readonly tagName = 'iso-w008-drop-fall';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-w008-drop-fall`;
    const titleId = `iso-title-w008-drop-fall`;
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
