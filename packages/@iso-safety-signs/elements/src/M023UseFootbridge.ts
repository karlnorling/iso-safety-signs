// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#005387" d="M265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/><path fill="#fff" d="M143.903 27.883c-2.366-3.849-7.386-5.064-11.213-2.712s-5.012 7.379-2.647 11.228 7.386 5.064 11.213 2.712 5.013-7.379 2.647-11.228m-69.41 52.845-26.236 59.896 8.786 33.181 1.686 2.641-9.186 26.059h18.4l21.838-60.553h85.53l21.838 60.553h18.37l-9.197-26.059 1.607-2.324 8.776-33.498-26.107-59.896h-16.364c1.637-1.172 2.346-3.439.512-5.679l-25.53-31.177c-1.041-1.271-3.096-1.357-4.738-1.357H128.26c-1.57 0-3.367.86-4.156 2.217l-9.382 16.145-17.029 7.431c-4.708 2.054-2.13 9.694 3.688 7.26l16.088-6.728c1.754-.734 3.33-2.112 4.299-3.748l5.67-9.574V79.01l-.634 1.718zm94.638 0h-21.076l-1.852-3.518V53.984l21.875 25.78c.332.391.686.709 1.054.965zm-44.109 4.821-14.47 39.228H77.405l-16.014 43.991-7.493-28.144L77.769 85.55zm-4.735 39.228 14.916-39.228h4.395l10.407 18.791c.65 1.174 1.88 1.966 3.039 2.643l20.459 11.946c5.27 3.077 10.255-4.843 4.857-7.999l-20.808-12.165-6.959-13.216h36.645l24.008 55.075-7.642 28.263-15.92-44.11z"/>`;
const _DefaultDesc = `Use footbridge`;
const _DefaultTitle = 'Use footbridge';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class M023UseFootbridge extends HTMLElement {
  static readonly tagName = 'iso-m023-use-footbridge';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-m023-use-footbridge`;
    const titleId = `iso-title-m023-use-footbridge`;
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
