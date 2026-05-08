// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 525"`;
const _Body = `<path d="M597.6 499.6 313.8 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.2 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16"/><path fill="#f9a800" d="M556.005 491.525H44L300.005 50.036z"/><path d="m382.6 246.32-14.482 14.481c17.404 17.454 28.173 41.528 28.173 68.102s-10.77 50.648-28.173 68.102l14.481 14.481c21.105-21.155 34.15-50.357 34.15-82.583s-13.046-61.427-34.15-82.583"/><path d="m361.42 270.78-12.266 12.265c11.525 11.578 16.924 28.121 16.924 45.731s-6.734 34.153-18.259 45.731l13.22 13.41c15.054-15.107 23.777-37.103 23.777-60.095s-8.34-41.934-23.396-57.041zm-61.59 41.58a16.47 16.47 0 0 0-11.87 5.026c-.06.062-.122.119-.181.182-.245.26-.499.51-.727.787-.046.056-.076.125-.121.181-.326.406-.621.837-.908 1.272q-.389.589-.727 1.211-.031.06-.06.121a16.5 16.5 0 0 0-1.212 2.847 16 16 0 0 0-.423 1.574c-.005.02.005.042 0 .06-.105.52-.188 1.039-.243 1.575v.06a17 17 0 0 0-.06 1.635c0 .56.006 1.09.06 1.635v.06a16.2 16.2 0 0 0 .666 3.21c.31.993.73 1.943 1.212 2.846l.06.121c.227.42.465.815.727 1.211.287.436.582.867.908 1.272.323.402.67.78 1.03 1.15a16.47 16.47 0 0 0 11.868 5.026c4.66 0 8.86-1.923 11.87-5.026l.181-.181c.246-.262.498-.51.727-.788.046-.055.075-.125.12-.181.327-.406.622-.836.91-1.272.26-.396.499-.792.726-1.21l.06-.122c.482-.903.902-1.853 1.211-2.846.006-.02-.006-.042 0-.06.15-.49.32-1.006.424-1.515.005-.02-.005-.04 0-.06.102-.509.188-1.05.242-1.574v-.06c.054-.546.06-1.076.06-1.636 0-.58 0-1.131-.06-1.695a16 16 0 0 0-.242-1.575c-.005-.019.005-.041 0-.06-.106-.52-.27-1.014-.424-1.514-.006-.02.006-.042 0-.06a16.5 16.5 0 0 0-1.21-2.846l-.061-.122a17 17 0 0 0-.727-1.21 17 17 0 0 0-.908-1.272c-.046-.057-.075-.126-.121-.182-.283-.342-.6-.65-.909-.969a16.47 16.47 0 0 0-11.869-5.026zm-12.11 47.89-27.156 111.13 78.413.19-26.997-110.94z"/><path d="m339.75 291.56-14.44 14.009c4.58 5.866 9.326 14.415 9.326 23.304 0 8.89-3.79 18.672-8.372 24.528l13.104 13.738c7.926-10.104 14.718-23.091 14.718-38.457s-6.41-27.017-14.336-37.122M217.4 246.32l14.482 14.481c-17.404 17.454-28.173 41.528-28.173 68.102s10.77 50.648 28.173 68.102L217.4 411.486c-21.105-21.155-34.15-50.357-34.15-82.583s13.046-61.427 34.15-82.583"/><path d="m238.58 270.78 12.266 12.265c-11.525 11.578-16.924 28.121-16.924 45.731s6.734 34.153 18.259 45.731l-13.22 13.41c-15.054-15.107-23.777-37.103-23.777-60.095s8.34-41.934 23.396-57.041z"/><path d="m260.25 291.56 14.44 14.009c-4.58 5.866-9.326 14.415-9.326 23.304 0 8.89 3.79 18.672 8.372 24.528l-13.104 13.738c-7.926-10.104-14.718-23.091-14.718-38.457s6.41-27.017 14.336-37.122"/>`;
const _DefaultDesc = `Non-ionizing radiation`;
const _DefaultTitle = 'Non-ionizing radiation';
const _DefaultWidth = `600`;
const _DefaultHeight = `525`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class W005NonIonizingRadiation extends HTMLElement {
  static readonly tagName = 'iso-w005-non-ionizing-radiation';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-w005-non-ionizing-radiation`;
    const titleId = `iso-title-w005-non-ionizing-radiation`;
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
