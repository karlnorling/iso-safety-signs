// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 200 200"`;
const _Body = `<path d="M0 0h200v200H0z" style="fill:#fff"/><path d="M5 5h190v190H5z" style="fill:#237f52"/><path d="M144.953 24.218V39.74h-15.525v15.525h15.525v15.523h15.523V55.266H176V39.74h-15.524V24.218Zm6.576 68.078a6.522 6.522 0 1 0-.001 13.044 6.522 6.522 0 0 0 0-13.044m7.558 12.937v.001a6 6 0 0 0-2.01.32l-.056.018a5.9 5.9 0 0 0-2.482 1.628 4.1 4.1 0 0 0-.958 1.443 5.7 5.7 0 0 0-.516 1.938l-3.34 13.831-10.5 9.79-.05-.047-.024-.018s-.107-.086-.254-.17c-.11-.062-.226-.186-.497-.2l-.001.003a1.3 1.3 0 0 0-.328.029c-.527.105-.602.346-.71.484-.106.138-.176.264-.176.264l-.04.07-7.887 24.528a2.2 2.2 0 0 0-.862-.18q-.07 0-.14.007l-.002-.01-20.045 2.483-.278-3.72 14.589-1.828a3.27 3.27 0 0 0 2.854-3.652l-.113-.919a3.27 3.27 0 0 0-3.653-2.853l-16.366 2.01 1.005 13.568-4.199.514-1.005-13.566-16.343 2.009a6 6 0 0 0-1.952-2.588l-5.805-4.445-11 14.62-3.123-2.415 10.988-14.606-7.456-5.71a6 6 0 0 0-8.437 1.12 6.004 6.004 0 0 0 1.12 8.435l5.446 4.17-2.505 3.27-25.287-19.552-.01.011a2.201 2.201 0 1 0-2.522 3.595l32.4 25.054.028.02s2.263 1.663 3.754 2.515c3.896 2.226 8.106 2.533 12.036 2.329 1.744-.09 4.96-.438 4.96-.438l.018-.002 41.245-5.036.082-.01.109-.013v-.004a2.2 2.2 0 0 0 1.808-2.164 2 2 0 0 0-.013-.182l13.257-20.973.03-.083s.038-.105.073-.236.091-.26.068-.562c-.023-.299-.096-.413-.15-.534-.052-.12-.105-.216-.105-.216l-.012-.023 10.704-9.98c1.271-.947 1.552-3.88 2.095-6.13l3.724 10.94-10.929 15.31c-.421.8-.564 1.493-.86 2.192l-6.427 16.815a3.69 3.69 0 0 0 2.134 4.774 3.69 3.69 0 0 0 4.773-2.133l6.427-16.816c.734-1.941 1.49-3.059 2.56-4.557l-.385 1.08a3.69 3.69 0 0 0 .632 3.599L168.2 170.67a3.69 3.69 0 0 0 5.053 1.34l.017-.01a3.69 3.69 0 0 0 1.34-5.054l-9.466-16.291 5.961-16.728a5.64 5.64 0 0 0 .298-4.352l-6.974-20.492c-.796-2.34-2.972-3.813-5.342-3.85zM51.432 127.387a6.522 6.522 0 1 0 0 13.044 6.522 6.522 0 0 0 0-13.044m86.122 11.188c.119.319.294.614.533.871.975 1.045 2.644 1.117 4.041.279l-10.061 15.917zM24 146.663v3.201h14.255v12.807h16.313v13.111h121.28v-3.201H57.77V159.47H41.457v-12.807zm47.783 10.52 3.647 2.793c2.364 1.569 4.531 1.126 6.722 1.052l17.31-2.297.278 3.714-12.877 1.573c-.012 0-3.3.344-4.715.418-3.541.183-6.764-.12-9.626-1.755-.896-.513-3.119-2.093-3.267-2.199z" style="color:#000;fill:#fff;fill-opacity:1;stroke-width:.400204;-inkscape-stroke:none"/>`;
const _DefaultDesc = `Evacuation mattress`;
const _DefaultTitle = 'Evacuation mattress';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class E067EvacuationMattress extends HTMLElement {
  static readonly tagName = 'iso-e067-evacuation-mattress';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-e067-evacuation-mattress`;
    const titleId = `iso-title-e067-evacuation-mattress`;
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
