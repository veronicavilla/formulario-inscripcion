import express from "express";
import morgan from "morgan";

const app = express();

app.set("port", 4000);

app.use(morgan("dev"));

export default app;