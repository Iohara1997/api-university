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

const universitySchema = new mongoose.Schema(
  {
    domains: {
      type: Array,
      required: true,
    },
    alpha_two_code: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    web_pages: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    "state-province": String,
  },
  { collection: "university" }
);

universitySchema.index(
  {
    country: 1,
    name: 1,
    "state-province": 1,
  },
  {
    unique: true,
  }
);

const Universities = mongoose.model(
  "university",
  universitySchema,
  "university"
);

export default Universities;
