import express from "express";
import cors from "cors";
import morgan from "morgan";

// Create the Express application
const app = express();

// Use middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.use(morgan("dev"));

// Define a simple route
app.get("/", (_req, res) => {
  res.send("<h1>Hello Kazi Byte!, Welcome to Kazi Byte API</h1>");
});

export default app;
