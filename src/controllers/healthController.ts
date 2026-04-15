import type { Context } from "elysia";

export interface HealthResponse {
  status: string;
  timestamp: string;
  uptime: number;
  environment: string;
}

export function healthController({ server }: Context): HealthResponse {
  return {
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: server?.uptime ?? 0,
    environment: Bun.env.NODE_ENV ?? "development",
  };
}
