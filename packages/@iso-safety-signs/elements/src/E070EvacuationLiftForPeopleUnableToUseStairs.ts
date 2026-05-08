// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 200 200"`;
const _Body = `<path d="M0 0h200v200H0z" style="fill:#fff"/><path d="M5 5h190v190H5z" style="fill:#237f52"/><path d="m100.557 23.577-6.915 7.08.061 4.747 5.145-5.268.121 10.41 3.58-.041-.123-10.413 5.265 5.141-.056-4.744zM48.762 47.619v103.81h103.81V47.618Zm6.952 6.571h89.905v90.667H55.714ZM98.97 159.15l-.121 10.411-5.145-5.268-.06 4.747 6.915 7.08 7.078-6.912.056-4.744-5.265 5.141.122-10.413z" style="fill:#fff;stroke:none;stroke-width:.333322" transform="translate(-.667 .152)"/><path d="M92.76 72.242a5.587 5.587 0 0 0-5.591 5.592c0 3.065 2.508 5.59 5.59 5.59 3.1 0 5.592-2.525 5.592-5.59 0-3.1-2.5-5.592-5.591-5.592m.367 12.193q-.138 0-.277.008c-2.99.169-5.244 2.745-5.1 5.709l.978 16.975c.245 2.964 2.737 5.092 5.693 5.076h18.123l7.407 12.836c.887 1.453 2.947 2.036 4.484 1.124 1.537-.937 2.002-2.863 1.124-4.468l-9.535-16.468a3.26 3.26 0 0 0-2.703-1.58H99.336l-.136-4.222h10.16c1.385-.084 2.525-1.14 2.525-2.559 0-1.402-1.106-2.49-2.525-2.542H98.905l-.363-4.797c-.197-2.847-2.565-5.1-5.415-5.091m-7.87 12.617c-5.936 3.707-9.923 10.244-9.923 17.76 0 11.595 9.4 21.012 21.013 21.012 8.546 0 15.851-5.143 19.136-12.465l-2.955-5.118c-1.58 7.508-8.2 13.183-16.181 13.183-9.172 0-16.612-7.423-16.612-16.612 0-5.033 2.28-9.518 5.827-12.567z" style="stroke-width:2.11133;fill:#fff;fill-opacity:1" transform="translate(-.667 .152)"/>`;
const _DefaultDesc = `Evacuation lift for people unable to use stairs`;
const _DefaultTitle = 'Evacuation lift for people unable to use stairs';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class E070EvacuationLiftForPeopleUnableToUseStairs extends HTMLElement {
  static readonly tagName = 'iso-e070-evacuation-lift-for-people-unable-to-use-stairs';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-e070-evacuation-lift-for-people-unable-to-use-stairs`;
    const titleId = `iso-title-e070-evacuation-lift-for-people-unable-to-use-stairs`;
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
