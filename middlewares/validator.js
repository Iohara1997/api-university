import { body, validationResult } from "express-validator";

export const validationBodyRules = [
  body("name", "name is required").exists(),
  body(
    "alpha_two_code",
    "alpha_two_code field must be 2 character long"
  ).isLength({ min: 2, max: 2 }),
  body("country", "country is required").exists(),
];

export function checkRules(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}
