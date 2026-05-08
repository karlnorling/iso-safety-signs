// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M140.72 86.058a8.125 8.125 0 0 0-8.125-8.125 8.13 8.13 0 0 0-8.125 8.125 8.13 8.13 0 0 0 8.125 8.126 8.13 8.13 0 0 0 8.125-8.126m-19.672 21.827h2.221v75.096a4.1 4.1 0 0 0 4.087 4.087 4.1 4.1 0 0 0 4.087-4.087v-44.812c0-.465.379-.844.844-.844h.58c.465 0 .844.379.844.844v44.812a4.1 4.1 0 0 0 4.087 4.087 4.1 4.1 0 0 0 4.087-4.087v-75.096h2.067v32.042c0 2.059 1.684 3.743 3.743 3.743s3.743-1.684 3.743-3.743v-33.564c0-6.321-4.704-9.898-10.422-9.898H123.92c-5.427 0-10.31 4.402-10.36 9.898v33.564c0 2.059 1.685 3.743 3.743 3.743s3.744-1.684 3.744-3.743zM80.264 65.777h104.472v133.446H80.264zm7.714 125.731h89.044V73.492H87.978zm41.693-128.919V48.885l-8.078 8.078v-7.431L132.5 38.625l10.907 10.906v7.431l-8.078-8.078v13.704zm0 140.472v13.704l-8.078-8.077v7.431l10.907 10.906 10.907-10.906v-7.431l-8.078 8.077v-13.704z"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `Do not use this lift for people`;
const _DefaultTitle = 'Do not use this lift for people';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P027DoNotUseThisLiftForPeople extends HTMLElement {
  static readonly tagName = 'iso-p027-do-not-use-this-lift-for-people';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p027-do-not-use-this-lift-for-people`;
    const titleId = `iso-title-p027-do-not-use-this-lift-for-people`;
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
