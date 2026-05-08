// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M177.074 50.115h-4.257v5.51H92.436v-5.51h-4.257v164.77h4.257v-9.265h80.381v9.265h4.257zm-4.257 9.767v24.891h-19.459a13.1 13.1 0 0 1-1.44 4.257h20.899v24.891H92.436V89.03h36.438a13.1 13.1 0 0 1-1.439-4.257H92.436V59.882zm0 58.296v24.89H92.436v-24.89zm0 29.147v24.891H92.436v-24.891zm0 29.148v24.891H92.436v-24.891z"/><path d="m158.462 80.82-11.494 15.035-17.049-1.705-16.447-10.326 7.297-18.321c2.171-5.45-6.115-8.751-8.286-3.301l-8.71 21.867c-1.052 2.641.351 4.777 2.324 5.657 3.71 1.98 18.782 12.394 21.012 12.84l-2.959 30.505-21.174 16.752c-1.684 1.335-2.584 3.743-2.726 5.355l-2.348 26.578c-.576 6.522 9.339 7.446 9.915.921l2.279-25.792 19.792-15.683a5.4 5.4 0 0 0 1.252-1.381l3.968.397 4.335 29.34.571 26.847c.139 6.545 10.069 6.168 9.95-.381l-.471-25.884-4.327-29.453 3.367-34.714c1.167-.025 2.349-.551 3.287-1.779l14.846-19.42c.926-1.211 1.49-2.437.965-4.298l-5.691-20.167c-1.593-5.646-10.18-3.214-8.582 2.43zm-8.949 1.052c-.48-5.049-4.952-8.754-9.989-8.275s-8.731 4.96-8.251 10.009 4.952 8.754 9.989 8.275 8.731-4.96 8.251-10.009"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `No climbing`;
const _DefaultTitle = 'No climbing';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P009NoClimbing extends HTMLElement {
  static readonly tagName = 'iso-p009-no-climbing';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p009-no-climbing`;
    const titleId = `iso-title-p009-no-climbing`;
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
