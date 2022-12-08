import React, { memo } from 'react';
import SafeAnchor from './SafeAnchor';

export const TermsOfServiceAnchor = memo(() => (
  <SafeAnchor href="https://www.rvrentals.com/terms-of-service" target="_blank" rel="noreferrer noopener">Terms of Service</SafeAnchor>
));

if (process.env.NODE_ENV !== 'production') {
  TermsOfServiceAnchor.displayName = 'TermsOfServiceAnchor';
}
