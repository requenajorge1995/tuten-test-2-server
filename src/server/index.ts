import express from "express";
import { registerRoutes } from "./registerRoutes";
import cors from "cors";

const app = express();
app.set("port", process.env.PORT || 3001);

app.use(cors());
app.use(express.json());
registerRoutes(app);

const server = app.listen(app.get("port"), () => {
  console.info(
    `Server is running at http://localhost:${app.get("port")} in ${app.get(
      "env"
    )} mode`
  );
});

export default server;
