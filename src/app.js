import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// IMPORT ROUTES
import route from "./routes/routes.js";

app.use("/", route);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

export { app };
