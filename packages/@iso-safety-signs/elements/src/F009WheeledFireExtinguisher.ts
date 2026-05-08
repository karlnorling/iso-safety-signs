// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<title>ISO 7010-F007</title><path d="M-134.478 42.48h52.917v52.917h-52.917z" style="fill:#fff;stroke:none;stroke-width:.0406557" transform="translate(134.478 -42.48)"/><path d="M-133.428 43.67h50.894v50.824h-50.894z" style="display:inline;fill:#9b2423;fill-opacity:1;stroke:none;stroke-width:.0406557px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(134.478 -42.48)"/><path d="M-92.103 54.113c-.504 1.902-.656 4.178-.288 6.127.74 2.776 2.42 4.928 4.519 6.713.37.334.789.563 1.205.778v-5.77c-1.248-.198-2.183-1.315-2.856-2.3-1.135-1.747-1.858-3.657-2.58-5.548m-7.194 2.514c-.287 0-.593.01-.899.021 1.659 1.27 2.176 3.178 2.722 4.979.569 1.98 1.278 3.877 2.398 5.514 2.102 2.789 5.287 4.019 8.409 3.123-2.762-1.15-4.463-3.84-5.734-6.152-1.153-1.823-1.479-4.126-3.014-5.623-1.123-1.066-2.4-1.865-3.882-1.862m.447 8.343c-.194 3.563 1.009 6.526 3.17 9 2.288 2.673 5.943 4.033 9.013 5.018v-5.77c-1.964-.038-3.753-.69-5.262-1.6-2.983-1.81-5.102-3.886-6.921-6.648m-4.135 11.087c2.785.663 4.086 2.454 5.64 4.323 1.242 1.586 2.89 2.53 4.706 2.85 2.262.381 4.415.029 5.972-1.638-3.622-.644-5.748-2.871-8.218-4.904-2.892-1.936-5.138-2.867-8.1-.631m4.123 5.74c.328 1.827.903 3.543 1.942 4.938 2.857 3.367 6.567 3.305 10.253 3.37v-5.769c-2.34.549-5.205.81-7.373.28-1.977-.405-3.465-1.577-4.822-2.82" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.040833px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(134.478 -42.48)"/><path d="M-128.761 47.91a.387.387 0 0 0-.388.388.4.4 0 0 0 .087.245l5.086 5.964V77.88a5.5 5.5 0 0 1 .775-.197V54.22l-5.254-6.16a.39.39 0 0 0-.306-.15m9.682 7.3v1.175h-1.644a.4.4 0 0 0-.4.4v.022a.4.4 0 0 0 .4.4h1.644v.224h4.452v-2.222zm-.86 2.753a2.254 2.254 0 0 0-2.258 2.258v17.366a5.5 5.5 0 0 1 5.467 5.498 5.5 5.5 0 0 1-.075.851h2.808v-.005h2.06l2.306 2.96h.001a.39.39 0 0 0 .323.174.387.387 0 0 0 .388-.387.4.4 0 0 0-.102-.262l.002-.001-2.538-3.26h-2.44v-.512h.344a2.254 2.254 0 0 0 2.258-2.258V60.22a2.254 2.254 0 0 0-2.258-2.258zm-2.282 20.132a4.99 4.99 0 0 0-4.982 4.982 4.99 4.99 0 0 0 4.982 4.982 4.99 4.99 0 0 0 4.982-4.982 4.99 4.99 0 0 0-4.982-4.982m0 1.2a3.77 3.77 0 0 1 3.78 3.782 3.77 3.77 0 0 1-3.78 3.78 3.77 3.77 0 0 1-3.781-3.78 3.77 3.77 0 0 1 3.78-3.781m0 2.12c-.914 0-1.662.748-1.662 1.662s.748 1.662 1.662 1.662 1.661-.748 1.661-1.662-.747-1.662-1.661-1.662m0 .673c.55 0 .988.439.988.989s-.438.988-.988.988a.983.983 0 0 1-.989-.988c0-.55.439-.989.989-.989" style="color:#000;display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.174957" transform="translate(134.478 -42.48)"/>`;
const _DefaultDesc = `Wheeled fire extinguisher`;
const _DefaultTitle = 'Wheeled fire extinguisher';
const _DefaultWidth = `200`;
const _DefaultHeight = `200`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class F009WheeledFireExtinguisher extends HTMLElement {
  static readonly tagName = 'iso-f009-wheeled-fire-extinguisher';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-f009-wheeled-fire-extinguisher`;
    const titleId = `iso-title-f009-wheeled-fire-extinguisher`;
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
