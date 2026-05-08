// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="m130.679 89.175 11.66 15.942 20.554 8.919c5.711 2.477 1.943 11.161-3.768 8.683l-21.662-9.4a4.84 4.84 0 0 1-2.056-1.646l-6.374-8.715v22.352l18.575 21.322a6.65 6.65 0 0 1 1.515 3.071l4.997 24.235c1.4 6.792-8.82 9.228-10.351 1.801l-4.734-22.96-19.196-22.034c-.811-.93-.852-2.316-1.278-3.474l-.18 1.081-6.018 29.591a7.8 7.8 0 0 1-.828 2.244L99.404 181.99c-3.696 6.642-12.693 1.213-9.336-4.821l12.085-21.72 5.845-28.743v-25.869l-9.707 9.708v19.074a4.734 4.734 0 0 1-4.733 4.733c-2.624 0-4.733-2.141-4.733-4.749v-20.994c0-1.313.504-2.488 1.425-3.41l16.575-16.576c.939-.939 2.299-2.386 3.565-2.386h16.249c1.526 0 3.082 1.63 4.039 2.938zM118.516 66.28a8.94 8.94 0 0 1 8.94 8.94 8.94 8.94 0 0 1-8.94 8.94 8.94 8.94 0 0 1-8.94-8.94 8.94 8.94 0 0 1 8.94-8.94"/><path d="M173.131 217.674v-22.681h-31.147v31.385l-4.624.35v-31.735h-5.849l-2.448-14.689h8.297V178.4h4.624v1.904h31.147v-5.305H85.675v5.305h9.113l2.448 14.69H85.675v19.434l-4.625-2.833v-16.601h-4.624v13.388l-4.624-3.654v-9.734h-9.98a94.6 94.6 0 0 1-10.674-14.69h20.654v-5.305H48.246a94 94 0 0 1-2.179-4.625h25.734V60.612H71.4a95 95 0 0 1 5.892-4.625h95.839v-8.661a95 95 0 0 1 4.625 2.369v6.291h9.952a95 95 0 0 1 5.892 4.625h-15.844v109.763h30.195V75.846a95 95 0 0 1 4.625 6.743v87.785h6.358a94 94 0 0 1-2.179 4.625h-4.179v5.305h1.278a94.7 94.7 0 0 1-10.674 14.689h-25.424v20.312a94 94 0 0 1-4.625 2.369m34.819-42.675h-30.195v5.305h30.195zm-126.9 0h-4.624v5.305h4.624zm0-4.625V60.612h-4.624v109.763zm4.625-109.763v109.763h87.456V60.612z"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `Do not use this incomplete scaffold`;
const _DefaultTitle = 'Do not use this incomplete scaffold';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P025DoNotUseThisIncompleteScaffold extends HTMLElement {
  static readonly tagName = 'iso-p025-do-not-use-this-incomplete-scaffold';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p025-do-not-use-this-incomplete-scaffold`;
    const titleId = `iso-title-p025-do-not-use-this-incomplete-scaffold`;
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
