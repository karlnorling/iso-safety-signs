// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.833 105.833"`;
const _Body = `<path d="M43.921 64.823h105.833v105.833H43.921z" style="fill:#fff;stroke-width:.529167" transform="translate(-43.92 -64.823)"/><path d="M46.567 67.469h100.542v100.542H46.567z" style="fill:#237f52;stroke-width:.529167" transform="translate(-43.92 -64.823)"/><path d="M65.463 83.682v6.824h11.91v-6.824zm28.263 3.496-.953 15.331c-.413 5.093 3.414 9.709 6.553 12.25.228.274.228 1.118.228 2.328l-.181 32.694c-.006.2-.037 1.516 1.653 1.962.247.066 1.683.078 1.856 0 1.69-.446 1.66-1.761 1.655-1.962l-.182-32.694c0-1.21-.001-2.054.227-2.328 3.138-2.541 6.965-7.157 6.553-12.25l-.953-15.331h-2.358l-.186 14.698a.807.807 0 0 1-.805.805.806.806 0 0 1-.805-.805l-.186-14.698h-2.897l-.186 14.698a.807.807 0 0 1-.805.805.806.806 0 0 1-.805-.805l-.186-14.698h-2.898l-.186 14.698a.807.807 0 0 1-.805.805.806.806 0 0 1-.805-.805l-.186-14.698zm31.282.239c-.71 0-1.42.098-2.025.295-4.014 1.305-6.156 8.263-6.397 9.392-1.531 6.023-.184 9.61 2.937 14.33 1.077 1.889 2.807 3.416 3.02 5.653l-.183 32.694c-.006.2-.037 1.516 1.654 1.962.246.066 1.683.078 1.855 0 1.691-.446 1.66-1.761 1.655-1.962l-.182-32.694c.278-2.141 2.009-3.884 3.15-5.653 3.625-4.443 3.957-8.606 2.936-14.33-.246-1.156-2.391-8.09-6.396-9.392-.605-.197-1.314-.295-2.024-.295m-56.422 5.184h-.027l-.038.005c-3.138.158-5.5 1.859-6.873 4.054s-1.903 4.838-1.903 7.29l.004 12.282 1.47 2.072-1.474 1.817v10.06l1.523 2.051-1.523 1.965v11.04c0 3.674 2.672 6.56 5.97 6.56h11.407c3.297 0 5.969-2.886 5.969-6.56v-11.041l-1.524-1.964 1.524-2.053v-10.058l-1.473-1.817 1.473-2.072v-12.281c0-2.453-.53-5.096-1.903-7.291s-3.735-3.897-6.873-4.055l-.035-.004h-.026zm.085 2.969h5.497c2.21.111 3.532 1.109 4.504 2.663.972 1.555 1.45 3.712 1.45 5.718v11.334l-2.227 3.135 2.226 2.753v8.024l-2.276 3.074 2.276 2.938v10.028c0 2.352-1.354 3.591-3 3.591H65.715c-1.645 0-3-1.24-3-3.591v-10.028l2.277-2.938-2.277-3.073v-8.025l2.227-2.753-2.227-3.135v-11.334c0-2.006.482-4.162 1.454-5.717s2.293-2.553 4.503-2.664" style="fill:#fff;fill-opacity:1;stroke-width:1" transform="translate(-43.92 -64.823)"/>`;
const _DefaultDesc = `Emergency rations`;
const _DefaultTitle = 'Emergency rations';
const _DefaultWidth = `400`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class E074EmergencyRations extends HTMLElement {
  static readonly tagName = 'iso-e074-emergency-rations';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-e074-emergency-rations`;
    const titleId = `iso-title-e074-emergency-rations`;
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
