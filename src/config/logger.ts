import pino from "pino";

const isDevelopment = Bun.env.NODE_ENV === "development";

export const logger = pino({
  level: isDevelopment ? "debug" : "info",
  transport: isDevelopment
    ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:standard",
          ignore: "pid,hostname",
        },
      }
    : undefined,
});

export function logRequest(
  method: string,
  path: string,
  status: number,
  durationMs: number,
  error?: string,
): void {
  const level = status >= 400 ? "warn" : "info";
  const data = { method, path, status, durationMs };

  if (error) {
    logger.warn({ ...data, error }, `${method} ${path} ${status}`);
  } else {
    logger[level](data, `${method} ${path} ${status}`);
  }
}
