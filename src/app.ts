import Elysia from "elysia";
import { config } from "./config/config";
import { healthRoute } from "./routes/healthRoute";
import { homeRoute } from "./routes/homeRoute";
import { errorHandler } from "./middlewares/errorHandler";
import { logRequest } from "./config/logger";

const app = new Elysia()
  .use(errorHandler)
  .resolve(() => ({ _startTime: performance.now() }))
  .onAfterHandle(({ request, set, _startTime }) => {
    const url = new URL(request.url);
    const status = typeof set.status === "number" ? set.status : 200;
    const duration = performance.now() - _startTime;
    logRequest(request.method, url.pathname, status, duration);
  })
  .onError(({ request, code, error }) => {
    const url = new URL(request.url);
    const status = code === "NOT_FOUND" ? 404 : 500;
    const message = error instanceof Error ? error.message : String(error);
    logRequest(request.method, url.pathname, status, 0, message);
  })
  .use(healthRoute)
  .use(homeRoute);

if (config.nodeEnv === "development") {
  console.log(`Luanime API started on http://localhost:${config.port}`);
}

app.listen(config.port);

export type App = typeof app;
