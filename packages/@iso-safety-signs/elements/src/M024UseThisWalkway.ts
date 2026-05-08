// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#005387" d="M265 132.5C265 59.323 205.678 0 132.5 0S0 59.323 0 132.5 59.322 265 132.5 265 265 205.677 265 132.5"/><path fill="#fff" d="M113.521 78.287v49.386L86.255 161.34c-1.423 1.758-3.179 3.54-3.577 5.767l-9.148 51.106c-1.971 11.013 15.719 14.081 17.638 3.508l8.642-47.631 27.228-33.428c1.645-2.019 3.831-4.235 4.612-7.109l9.061 44.924c.546 2.706 1.192 5.536 2.763 7.805l27.343 39.495c7.782 11.24 22.759 1.412 15.392-9.272l-26.732-38.765-9.896-45.421v-53.25l21.093 19.743 16.721 34.966c3.718 7.775 18.431 2.863 14.097-6.597l-14.984-32.708c-1.205-2.631-2.709-5.237-4.81-7.228l-25.635-24.294c-2.389-2.264-6.488-3.174-9.339-3.174H114.42c-3.009 0-5.943 1.693-8.285 3.581l-28.617 23.06-32.574 13.628c-10.24 4.284-4.284 18.709 5.877 14.542l33.944-13.918c1.639-.672 3.171-1.635 4.547-2.751zm19.129-54.419c-8.734-.624-16.318 5.897-16.937 14.566s5.959 16.202 14.694 16.827 16.318-5.897 16.938-14.566-5.959-16.202-14.694-16.826"/>`;
const _DefaultDesc = `Use this walkway`;
const _DefaultTitle = 'Use this walkway';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class M024UseThisWalkway extends HTMLElement {
  static readonly tagName = 'iso-m024-use-this-walkway';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-m024-use-this-walkway`;
    const titleId = `iso-title-m024-use-this-walkway`;
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
