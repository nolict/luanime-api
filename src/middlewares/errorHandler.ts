import Elysia from "elysia";
import { config } from "../config/config";

export const errorHandler = new Elysia().onError(({ error, code, set }) => {
  const isDev = config.nodeEnv === "development";

  if (code === "NOT_FOUND") {
    if (isDev) {
      console.error(`404 Not Found`);
    }
    set.status = 404;
    return { error: "Not Found", message: "The requested resource was not found." };
  }

  if (error instanceof Error) {
    if (isDev) {
      console.error(`500 ${error.name}: ${error.message}`);
      console.error(error.stack);
    }
    set.status = 500;
    return {
      error: "Internal Server Error",
      message: isDev ? error.message : "An unexpected error occurred.",
    };
  }

  if (isDev) {
    console.error(`500 Unknown error:`, error);
  }
  set.status = 500;
  return { error: "Internal Server Error", message: "An unexpected error occurred." };
});
