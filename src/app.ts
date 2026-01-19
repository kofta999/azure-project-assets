import { Hono } from "hono";
import { assetsRoutes } from "./routes/asset";
import { filesRoutes } from "./routes/file";

export const app = new Hono();

app.route("/api/assets", assetsRoutes);
app.route("/api/files", filesRoutes);

app.get("/", (c) => c.text("Asset Tracker API is running 🚀"));
