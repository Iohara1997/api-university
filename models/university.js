import mongoose from "../database.js";

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

const University = mongoose.model("university", universitySchema, "university");

export default University;
