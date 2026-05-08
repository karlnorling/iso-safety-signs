// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.833 105.833"`;
const _Body = `<path d="M0 0h200v200H0z" style="fill:#fff" transform="scale(.52917)"/><path d="M5 5h190v190H5z" style="fill:#237f52" transform="scale(.52917)"/><path d="m151.19 119.727 24.947 32.879.08.16-.6 4.37 7.885 10.391c-.806.298-1.52.8-2.075 1.457h-7.544v10.05h-25.23v-15.039h-6.7l-8.43.54c-1.198.103-1.34.28-1.631.974l-4.407 10.959v11.475c-.008.27.373.57.713.57h2.18a7.23 7.23 0 0 1 14.46 0h28.995a7.23 7.23 0 0 1 14.46 0h4.691l4.49-1.568-.285-8.125h-8.766v-2.84c.308-.261.583-.56.82-.887l1.528 2.015 4.036.337.105-.095.02.026.307-1.127.009.012c.716-2.474 1.16-5.03 1.924-7.49l-37.197-49.024zm8.188.765 5.696 7.506-6.471-.033-.843-1.11zm-6.319.167 5.314.028-1.328 5.224zm12.567 8.068 5.695 7.506-6.47-.034-.843-1.11zm-6.318.167 5.312.028-1.328 5.223zm12.566 8.067 5.696 7.506-6.471-.033-.843-1.111zm-6.318.167 5.313.028-1.328 5.224zm12.565 8.067 5.696 7.506-6.47-.033-.843-1.11zm-6.317.168 5.313.028-1.328 5.224zm12.566 8.066 5.695 7.507-6.471-.034-.842-1.11zm-6.318.168 5.313.028-1.328 5.224zm-32.898 5.391c-1.03 0-1.858.83-1.858 1.86v2.256h3.718v-2.256c0-1.03-.83-1.86-1.86-1.86m45.464 2.677 5.696 7.506-6.471-.034-.843-1.11zm-6.319.166 5.314.028-1.328 5.225zm-51.001 5.56h7.68c.325.008.407.008.403.289v7.044c.001.187-.053.238-.261.273l-11.175 1.234c-.578.049-.791-.508-.514-1.1l2.801-7.083c.218-.525.624-.657 1.066-.657m57.25 2.675 5.312.028-1.328 5.224zm-52.9 12.78a5.77 5.77 0 1 0 0 11.541 5.77 5.77 0 0 0 0-11.54m43.374 0a5.77 5.77 0 1 0 0 11.541 5.77 5.77 0 0 0 0-11.54" style="display:inline;fill:#fff;fill-opacity:1;stroke-width:3.15" transform="translate(-114.3 -98.425)"/><path d="M180.892 110.1v8.925h1.588v-7.338h23.145v24.43h-18.492l-1.587 1.588h21.666V110.1zm-5.468 6.5a3.09 3.09 0 0 0-3.09 3.09 3.09 3.09 0 0 0 3.09 3.092 3.09 3.09 0 0 0 3.092-3.091 3.09 3.09 0 0 0-3.092-3.092m5.682 3.023c-.293 0-.776.174-1.18.626v.001l-4.476 4.49c-.224.207-.204.546-.204.82v6.19h-6.001a1.42 1.42 0 0 0-1.423 1.423 1.42 1.42 0 0 0 1.423 1.422h7.412c1.405 0 1.434-1.32 1.434-1.622v-5.347l5.97 5.969-5.21 5.208a1.76 1.76 0 0 0-.49.944 1.8 1.8 0 0 0-.166.746v8.553c0 .957.747 1.728 1.675 1.728s1.675-.77 1.675-1.728v-8.199l7.586-7.566 1.897 1.896h4.755l-12.74-12.709h4.58v3.382l2.828 2.828q.016-.102.017-.209v-7.412c0-1.405-1.196-1.434-1.622-1.434zm-.214 11.642v4.658l1.588-1.588v-1.482z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.926042;stroke-dasharray:none;stroke-opacity:1" transform="translate(-114.3 -98.425)"/>`;
const _DefaultDesc = `Rescue window`;
const _DefaultTitle = 'Rescue window';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class E017RescueWindow extends HTMLElement {
  static readonly tagName = 'iso-e017-rescue-window';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-e017-rescue-window`;
    const titleId = `iso-title-e017-rescue-window`;
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
