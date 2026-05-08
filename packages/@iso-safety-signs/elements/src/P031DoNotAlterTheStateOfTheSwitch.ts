// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="m196.949 136.834 26.222 16.271-26.04 16.166-2.39-3.899 16.389-9.98h-36.1v-4.573h36.1l-16.571-10.085zm-77.725-43.298h26.553V40.06a94.4 94.4 0 0 0-26.553.106zm30.243 96.426 48.225-96.434-23.6-12.171-48.528 97.037c-6.255 2.691-10.636 8.907-10.636 16.148a17.5 17.5 0 0 0 4.294 11.51v19.06a94.4 94.4 0 0 0 26.553.106v-19.166a17.5 17.5 0 0 0 4.294-11.509 17.6 17.6 0 0 0-.604-4.581zm-8.081 4.445a8.912 8.912 0 1 0-17.824 0 8.912 8.912 0 0 0 17.824 0m-33.015-57.573-26.222 16.271 26.04 16.166 2.391-3.899-16.389-9.98h36.099v-4.573h-36.1l16.571-10.085z"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `Do not alter the state of the switch`;
const _DefaultTitle = 'Do not alter the state of the switch';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P031DoNotAlterTheStateOfTheSwitch extends HTMLElement {
  static readonly tagName = 'iso-p031-do-not-alter-the-state-of-the-switch';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p031-do-not-alter-the-state-of-the-switch`;
    const titleId = `iso-title-p031-do-not-alter-the-state-of-the-switch`;
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
