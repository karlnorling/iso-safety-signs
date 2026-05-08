// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#005387" d="M265 132.5c0 73.171-59.326 132.5-132.502 132.5S0 205.671 0 132.5 59.326 0 132.498 0 265 59.33 265 132.5"/><path fill="#fff" d="M181.939 187.194H83.061v12.479h98.878zm-22.75 27.262h-53.471v12.479h53.471zm-96.19-42.237h139.002V159.74h-64.125V34.945h-10.752V159.74H62.999z"/>`;
const _DefaultDesc = `Connect an earth terminal to the ground`;
const _DefaultTitle = 'Connect an earth terminal to the ground';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class M005ConnectAnEarthTerminalToTheGround extends HTMLElement {
  static readonly tagName = 'iso-m005-connect-an-earth-terminal-to-the-ground';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-m005-connect-an-earth-terminal-to-the-ground`;
    const titleId = `iso-title-m005-connect-an-earth-terminal-to-the-ground`;
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
