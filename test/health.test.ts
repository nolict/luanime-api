import { describe, expect, it } from "bun:test";
import Elysia from "elysia";
import { healthController } from "../src/controllers/healthController";

describe("GET /api/v1/health", () => {
  const app = new Elysia().get("/api/v1/health", healthController);

  it("should return 200 with status ok", async () => {
    const res = await app.handle(new Request("http://localhost/api/v1/health"));

    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body).toMatchObject({
      status: "ok",
    });
    expect(body).toHaveProperty("timestamp");
    expect(body).toHaveProperty("uptime");
    expect(body).toHaveProperty("environment");
  });
});
