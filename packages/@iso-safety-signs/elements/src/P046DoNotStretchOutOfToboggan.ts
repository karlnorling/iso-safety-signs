// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="m189.563 75.358-48.159 32.21h-24.9l-27.723-8.475a5.9 5.9 0 0 0-2.285-.235l-29.68 1.95a6.03 6.03 0 0 0-5.597 6.401c.221 3.3 3.102 5.814 6.402 5.597l28.713-1.886 27.518 8.412a6 6 0 0 0 1.755.26v21.081l-9.037-13.035c-2.985-4.306-9.709-3.739-11.931 1.006l-16.124 34.435c-1.598 3.412.297 8.057 3.35 9.132s7.416.402 9.16-3.275l11.033-23.563 14.64 21.118c1.358 2.034 3.443 3.193 5.815 3.193h13.432a6.8 6.8 0 0 0 4.642-1.427l28.058-21.992 35.651-.103c3.765-.011 6.835-3.118 6.83-6.926-.011-3.799-3.102-6.898-6.87-6.887l-38.023.11a7 7 0 0 0-4.241 1.47l-18.759 14.703v-29.045a5.95 5.95 0 0 0 3.338-1.006l49.665-33.217c2.749-1.838 3.501-5.587 1.667-8.338a6.03 6.03 0 0 0-8.338-1.666zm-47.969 16.759a12.18 12.18 0 0 0-12.176-12.176 12.18 12.18 0 0 0-12.175 12.176 12.18 12.18 0 0 0 12.175 12.175 12.18 12.18 0 0 0 12.176-12.175"/><path fill="#0e1313" d="M100.474 160.543a3.05 3.05 0 0 1 3.047-3.047 3.05 3.05 0 0 1 3.047 3.047v5.278a3.85 3.85 0 0 0 3.863 3.863h37.977a3.85 3.85 0 0 0 3.863-3.863v-5.278a3.05 3.05 0 0 1 3.047-3.047 3.05 3.05 0 0 1 3.047 3.047v5.278c0 2.744-1.118 5.233-2.92 7.036s-4.292 2.92-7.036 2.92H110.43c-2.744 0-5.233-1.118-7.036-2.92s-2.92-4.292-2.92-7.036z"/><path d="M54.423 183.774h157.466a94 94 0 0 1-11.479 14.472H65.903a94 94 0 0 1-11.479-14.472"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869-25.503 0-48.9 9.018-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775A105.42 105.42 0 0 0 26.631 132.5c0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.323 205.678 0 132.5 0S0 59.323 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `Do not stretch out of toboggan`;
const _DefaultTitle = 'Do not stretch out of toboggan';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P046DoNotStretchOutOfToboggan extends HTMLElement {
  static readonly tagName = 'iso-p046-do-not-stretch-out-of-toboggan';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p046-do-not-stretch-out-of-toboggan`;
    const titleId = `iso-title-p046-do-not-stretch-out-of-toboggan`;
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
