import { Router } from "express";
import { validationBodyRules, checkRules } from "../middlewares/validator.js";
import UniversityService from "../services/universityService.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const response = await UniversityService.listUniversity(req);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await UniversityService.listByIdUniversity(id);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});

router.post("/", validationBodyRules, checkRules, async (req, res, next) => {
  try {
    const response = await UniversityService.createUniversity(req.body);
    res
      .status(201)
      .send(`University successfully added with id: ${response._id}.`);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const response = await UniversityService.updateUniversity(req);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await UniversityService.deleteUniversity(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

export default router;
