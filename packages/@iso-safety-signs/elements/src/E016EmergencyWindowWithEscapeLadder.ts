// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.833 105.833"`;
const _Body = `<path d="M51.858 40.746h105.833v105.833H51.858z" style="fill:#fff;fill-rule:nonzero;stroke:none;stroke-width:.529167" transform="translate(-51.858 -40.746)"/><path d="M54.504 43.392h100.542v100.541H54.504Z" style="fill:#237f52;fill-rule:nonzero;stroke:none;stroke-width:.529167" transform="translate(-51.858 -40.746)"/><path d="M65.057 51.673v83.979h2.002v-5.835h18.694v5.835h2.004v-18.865a4.34 4.34 0 0 1-2.004-.45v11.87H67.06v-12.45h17.825q-.123-.103-.24-.216a4.2 4.2 0 0 1-.926-1.395h-16.66v-12.45h18.694v6.645l2.004-2.004V89.648l-.071.072a4.03 4.03 0 0 1-1.933 1.073v9.293H67.06v-12.45h1.457a4 4 0 0 1-.117-.919q.002-.353.064-.692H67.06v-12.45h18.694v6.246l2.004-2.004v-4.685a6.6 6.6 0 0 1-2.004-2.03v.863H67.06v-12.45h18.694v4.635a6.6 6.6 0 0 1 2.004-2.028V51.673h-2.004v6.232H67.06v-6.232zm35.189 0v14.422c.36-.106.75-.172 1.188-.172h1.434V54.295h39.003v40.887h-30.774l-2.622 2.622h36.018v-46.13Zm-8.95 10.947a5.007 5.007 0 1 0 0 10.013 5.007 5.007 0 0 0 0-10.013m10.138 4.853c-.787 0-1.718.565-2.212 1.071L83.55 84.217h-11.1a2.495 2.495 0 0 0-2.501 2.5c0 1.385 1.115 2.5 2.5 2.5h11.33c.923 0 2.07.125 2.81-.594l8.816-8.816 10.537 10.538-20.2 20.2a2.75 2.75 0 0 0 0 3.9 2.75 2.75 0 0 0 3.899 0l24.316-24.316 3.423 3.424h7.8l-21.078-21.079h7.3v5.666l4.63 4.63c.23-.38.37-.82.37-1.299V70.38c0-2.577-1.522-2.906-3.47-2.906zm-1.188 19.368v7.007l2.622-2.622v-1.762z" style="display:inline;fill:#fff;fill-opacity:1;stroke-width:.529167;stroke-linecap:square;stroke-miterlimit:3.4;stroke-dashoffset:.264567" transform="translate(-51.858 -40.746)"/>`;
const _DefaultDesc = `Emergency window with escape ladder`;
const _DefaultTitle = 'Emergency window with escape ladder';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class E016EmergencyWindowWithEscapeLadder extends HTMLElement {
  static readonly tagName = 'iso-e016-emergency-window-with-escape-ladder';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-e016-emergency-window-with-escape-ladder`;
    const titleId = `iso-title-e016-emergency-window-with-escape-ladder`;
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
