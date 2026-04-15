import Elysia from "elysia";
import { healthController } from "../controllers/healthController";

export const healthRoute = new Elysia({ prefix: "/api/v1" }).get(
  "/health",
  healthController,
);
