// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 265 265"`;
const _Body = `<path fill="#fff" d="M251.75 132.5c0-65.86-53.39-119.25-119.25-119.25S13.25 66.64 13.25 132.5 66.64 251.75 132.5 251.75s119.25-53.39 119.25-119.25"/><path d="M120.849 184.773c5.496 2.124 8.106-1.064 11.094-4.538 1.162-4.338.485-8.386-1.447-12.822l-12.924 8.867c.77 4.057 2.026 6.761 3.278 8.493m21.132-24.891-8.979 6.275c1.358 3.763 2.227 7.237 2.227 11.967 4.053-.49 8.101-2.423 11.094-10.715-.102-2.797-1.545-5.3-4.342-7.527m13.414-11.949c13.691-7.816 19.676-12.733 22.277-16.594 3.095-4.529 8.017-12.439 11.196-18.425 5.696-10.907 17.267-25.457 25.755-33.465-11.09-13.695-15.338-20.741-26.722-27.684-25.564 13.695-71.584 18.42-77.182 28.552-12.929 10.221-22.095 29.127-33.091 46.095-2.507 3.768-3.278 7.62-1.55 16.79l1.167 38.969c3.371 5.01 13.41-1.545 13.499-4.636 3.959-13.205 4.73-23.342 3.861-37.709 1.447-4.819 4.338-8.689 10.324-14.082l11.192-6.845-9.553 10.226c-6.458 9.068-.196 11.571 4.249 25.172 4.627-3.959 5.304-4.921 11.669-8.787l6.467-5.393-4.725 6.458c-8.68 7.237-23.248 15.436-21.324 29.038 1.447 3.371 2.316 6.752 8.297 2.218 13.886-10.8 29.528-20.059 44.194-29.897m-14.768 80.828 7.723-.873 44.96-95.304-6.369-1.924M58.24 195.186l6.56 6.854-3.189-103.877-6.943-2.129z"/><path fill="#b71f2e" d="M238.369 132.5c0-58.47-47.399-105.869-105.869-105.869a105.42 105.42 0 0 0-67.175 24.04l149.366 148.554c14.802-18.209 23.678-41.429 23.678-66.725M50.309 65.775c-14.801 18.21-23.678 41.429-23.678 66.725 0 58.47 47.399 105.869 105.869 105.869 25.503 0 48.899-9.019 67.175-24.04zM265 132.5C265 59.322 205.678 0 132.5 0S0 59.322 0 132.5 59.322 265 132.5 265 265 205.678 265 132.5"/>`;
const _DefaultDesc = `No reaching in`;
const _DefaultTitle = 'No reaching in';
const _DefaultWidth = `265`;
const _DefaultHeight = `265`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class P015NoReachingIn extends HTMLElement {
  static readonly tagName = 'iso-p015-no-reaching-in';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-p015-no-reaching-in`;
    const titleId = `iso-title-p015-no-reaching-in`;
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
