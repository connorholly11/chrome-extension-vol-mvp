// config.js - Central configuration for the extension
export const ENVIRONMENTS = {
  prod: {
    FUTURES: {
      REST: 'https://authdxfeed.volumetricatrading.com',
      API_KEY: 'URAp7b9wbmUCr0J7IieMaUoIe60ixtgchejOWjFJeQi7jrAlSfQNuyaDebgloot5', // PLT_KEY_PROD
      PLATFORM_ID: 0  // env=0 for futures
    },
    CRYPTO: {
      REST: 'https://c-traderslaunch.volumetricatrading.com',
      API_KEY: 'rUVFBQaSQnY6QmU2HzXPeOVqfdrpiupPfmjdZSwX9eitqewTNFRQAK6LgW96RWz4', // volumetrica_api_key
      PLATFORM_ID: 1  // env=1 for crypto
    }
  },
  staging: {
    FUTURES: {
      REST: 'https://authdxfeed.volumetricatrading.com',
      API_KEY: 'OZMcinvrYlv!ZYgCIuIrIH!kbWNp6yV0YN5tW7@XcQ#EbG@YsRv82', // PLT_KEY_STAGING
      PLATFORM_ID: 0
    },
    CRYPTO: {
      REST: 'https://staging-api.volumetricafx.com',
      API_KEY: 'rUVFBQaSQnY6QmU2HzXPeOVqfdrpiupPfmjdZSwX9eitqewTNFRQAK6LgW96RWz4',
      PLATFORM_ID: 1
    }
  }
};

export function getEnv(line = 'FUTURES', tier = 'prod') {
  return ENVIRONMENTS[tier][line];
}