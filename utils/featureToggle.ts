import getConfig from 'next/config';

export enum Feature {
  INSECURE_COOKIES,
  RENTAL_RVS,
  ANALYTICS,
  DEALER
}

export enum Environment {
  LOCAL,
  TEST,
  DEVELOPMENT,
  STAGING,
  PRODUCTION
}

const featureFlags = {
  [Feature.INSECURE_COOKIES]: Environment.DEVELOPMENT,
  [Feature.RENTAL_RVS]: Environment.PRODUCTION,
  [Feature.ANALYTICS]: Environment.DEVELOPMENT,
  [Feature.DEALER]: Environment.TEST
};

const { publicRuntimeConfig: {
  CURRENT_ENVIRONMENT
} } = getConfig();

export function isEnabled(feature: Feature): boolean {
  const featureEnv = featureFlags[feature];

  if (featureEnv === undefined) {
    return false;
  }

  switch (CURRENT_ENVIRONMENT) {
    case 'local':
      return featureEnv >= Environment.LOCAL;
    case 'test':
      return featureEnv >= Environment.TEST;
    case 'development':
      return featureEnv >= Environment.DEVELOPMENT;
    case 'staging':
      return featureEnv >= Environment.STAGING;
    case 'production':
      return featureEnv >= Environment.PRODUCTION;
    default:
      return false;
  }
}

export function isDisabled(feature: Feature): boolean {
  return !isEnabled(feature);
}
