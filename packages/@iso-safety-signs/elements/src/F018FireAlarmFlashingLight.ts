// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<title>ISO 7010-F007</title><path d="M-134.478 42.48h52.917v52.917h-52.917z" style="fill:#fff;stroke:none;stroke-width:.0406557" transform="translate(134.478 -42.48)"/><path d="M-133.428 43.67h50.894v50.824h-50.894z" style="display:inline;fill:#9b2423;fill-opacity:1;stroke:none;stroke-width:.0406557px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(134.478 -42.48)"/><path d="M-92.21 54.098c-.505 1.903-.657 4.178-.29 6.127.74 2.777 2.42 4.928 4.52 6.714.37.333.788.562 1.205.777v-5.77c-1.248-.198-2.183-1.315-2.857-2.3-1.134-1.747-1.858-3.657-2.579-5.548m-7.195 2.514c-.287.001-.593.011-.899.021 1.658 1.27 2.175 3.178 2.721 4.98.57 1.979 1.279 3.876 2.4 5.513 2.1 2.789 5.285 4.02 8.408 3.123-2.763-1.15-4.463-3.84-5.735-6.152-1.152-1.823-1.478-4.126-3.013-5.623-1.124-1.065-2.4-1.865-3.882-1.862m.447 8.343c-.194 3.563 1.009 6.526 3.17 9 2.287 2.673 5.943 4.034 9.012 5.019v-5.77c-1.963-.039-3.752-.691-5.261-1.6-2.984-1.81-5.103-3.887-6.921-6.649m-4.135 11.087c2.785.663 4.086 2.455 5.64 4.323 1.242 1.587 2.89 2.53 4.706 2.85 2.262.381 4.415.029 5.972-1.638-3.622-.644-5.748-2.87-8.219-4.904-2.891-1.936-5.137-2.867-8.099-.631m4.123 5.74c.328 1.827.903 3.544 1.941 4.938 2.857 3.367 6.568 3.305 10.254 3.371v-5.77c-2.34.549-5.206.81-7.373.28-1.977-.405-3.465-1.577-4.822-2.819" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.040833px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(134.478 -42.48)"/><path d="M17.059 13.938v3.357h.73v-3.357zm-3.121.613-.68.268 1.233 3.122.68-.268zm6.972 0-1.232 3.122.679.268 1.232-3.122zm-10.218 2.033-.516.515 2.37 2.377.516-.515zm13.464 0-2.37 2.377.517.515 2.37-2.377zm-6.732 2.773c-2.365 0-4.268 1.92-4.268 4.306v4.8q0 .106.004.212h-.004v3.782H11v4.9h12.848v-4.9h-2.155v-3.782h-.005q.005-.105.005-.212v-4.8c0-2.386-1.904-4.306-4.269-4.306m-9.095.256-.338.646 2.975 1.555.338-.647zm18.19 0-2.975 1.554.338.647 2.975-1.555zM7.408 23.408v.73h3.356v-.73Zm16.676 0v.73h3.357v-.73Z" style="display:inline;fill:#fff;fill-opacity:1;stroke-width:1.91259"/>`;
const _DefaultDesc = `Fire alarm flashing light`;
const _DefaultTitle = 'Fire alarm flashing light';
const _DefaultWidth = `200`;
const _DefaultHeight = `200`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class F018FireAlarmFlashingLight extends HTMLElement {
  static readonly tagName = 'iso-f018-fire-alarm-flashing-light';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-f018-fire-alarm-flashing-light`;
    const titleId = `iso-title-f018-fire-alarm-flashing-light`;
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
