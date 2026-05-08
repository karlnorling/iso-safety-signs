// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 525"`;
const _Body = `<path d="M597.6 499.6 313.8 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.2 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16"/><path fill="#f9a800" d="m300.005 50.036 256 441.489H44z"/><path fill="none" stroke="#000" stroke-width="8" d="M348.34 408.62s41.617 17.949 42.478 18.461c8.278 4.922 17.33-.251 20.776 2.962s-3.896 8.193-4.832 13.466c-1.403 7.898 1.459 14.01-4.24 14.005-4.916-.004-6.524-5.679-19.396-12.509-15.513-8.231-44.3-21.768-44.3-21.768zm8.055-38.544s33.064-13.887 49.427-21.454c4.062-1.879 11.035-10.634 15.914-7.564 3.612 2.273 3.065 6.872 3.375 12.647s4.007 8.037 3.84 12.524c-.304 8.02-7.066-1.69-17.116.752-18.258 4.437-58.641 22.497-58.641 22.497zm-102.86 38.307s-42.561 19.611-43.437 20.098c-8.415 4.683-16.98-2.901-20.517.213s1.862 10.56 4.201 15.377c2.439 5.023-1.02 10.447 3.939 12.305 4.604 1.725 5.557-5.125 18.62-11.584 15.742-7.783 43.139-20.896 43.139-20.896zm-11.387-40.01s-33.821-11.39-49.835-19.669c-3.975-2.055-9.59-9.424-14.6-6.571-3.709 2.112-1.866 5.018-2.43 10.774-.563 5.756-4.216 10.328-4.245 14.818-.049 8.026 9.479-2.787 19.412.946 18.046 5.235 55.944 21.177 55.944 21.177z"/><path fill-rule="evenodd" d="M285.57 350.59c-3.381 16.765 3.835 22.437 14.959 14 15.788 10.394 14.943-2.562 14.365-13.497-.328-27.371-25.936-30.324-29.324-.503"/><path d="M250.31 317.44c.823-9.576 8.315-15.128 19.861-14.305 10.424.737 21.078 4.21 18.543 13.481-2.618 9.576-10.506 22.638-20.955 22.813s-18.271-12.413-17.448-21.989zm99.21-.76c-.823-9.576-11.455-14.499-23.001-13.677-10.424.737-18.188 5.466-15.653 14.737 2.618 9.576 11.26 22.01 21.709 22.185s17.769-13.669 16.946-23.245z"/><path fill="none" stroke="#000" stroke-width="8" d="M363.12 319.27c3.035-7.934 11.04-15.912 12.688-31.734s-7.978-42.569-23.934-56.034c-11.03-9.308-30.828-18.633-52.551-18.678m-63.598 106.45c-3.035-7.934-11.04-15.912-12.688-31.734s7.978-42.569 23.934-56.034c11.03-9.308 30.828-18.633 52.551-18.678"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="8" d="M338.72 378.32c-.106 3.347 2.457-14.704 8.787-18.205 9.939-5.496 17.303-15.498 14.753-11.942m-62.889 89.538c9.262.167 23.454-.897 33.892-14.868 6-8.03 17.675-26.201 17.575-46.294-.092-18.396 4.649-14.725 8.929-22.533 7.927-14.46 7.184-18.132 1.977-42.245-2.568-11.893-1.528-9.422.622-22.497 2.41-14.667 2.184-20.69-2.774-28.676M263.8 377.608c.106 3.347-6.01-14.349-12.341-17.85-9.94-5.496-18.37-16.209-15.82-12.653m64.312 90.604c-9.048-1.333-22.853-5.596-33.892-14.868-8.58-7.205-15.898-32.24-17.575-46.294-2.18-18.267-4.502-14.097-8.93-21.822-5.938-10.363-7.716-24.501-.866-41.43 4.564-11.279-.062-12.079-1.228-25.279-1.406-15.923-.928-20.941 2.774-28.173"/><path d="M258.99 373.18c28.833 14.283 54.296 11.669 81.982-.944 14.954 46.208-88.23 55.936-81.982.944" color="#000"/>`;
const _DefaultDesc = `Toxic material`;
const _DefaultTitle = 'Toxic material';
const _DefaultWidth = `600`;
const _DefaultHeight = `525`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class W016ToxicMaterial extends HTMLElement {
  static readonly tagName = 'iso-w016-toxic-material';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-w016-toxic-material`;
    const titleId = `iso-title-w016-toxic-material`;
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
