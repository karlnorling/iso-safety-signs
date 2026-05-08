// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#005387" d="M265 132.5C265 59.322 205.679 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/><path fill="#fff" d="M107.546 73.095c0-15.921-12.906-28.827-28.827-28.827S49.892 57.174 49.892 73.095s12.906 28.827 28.827 28.827 28.828-12.906 28.828-28.827zm134.165 53.851-40.961 32.769-7.336-3.249c-2.19-11.378-15.097-16.983-25.636-11.353l-14.525-6.427 44.314-30.198zm-104.005 73.676a16.09 16.09 0 0 1-21.143-4.488l-25.309-34.856c-1.211-1.669-3.756.177-2.546 1.845l19.88 27.378v48.28c-25.784-7.433-49.3-21.549-68.486-48.428v-64.947a16.86 16.86 0 0 1 17.587-16.915l33.68 1.312c5.646.22 10.4 2.981 13.388 7.776l30.911 49.597 31.444-18.943c16.064-8.925 29.979 6.605 22.441 19.927a15.2 15.2 0 0 1-5.449 5.593zm14.244-64.854-16.886-37.813 44.762-27.421 14.257 36.522zm-4.689-2.789-30.694-36.684 52.402-30.651 3.627 5.632-41.521 25.457zm2.019 7.313-22.199 7.158-14.671-23.541 18.241-5.881z"/>`;
const _DefaultDesc = `Refer to instruction manual/booklet`;
const _DefaultTitle = 'Refer to instruction manual/booklet';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class M002ReferToInstructionManualBooklet extends HTMLElement {
  static readonly tagName = 'iso-m002-refer-to-instruction-manual-booklet';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-m002-refer-to-instruction-manual-booklet`;
    const titleId = `iso-title-m002-refer-to-instruction-manual-booklet`;
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
