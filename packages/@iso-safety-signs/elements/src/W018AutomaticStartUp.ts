// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 525"`;
const _Body = `<path d="M597.6 499.6 313.8 8c-2.9-5-8.2-8-13.9-8s-11 3.1-13.9 8L2.2 499.6c-2.9 5-2.9 11.1 0 16 2.9 5 8.2 8 13.9 8h567.6c5.7 0 11-3.1 13.9-8 2.9-5 2.9-11.1 0-16"/><path fill="#f6bd16" d="M555.88 491.5H43.875L299.88 48.2z" style="fill:#f9a800;fill-opacity:1" transform="matrix(1 0 0 .99591 .125 2.033)"/><path d="m345.02 240.62-4.812 12.679c34.69 8.076 60.567 39.199 60.567 76.335 0 35.106-23.109 64.846-54.943 74.807 13.958-10.549 23.56-26.517 25.716-44.767.116-.98.22-1.965.293-2.958.006-.076.027-.152.032-.228.016-.206.02-.412.033-.618a62 62 0 0 0 .13-3.999 66 66 0 0 0-.098-3.38 66 66 0 0 0-.227-3.22c-.004-.042.004-.086 0-.13-.003-.032.003-.065 0-.097a66 66 0 0 0-.228-1.95c-1.033-13.316-4.974-26.617-12.094-38.949-25.473-44.12-81.923-59.284-126.04-33.81-36.78 21.235-53.448 64.042-43.207 103.25l13.394-2.179c-10.35-34.08 3.667-72.039 35.827-90.607 30.25-17.464 67.327-12.448 91.875 9.851a65.4 65.4 0 0 0-31.893-4.584c-.238.024-.477.039-.715.065-.336.04-.673.086-1.008.13a65 65 0 0 0-3.186.488 65 65 0 0 0-6.274 1.43l-.098-.292a94 94 0 0 0-5.787 2.243c-.118.046-.239.083-.357.13a66.5 66.5 0 0 0-8.94 4.291c-1.113.643-2.159 1.352-3.22 2.048a91.86 91.86 0 0 0-31.404 32.348c-25.473 44.12-10.342 100.6 33.779 126.08 36.78 21.236 82.154 14.235 110.99-14.24l-8.583-10.5c-24.34 26.003-64.234 32.871-96.394 14.304-30.153-17.409-44.365-51.884-37.485-84.202 1.11 8.27 3.83 16.453 8.258 24.123a66 66 0 0 0 10.956 14.142c.162.161.323.329.487.488l-.227.26a93 93 0 0 0 6.307 5.007c.095.069.197.126.292.195.013.009.02.023.033.032 2.036 1.523 4.197 2.91 6.404 4.194.598.347 1.18.712 1.789 1.04 13.455 7.656 29.004 12.03 45.58 12.03 50.946 0 92.298-41.32 92.298-92.265 0-42.471-28.74-78.278-67.817-89.014zm-39.078 60.957c27.777 0 50.326 22.517 50.326 50.294 0 8.68-2.204 16.862-6.08 23.993-.356.657-.72 1.28-1.105 1.918l-.097.163-.065.097c-.289.472-.608.937-.91 1.398-.12.182-.236.373-.358.553-.19.273-.392.544-.585.813-14.913 20.679-43.38 27.13-65.932 14.11-21.8-12.586-30.624-39.077-21.75-61.835a51 51 0 0 1 2.113-4.65c.296-.579.621-1.15.943-1.723.102-.182.187-.37.292-.552.135-.234.285-.452.423-.683.354-.579.694-1.158 1.073-1.723.069-.102.157-.191.227-.293.027-.04.038-.09.065-.13a51 51 0 0 1 2.6-3.446c.036-.042.064-.088.098-.13.259-.313.546-.602.813-.91.28-.32.526-.663.813-.975.489-.536 1.013-1.044 1.528-1.56a51 51 0 0 1 4.161-3.74c.406-.325.818-.66 1.236-.975 8.407-6.301 18.86-10.013 30.17-10.013z"/>`;
const _DefaultDesc = `Automatic start-up`;
const _DefaultTitle = 'Automatic start-up';
const _DefaultWidth = `600`;
const _DefaultHeight = `525`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class W018AutomaticStartUp extends HTMLElement {
  static readonly tagName = 'iso-w018-automatic-start-up';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `iso-desc-w018-automatic-start-up`;
    const titleId = `iso-title-w018-automatic-start-up`;
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
