import express from "express";
import controller from "./controllers/controller.js";
import error from "./middlewares/error.js";

const app = express();
app.use(express.json());
app.use("/universities", controller);

app.use(error.errorLogger);
app.use(error.errorResponser);
app.use(error.invalidPathHandler);

app.listen(3000, (err) =>
  err ? console.error(err) : console.log("Server listening on PORT 3000")
);
