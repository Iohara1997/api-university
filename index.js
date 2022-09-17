import express from "express";
import router from "./routes/universities.js";
import error from "./middlewares/error.js";

const app = express();
app.use(express.json());
app.use("/universities", router);

app.use(error.errorLogger);
app.use(error.errorResponser);
app.use(error.invalidPathHandler);

app.listen(3000, (err) =>
  err ? console.error(err) : console.log("Server listening on PORT 3000")
);
