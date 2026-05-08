// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"`;
const _Body = `<path d="M0 0h200v200H0z" style="fill:#fff"/><path d="M5 5h190v190H5z" style="fill:#237f52"/><path d="M132.73 36.116h47.168v15.723H132.73zm15.723-15.723h15.723v47.168h-15.723zM56.258 65.861c-18.603.194-35.268 18.7-30.23 43.116 3.779 18.7 23.641 42.922 58.231 66.37 34.59-23.544 54.452-47.767 58.231-66.37 5.038-24.513-11.53-42.922-30.23-43.116-9.592-.194-21.607 4.941-28.001 17.15-6.395-12.208-18.409-17.343-28.001-17.15M99.18 80.685l-16.278 33.427h20.638l-36.14 42.05 13.952-32.943H61.296z" style="fill:#fff"/>`;
const _DefaultDesc = `Automated external heart defibrillator`;
const _DefaultTitle = 'Automated external heart defibrillator';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class E010AutomatedExternalHeartDefibrillator extends HTMLElement {
  static readonly tagName = 'iso-e010-automated-external-heart-defibrillator';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-e010-automated-external-heart-defibrillator`;
    const titleId = `iso-title-e010-automated-external-heart-defibrillator`;
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
