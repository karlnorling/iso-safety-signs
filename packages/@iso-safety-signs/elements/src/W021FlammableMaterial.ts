// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 525"`;
const _Body = `<path d="M597.6 499.6 313.8 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.2 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16"/><path d="m43.875 491.5 256-443.3 256 443.3z" style="fill:#f9a800;fill-opacity:1;stroke:none;overflow:visible" transform="matrix(1 0 0 .99591 .125 2.033)"/><path d="M254.206 412.703c-23.76-10.342-33.095-30.391-35.717-76.718-1.061-18.75-1.134-34.091-.162-34.091.973 0 4.295 1.352 7.384 3.005 4.988 2.67 5.998 1.231 9.038-12.878 1.882-8.737 4.234-21.758 5.227-28.936l1.804-13.05 9.883 9.578 9.882 9.578 2.125-22.675c1.168-12.47 1.163-27.05-.011-32.4-2.008-9.141-1.759-9.523 4.154-6.359 3.46 1.852 7.733 6.063 9.497 9.358 5.95 11.117 9.054 6.098 9.054-14.642 0-13.03 1.583-22.799 4.298-26.511 4.129-5.647 4.383-5.542 6.438 2.645 1.177 4.689 8.032 15.428 15.234 23.866s13.647 18.918 14.32 23.29l1.226 7.95.454-8.334c.58-10.642 4.124-10.535 13.328.404 6.664 7.92 10.135 17.486 16.07 44.293 1.934 8.738 2.113 8.826 4.618 2.272 3.338-8.733 6.864-8.637 11.656.317 4.674 8.733 5.395 24.482 2.308 50.441-2.076 17.463-1.844 19.076 2.043 14.22 4.049-5.059 4.54-4.562 6.404 6.476 2.552 15.103-2.768 35.424-12.716 48.57-9.979 13.187-34.502 24.605-52.927 24.644-17.957.037-20.423-3.769-7.414-11.444 11.922-7.034 24.04-22.07 30.772-38.182 4.528-10.839 4.492-11.358-.684-9.716-4.832 1.534-5.35.066-4.459-12.628l1.009-14.364-7.917 11.363c-10.002 14.359-14.15 14.552-10.264.48 3.75-13.586.748-33.039-7.092-45.934-3.293-5.417-6.465-9.849-7.049-9.849-.583 0-1.015 11.25-.96 25 .1 24.517-3.69 41.667-9.206 41.667-1.53 0-4.903-5.114-7.495-11.364l-4.713-11.363-.464 10.606c-.254 5.833-.22 15.038.076 20.454.297 5.417-.851 9.849-2.551 9.849-5.086 0-12.55-12.867-14.502-25-2.005-12.464-6.843-15.367-7.576-4.546-.98 14.48-1.449 15.886-5.046 15.131-8.248-1.731 3.857 30.085 17.25 45.338 5.209 5.933 9.47 11.629 9.47 12.659 0 3.312-16.373 1.763-26.097-2.47M185 455v-25h230v25z" style="fill:#000"/>`;
const _DefaultDesc = `Flammable material`;
const _DefaultTitle = 'Flammable material';
const _DefaultWidth = `600`;
const _DefaultHeight = `525`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class W021FlammableMaterial extends HTMLElement {
  static readonly tagName = 'iso-w021-flammable-material';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-w021-flammable-material`;
    const titleId = `iso-title-w021-flammable-material`;
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
