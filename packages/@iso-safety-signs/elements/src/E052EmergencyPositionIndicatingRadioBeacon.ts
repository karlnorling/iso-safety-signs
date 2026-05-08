// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.827 105.833"`;
const _Body = `<path d="M171.442 357.537h299.983v-300H171.442zm0 0" style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:4.42652" transform="translate(-60.48 -20.298)scale(.35278)"/><path d="M179.932 349.047h283.003V66.027H179.932Zm0 0" style="fill:#237f52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.42652" transform="translate(-60.48 -20.298)scale(.35278)"/><path d="m129.032 120.047-1.233 2.803c13.026 5.733 19.519 20.421 14.991 33.914l2.905.975c5.022-14.97-2.211-31.332-16.663-37.692m-11.299 8.43c-.541-.071-1.02.198-1.072.602l-2.15 16.522-7.47-15.45c-.31-.641-.955-.966-1.447-.728h-.002c-.491.238-.638.945-.328 1.585l7.47 15.451-14.285-8.576c-.175-.105-.39-.106-.595-.022a1.17 1.17 0 0 0-.543.487c-.281.468-.226 1.014.123 1.224l16.564 9.945-.678 5.212c-.053.404.34.786.882.857.541.07 1.02-.2 1.072-.603l.335-2.575c4.174 8.603 3.882 8.024 7.197 14.887-.522 1.438-2.277 6.343-2.908 9.214-.102.467-.27.955-.178 1.424.099.501.39.932.62 1.388 1.026 2.021 2.263 4.65 3.48 7.301 3.658 1.225 6.713.54 9.57-.715 3.327-1.46 5.494-4.468 6.002-6.74-1.295-2.742-2.575-5.87-3.734-7.943a4.9 4.9 0 0 0-.89-1.128c-.272-.256-.65-.371-.988-.531-3.02-1.43-9.22-3.465-9.22-3.465l-.118.044c-3.668-7.583-2.94-6.082-7.056-14.594l2.227 1.337c.349.21.858.002 1.139-.467.28-.468.225-1.013-.124-1.223l-4.507-2.705 2.495-19.16c.052-.403-.341-.785-.883-.856m7.845 1.068-1.235 2.804a16.886 16.886 0 0 1 9.217 20.85l2.904.975c3.28-9.777-1.447-20.475-10.886-24.63m-3.766 8.978-1.234 2.803a6.987 6.987 0 0 1 3.819 8.64l2.904.975c1.652-4.923-.736-10.326-5.49-12.418m-36.861 2.835c-5.023 14.97 2.21 31.332 16.661 37.693l1.235-2.804c-13.026-5.733-19.519-20.421-14.992-33.914Zm9.229 3.566c-3.28 9.776 1.45 20.474 10.888 24.629l1.234-2.804a16.886 16.886 0 0 1-9.218-20.85zm9.163 3.233c-1.652 4.923.737 10.326 5.49 12.418l1.233-2.803a6.99 6.99 0 0 1-3.82-8.642zM140.1 180.69c-.19 3.607-3.2 5.84-5.577 7.076-2.78 1.443-7.568 2.267-9.859.486.39.858 1.23 2.936 1.477 3.485.394.847.949 1.194 1.43 1.399.877.543 4.505.972 8.386-.6 2.599-1.051 4.987-3.5 6.316-5.953.354-1.092-.181-2.037-.479-2.761-.22-.483-1.36-2.408-1.694-3.132" style="color:#000;display:inline;fill:#fff;stroke-width:.765775" transform="translate(-62.409 -103.922)"/>`;
const _DefaultDesc = `Emergency position indicating radio beacon`;
const _DefaultTitle = 'Emergency position indicating radio beacon';
const _DefaultWidth = `399.977`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class E052EmergencyPositionIndicatingRadioBeacon extends HTMLElement {
  static readonly tagName = 'iso-e052-emergency-position-indicating-radio-beacon';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-e052-emergency-position-indicating-radio-beacon`;
    const titleId = `iso-title-e052-emergency-position-indicating-radio-beacon`;
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
