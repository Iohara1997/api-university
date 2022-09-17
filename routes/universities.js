import { Router } from "express";
import Universities from "../database.js";
import { validationBodyRules, checkRules } from "../middlewares/validator.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const limit = 20;
    let { page, country } = req.query;
    let query = {};
    let skip = 0;
    // If the page is not applied in query.
    if (!page) {
      // Make the Default value one.
      skip = 0;
    } else {
      skip = (page - 1) * limit;
    }
    // to treat the lowercase first letter
    if (country) {
      country = country.toLowerCase();
      country = country[0].toUpperCase() + country.substring(1);
      query.country = country;
    }
    // We limit the columns for the client to view
    const universityProjection = {
      domains: false,
      alpha_two_code: false,
      web_pages: false,
      __v: false,
    };

    const docs = await Universities.find(query, universityProjection)
      .limit(limit)
      .skip(skip)
      .lean()
      .exec();
    res.status(200).send({ page, limit, Result: docs });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const doc = await Universities.findById(id).lean().exec();
    res.status(200).send(doc);
  } catch (error) {
    next(error);
  }
});

router.post("/", validationBodyRules, checkRules, async (req, res, next) => {
  try {
    const post = new Universities(req.body);
    const result = await post.save();
    res
      .status(201)
      .send(`University successfully added with id: ${result._id}.`);
  } catch (error) {
    next(error);
  }
});

export default router;
