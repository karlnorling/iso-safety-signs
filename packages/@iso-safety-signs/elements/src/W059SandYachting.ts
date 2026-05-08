// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 685 600"`;
const _Body = `<path d="m197.462 164.744-93.34-161.8-.577-.864-.719-.65-.79-.573-.936-.433-.935-.286-1.007-.074-1.005.074-1.006.286-.864.433-.863.574-.65.649-.573.863-93.34 161.8-.434.934-.288.938-.07 1.007.07 1.005.288 1.007.435.864.573.863.645.649.863.574.864.43 1.008.289 1.007.07h186.684l1.007-.07.933-.29.935-.43.793-.573.718-.649.574-.863.435-.864.285-1.007.073-1.005-.073-1.007-.285-.938Zm0 0" style="fill-rule:evenodd;fill:#020505;fill-opacity:1;stroke-width:.127844;stroke-linecap:butt;stroke-linejoin:miter;stroke:#020505;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/><path d="m99.158 18.115 82.699 143.394H16.458Zm0 0" style="fill-rule:evenodd;fill:#f9a800;fill-opacity:1;stroke-width:.127844;stroke-linecap:butt;stroke-linejoin:miter;stroke:#000303;stroke-opacity:1;stroke-miterlimit:2.613" transform="scale(3.45262 3.45622)"/><path d="M492.07 492.098c0 19.886-16.129 36.035-36.25 36.035-19.855 0-35.996-16.149-35.996-36.035 0-19.887 16.14-36.047 35.996-36.047 20.121 0 36.25 16.16 36.25 36.047" style="stroke:none;fill-rule:evenodd;fill:#020505;fill-opacity:1"/><path d="M471.465 492.098c0 8.695-6.945 15.66-15.645 15.66-8.687 0-15.632-6.965-15.632-15.66 0-8.707 6.945-15.66 15.632-15.66 8.7 0 15.645 6.953 15.645 15.66" style="stroke:none;fill-rule:evenodd;fill:#f9a800;fill-opacity:1"/><path d="M245.277 492.098c0 19.886-16.144 36.035-35.996 36.035-19.867 0-36.011-16.149-36.011-36.035 0-19.887 16.144-36.047 36.011-36.047 19.852 0 35.996 16.16 35.996 36.047" style="stroke:none;fill-rule:evenodd;fill:#020505;fill-opacity:1"/><path d="M224.91 492.098c0 8.695-6.945 15.66-15.629 15.66-8.699 0-15.644-6.965-15.644-15.66 0-8.707 6.945-15.66 15.644-15.66 8.684 0 15.63 6.953 15.63 15.66" style="stroke:none;fill-rule:evenodd;fill:#f9a800;fill-opacity:1"/><path d="M192.137 443.875s27.57-73.07 84.672-133.973c57.101-60.886 116.699-98.164 116.699-98.164v271.91h15.148l.242 19.13-152.941-.243v-18.887h118.672v-39.773Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#020505;fill-opacity:1"/>`;
const _DefaultDesc = `Sand yachting`;
const _DefaultTitle = 'Sand yachting';
const _DefaultWidth = `685pt`;
const _DefaultHeight = `800`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class W059SandYachting extends HTMLElement {
  static readonly tagName = 'iso-w059-sand-yachting';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-w059-sand-yachting`;
    const titleId = `iso-title-w059-sand-yachting`;
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
