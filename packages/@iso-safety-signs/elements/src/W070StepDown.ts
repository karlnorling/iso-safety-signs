// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.684 138.536"`;
const _Body = `<path d="M107.308 118.428 32.22-11.642a4.24 4.24 0 0 0-3.678-2.116 4.3 4.3 0 0 0-3.678 2.116l-75.089 130.07a4.18 4.18 0 0 0 0 4.233 4.24 4.24 0 0 0 3.678 2.116h150.178a4.3 4.3 0 0 0 3.677-2.116 4.18 4.18 0 0 0 0-4.234" style="stroke-width:.264583" transform="translate(50.8 13.758)"/><path fill="#f6bd16" d="m299.88 48.2 256 443.3H43.875z" style="display:inline;fill:#f9a800;fill-opacity:1" transform="matrix(.26458 0 0 .2635 .026 .538)"/><path d="M39.829 39.346a4.808 4.808 0 1 0 0 9.616 4.808 4.808 0 0 0 0-9.616m-22.313 6.048c-1.063 0-1.625.763-2.3 1.439l-7.467 7.466a2.253 2.253 0 0 0 0 3.194 2.256 2.256 0 0 0 3.194 0l7.408-7.358c.156-.183.243-.208.402-.202H29.17L18.573 63.955c-.645.78-.529 1.753-.506 2.654l-.09 13.09c-.005.381-.08.57-.202.876l-5.576 13.19a2.566 2.566 0 0 0 1.368 3.37 2.565 2.565 0 0 0 3.369-1.368l5.557-13.149c.385-.884.616-1.58.622-2.45l.054-7.801c.067-.51.584-.583.843-.172l6.168 10.857c.286.435.3.619.384 1.197l1.67 13.423a2.565 2.565 0 0 0 2.868 2.234 2.566 2.566 0 0 0 2.234-2.869l-1.766-14.21c-.09-.718-.256-1.16-.567-1.696l-6.777-11.93 8.758-11.588v9.493c0 .63.593 1.513 1.21 2.26l6.716 8.146a2.253 2.253 0 0 0 3.179.306 2.253 2.253 0 0 0 .306-3.179l-6.63-8.04c-.214-.269-.258-.354-.263-.612l.021-11.157c-.11-2.013-1.012-2.463-2.8-3.784l-4.564-3.45c-1.96-1.546-2.528-2.195-4.367-2.202zM-14.048 97.64v3.969h35.661v7.053H72.97v-3.97H25.582V97.64z" style="color:#000;fill:#000;stroke-width:.264583;-inkscape-stroke:none" transform="translate(50.8 13.758)"/>`;
const _DefaultDesc = `Step down`;
const _DefaultTitle = 'Step down';
const _DefaultWidth = `599.75`;
const _DefaultHeight = `523.6`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class W070StepDown extends HTMLElement {
  static readonly tagName = 'iso-w070-step-down';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-w070-step-down`;
    const titleId = `iso-title-w070-step-down`;
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
