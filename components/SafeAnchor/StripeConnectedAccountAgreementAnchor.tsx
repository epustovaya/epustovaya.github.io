import React, { memo } from 'react';
import SafeAnchor from './SafeAnchor';

export const StripeConnectedAccountAgreementAnchor = memo(() => (
  <SafeAnchor href="/stripe-connected-account-agreement">
    Stripe Connected Account Agreement
  </SafeAnchor>
));

if (process.env.NODE_ENV !== 'production') {
  StripeConnectedAccountAgreementAnchor.displayName = 'StripeConnectedAccountAgreementAnchor';
}
