import { createInstanceId, renderSvg } from '@iso-safety-signs/core';
import type { ParsedSvg } from '@iso-safety-signs/core';

/** The sign an element renders, or `undefined` to render nothing. */
export interface SignElementContent {
  svg: ParsedSvg;
  title: string;
  description: string;
}

/**
 * Base class for every ISO 7010 sign custom element.
 *
 * Attributes:
 * - `title`       — overrides the SVG accessible title (defaults to the sign name)
 * - `description` — overrides the SVG description (defaults to the sign description)
 * - `aria-label`  — labels the `<svg>` directly instead of via its title/description
 * - `width`       — forwarded to the `<svg>` width attribute
 * - `height`      — forwarded to the `<svg>` height attribute
 */
export abstract class SignElement extends HTMLElement {
  static readonly observedAttributes: string[] = [
    'title',
    'description',
    'aria-label',
    'width',
    'height',
  ];

  private readonly _instanceId = createInstanceId();

  /** Returns what to render; subclasses provide the sign. */
  protected abstract content(): SignElementContent | undefined;

  connectedCallback(): void {
    this._render();
  }

  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const content = this.content();
    if (!content) {
      this.innerHTML = '';
      return;
    }
    this.style.display = 'contents';
    this.innerHTML = renderSvg(content.svg, {
      ariaLabel: this.getAttribute('aria-label') ?? undefined,
      description: this.getAttribute('description') ?? content.description,
      height: this.getAttribute('height') ?? undefined,
      instanceId: this._instanceId,
      title: this.getAttribute('title') ?? content.title,
      width: this.getAttribute('width') ?? undefined,
    });
  }
}
