// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.833 105.833"`;
const _Body = `<path d="M149.49 113.771h105.833v105.833H149.49z" style="fill:#fff;stroke-width:.529167" transform="translate(-149.49 -113.77)"/><path d="M152.135 116.417h100.542v100.542H152.135z" style="fill:#237f52;stroke-width:.529167" transform="translate(-149.49 -113.77)"/><path d="M170.763 128.923c-.453-.005-.755.304-.755.923v24.821c0 .99.772 1.189 1.702.574 0 0 4.854-3.142 9.525-5.182 4.67-2.04 11.222-2.435 11.222-2.435v-10.735s-6.552-.393-11.222-2.434c-4.67-2.04-9.525-5.182-9.525-5.182-.349-.23-.675-.347-.947-.35m24.095 8.134v10.4h2.865l-2.753 12.816h4.178l4.032-12.817h2.41l2.457-1.537v-7.324l-2.457-1.538zm-27.278 1.573-2.944.769v5.715l2.944.77zm46.178 20.545-6.007 1.61c-.187 6.702-.889 10.708-4.206 16.556v27.111h17.585v-2.32h-16.367v-3.276h16.367v-3.192h-16.367v-3.275h4.891v-30.57l2.931-.85v31.42h8.545v-16.95Zm16.205 0-7.372 16.264v16.95h8.544v-31.42l2.931.85v30.57h4.892v3.275h-16.367v3.192h16.367v3.276h-16.367v2.32h17.585v-27.11c-3.317-5.849-4.02-9.855-4.207-16.557zm-14.175 1.969 6.072 12.768 6.073-12.768a8.373 3.727 0 0 1-6.073 1.168 8.373 3.727 0 0 1-6.072-1.168" style="fill:#fff;fill-opacity:1;stroke-width:.200001" transform="translate(-149.49 -113.77)"/>`;
const _DefaultDesc = `Evacuation equipment`;
const _DefaultTitle = 'Evacuation equipment';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class E076EvacuationEquipment extends HTMLElement {
  static readonly tagName = 'iso-e076-evacuation-equipment';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-e076-evacuation-equipment`;
    const titleId = `iso-title-e076-evacuation-equipment`;
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
