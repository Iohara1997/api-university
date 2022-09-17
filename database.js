import mongoose from "mongoose";
import config from "./config.js";

const username = encodeURIComponent(config.dbUsername);
const password = encodeURIComponent(config.dbPassword);
const uri = `mongodb+srv://${username}:${password}@cluster0.npme3yh.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(
  uri,
  {
    dbName: "university",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => (err ? console.log(err) : console.log("Connected to database"))
);

export default mongoose;
