"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerRoutes_1 = require("./registerRoutes");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.set("port", process.env.PORT || 3001);
app.use(cors_1.default());
app.use(express_1.default.json());
registerRoutes_1.registerRoutes(app);
const server = app.listen(app.get("port"), () => {
    console.info(`Server is running at http://localhost:${app.get("port")} in ${app.get("env")} mode`);
});
exports.default = server;
