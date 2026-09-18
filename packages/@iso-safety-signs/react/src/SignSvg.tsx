import * as React from 'react';
import { renderSvg, toInstanceId } from '@iso-safety-signs/core';
import type { ParsedSvg } from '@iso-safety-signs/core';
import type { SignProps } from './SignProps';

/** Props for the internal {@link SignSvg} renderer shared by every sign component. */
export interface SignSvgProps extends SignProps {
  /** The sign's parsed SVG. */
  svg: ParsedSvg;
  /** Title used when the `title` prop is omitted. */
  defaultTitle: string;
  /** Description used when the `description` prop is omitted. */
  defaultDescription: string;
}

/**
 * Renders a parsed sign SVG inside a `display: contents` wrapper.
 *
 * Ids are derived from `React.useId()`, so any number of instances of the
 * same sign can share a page and still match between server and client.
 */
export const SignSvg = ({
  'aria-label': ariaLabel,
  className,
  defaultDescription,
  defaultTitle,
  description = defaultDescription,
  height,
  style,
  svg,
  title = defaultTitle,
  width,
}: SignSvgProps): React.ReactElement => {
  const instanceId = toInstanceId(React.useId());
  const html = renderSvg(svg, { ariaLabel, description, height, instanceId, title, width });
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ display: 'contents', ...style }}
    />
  );
};
