// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M138.793 67.832h16.203c9.943 0 18.086 8.092 18.172 18.016h24.857c11.379 0 20.689 9.31 20.689 20.689v62.599a5.19 5.19 0 0 1-5.172 5.172H50.468a5.19 5.19 0 0 1-5.172-5.172v-62.6c0-11.379 9.311-20.689 20.69-20.689h54.636c.086-9.924 8.229-18.016 18.172-18.016zm-31.861 93.524a6.103 6.103 0 1 0-12.206 0 6.103 6.103 0 0 0 12.206 0m-44.94-58.325h19.926v-5.146c0-2.83-2.315-5.145-5.146-5.145h-9.635c-2.83 0-5.146 2.315-5.146 5.145zm137.014 58.325a6.103 6.103 0 1 0-12.206 0 6.103 6.103 0 0 0 12.206 0m0-16.203a6.103 6.103 0 1 0-12.206 0 6.103 6.103 0 0 0 12.206 0m0-36.348a6.103 6.103 0 1 0-12.206 0 6.103 6.103 0 0 0 12.206 0m-14.832 22.691c0-20.438-16.567-37.005-37.005-37.005s-37.005 16.567-37.005 37.005 16.568 37.005 37.005 37.005 37.005-16.568 37.005-37.005m-17.766 0c0-10.625-8.614-19.239-19.239-19.239s-19.239 8.614-19.239 19.239 8.614 19.239 19.239 19.239 19.239-8.614 19.239-19.239m9.227 0c0-15.721-12.744-28.466-28.466-28.466s-28.465 12.744-28.465 28.466a28.47 28.47 0 0 0 28.465 28.465c15.721 0 28.466-12.744 28.466-28.465"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `No photography`;
const _DefaultTitle = 'No photography';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P029NoPhotography extends HTMLElement {
  static readonly tagName = 'iso-p029-no-photography';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p029-no-photography`;
    const titleId = `iso-title-p029-no-photography`;
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
