// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 199.946 199.938"`;
const _Body = `<path d="M0 0h199.946v199.938H0Z" style="fill:#fff;stroke-width:6.80315"/><path fill="#a92121" fill-rule="evenodd" d="M5.393 5.394h189.16v189.15H5.393Z" style="fill:#9b2423;fill-opacity:1"/><path d="M88.313 29.559c-8.547.099-13.833 5.924-13.735 14.076h-3.38v-9.508h3.898v-1.71H42.389v1.71h3.898v9.508H35.068a5.313 5.313 0 0 0-5.324 5.324v77.58H87.74V48.96a5.313 5.313 0 0 0-5.324-5.324h-1.855l-.004-.056c.496-5.697 3.407-7.677 7.703-7.735 5.281.222 7.187 2.664 7.416 7.553l-.002.07v98.573l-7.364-4.043v18.398l9.698-5.324 28.142 8.65v-25.053l-23.906 7.35V43.821l-.004.138c-.825-8.624-5.68-14.28-13.928-14.4Zm-52.96 71.88h46.778v20.349H35.354z" style="display:inline;fill:#fff;stroke-width:3.3"/><path d="M154.316 49.063c-1.709 6.451-2.225 14.166-.98 20.775 2.511 9.414 8.206 16.71 15.323 22.763 1.256 1.13 2.676 1.906 4.087 2.635V75.673c-4.23-.67-7.402-4.459-9.685-7.799-3.846-5.923-6.3-12.398-8.745-18.811m-24.394 8.524c-.973.003-2.01.037-3.047.072 5.623 4.303 7.376 10.776 9.227 16.882 1.93 6.711 4.335 13.146 8.134 18.696 7.125 9.456 17.923 13.627 28.51 10.589-9.366-3.897-15.13-13.02-19.443-20.86-3.909-6.18-5.014-13.99-10.219-19.066-3.809-3.612-8.139-6.322-13.162-6.313m1.516 28.29c-.658 12.08 3.42 22.126 10.747 30.517 7.758 9.061 20.151 13.674 30.56 17.014v-19.563c-6.659-.13-12.723-2.344-17.84-5.425-10.117-6.137-17.3-13.179-23.467-22.544zm-14.02 37.59c9.441 2.249 13.854 8.324 19.12 14.66 4.213 5.378 9.802 8.577 15.96 9.664 7.668 1.291 14.968.096 20.248-5.556-12.281-2.182-19.49-9.733-27.865-16.626-9.806-6.564-17.421-9.723-27.463-2.142m13.98 19.464c1.112 6.195 3.061 12.015 6.582 16.742 9.687 11.419 22.268 11.208 34.766 11.431v-19.563c-7.932 1.86-17.65 2.744-24.999.95-6.702-1.376-11.75-5.35-16.35-9.56" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.138452px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/>`;
const _DefaultDesc = `Portable foam applicator unit`;
const _DefaultTitle = 'Portable foam applicator unit';
const _DefaultWidth = `199.946`;
const _DefaultHeight = `199.938`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class F010PortableFoamApplicatorUnit extends HTMLElement {
  static readonly tagName = 'iso-f010-portable-foam-applicator-unit';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-f010-portable-foam-applicator-unit`;
    const titleId = `iso-title-f010-portable-foam-applicator-unit`;
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
