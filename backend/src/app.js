import express from "express";
import morgan from "morgan";

import clientesRoutes from "./routes/Clientes.routes";

const app = express();

app.set("port", 3100);

app.use(morgan("dev"));

app.use("/api/Clientes", clientesRoutes);

export default app;