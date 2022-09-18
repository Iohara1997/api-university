import { Router } from "express";
import { validationBodyRules, checkRules } from "../middlewares/validator.js";
import universityController from "../controllers/universityController.js";

const router = Router();

router.post(
  "/universities",
  validationBodyRules,
  checkRules,
  universityController.saveUniversity
);
router.get("/universities/:id", universityController.getUniversityById);
router.get("/universities", universityController.getUniversity);
router.put("/universities/:id", universityController.updateUniversity);
router.delete("/universities/:id", universityController.deleteUniversity);

export default router;
