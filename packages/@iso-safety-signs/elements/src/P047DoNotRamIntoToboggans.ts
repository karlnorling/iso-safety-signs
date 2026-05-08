// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M65.464 144.375a7.11 7.11 0 0 1 8.804-4.79l24.071 7.109c5.312 1.569 7.156 8.739 2.134 12.538l-16.698 13.286 1.356 21.87c.152 2.451-1.844 4.553-4.118 4.624-2.413.149-4.509-1.686-4.657-4.079l-1.497-24.156a4.46 4.46 0 0 1 1.651-3.712l11.034-8.779-14.55-4.297.262 11.449a3.8 3.8 0 0 1-.853 2.486L61.596 183.26a3.84 3.84 0 0 1-5.334.917 3.84 3.84 0 0 1-.918-5.334l10.229-14.518-.406-17.734a7.7 7.7 0 0 1 .297-2.217zm-7.451-6.944a7.75 7.75 0 1 0-4.39 14.865 7.75 7.75 0 1 0 4.39-14.865m64.015-57.374 11.922-1.149.215 33.108zm20.037-10.341 11.419 2.01-12.784 42.731zm9.264 36.77 4.381 4.381-11.275 10.845zm-26.608 61.583h8.905l-2.37-18.529zm-48.98-65.425-2.729 10.485 25.351 7.182zm11.634 19.965v5.53l22.623.431zm99.356-15.227 8.397-5.13.406 15.968-15.061-4.895a4.46 4.46 0 0 0-4.217.84l-18.39 15.733c-2.336 1.998-1.683 4.99-.455 6.175s3.93 2.422 6.171.506l16.518-14.131L200.26 129a7.084 7.084 0 0 0 9.554-6.82l-.638-25.092a7.11 7.11 0 0 0-7.265-6.904c-1.537.039-2.742.629-4.181 1.508l-13.965 8.531-17.828-.835a3.84 3.84 0 0 0-4.007 3.638 3.84 3.84 0 0 0 3.638 4.007l18.736.878a3.8 3.8 0 0 0 2.427-.53zm22.346-26.422a7.75 7.75 0 0 0-15.495.394 7.75 7.75 0 0 0 15.495-.394"/><path d="m216.563 128.84-.296-18.981a1.64 1.64 0 0 0-1.638-1.623 1.63 1.63 0 0 0-1.623 1.638l.276 17.669-63.28 12.209c-.881.17-1.462 1.029-1.292 1.91s1.03 1.462 1.91 1.292l64.481-12.441c.867-.089 1.476-.811 1.463-1.674m-98.289 21.117-35.473 54.109c-.492.75-.28 1.766.47 2.258a1.64 1.64 0 0 0 2.257-.47l35.812-54.626c.459-.701.466-1.629-.056-2.569l-8.93-16.054a1.64 1.64 0 0 0-2.21-.657 1.63 1.63 0 0 0-.657 2.211zm110.215-17.915L86.997 213.895a94 94 0 0 0 16.387 7.469l123.415-71.396a95 95 0 0 0 1.692-17.927"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869-25.503 0-48.9 9.018-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.802 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `Do not ram into toboggans`;
const _DefaultTitle = 'Do not ram into toboggans';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P047DoNotRamIntoToboggans extends HTMLElement {
  static readonly tagName = 'iso-p047-do-not-ram-into-toboggans';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p047-do-not-ram-into-toboggans`;
    const titleId = `iso-title-p047-do-not-ram-into-toboggans`;
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
