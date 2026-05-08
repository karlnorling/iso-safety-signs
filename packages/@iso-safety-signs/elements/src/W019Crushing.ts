// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.684 138.536"`;
const _Body = `<path d="M151.494 190.13 76.405 60.06a4.24 4.24 0 0 0-3.678-2.116 4.3 4.3 0 0 0-3.677 2.116L-6.04 190.13a4.18 4.18 0 0 0 0 4.233 4.24 4.24 0 0 0 3.679 2.117h150.177a4.3 4.3 0 0 0 3.678-2.117 4.18 4.18 0 0 0 0-4.233" style="stroke-width:.264583" transform="translate(6.615 -57.944)"/><path d="m299.875 48.2 256 443.3h-512z" style="overflow:visible;fill:#f9a800;fill-opacity:1;stroke:none" transform="matrix(.26458 0 0 .2635 0 .538)"/><path d="M72.727 113.227a4.706 4.706 0 1 0 0 9.412 4.706 4.706 0 0 0 0-9.412m-4.923 10.913c-3.51 0-6.335 2.872-6.335 6.44v18.575a2.36 2.36 0 0 0 2.367 2.367 2.36 2.36 0 0 0 2.367-2.367V131.42a.36.36 0 1 1 .722 0v43.166a2.51 2.51 0 0 0 2.517 2.517 2.51 2.51 0 0 0 2.517-2.517V148.81a.767.767 0 1 1 1.536 0v25.78a2.51 2.51 0 0 0 2.517 2.514 2.51 2.51 0 0 0 2.517-2.517v-43.166a.36.36 0 1 1 .723 0v17.734a2.36 2.36 0 0 0 2.367 2.367 2.36 2.36 0 0 0 2.367-2.367V130.58c0-3.569-2.826-6.441-6.335-6.441zm-29.869 18.044v.967h7.114v32.987H18.18v.966h40.39v-34.92zm48.95 0v34.92h40.391v-.966h-26.87V143.15h7.113v-.967zm-34.637.967h4.71v2.19l-10.297 9.808v-6.677zm36.249 0h4.71l5.587 5.321v6.677l-10.297-9.808zm-31.539 7.307v6.677l-10.297 9.808v-6.677zm31.539 0 10.297 9.808v6.677l-10.297-9.808zm-49.62 4.848v3.018H29.13v3.943h9.748v3.018l5.4-4.99zm67.7 0-5.4 4.99 5.4 4.99v-3.02h9.747v-3.942h-9.747zm-49.619 6.945v6.677l-7.569 7.21h-2.728v-4.079zm31.539 0 10.297 9.808v4.079h-2.729l-7.568-7.21z" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:30;stroke-dasharray:none;stroke-opacity:1" transform="translate(6.615 -57.944)"/>`;
const _DefaultDesc = `Crushing`;
const _DefaultTitle = 'Crushing';
const _DefaultWidth = `599.75`;
const _DefaultHeight = `523.6`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class W019Crushing extends HTMLElement {
  static readonly tagName = 'iso-w019-crushing';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-w019-crushing`;
    const titleId = `iso-title-w019-crushing`;
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
