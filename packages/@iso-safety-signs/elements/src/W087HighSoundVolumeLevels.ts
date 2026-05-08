// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.286 61.383"`;
const _Body = `<path fill="#f9a800" stroke="#000" stroke-linejoin="round" stroke-width="3.749" d="m86.472 89.98 33.269 57.635H53.203Z" style="display:inline" transform="translate(-51.33 -88.106)"/><path d="M90.018 116.841a11.2 11.2 0 0 0-4.306.866c-1.504.64-2.961 1.726-3.788 3.426-1.815 3.734.906 8.691 5.57 8.61h.876v-1.75h-.905c-3.42.06-5.214-3.53-3.966-6.097.6-1.237 1.67-2.055 2.9-2.58s2.605-.727 3.615-.725c2.408.006 5.608 1.46 7.282 4.649.527 1.004.837 2.372.888 3.652.05 1.28-.183 2.48-.512 3.07l-2.601 4.395c-.654 1.015-.784 2.003-.951 2.787-.168.784-.332 1.375-.994 2.07-.624.655-1.75 1.211-2.887 1.328s-2.232-.157-3.045-1.007c-.23-.24-.287-.386-.303-.434l.608-5.613c.146-.007.267-.016.334-.016 2.676.002 4.688-2.04 5.529-4.24.42-1.1.572-2.274.31-3.361s-1.01-2.085-2.187-2.559c-1.216-.49-2.747-.535-3.98.357l1.027 1.416c.648-.469 1.509-.468 2.299-.15.671.27.986.704 1.14 1.346.155.641.074 1.494-.244 2.326-.637 1.665-2.136 3.116-3.892 3.115-.407 0-1.18.053-1.18.053l-.736.045-.776 7.172.006-.041s-.018.154-.01.273c.01.119.035.262.088.422.106.32.32.699.702 1.098 1.235 1.292 2.94 1.698 4.49 1.539s2.999-.837 3.974-1.862c.937-.983 1.252-2.042 1.438-2.912.185-.869.28-1.535.71-2.202l.009-.016 2.646-4.467.006-.01c.597-1.073.79-2.49.73-3.992-.059-1.501-.394-3.077-1.085-4.395-1.993-3.797-5.738-5.578-8.828-5.585zm-11.175 6.351-1.51.872a12.3 12.3 0 0 1 1.248 5.422c0 1.88-.42 3.66-1.168 5.253l1.516.875a14 14 0 0 0 1.402-6.128c0-2.262-.538-4.398-1.488-6.294m-3.164 1.827-1.517.876a8.7 8.7 0 0 1 .772 3.591c0 1.215-.248 2.37-.695 3.42l1.518.877c.594-1.312.927-2.766.927-4.297a10.4 10.4 0 0 0-1.005-4.467m-3.307 1.91-1.533.884a4.92 4.92 0 0 1 .065 3.168l1.533.885a6.6 6.6 0 0 0 .448-2.38c0-.906-.183-1.77-.513-2.558" style="color:#000;fill:#000;-inkscape-stroke:none;paint-order:stroke fill markers" transform="translate(-51.33 -88.106)"/>`;
const _DefaultDesc = `High sound volume levels`;
const _DefaultTitle = 'High sound volume levels';
const _DefaultWidth = `265.647`;
const _DefaultHeight = `231.998`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class W087HighSoundVolumeLevels extends HTMLElement {
  static readonly tagName = 'iso-w087-high-sound-volume-levels';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-w087-high-sound-volume-levels`;
    const titleId = `iso-title-w087-high-sound-volume-levels`;
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
