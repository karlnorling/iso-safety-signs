// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.684 138.536"`;
const _Body = `<path d="M161.283 181.663 86.195 51.593a4.24 4.24 0 0 0-3.678-2.116 4.3 4.3 0 0 0-3.678 2.117L3.75 181.663a4.18 4.18 0 0 0 0 4.233 4.24 4.24 0 0 0 3.678 2.117h150.178a4.3 4.3 0 0 0 3.677-2.117 4.18 4.18 0 0 0 0-4.233" style="stroke-width:.264583" transform="translate(-3.175 -49.477)"/><path d="M555.875 491.5h-512l256-443.3z" style="overflow:visible;fill:#f9a800;fill-opacity:1;stroke:none" transform="matrix(.26458 0 0 .2635 0 .538)"/><path d="M82.662 80.712a2.584 2.584 0 0 0-1.438 4.73v2.645a3.32 3.32 0 0 0-1.883 2.979 3.32 3.32 0 0 0 1.883 2.98c-.084 4.292-.183 4.69.835 6.24.876 1.334 2.156 2.986.769 4.338-1.872 1.826-3.824-3.297-3.824-3.297-1.597 1.063-1.627 5.315.782 7.154l-14.21 25.577-12.617 4.527.05 14.304 5.91 3.298.216.723 1.452.933 20.769-7.495.23-15.39-6.291-4.388-7.608 2.73 13.418-24.153q.294.088.62.135l-.138 25.675 1.46 1.026.153-26.694.01-.002 15.222 37.419-15.383-10.728-.232 15.412-20.666 7.458 1.56 1.003 1.205-.317 11.833 6.604.267.89 1.48.952 19.516-7.043.422-14.227 1.468 1.01-15.275-38.77c2.348-.855 3.718-3.015 3.525-5.275-.284-3.32-3.005-4.43-3.643-5.286-.66-.884-.391-2.917-.409-4.344a3.32 3.32 0 0 0 1.883-2.98 3.32 3.32 0 0 0-1.883-2.979v-2.645a2.584 2.584 0 0 0-1.438-4.73zm17.22 67.005-.424 14.268-19.398 7 1.532.986 1.376-.362 3.88 2.165 19.797-7.071v-12.268Z" style="display:inline;fill:#000;fill-opacity:1;stroke-width:1.47664" transform="translate(-3.175 -49.477)"/>`;
const _DefaultDesc = `Overhead load`;
const _DefaultTitle = 'Overhead load';
const _DefaultWidth = `599.75`;
const _DefaultHeight = `523.6`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class W015OverheadLoad extends HTMLElement {
  static readonly tagName = 'iso-w015-overhead-load';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-w015-overhead-load`;
    const titleId = `iso-title-w015-overhead-load`;
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
