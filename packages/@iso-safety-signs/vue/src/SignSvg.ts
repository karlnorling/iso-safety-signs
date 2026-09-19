import * as Vue from 'vue';
import { h } from 'vue';
import type { VNode } from 'vue';
import { createInstanceId, renderSvg, toInstanceId } from '@iso-safety-signs/core';
import type { ParsedSvg } from '@iso-safety-signs/core';

// `useId` only exists from Vue 3.5; read it off the namespace so older Vue 3
// releases still load this module and fall back to a counter.
const vueUseId = (Vue as { useId?: () => string | undefined }).useId;

/** Returns an id prefix unique to the calling component instance. Call from `setup()`. */
export const useInstanceId = (): string => {
  const id = vueUseId?.();
  return id ? toInstanceId(id) : createInstanceId();
};

interface RenderSignOptions {
  svg: ParsedSvg;
  instanceId: string;
  attrs: Record<string, unknown>;
  title: string;
  description: string;
  width?: number | string;
  height?: number | string;
}

/**
 * Renders a parsed sign SVG inside a `display: contents` wrapper. Fallthrough
 * attributes go on the wrapper, except `aria-label`, which labels the `<svg>`.
 */
export const renderSign = ({
  attrs,
  description,
  height,
  instanceId,
  svg,
  title,
  width,
}: RenderSignOptions): VNode => {
  const { 'aria-label': ariaLabel, style, ...rest } = attrs;
  return h('span', {
    ...rest,
    innerHTML: renderSvg(svg, {
      ariaLabel: typeof ariaLabel === 'string' ? ariaLabel : undefined,
      description,
      height,
      instanceId,
      title,
      width,
    }),
    style: [{ display: 'contents' }, style],
  });
};
