const getEnv = (key: string, defaultValue: string): string => {
  return process.env[key] ?? Bun.env[key] ?? defaultValue;
};

export const config = {
  port: parseInt(getEnv("PORT", "3000"), 10),
  nodeEnv: getEnv("NODE_ENV", "development"),
  scraperBaseUrl: getEnv("SCRAPER_BASE_URL", "https://s13.nontonanimeid.boats/"),
  scraperTimeout: parseInt(getEnv("SCRAPER_TIMEOUT", "10000"), 10),
} as const;
