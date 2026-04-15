export const config = {
  port: parseInt(Bun.env.PORT ?? "3000", 10),
  nodeEnv: Bun.env.NODE_ENV ?? "development",
  scraperBaseUrl: Bun.env.SCRAPER_BASE_URL ?? "",
  scraperTimeout: parseInt(Bun.env.SCRAPER_TIMEOUT ?? "10000", 10),
} as const;
