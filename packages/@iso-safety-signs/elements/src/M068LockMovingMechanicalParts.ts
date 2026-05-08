// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.115 70.115"`;
const _Body = `<path fill="#005387" d="M112.448 126.869c0 19.36-15.697 35.056-35.057 35.056s-35.058-15.697-35.058-35.056c0-19.36 15.697-35.059 35.058-35.059s35.057 15.698 35.057 35.059" style="display:inline;stroke-width:.264583" transform="translate(-42.333 -91.81)"/><path d="M77.52 96.202c-4.46 0-8.097 3.637-8.097 8.098v2.198h3V104.3a5.054 5.054 0 0 1 5.098-5.098 5.054 5.054 0 0 1 5.097 5.098v2.198h3V104.3c0-4.46-3.637-8.098-8.097-8.098m-10.335 10.827v10.359c0 5.726 4.61 10.336 10.336 10.336 5.727 0 10.337-4.61 10.337-10.336v-10.359zm10.336 5.156a2.046 2.046 0 0 1 1.157 3.733v5.317h-2.315v-5.317a2.046 2.046 0 0 1 1.158-3.733M57.963 126.09l-2.75.022-.496 2.706a19 19 0 0 0-3.572.747l-1.535-2.293-1.404.596c.125 2.454.56 4.893 1.298 7.253a14.5 14.5 0 0 1 9.952-1.692c7.868 1.49 13.039 9.076 11.549 16.944a14.5 14.5 0 0 1-1.508 4.228 29.3 29.3 0 0 0 7.284 1.11l.49-1.212-2.309-1.493a19 19 0 0 0 .684-3.588l2.699-.539-.022-2.75-2.706-.497a19 19 0 0 0-.747-3.571l2.292-1.534-1.072-2.532-2.703.58a19 19 0 0 0-2.049-3.012l1.535-2.3-1.96-1.929-2.27 1.567a19 19 0 0 0-3.046-2.008l.534-2.699-2.548-1.033-1.494 2.311a19 19 0 0 0-3.588-.684zm37.64.153-2.697.533.016 2.751a19 19 0 0 0-3.37 1.398l-1.935-1.967-2.287 1.526 1.073 2.547a19 19 0 0 0-2.579 2.572l-2.545-1.08-1.53 2.284 1.961 1.94a19 19 0 0 0-1.406 3.367l-2.752-.023-.54 2.696 2.549 1.038a19 19 0 0 0-.006 3.651l-2.551 1.032.533 2.699 2.752-.016q.363 1.187.87 2.303a29 29 0 0 0 4.518-.931 14.5 14.5 0 0 1-1.74-6.888c0-8.008 6.492-14.5 14.5-14.5a14.5 14.5 0 0 1 7.124 1.872 29 29 0 0 0 1.014-4.5 19 19 0 0 0-2.578-1.006l.024-2.75-2.695-.541-1.039 2.548a19 19 0 0 0-3.652-.004z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:.499999;stroke-linecap:round;stroke-opacity:1;paint-order:stroke fill markers" transform="translate(-42.333 -91.81)"/>`;
const _DefaultDesc = `Lock moving mechanical parts`;
const _DefaultTitle = 'Lock moving mechanical parts';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class M068LockMovingMechanicalParts extends HTMLElement {
  static readonly tagName = 'iso-m068-lock-moving-mechanical-parts';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-m068-lock-moving-mechanical-parts`;
    const titleId = `iso-title-m068-lock-moving-mechanical-parts`;
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
