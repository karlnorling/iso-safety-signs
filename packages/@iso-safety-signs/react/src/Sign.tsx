import * as React from 'react';
import { getSign, parseSvg } from '@iso-safety-signs/core';
import type { SignProps } from './SignProps';
import { SignSvg } from './SignSvg';

/** Props for the generic {@link SignById} component. */
export interface SignByIdProps extends SignProps {
  /** Sign slug ID, e.g. `"e001-emergency-exit-left-hand"` or `"w001-general-warning-sign"`. */
  id: string;
}

/**
 * Renders any ISO 7010 safety sign by slug ID.
 *
 * Useful for data-driven rendering where the sign ID comes from an API
 * response or user input rather than being known at compile time.
 *
 * Returns `null` for unrecognised IDs so callers can handle missing signs
 * gracefully without a try/catch.
 *
 * @example
 * ```tsx
 * <SignById id="e001-emergency-exit-left-hand" width={64} />
 * ```
 */
export const SignById = React.memo<SignByIdProps>(({ id, ...props }) => {
  const sign = getSign(id);
  if (!sign) return null;
  return (
    <SignSvg
      {...props}
      defaultDescription={sign.description}
      defaultTitle={sign.name}
      svg={parseSvg(sign.svg)}
    />
  );
});
SignById.displayName = 'SignById';
